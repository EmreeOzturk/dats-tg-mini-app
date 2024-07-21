import { NextRequest, NextResponse } from "next/server";
import validateAndHandleUser from "@/utils/handleUser";

export async function POST(req: NextRequest) {
  const { telegramInitData } = await req.json();
  console.log(telegramInitData);

  try {
    const user = await validateAndHandleUser(telegramInitData);
    console.log(user);
    return NextResponse.json(user);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ e }, { status: 400 });
  }
}
