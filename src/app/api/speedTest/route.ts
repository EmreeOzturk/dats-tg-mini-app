import { NextRequest, NextResponse } from "next/server";
// import { exec } from "child_process";
// import util from "util";
// import { ConnectionResponseData } from "@/types";
import prisma from "@/lib/db";
import FastSpeedtest from "fast-speedtest-api";

// const execPromise = util.promisify(exec);

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { userTelegramId } = await req.json();

  let speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
  });

  try {
    const data = await speedtest.getSpeed();

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
  // try {
  //   const command = `fast --upload --json`;
  //   const { stdout, stderr } = await execPromise(command);
  //   if (stderr) {
  //     console.error(`exec error: ${stderr}`);
  //     return NextResponse.json({ error: stderr }, { status: 400 });
  //   }
  //   const data: ConnectionResponseData = JSON.parse(stdout);
  //   const timestamp = new Date().toISOString();
  //   console.log(timestamp);
  //   console.log(data);
  //   await prisma.user.update({
  //     where: { telegramId: userTelegramId },
  //     data: { location: data.userLocation },
  //   });
  //   return NextResponse.json(
  //     {
  //       downloadSpeed: data.downloadSpeed,
  //       uploadSpeed: data.uploadSpeed,
  //       userLocation: data.userLocation,
  //       userIp: data.userIp,
  //       timestamp,
  //     },
  //     { status: 200 }
  //   );
  // } catch (e) {
  //   console.log(e);
  //   return NextResponse.json({ error: e }, { status: 400 });
  // }
}
