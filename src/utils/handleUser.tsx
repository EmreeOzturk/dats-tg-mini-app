import { verifyInitData } from "./verifyUser";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import type { User } from '@/types';

async function handleUser(telegramInitData: string): Promise<User | undefined> {
    if (!verifyInitData(telegramInitData)) {
        throw new Error('Invalid Telegram data');
    }

    const urlParams = new URLSearchParams(telegramInitData);
    const user = (urlParams.get('user')!);
    const userParams = JSON.parse(user);

    const telegramId = userParams.id;
    const firstName = userParams.first_name;
    const lastName = userParams.last_name;
    const username = userParams.username;



    try {
        let user = await prisma.user.findUnique({
            where: { telegramId: telegramId },
        });

        if (user) {
            return user;
        } else {
            user = await prisma.user.create({
                data: {
                    telegramId,
                    firstName,
                    lastName,
                    username,
                    points: 0,
                    totalTimeOfUsingApp: 0,
                    completedMissions: [],
                },
            });
            return user;
        }
    } catch (e) {
        console.error(e)
    }

}

export default async function validateAndHandleUser(telegramInitData: string): Promise<User | undefined> {
    try {
        const user = await handleUser(telegramInitData);
        return user;
    } catch (e) {
        console.error(e);
        return undefined;
    }
}

