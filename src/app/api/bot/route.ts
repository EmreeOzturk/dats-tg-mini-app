export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import { Bot, InlineKeyboard, webhookCallback } from "grammy";

const token = process.env.TELEGRAM_TOKEN;
// https://api.telegram.org/bot<telegram_bot_token>/setWebhook?url=https://<your-deployment.vercel>.app/api/bot
if (!token)
  throw new Error("TELEGRAM_BOT_TOKEN environment variable not found.");

const bot = new Bot(token);

const inlineKeyboard = new InlineKeyboard().text("click", "click-payload");

bot.command("start", async (ctx) => {
  await ctx.reply("Curious? Click me!", { reply_markup: inlineKeyboard });
});



console.log("bot");
export const POST = webhookCallback(bot, "std/http");
