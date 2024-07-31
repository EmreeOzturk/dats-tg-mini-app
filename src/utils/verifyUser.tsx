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


  const secret = crypto
    ?.createHmac("sha256", "WebAppData")
    ?.update("7312114197:AAF4oFkxi_hhbOStMot3XQ5T21aVIMf2hE4");

  const calculatedHash = crypto
    .createHmac("sha256", secret.digest())
    .update(dataCheckString)
    .digest("hex");

  console.log(calculatedHash, hash);
  console.log(calculatedHash === hash);

  return calculatedHash === hash;
}
