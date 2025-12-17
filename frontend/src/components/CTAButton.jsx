import { TELEGRAM_LINK } from "../config/links";

export default function CTAButton({ label = "Получить консультацию", className = "" }) {
  return (
    <a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90 ${className}`}
    >
      {label}
    </a>
  );
}
