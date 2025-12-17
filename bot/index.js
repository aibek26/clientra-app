import "dotenv/config";
import { Bot, session } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = String(process.env.ADMIN_CHAT_ID || "");

if (!BOT_TOKEN) throw new Error("BOT_TOKEN is missing in .env");
if (!ADMIN_CHAT_ID) throw new Error("ADMIN_CHAT_ID is missing in .env");

const bot = new Bot(BOT_TOKEN);

bot.use(
  session({
    initial: () => ({
      step: 0,
      lead: { niche: "", channel: "", goal: "", questions: "", contact: "" },
    }),
  })
);

function safeUser(ctx) {
  const name = ctx.from?.first_name || "Без имени";
  const uname = ctx.from?.username ? `@${ctx.from.username}` : "без username";
  const id = ctx.chat?.id;
  return `${name} (${uname}, id:${id})`;
}

async function askStep(ctx) {
  const s = ctx.session.step;

  if (s === 1) return ctx.reply("1/5 Какая у вас ниша/бизнес?");
  if (s === 2) return ctx.reply("2/5 Где нужен ассистент? (сайт / Instagram / WhatsApp / Telegram)");
  if (s === 3) return ctx.reply("3/5 Главная цель? (заявки / запись / поддержка / продажи)");
  if (s === 4) return ctx.reply("4/5 Напишите 3 частых вопроса клиентов (можно списком).");
  if (s === 5) return ctx.reply("5/5 Как с вами связаться? (телефон / ник / удобное время)");
}

function normalizeText(t) {
  return String(t || "").trim();
}

function leadCardText(ctx) {
  const l = ctx.session.lead;
  const uname = ctx.from?.username ? `@${ctx.from.username}` : "—";
  const cid = ctx.chat?.id;

  return (
    `🧠 Новая заявка Clientra\n\n` +
    `Ниша: ${l.niche || "—"}\n` +
    `Канал: ${l.channel || "—"}\n` +
    `Цель: ${l.goal || "—"}\n` +
    `3 вопроса: ${l.questions || "—"}\n` +
    `Контакт: ${l.contact || uname}\n\n` +
    `Chat ID: ${cid}\n` +
    `От: ${safeUser(ctx)}`
  );
}

async function finishLead(ctx) {
  // 1) отправляем админу карточку лида
  await ctx.api.sendMessage(ADMIN_CHAT_ID, leadCardText(ctx));

  // 2) подтверждение клиенту
  await ctx.reply(
    "✅ Спасибо! Заявка принята.\n" +
      "Менеджер свяжется с вами по указанным контактам."
  );

  // 3) сброс, чтобы следующий раз был чистый
  ctx.session.step = 0;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };
}

bot.command("start", async (ctx) => {
  ctx.session.step = 1;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };

  await ctx.reply("Привет! Я бот Clientra 🤖\nСоберу 5 ответов и передам менеджеру.");
  return askStep(ctx);
});

bot.command("reset", async (ctx) => {
  ctx.session.step = 1;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };
  await ctx.reply("Ок, начнём заново.");
  return askStep(ctx);
});

bot.on("message:text", async (ctx) => {
  // анкета только если step > 0
  if (ctx.session.step <= 0) {
    ctx.session.step = 1;
    await ctx.reply("Привет! Запущу короткую анкету (5 вопросов) и передам менеджеру.");
    return askStep(ctx);
  }

  const t = normalizeText(ctx.message.text);

  if (ctx.session.step === 1) ctx.session.lead.niche = t;
  if (ctx.session.step === 2) ctx.session.lead.channel = t;
  if (ctx.session.step === 3) ctx.session.lead.goal = t;
  if (ctx.session.step === 4) ctx.session.lead.questions = t;
  if (ctx.session.step === 5) ctx.session.lead.contact = t;

  if (ctx.session.step < 5) {
    ctx.session.step += 1;
    return askStep(ctx);
  }

  return finishLead(ctx);
});

bot.catch((err) => {
  console.error("BOT ERROR:", err.error ?? err);
});

bot.start();
console.log("Clientra bot is running...");
