import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import util from "util";
import { ConnectionResponseData } from "@/types";
import prisma from "@/lib/db";

const execPromise = util.promisify(exec);

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { userTelegramId } = await req.json();

  try {
    const command = `npm run speed`;
    const { stdout, stderr } = await execPromise(command);
    if (stderr) {
      console.error(`exec error: ${stderr}`);
      return NextResponse.json({ error: stderr }, { status: 400 });
    }
    const data: ConnectionResponseData = JSON.parse(stdout);
    const timestamp = new Date().toISOString();
    console.log(timestamp);
    console.log(data);
    await prisma.user.update({
      where: { telegramId: userTelegramId },
      data: { location: data.userLocation },
    });
    return NextResponse.json(
      {
        downloadSpeed: data.downloadSpeed,
        uploadSpeed: data.uploadSpeed,
        userLocation: data.userLocation,
        userIp: data.userIp,
        timestamp,
      },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
