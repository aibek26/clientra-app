import "dotenv/config";
import express from "express";
import { Bot, session, webhookCallback } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID; // строкой ок
const PORT = process.env.PORT || 3000;

if (!BOT_TOKEN) throw new Error("BOT_TOKEN missing");
if (!ADMIN_CHAT_ID) throw new Error("ADMIN_CHAT_ID missing");

const bot = new Bot(BOT_TOKEN);

// ===== session =====
bot.use(
  session({
    initial: () => ({
      step: 0,
      lead: { niche: "", channel: "", goal: "", questions: "", contact: "" },
    }),
  })
);

const askStep = (ctx) => {
  const s = ctx.session.step;
  if (s === 1) return ctx.reply("1/5 Какая у вас ниша / бизнес?");
  if (s === 2) return ctx.reply("2/5 Где нужен ассистент? (сайт / Instagram / WhatsApp / Telegram)");
  if (s === 3) return ctx.reply("3/5 Главная цель? (заявки / запись / поддержка / продажи)");
  if (s === 4) return ctx.reply("4/5 Напишите 3 частых вопроса клиентов (можно списком).");
  if (s === 5) return ctx.reply("5/5 Как с вами связаться? (телефон / ник / удобное время)");
};

const safe = (v) => String(v ?? "").trim() || "—";

const leadText = (ctx) => {
  const l = ctx.session.lead;
  const u = ctx.from || {};
  const uname = u.username ? `@${u.username}` : "—";
  return (
    `🧠 Новая заявка Clientra\n\n` +
    `Ниша: ${safe(l.niche)}\n` +
    `Канал: ${safe(l.channel)}\n` +
    `Цель: ${safe(l.goal)}\n` +
    `3 вопроса: ${safe(l.questions)}\n` +
    `Контакт: ${safe(l.contact) === "—" ? uname : safe(l.contact)}\n\n` +
    `От: ${safe(u.first_name)} (${uname})\n` +
    `Chat ID: ${ctx.chat?.id}`
  );
};

// ===== commands =====
bot.command("start", async (ctx) => {
  ctx.session.step = 1;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };
  await ctx.reply("Привет! Я бот Clientra 🤖\nЗадам 5 вопросов и передам менеджеру.");
  return askStep(ctx);
});

bot.command("reset", async (ctx) => {
  ctx.session.step = 1;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };
  await ctx.reply("Ок, начнем заново.");
  return askStep(ctx);
});

// ===== form =====
bot.on("message:text", async (ctx) => {
  if (ctx.session.step <= 0) {
    ctx.session.step = 1;
    await ctx.reply("Запущу короткую анкету 👇");
    return askStep(ctx);
  }

  const t = safe(ctx.message?.text);

  if (ctx.session.step === 1) ctx.session.lead.niche = t;
  if (ctx.session.step === 2) ctx.session.lead.channel = t;
  if (ctx.session.step === 3) ctx.session.lead.goal = t;
  if (ctx.session.step === 4) ctx.session.lead.questions = t;
  if (ctx.session.step === 5) ctx.session.lead.contact = t;

  if (ctx.session.step < 5) {
    ctx.session.step += 1;
    return askStep(ctx);
  }

  await ctx.api.sendMessage(ADMIN_CHAT_ID, leadText(ctx));
  await ctx.reply("✅ Спасибо! Заявка принята. Менеджер свяжется с вами.");

  ctx.session.step = 0;
  ctx.session.lead = { niche: "", channel: "", goal: "", questions: "", contact: "" };
});

bot.catch((err) => console.error("BOT ERROR:", err.error ?? err));

// ===== express (порт обязателен для Web Service) =====
const app = express();
app.use(express.json());

app.get("/", (_, res) => res.status(200).send("Clientra bot is alive"));
app.post("/webhook", webhookCallback(bot, "express"));

// важно: биндимся на 0.0.0.0, чтобы Render увидел порт
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server listening on", PORT);
});
