"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
export type ReturnType = {
  message: string;
  success: boolean;
};

export type DailyCheckInActionPayload = {
  telegramId: number;
};

export async function dailyCheckIn(
  payload: DailyCheckInActionPayload
): Promise<ReturnType> {
  const telegramId = payload.telegramId;
  const user = await prisma.user.findUnique({
    where: {
      telegramId: telegramId,
    },
  });
  if (!user) {
    return {
      success: false,
      message: "User not found",
    };
  }
  if (
    user.lastCheckIn &&
    new Date(user.lastCheckIn).toDateString() === new Date().toDateString()
  ) {
    return {
      success: false,
      message: "Already checked in today",
    };
  }
  await prisma.user.update({
    where: {
      telegramId: telegramId,
    },
    data: {
      points: {
        increment: 5,
      },
      lastCheckIn: new Date(),
    },
  });
  revalidatePath("/earn");
  return {
    success: true,
    message: "Checked in successfully",
  };
}
