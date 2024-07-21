export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import { Bot, InlineKeyboard, webhookCallback } from "grammy";

const token = process.env.TELEGRAM_TOKEN;
// https://api.telegram.org/bot<telegram_bot_token>/setWebhook?url=https://<your-deployment.vercel>.app/api/bot
// https://api.telegram.org/bot7312114197:AAF4oFkxi_hhbOStMot3XQ5T21aVIMf2hE4/setWebhook?url=https://unified-solely-lacewing.ngrok-free.app/api/bot
if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const bot = new Bot(token);

const inlineKeyboard = new InlineKeyboard().text("click", "click-payload");

bot.command("start", async (ctx) => {
  await ctx.reply("Curious? Click me!", { reply_markup: inlineKeyboard });
});



console.log("bot");
export const POST = webhookCallback(bot, "std/http");
