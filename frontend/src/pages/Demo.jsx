import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-semibold">Clientra Demo</h1>

        <p className="mt-3 text-white/70">
          Здесь будет живой AI-ассистент для демонстрации логики,
          сценариев и квалификации лидов.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-950/60 p-4 space-y-3">
          <div className="rounded-xl bg-white text-neutral-950 px-4 py-3 text-sm">
            Сколько стоит консультация?
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            Для MVP старт от $99, зависит от объёма запросов.
          </div>
          <div className="rounded-xl bg-white text-neutral-950 px-4 py-3 text-sm">
            Можно под мой бизнес?
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
            Да. Мы кастомизируем ассистента под вашу нишу.
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="https://t.me/"
            target="_blank"
            className="flex-1 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-neutral-950"
          >
            Получить консультацию
          </a>

          <Link
            to="/"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm"
          >
            Назад
          </Link>
        </div>
      </div>
    </div>
  );
}
