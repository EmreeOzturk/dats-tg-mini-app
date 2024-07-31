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
  await new Promise((resolve) => setTimeout(resolve, 2000));
  revalidatePath("/earn");
  return {
    success: true,
    message: "Checked in successfully",
  };
}

// mission_link: "https://twitter.com/intent/follow?screen_name=datsproject",

export async function followTwitter(
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
  if (user.isFollowingTwitter) {
    return {
      success: false,
      message: "Already following twitter",
    };
  }
  await prisma.user.update({
    where: {
      telegramId: telegramId,
    },
    data: {
      points: {
        increment: 250,
      },
      isFollowingTwitter: true,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 6000));
  revalidatePath("/earn");
  return {
    success: true,
    message: "Followed twitter successfully",
  };
}
