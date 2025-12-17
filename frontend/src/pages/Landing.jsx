import { useMemo, useState } from "react";
import CTAButton from "../components/CTAButton";
import { TELEGRAM_LINK } from "../config/links";

export default function Landing() {
  return (
    <div id="top" className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />

      <main>
        <Hero />
        <SocialProof />
        <Features />
        <UseCases />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <LeadFormCTA />
        <Footer />
      </main>
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#top"
          className="text-2xl font-semibold italic tracking-wide text-white/90 transition hover:text-white"
        >
          Clientra
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="hover:text-white">
            Возможности
          </a>
          <a href="#cases" className="hover:text-white">
            Кейсы
          </a>
          <a href="#how" className="hover:text-white">
            Процесс
          </a>
          <a href="#pricing" className="hover:text-white">
            Пакеты
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            Посмотреть пакеты
          </a>
          <CTAButton label="Получить план MVP" />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_5%,rgba(255,255,255,0.12),transparent_55%),radial-gradient(800px_circle_at_85%_15%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Кастомный AI-ассистент • Быстрый запуск
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              AI-ассистент для бизнеса: отвечает 24/7, собирает заявки и разгружает команду
            </h1>

            <p className="mt-4 text-white/70 md:text-lg">
              Клиент пишет “что хочу” — мы созваниваемся, фиксируем сценарии продаж, ограничения
              и материалы, затем подключаем ассистента в нужный канал.
            </p>

            <div className="mt-7">
              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton label="Получить план MVP за 15 минут" className="px-7 py-3" />
                <a
                  href="#how"
                  className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-center text-sm hover:bg-white/10"
                >
                  Как мы запускаем
                </a>
              </div>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/50">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  Созвон 30 минут
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  MVP за 7 дней
                </span>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 text-xs text-white/60 sm:grid-cols-3">
              <MiniStat title=" < 7 дней" desc="до запуска MVP" />
              <MiniStat title="1 канал" desc="входит в MVP" />
              <MiniStat title="24/7" desc="ответы и лиды" />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <span className="text-white/90 font-semibold">Подходит для:</span>{" "}
              услуги, клиники, школы/курсы, e-commerce, b2b-сервисы, недвижимость.
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Clientra Console</div>
              <div className="text-xs text-white/60">chat</div>
            </div>

            <div className="mt-4 space-y-3">
              <Bubble who="client" text="Сколько стоит запуск?" />
              <Bubble
                who="ai"
                text="Есть фикс-пакет MVP Launch. По сложным кейсам — считаем после созвона."
              />
              <Bubble who="client" text="Мне нужно, чтобы бот записывал на услугу." />
              <Bubble
                who="ai"
                text="Сделаем: квалификация, сбор контакта, запись, напоминания и передача лида менеджеру."
              />
              <Bubble who="client" text="А если будут сложные вопросы?" />
              <Bubble
                who="ai"
                text="Настроим ограничения и сценарий “передать человеку”. Плюс улучшаем базу знаний по логам."
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <QuickPill>Запись на услугу</QuickPill>
              <QuickPill>Сколько стоит?</QuickPill>
              <QuickPill>Можно в Instagram?</QuickPill>
              <QuickPill>Передать менеджеру</QuickPill>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="text-xs text-white/60">Что входит в MVP Launch</div>
              <ul className="mt-2 list-inside list-disc text-sm text-white/80 space-y-1">
                <li>FAQ + база знаний (из ваших материалов)</li>
                <li>Сценарии: квалификация → заявка</li>
                <li>Подключение в 1 канал</li>
                <li>1 итерация улучшений после запуска</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-white font-semibold">{title}</div>
      <div>{desc}</div>
    </div>
  );
}

function QuickPill({ children }) {
  return (
    <div className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10">
      {children}
    </div>
  );
}

