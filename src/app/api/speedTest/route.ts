import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const command = `fast --upload --json`;
    const { stdout, stderr } = await execPromise(command);
    console.log("1");
    if (stderr) {
      console.error(`exec error: ${stderr}`);
      return NextResponse.json({ error: stderr }, { status: 400 });
    }

    console.log("2");
    const data = JSON.parse(stdout);
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
