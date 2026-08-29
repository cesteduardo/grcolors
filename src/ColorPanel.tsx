import { useEffect, useState } from "react";
import { Check, Copy, X } from "lucide-react";
import {
  accessibilityOf,
  harmoniesOf,
  hexToHsb,
  hsbToHex,
  hexToHsl,
  hslToHex,
  parseColor,
  rgb,
  colorName,
  textOn,
  tintsAndShades,
  toCmykString,
  toHslString,
  toRgbString,
  similarColors,
} from "./color";

const Slider = ({
  label,
  value,
  max,
  onChange,
  track,
}: {
  label: string;
  value: number;
  max: number;
  onChange: (v: number) => void;
  track: string;
}) => (
  <label className="block">
    <span className="flex justify-between text-xs font-semibold mb-1.5">
      <span className="uppercase tracking-wider text-muted">{label}</span>
      <span className="tabular-nums">{Math.round(value)}</span>
    </span>
    <input
      type="range"
      min={0}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-2.5 appearance-none rounded-full outline-none cursor-pointer
        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4
        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-surface
        [&::-webkit-slider-thumb]:shadow-[0_1px_4px_rgba(0,0,0,.45)]
        [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-surface [&::-moz-range-thumb]:border-0"
      style={{ background: track }}
    />
  </label>
);

export default function ColorPanel({
  color,
  onChange,
  onClose,
  t,
}: {
  color: string;
  onChange: (c: string) => void;
  onClose: () => void;
  t: (phrase: string) => string;
}) {
  const [draft, setDraft] = useState(color);
  const [copied, setCopied] = useState("");
  useEffect(() => setDraft(color), [color]);

  const [h, s, b] = hexToHsb(color);
  const [r, g, bl] = rgb(color);
  const [, , l] = hexToHsl(color);

  const copy = (v: string) => {
    navigator.clipboard.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(""), 900);
  };
  const setRgb = (i: number, v: number) => {
    const next = [r, g, bl];
    next[i] = v;
    onChange(
      "#" +
        next
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")
          .toUpperCase(),
    );
  };
  const commit = () => {
    const parsed = parseColor(draft);
    if (parsed) onChange(parsed);
    else setDraft(color);
  };

  const hueTrack = `linear-gradient(to right, ${[0, 60, 120, 180, 240, 300, 360]
    .map((x) => hsbToHex(x, 100, 100))
    .join(",")})`;

  return (
    <aside
      className="fixed inset-y-0 right-0 z-50 w-[min(400px,100vw)] bg-surface shadow-pop
        border-l border-line flex flex-col overflow-y-auto"
    >
      <div
        className="h-44 shrink-0 p-6 flex flex-col justify-between"
        style={{ background: color, color: textOn(color) }}
      >
        <button
          onClick={onClose}
          className="self-end p-2 rounded-full hover:bg-black/15"
          aria-label={t("Fechar")}
        >
          <X size={20} />
        </button>
        <div>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                commit();
                e.currentTarget.blur();
              }
              if (e.key === "Escape") setDraft(color);
            }}
            onFocus={(e) => e.currentTarget.select()}
            aria-label={t("Código da cor")}
            className="w-full bg-transparent text-4xl font-semibold tracking-tight uppercase
              outline-none border-b border-transparent focus:border-current/40"
          />
          <p className="text-sm font-semibold opacity-65 mt-1">
            {t(colorName(color))}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-5 border-b border-line">
        <Slider
          label={t("Matiz")}
          value={h}
          max={360}
          track={hueTrack}
          onChange={(v) => onChange(hsbToHex(v, s, b))}
        />
        <Slider
          label={t("Saturação")}
          value={s}
          max={100}
          track={`linear-gradient(to right, ${hsbToHex(h, 0, b)}, ${hsbToHex(h, 100, b)})`}
          onChange={(v) => onChange(hsbToHex(h, v, b))}
        />
        <Slider
          label={t("Brilho")}
          value={b}
          max={100}
          track={`linear-gradient(to right, #000, ${hsbToHex(h, s, 100)})`}
          onChange={(v) => onChange(hsbToHex(h, s, v))}
        />
      </div>

      <div className="p-6 space-y-5 border-b border-line">
        {(["R", "G", "B"] as const).map((ch, i) => {
          const vals = [r, g, bl];
          const end = [...vals];
          end[i] = 255;
          const start = [...vals];
          start[i] = 0;
          const hexOf = (a: number[]) =>
            "#" + a.map((x) => x.toString(16).padStart(2, "0")).join("");
          return (
            <Slider
              key={ch}
              label={ch}
              value={vals[i]}
              max={255}
              track={`linear-gradient(to right, ${hexOf(start)}, ${hexOf(end)})`}
              onChange={(v) => setRgb(i, v)}
            />
          );
        })}
      </div>

      <div className="p-6 border-b border-line">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
          {t("Tons e matizes")}
        </h3>
        <div className="grid grid-cols-11 rounded-xl overflow-hidden h-20">
          {tintsAndShades(color).map((c, i) => (
            <button
              key={i}
              onClick={() => onChange(c)}
              title={c}
              className="h-full hover:scale-y-110 transition-transform"
              style={{ background: c }}
            />
          ))}
        </div>
        <p className="text-[11px] text-muted mt-2">
          {t("Clique para adotar o tom. Luminosidade atual:")} {Math.round(l)}%
        </p>
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
          {t("Formatos")}
        </h3>
        {[
          ["HEX", color],
          ["RGB", toRgbString(color)],
          ["HSL", toHslString(color)],
          ["CMYK", toCmykString(color)],
        ].map(([label, value]) => (
          <button
            key={label}
            onClick={() => copy(value)}
            className="w-full flex items-center justify-between gap-3 px-4 py-3
              bg-fill hover:bg-fill-strong rounded-xl text-left"
          >
            <span className="text-xs font-semibold text-muted w-12 shrink-0">
              {label}
            </span>
            <span className="font-mono text-sm truncate flex-1">{value}</span>
            {copied === value ? (
              <Check size={16} className="text-green-600 shrink-0" />
            ) : (
              <Copy size={16} className="text-faint shrink-0" />
            )}
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-line">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
          {t("Cores similares")}
        </h3>
        <div className="grid grid-cols-6 rounded-xl overflow-hidden h-14">
          {similarColors(color).map((c, i) => (
            <button
              key={i}
              onClick={() => onChange(c)}
              title={c}
              className="h-full hover:scale-y-110 transition-transform"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-line space-y-4">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-muted">
          {t("Harmonias")}
        </h3>
        {harmoniesOf(color).map((h) => (
          <div key={h.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm font-semibold">{t(h.label)}</span>
              <button
                onClick={() => copy(h.colors.join(", "))}
                className="text-[11px] font-semibold text-muted hover:text-ink"
              >
                {copied === h.colors.join(", ") ? t("copiado!") : t("copiar")}
              </button>
            </div>
            <div className="flex h-10 rounded-lg overflow-hidden ring-1 ring-line">
              {h.colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => onChange(c)}
                  title={c}
                  className="flex-1 hover:opacity-80 transition"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-line">
        <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
          {t("Acessibilidade")}
        </h3>
        {(() => {
          const a = accessibilityOf(color);
          const rows = [
            ["Sobre branco", "#FFFFFF", a.onWhite, a.onWhiteGrade],
            ["Sobre preto", "#000000", a.onBlack, a.onBlackGrade],
          ] as const;
          return (
            <>
              <div className="space-y-2">
                {rows.map(([label, bg, ratio, grade]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl ring-1 ring-line"
                    style={{ background: bg, color }}
                  >
                    <span className="font-semibold flex-1">{t(label)}</span>
                    <span className="font-mono text-sm tabular-nums">
                      {ratio.toFixed(2)}:1
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-1 rounded-full ${
                        grade === "Reprovado"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {t(grade)}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted mt-3">
                {t("Como texto, esta cor lê melhor sobre")} {t(a.onWhite >= a.onBlack ? "branco" : "preto")}.
                {" "}{t("Para texto normal, AA pede 4.5:1.")}
              </p>
            </>
          );
        })()}
      </div>
    </aside>
  );
}
