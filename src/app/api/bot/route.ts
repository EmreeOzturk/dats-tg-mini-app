export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Bot, InlineKeyboard, webhookCallback } from "grammy";
const token = process.env.TELEGRAM_TOKEN;

if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const bot = new Bot(token);

bot.command("start", async (ctx) => {
  const photos = await bot.api.getUserProfilePhotos(ctx?.from?.id as number);
  const photoId = photos.photos[0][0].file_id;
  const getPhoto = await bot.api.getFile(photoId).then((res) => res.file_path);
  const url = `https://api.telegram.org/file/bot${token}/${getPhoto}`;

  await ctx.replyWithPhoto(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgpP3zC2IaYwfB4Zri4sbh6Q3V0O9yHym-Q&s",
    {
      caption: `
Welcome to DATSPROJECT! 🎉🎉🎉

      
At DATSPROJECT, we are building a DEPIN in Telegram, specializing in ............................. We are excited to have you on board! 🚀

💯 Farm DATSPROJECT Points: Share to earn DATSPROJECT Points (DPs)

🧑 Invite Friends: Bring your friends and family for more DPs! More friends = more DPs)

🥊 Complete Quests: Finish tasks to rack up even more DPs!

Start farming points now, and who knows what cool stuff you'll snag with them soon! 🚀

Stay DATSPROJECT! 🌟
      `,
      reply_markup: inlineKeyboard(url),
    }
  );
});

const inlineKeyboard = (url: string) =>
  new InlineKeyboard().webApp(
    "🚀 Launch App",
    `${
      env === "production"
        ? `https://dats-tg-mini-appv001.vercel.app?img=${url}`
        : `https://capital-ghost-early.ngrok-free.app?img=${url}`
    }`
  );

export const POST = webhookCallback(bot, "std/http");
