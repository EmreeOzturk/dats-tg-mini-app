import crypto from "crypto";
export function verifyInitData(telegramInitData: string): boolean {
  const urlParams = new URLSearchParams(telegramInitData);
  const hash = urlParams.get("hash");
  urlParams.delete("hash");
  urlParams.sort();
  let dataCheckString = "";
  for (const [key, value] of urlParams.entries() as any) {
    dataCheckString += `${key}=${value}\n`;
  }
  dataCheckString = dataCheckString.slice(0, -1);


  console.log(process.env.TELEGRAM_TOKEN);
  const secret = crypto
    ?.createHmac("sha256", "WebAppData")
    ?.update(process.env.TELEGRAM_TOKEN!);

  const calculatedHash = crypto
    .createHmac("sha256", secret.digest())
    .update(dataCheckString)
    .digest("hex");

  console.log(calculatedHash, hash);
  console.log(calculatedHash === hash);

  return calculatedHash === hash;
}