function Bubble({ who, text }) {
  const isAI = who === "ai";
  return (
    <div className={`flex ${isAI ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAI
            ? "border border-white/10 bg-white/5 text-white/90"
            : "bg-white text-neutral-950"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <ProofCard
            title="Меньше рутины"
            desc="Снимаем с менеджеров типовые вопросы, первичную консультацию и сбор контактов."
          />
          <ProofCard
            title="Больше заявок"
            desc="Сценарии продаж и квалификация: ассистент ведёт клиента к следующему шагу."
          />
          <ProofCard
            title="Контроль качества"
            desc="Ограничения + перевод на человека. Улучшения по логам — опционально."
          />
        </div>
      </div>
    </section>
  );
}

function ProofCard({ title, desc }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}

function Features() {
  const items = [
    {
      title: "FAQ + база знаний",
      desc: "Ответы из ваших материалов: прайс, условия, регламенты, офферы.",
    },
    {
      title: "Сценарии продаж",
      desc: "Выявляет потребность, закрывает возражения, предлагает следующий шаг.",
    },
    {
      title: "Квалификация лидов",
      desc: "Собирает контакт и контекст, отсеивает “нецелевых”, экономит время менеджеров.",
    },
    {
      title: "Интеграции",
      desc: "Сайт, Instagram/WhatsApp/Telegram (по задаче), вебхуки/CRM-хуки.",
    },
    {
      title: "Передача менеджеру",
      desc: "Если вопрос сложный — перевод на человека + краткое резюме диалога.",
    },
    {
      title: "Метрики (по желанию)",
      desc: "Топ-вопросы, ошибки, качество лидов — чтобы улучшать сценарии и конверсию.",
    },
  ];

  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Что делает Clientra
          </h2>
          <p className="mt-3 text-white/70">
            MVP закрывает 80% первички: ответы, лиды, заявки, первичная консультация.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-base font-semibold">{x.title}</div>
              <div className="mt-2 text-sm text-white/70">{x.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      title: "Стоматология (запись + квалификация)",
      desc: "Ассистент отвечает 24/7, закрывает типовые вопросы и ведёт к записи.",
      blocks: [
        {
          h: "Задача",
          t: "Снять нагрузку с администраторов и не терять обращения в нерабочее время.",
        },
        {
          h: "Как работает",
          t: "Уточняет услугу и симптомы/цель визита → показывает диапазон цены/условия → предлагает запись → собирает контакт → передаёт менеджеру.",
        },
        {
          h: "Что закрывает",
          t: "Цены, подготовка, больно/не больно, сроки, гарантии, график, адрес, парковка, повторный визит.",
        },
        {
          h: "Результат",
          t: "Клиент не уходит “в тишину”: получает ответ и следующий шаг. Менеджер получает лид уже с контекстом.",
        },
      ],
      dialog: [
        { who: "client", text: "Сколько стоит чистка и можно ли завтра?" },
        {
          who: "ai",
          text: "Подскажите: вам нужна проф. чистка или комплекс (чистка + AirFlow)? И удобное время: утро/день/вечер?",
        },
        { who: "client", text: "Комплекс, лучше вечером." },
        {
          who: "ai",
          text: "Ок. Обычно комплекс — в диапазоне … (уточним по прайсу). Могу записать: оставьте телефон и имя — администратор подтвердит слот.",
        },
        { who: "client", text: "Имя Алия, телефон +7…" },
        {
          who: "ai",
          text: "Принял. Передаю администратору. Если хотите — напишите, есть ли чувствительность/кровоточивость, чтобы подготовить врача.",
        },
      ],
      bullets: [
        "Перевод на человека, если вопрос не по регламенту",
        "Ограничения: не даёт мед. диагнозов, только информация и запись",
        "База знаний: прайс, услуги, график, подготовка, частые вопросы",
      ],
    },
  ];

  return (
    <section id="cases" className="border-y border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Показательный кейс
          </h2>
          <p className="mt-3 text-white/70">
            Пример того, как Clientra работает в реальном бизнесе — без “магии”, только логика,
            сценарии и контроль качества.
          </p>
        </div>

        {cases.map((c) => (
          <div key={c.title} className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-white/70">{c.desc}</div>
              </div>

              <div className="mt-4 md:mt-0">
                <CTAButton label="Хочу такой кейс у себя" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {/* Left: case blocks */}
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {c.blocks.map((b) => (
                    <div key={b.h} className="rounded-3xl border border-white/10 bg-neutral-950/40 p-5">
                      <div className="text-sm font-semibold">{b.h}</div>
                      <div className="mt-2 text-sm text-white/70 leading-relaxed">{b.t}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-5">
                  <div className="text-sm font-semibold">Что важно (качество и безопасность)</div>
                  <ul className="mt-3 space-y-2 text-sm text-white/80">
                    {c.bullets.map((x) => (
                      <li key={x} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: dialog demo */}
              <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Как выглядит диалог</div>
                  <div className="text-xs text-white/60">demo</div>
                </div>

                <div className="mt-4 space-y-3">
                  {c.dialog.map((m, idx) => (
                    <Bubble key={idx} who={m.who} text={m.text} />
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Хотите такой же сценарий под вашу нишу? Напишите нишу и канал — соберём план MVP и запустим до 7 дней.
                </div>

                <div className="mt-4">
                  <CTAButton label="Написать и получить план" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function HowItWorks() {
  const steps = [
    {
      k: "1",
      t: "Короткий запрос",
      d: "Ниша, канал, цель (заявки/запись/поддержка) и примеры вопросов клиентов.",
    },
    {
      k: "2",
      t: "Созвон 30–45 минут",
      d: "Сценарии, тон общения, ограничения, материалы для базы знаний.",
    },
    {
      k: "3",
      t: "Сборка MVP",
      d: "Настройка ассистента + тесты на частые кейсы и ошибки.",
    },
    {
      k: "4",
      t: "Запуск",
      d: "Подключаем канал. Дальше — улучшения и расширения по необходимости.",
    },
  ];

  return (
    <section id="how">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Процесс запуска
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.k}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-neutral-950">
                  {s.k}
                </div>
                <div className="text-base font-semibold">{s.t}</div>
              </div>
              <div className="mt-3 text-sm text-white/70">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-y border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Запуск под ключ + подписка по сообщениям
          </h2>
          <p className="mt-3 text-white/70">
            Мы не ставим “типовой прайс” на сайте, потому что у каждого бизнеса разная логика:
            сценарии, каналы, база знаний, ограничения и интеграции.
            <br />
            <span className="text-white/80">
              Поэтому: вы пишете запрос → созвон → мы даём план MVP, сроки и стоимость.
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold">1) Запуск</div>
            <p className="mt-2 text-sm text-white/70">
              Собираем материалы и сценарии, настраиваем ассистента под ваш бизнес,
              тестируем и подключаем в нужный канал.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="text-xs text-white/60">Обычно включает</div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                {[
                  "FAQ + база знаний из ваших материалов",
                  "Сценарии: квалификация → заявка/запись",
                  "Ограничения и перевод на менеджера",
                  "Подключение в выбранный канал",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold">2) Подписка</div>
            <p className="mt-2 text-sm text-white/70">
              После запуска ассистент работает по подписке. Стоимость зависит от
              <span className="text-white/80"> объёма сообщений в месяц</span> и выбранных каналов.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-950/40 p-4">
              <div className="text-xs text-white/60">В подписке</div>
              <ul className="mt-2 space-y-2 text-sm text-white/80">
                {[
                  "Обновление базы знаний",
                  "Улучшение ответов по логам",
                  "Новые сценарии/возражения",
                  "Контроль качества и правила",
                ].map((x) => (
                  <li key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-xs text-white/50">
              * без “пакетов” на сайте — считаем лимит и стоимость под ваш поток
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-base font-semibold">3) Как считаем стоимость</div>
            <p className="mt-2 text-sm text-white/70">
              Цена зависит от: количества каналов, сценариев, объёма базы знаний,
              ограничений и интеграций.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-neutral-950/40 p-4 text-sm text-white/80">
              На созвоне за 30–45 минут:
              <div className="mt-2 space-y-2">
                {[
                  "фиксируем задачи и сценарии",
                  "оцениваем объём сообщений",
                  "даём план MVP, сроки и стоимость",
                ].map((x) => (
                  <div key={x} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <CTAButton label="Написать и получить расчёт" className="w-full" />
            </div>

            <div className="mt-3 text-xs text-white/50">
              * можно просто написать нишу и канал — мы зададим 3 уточняющих вопроса
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-base font-semibold">Почему без прайса на сайте?</div>
          <p className="mt-2 text-sm text-white/70">
            Чтобы не продавать “шаблон”. Clientra — это кастомный ассистент под ваш бизнес.
            Мы считаем стоимость честно: по сложности и ожидаемому объёму сообщений.
          </p>
        </div>
      </div>
    </section>
  );
}


function PriceCard({ title, price, badge, items, featured, ctaLabel }) {
  return (
    <div
      className={`rounded-3xl border p-6 ${
        featured
          ? "border-white/20 bg-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          : "border-white/10 bg-white/5"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold">{title}</div>
        <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
          {badge}
        </div>
      </div>

      <div className="mt-3 text-3xl font-semibold">{price}</div>

      <ul className="mt-5 space-y-2 text-sm text-white/80">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <CTAButton label={ctaLabel} className="w-full" />
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "За сколько вы запускаете ассистента?",
      a: "MVP запускаем до 7 дней после созвона и получения материалов. Часто — быстрее, если логика простая."
    },
    {
      q: "Что от нас нужно для старта?",
      a: "Минимум: прайс/условия, типовые вопросы клиентов и понимание цели (заявки, запись, поддержка). Остальное собираем на созвоне."
    },
    {
      q: "Как считается подписка?",
      a: "Подписка считается по количеству сообщений в месяц (входящие + исходящие). Лимит подбираем под ваш реальный поток."
    },
    {
      q: "Если сообщений станет больше — что будет?",
      a: "Ассистент не останавливается. Мы либо расширяем лимит, либо корректируем подписку на следующий месяц."
    },
    {
      q: "Можно ли без подписки?",
      a: "Нет. Ассистент работает по подписке — мы следим за качеством, обновляем базу знаний и поддерживаем стабильную работу."
    },
    {
      q: "Это заменит менеджеров?",
      a: "Нет. Clientra снимает рутину: ответы, первичную консультацию и сбор контакта. Сложные кейсы передаются человеку."
    },
    {
      q: "Можно ли дорабатывать сценарии после запуска?",
      a: "Да. Это и есть часть подписки: мы улучшаем ответы по логам, добавляем новые сценарии и убираем слабые места."
    },
    {
      q: "В каких каналах работает ассистент?",
      a: "Сайт, Telegram, Instagram, WhatsApp. Подключаем те каналы, где у вас есть клиенты."
    },
  ];

  return (
    <section id="faq">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-3 text-white/70">
            Коротко отвечаем на то, что обычно волнует клиентов перед запуском.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((x) => (
            <div
              key={x.q}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-base font-semibold">{x.q}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                {x.a}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
          <div className="text-base font-semibold">Не нашли ответ?</div>
          <p className="mt-2 text-sm text-white/70">
            Напишите нишу и задачу — мы ответим и подскажем, подойдёт ли Clientra именно вам.
          </p>
          <div className="mt-4">
            <CTAButton label="Задать вопрос" />
          </div>
        </div>
      </div>
    </section>
  );
}


function LeadFormCTA() {
  const [industry, setIndustry] = useState("");
  const [channel, setChannel] = useState("Сайт");
  const [goal, setGoal] = useState("Заявки");
  const [notes, setNotes] = useState("");

  const telegramHref = useMemo(() => {
    const text = [
      "Хочу Clientra (MVP).",
      `Ниша: ${industry || "—"}`,
      `Канал: ${channel}`,
      `Цель: ${goal}`,
      notes ? `Комментарий: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const base = TELEGRAM_LINK?.trim() || "";
    if (!base) return "#";

    // If user put @username accidentally, normalize
    const normalized =
      base.startsWith("@") ? `https://t.me/${base.slice(1)}` : base;

    const url = `${normalized}${normalized.includes("?") ? "&" : "?"}text=${encodeURIComponent(
      text
    )}`;

    return url;
  }, [industry, channel, goal, notes]);

  return (
    <section id="cta" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Получите план MVP под ваш бизнес
              </h3>
              <p className="mt-3 text-sm text-white/70 md:text-base">
                Заполните 3 поля — откроется Telegram с готовым сообщением. Мы ответим с
                вариантом MVP, сроками и стоимостью.
              </p>

              <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-950/40 p-4 text-sm text-white/70">
                <span className="text-white/90 font-semibold">Следующий шаг:</span>{" "}
                созвон 30–45 минут → план MVP → запуск.
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CTAButton label="Написать в Telegram" className="px-7 py-3" />
                <a
                  href="#pricing"
                  className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 text-center text-sm hover:bg-white/10"
                >
                  Посмотреть пакеты
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-neutral-950/40 p-6">
              <div className="text-sm font-semibold">Быстрый бриф</div>

              <div className="mt-4 grid gap-3">
                <Field label="Ниша">
                  <input
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="например: стоматология, курсы, магазин"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                  />
                </Field>

                <Field label="Канал">
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                  >
                    <option className="bg-neutral-900">Сайт</option>
                    <option className="bg-neutral-900">Instagram</option>
                    <option className="bg-neutral-900">WhatsApp</option>
                    <option className="bg-neutral-900">Telegram</option>
                  </select>
                </Field>

                <Field label="Цель">
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-white/20"
                  >
                    <option className="bg-neutral-900">Заявки</option>
                    <option className="bg-neutral-900">Запись</option>
                    <option className="bg-neutral-900">Поддержка</option>
                  </select>
                </Field>

                <Field label="Комментарий (необязательно)">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="например: нужно записывать, собирать контакты, отвечать по прайсу"
                    rows={3}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
                  />
                </Field>

                <a
                  href={telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90"
                >
                  Отправить бриф в Telegram
                </a>

                <div className="text-xs text-white/50">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="mb-1.5 text-xs text-white/60">{label}</div>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Clientra.app — custom AI assistants for business
          </div>
          <div className="flex gap-4 text-sm text-white/60">
            <a className="hover:text-white" href="#features">
              Возможности
            </a>
            <a className="hover:text-white" href="#pricing">
              Пакеты
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
