export type Palette = {
  id: string;
  name: string;
  colors: string[];
  savedAt?: number;
};
const curatedPresets: Palette[] = [
  {
    id: "coastal",
    name: "Calma costeira",
    colors: ["#023047", "#219EBC", "#8ECAE6", "#FFB703", "#FB8500"],
  },
  {
    id: "garden",
    name: "Jardim moderno",
    colors: ["#132A13", "#31572C", "#4F772D", "#90A955", "#ECF39E"],
  },
  {
    id: "studio",
    name: "Estúdio criativo",
    colors: ["#5A189A", "#9D4EDD", "#E0AAFF", "#FF6D00", "#FFB700"],
  },
  {
    id: "soft",
    name: "Manhã suave",
    colors: ["#F8EDEB", "#FCD5CE", "#FFB5A7", "#F9DCC4", "#FEC89A"],
  },
  {
    id: "night",
    name: "Noite elétrica",
    colors: ["#0B132B", "#1C2541", "#3A506B", "#5BC0BE", "#6FFFE9"],
  },
  {
    id: "editorial",
    name: "Editorial",
    colors: ["#1B1B1E", "#373F51", "#58A4B0", "#A9BCD0", "#D8DBE2"],
  },
  {
    id: "sunset",
    name: "Pôr do sol",
    colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#C780FA"],
  },
  {
    id: "pastel-dream",
    name: "Sonho pastel",
    colors: ["#FCE4EC", "#F3E5F5", "#E3F2FD", "#E0F7FA", "#FFF9C4"],
  },
  {
    id: "dark-luxury",
    name: "Luxo noturno",
    colors: ["#0F0F0F", "#1A1A2E", "#16213E", "#0F3460", "#E94560"],
  },
  {
    id: "forest",
    name: "Floresta",
    colors: ["#1B4332", "#2D6A4F", "#40916C", "#74C69D", "#D8F3DC"],
  },
  {
    id: "candy",
    name: "Candy",
    colors: ["#FF99C8", "#FCF6BD", "#D0F4DE", "#A9DEF9", "#E4C1F9"],
  },
  {
    id: "ocean",
    name: "Oceano",
    colors: ["#03045E", "#023E8A", "#0077B6", "#0096C7", "#CAF0F8"],
  },
  {
    id: "coffee",
    name: "Café",
    colors: ["#3C2A21", "#6F4E37", "#A47551", "#C19A6B", "#E3C9A8"],
  },
  {
    id: "desert",
    name: "Deserto",
    colors: ["#E9C46A", "#F4A261", "#E76F51", "#264653", "#2A9D8F"],
  },
  {
    id: "slate",
    name: "Cinza ardósia",
    colors: ["#212529", "#495057", "#868E96", "#ADB5BD", "#DEE2E6"],
  },
  {
    id: "berry",
    name: "Fruta vermelha",
    colors: ["#590D82", "#7B2CBF", "#9D4EDD", "#C77DFF", "#E0AAFF"],
  },
  {
    id: "citrus",
    name: "Cítrico",
    colors: ["#FFBA08", "#FAA307", "#F48C06", "#E85D04", "#DC2F02"],
  },
  {
    id: "mint",
    name: "Hortelã",
    colors: ["#2EC4B6", "#26A69A", "#1B9AAA", "#0E7C7B", "#D9F0E8"],
  },
  {
    id: "retro80",
    name: "Retrô 80s",
    colors: ["#2D00F7", "#6A00F4", "#8900F2", "#A100F2", "#B100E8"],
  },
  {
    id: "earth",
    name: "Terra",
    colors: ["#606C38", "#4C5C2E", "#A4AC86", "#DDA15E", "#BC6C25"],
  },
  {
    id: "blush",
    name: "Blush",
    colors: ["#FFCAD4", "#F4ACB7", "#9D8189", "#FFE5D9", "#D8E2DC"],
  },
  {
    id: "tech-blue",
    name: "Azul tech",
    colors: ["#0353A4", "#0466C8", "#2C7DA0", "#61A5C2", "#A9D6E5"],
  },
  {
    id: "emerald",
    name: "Esmeralda",
    colors: ["#004B23", "#006400", "#007200", "#38B000", "#70E000"],
  },
  {
    id: "sunrise",
    name: "Amanhecer",
    colors: ["#FF9E00", "#FF8800", "#FF7B00", "#FF6D00", "#FF4D00"],
  },
  {
    id: "lavender",
    name: "Lavanda",
    colors: ["#E6E6FA", "#D8B4F8", "#C77DFF", "#9D4EDD", "#7B2CBF"],
  },
  {
    id: "coral-reef",
    name: "Coral",
    colors: ["#FF7F50", "#FF6F61", "#FF9478", "#1B98E0", "#06D6A0"],
  },
  {
    id: "autumn",
    name: "Outono",
    colors: ["#7F5539", "#9C6644", "#B08968", "#DDB892", "#E6CCB2"],
  },
  {
    id: "pop",
    name: "Pop vibrante",
    colors: ["#F72585", "#B5179E", "#7209B7", "#560BAD", "#480CA8"],
  },
  {
    id: "sand-sea",
    name: "Areia e mar",
    colors: ["#F2E9DC", "#C9CBA3", "#EDAE49", "#E26D5C", "#266150"],
  },
  {
    id: "warm-mono",
    name: "Quente monocromático",
    colors: ["#FFF8F0", "#FFE8D6", "#FFD6BA", "#F4A261", "#6B4F4F"],
  },
  {
    id: "neon",
    name: "Neon",
    colors: ["#39FF14", "#00FFF5", "#FE53BB", "#08F7FE", "#F5D300"],
  },
  {
    id: "mono-dark",
    name: "Mono escuro",
    colors: ["#F8F9FA", "#DEE2E6", "#ADB5BD", "#495057", "#212529"],
  },
];

const catalogThemes = [
  "Aurora", "Atlântico", "Botânico", "Urbano", "Solar", "Mineral",
  "Tropical", "Cósmico", "Editorial", "Mediterrâneo", "Digital", "Artesanal",
  "Nórdico", "Sertão", "Oceânico", "Metropolitano", "Japonês", "Brasileiro",
];
const catalogMoods = [
  "Sereno", "Vibrante", "Pastel", "Noturno", "Elegante", "Orgânico", "Retrô",
  "Minimalista", "Elétrico", "Acolhedor", "Fresco", "Dramático", "Suave", "Contemporâneo",
  "Primaveril", "Invernal", "Terroso", "Luminoso", "Profundo", "Romântico",
  "Esportivo", "Sofisticado", "Lúdico", "Natural", "Futurista", "Clássico",
];

const catalogHex = (hue: number, saturation: number, lightness: number) => {
  const h = ((hue % 360) + 360) % 360 / 360;
  const s = Math.max(0, Math.min(100, saturation)) / 100;
  const l = Math.max(0, Math.min(100, lightness)) / 100;
  const hueToRgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const channels = s === 0
    ? [l, l, l]
    : [hueToRgb(p, q, h + 1 / 3), hueToRgb(p, q, h), hueToRgb(p, q, h - 1 / 3)];
  return `#${channels.map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
};

const generateCatalogPresets = (): Palette[] => catalogMoods.flatMap((mood, moodIndex) =>
  catalogThemes.map((theme, themeIndex) => {
    const baseHue = (themeIndex * 29 + moodIndex * 47) % 360;
    const pastel = mood === "Pastel" || mood === "Suave";
    const dark = mood === "Noturno" || mood === "Dramático";
    const vivid = mood === "Vibrante" || mood === "Elétrico";
    const organic = mood === "Orgânico" || mood === "Acolhedor";
    const hueSteps = organic ? [-24, -10, 5, 22, 42] : vivid ? [0, 58, 132, 205, 292] : [-32, -14, 4, 24, 48];
    const lightOffset = ((moodIndex * 3 + themeIndex) % 7) - 3;
    const lights = (dark ? [13, 21, 31, 43, 62] : pastel ? [88, 81, 74, 67, 58] : [24, 36, 49, 63, 78])
      .map((light) => light + lightOffset);
    const saturationOffset = ((moodIndex * 7 + themeIndex * 3) % 13) - 6;
    const saturation = (pastel ? 48 : dark ? 55 : vivid ? 88 : mood === "Minimalista" ? 24 : 64) + saturationOffset;
    return {
      id: `catalog-${moodIndex + 1}-${themeIndex + 1}`,
      name: `${theme} ${mood.toLocaleLowerCase("pt-BR")}`,
      colors: hueSteps.map((step, colorIndex) =>
        catalogHex(baseHue + step, saturation - colorIndex * (pastel ? 3 : 1), lights[colorIndex]),
      ),
    };
  }),
);

/** Catálogo estável: 32 seleções autorais + 468 combinações sistemáticas. */
/* O catálogo grande só é calculado quando a pessoa abre Explorar. Antes ele
   criava 468 paletas e 2.340 cores durante o primeiro carregamento, mesmo que
   a ferramenta nunca fosse visitada. */
export const defaultPalette = curatedPresets[0];
let presetCache: Palette[] | undefined;
export const getPresets = () =>
  (presetCache ??= [...curatedPresets, ...generateCatalogPresets()]);
export const normalizeHex = (v: string) => {
  let s = v.trim().replace("#", "");
  if (s.length === 3)
    s = s
      .split("")
      .map((x) => x + x)
      .join("");
  return /^([0-9a-f]{6})$/i.test(s) ? `#${s.toUpperCase()}` : "#000000";
};
export const parseColor = (value: string): string | null => {
  const v = value.trim();
  let h = v.replace(/^#/, "");
  if (/^[0-9a-f]{3}$/i.test(h))
    h = h
      .split("")
      .map((x) => x + x)
      .join("");
  if (/^[0-9a-f]{6}$/i.test(h)) return `#${h.toUpperCase()}`;
  const m = v.match(
    /^rgba?\s*\(\s*(\d{1,3})\s*[, ]\s*(\d{1,3})\s*[, ]\s*(\d{1,3})/i,
  );
  if (m) {
    const vals = m.slice(1, 4).map(Number);
    if (vals.every((x) => x >= 0 && x <= 255))
      return `#${vals
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()}`;
  }
  const hs = v.match(
    /^hsl\s*\(\s*(-?[\d.]+)(?:deg)?\s*[, ]\s*([\d.]+)%\s*[, ]\s*([\d.]+)%\s*\)$/i,
  );
  if (hs) {
    const vals = hs.slice(1).map(Number);
    if (vals[1] >= 0 && vals[1] <= 100 && vals[2] >= 0 && vals[2] <= 100)
      return hslToHex(vals[0], vals[1], vals[2]);
  }
  return null;
};
export const rgb = (hex: string) => {
  const h = normalizeHex(hex).slice(1);
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
};
export const luminance = (hex: string) => {
  const c = rgb(hex).map((v) => {
    const x = v / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
export const contrast = (a: string, b: string) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};
export const randomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")
    .toUpperCase()}`;
/** O melhor entre o quase-preto e o branco, por contraste medido.
 *  Um limiar fixo de luminância erra: com 0.42 uma cor média recebia texto
 *  branco a 2.5:1 onde o escuro daria 8:1. Como #141414 não é preto puro,
 *  o pior caso aqui é ~4.3:1 — use `readableOn` quando AA for obrigatório. */
export const textOn = (hex: string) => {
  const dark = "#141414";
  return contrast(dark, hex) >= contrast("#FFFFFF", hex) ? dark : "#FFFFFF";
};
/** Igual a `textOn`, mas cai para preto puro quando o quase-preto não alcança
 *  4.5:1. O melhor entre preto e branco nunca fica abaixo de 4.58:1. */
export const readableOn = (hex: string) => {
  const c = textOn(hex);
  if (contrast(c, hex) >= 4.5) return c;
  return contrast("#000000", hex) >= contrast("#FFFFFF", hex)
    ? "#000000"
    : "#FFFFFF";
};
export const shades = (hex: string, steps = 10) => ramp(hex, steps);
export const colorName = (hex: string) => {
  const [r, g, b] = rgb(hex),
    max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    light = (max + min) / 2;
  if (max - min < 18)
    return light > 235
      ? "Branco neve"
      : light > 185
        ? "Cinza névoa"
        : light > 95
          ? "Cinza ardósia"
          : light > 35
            ? "Carvão"
            : "Preto profundo";
  let h = 0;
  if (max === r) h = (((g - b) / (max - min) + 6) % 6) * 60;
  else if (max === g) h = ((b - r) / (max - min) + 2) * 60;
  else h = ((r - g) / (max - min) + 4) * 60;
  const names = [
    "Vermelho",
    "Laranja",
    "Amarelo",
    "Verde lima",
    "Verde",
    "Turquesa",
    "Ciano",
    "Azul",
    "Índigo",
    "Violeta",
    "Magenta",
    "Rosa",
  ];
  return `${light > 195 ? "Claro " : light < 65 ? "Profundo " : ""}${names[Math.round(h / 30) % 12]}`;
};
export const cssPalette = (colors: string[]) =>
  `:root {\n${colors.map((c, i) => `  --color-${i + 1}: ${c};`).join("\n")}\n}`;
export type Harmony =
  | "smart"
  | "analogous"
  | "monochromatic"
  | "complementary"
  | "split"
  | "triadic"
  | "tetradic"
  | "square";
export const harmonyLabels: Record<Harmony, string> = {
  smart: "Equilibrada",
  analogous: "Análoga",
  monochromatic: "Monocromática",
  complementary: "Complementar",
  split: "Complementar dividida",
  triadic: "Tríade",
  tetradic: "Tetrádica",
  square: "Quadrada",
};
export const hexToHsl = (hex: string): [number, number, number] => {
  let [r, g, b] = rgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = 60 * (((g - b) / d) % 6);
    else if (max === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  if (h < 0) h += 360;
  const l = (max + min) / 2,
    s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  return [h, s * 100, l * 100];
};
export const hslToHex = (h: number, s: number, l: number) => {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2;
  let v = [0, 0, 0];
  if (h < 60) v = [c, x, 0];
  else if (h < 120) v = [x, c, 0];
  else if (h < 180) v = [0, c, x];
  else if (h < 240) v = [0, x, c];
  else if (h < 300) v = [x, 0, c];
  else v = [c, 0, x];
  return `#${v
    .map((n) =>
      Math.round((n + m) * 255)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")
    .toUpperCase()}`;
};
const offsets: Record<Harmony, number[]> = {
  smart: [0, 28, 168, 202, 326],
  analogous: [-45, -22, 0, 22, 45],
  monochromatic: [0, 0, 0, 0, 0],
  complementary: [0, 0, 180, 180, 0],
  split: [0, 150, 210, 150, 210],
  triadic: [0, 120, 240, 120, 240],
  tetradic: [0, 60, 180, 240, 0],
  square: [0, 90, 180, 270, 0],
};
export const generateHarmony = (
  anchor: string,
  count: number,
  mode: Harmony,
) => {
  const [h, s, l] = hexToHsl(anchor),
    pattern = offsets[mode],
    rnd = (a: number, b: number) => a + Math.random() * (b - a);

  // Sem estas escolhas por geração, toda paleta sairia com o mesmo espaçamento
  // de matiz e a mesma rampa de luminosidade — a mesma paleta apenas girada.
  const spin = Math.floor(Math.random() * pattern.length);
  const hueDrift = rnd(-14, 14);
  // Análoga e monocromática perdem o nome se o leque abrir demais: uma
  // "análoga" de 140° já é outra coisa. As demais podem respirar.
  const spread = mode === "analogous"
    ? rnd(0.55, 1.0)
    : mode === "smart"
      ? rnd(0.85, 1.12)
      : 1;
  const satBase = rnd(38, 82);
  const satRange = rnd(6, 26);
  const loL = rnd(16, 40);
  const hiL = rnd(62, 90);
  const descending = Math.random() < 0.5;
  // Às vezes o pico de luminosidade fica no meio, não numa das pontas.
  const arc = Math.random() < 0.28;

  return Array.from({ length: count }, (_, i) => {
    const pos = count === 1 ? 0 : i / (count - 1);
    // Repetir um matiz em luminosidades diferentes faz parte da definição de
    // harmonias com poucas famílias (complementar, tríade e quadrada). Criar
    // novos ângulos para evitar a repetição descaracterizava o modo escolhido.
    const patternIndex = (i + spin) % pattern.length;
    const cycle = Math.floor((i + spin) / pattern.length);
    const familyVariation = cycle ? (cycle % 2 ? 3 : -3) : 0;
    const off = pattern[patternIndex] * spread + familyVariation;

    let t = descending ? 1 - pos : pos;
    if (arc) t = 1 - Math.abs(pos - 0.5) * 2;
    let light =
      mode === "monochromatic"
        ? loL + t * (hiL - loL)
        : loL + t * (hiL - loL) + rnd(-5, 5);
    light = Math.max(10, Math.min(94, light));

    // Rampa suave, não alternância: saturação em ziguezague é o que faz uma
    // paleta parecer aleatória em vez de projetada.
    let sat = satBase - satRange + (descending ? 1 - pos : pos) * satRange * 2;
    sat += rnd(-4, 4);
    if (mode === "monochromatic") sat = satBase + rnd(-6, 6);
    sat = Math.max(8, Math.min(96, sat));

    return hslToHex(h + off + hueDrift, sat, light);
  });
};
export const paletteMetrics = (colors: string[]) => {
  const hs = colors.map(hexToHsl),
    lights = hs.map((x) => x[2]),
    sats = hs.map((x) => x[1]);
  let minAdjacent = 21;
  for (let i = 0; i < colors.length - 1; i++)
    minAdjacent = Math.min(minAdjacent, contrast(colors[i], colors[i + 1]));
  const range = Math.max(...lights) - Math.min(...lights),
    avgSat = sats.reduce((a, b) => a + b, 0) / sats.length,
    dark = colors.some((c) => contrast(c, "#FFFFFF") >= 4.5),
    light = colors.some((c) => contrast(c, "#111111") >= 4.5);
  let score =
    42 +
    Math.min(24, range * 0.35) +
    Math.min(14, avgSat * 0.16) +
    (dark && light ? 16 : 0);
  return {
    score: Math.round(Math.min(98, score)),
    tonalRange: Math.round(range),
    averageSaturation: Math.round(avgSat),
    minAdjacent,
    hasAccessiblePair: dark && light,
  };
};
export const harmonyDescription = (mode: Harmony) =>
  ({
    smart:
      "Combina contraste de matiz com hierarquia tonal para interfaces versáteis.",
    analogous: "Matizes vizinhos criam unidade, calma e transições naturais.",
    monochromatic:
      "Um único matiz varia em luminosidade e saturação para máxima coesão.",
    complementary:
      "Opostos no círculo cromático produzem contraste e energia visual.",
    split:
      "Uma base e os vizinhos de seu oposto oferecem contraste com menos tensão.",
    triadic: "Três matizes equidistantes equilibram variedade e estabilidade.",
    tetradic:
      "Dois pares complementares criam riqueza; a hierarquia tonal evita competição.",
    square:
      "Quatro matizes a 90° entre si: variedade máxima com espaçamento regular.",
  })[mode];

const moodSeeds: {
  words: string[];
  color: string;
  harmony: Harmony;
  tone: string;
}[] = [
  {
    words: ["calma", "calmo", "tranquila", "serena", "spa", "clínica", "saúde"],
    color: "#4B8FA3",
    harmony: "analogous",
    tone: "serena e confiável",
  },
  {
    words: [
      "natureza",
      "natural",
      "orgânico",
      "sustentável",
      "floresta",
      "jardim",
    ],
    color: "#477A45",
    harmony: "analogous",
    tone: "orgânica e acolhedora",
  },
  {
    // Split a partir do roxo jogava a paleta em verde e magenta — o oposto de
    // luxo. Análoga mantém tudo na faixa ameixa/vinho/dourado.
    words: ["luxo", "luxuosa", "elegante", "premium", "sofisticada", "joalheria"],
    color: "#4B2354",
    harmony: "analogous",
    tone: "sofisticada e marcante",
  },
  {
    words: ["tecnologia", "tech", "futuro", "startup", "digital", "saas"],
    color: "#3157D5",
    harmony: "triadic",
    tone: "tecnológica e dinâmica",
  },
  {
    words: ["divertida", "alegre", "infantil", "criança", "festa", "criativa"],
    color: "#FF5A5F",
    harmony: "triadic",
    tone: "alegre e energética",
  },
  {
    words: ["terra", "rústica", "café", "artesanal", "aconchegante"],
    color: "#A65F3F",
    harmony: "analogous",
    tone: "artesanal e calorosa",
  },
  {
    words: ["romântica", "delicada", "feminina", "beleza", "doce"],
    color: "#C94C79",
    harmony: "analogous",
    tone: "delicada e expressiva",
  },
  {
    words: ["esporte", "energia", "forte", "ousada", "impactante"],
    color: "#E9472F",
    harmony: "complementary",
    tone: "ousada e vibrante",
  },
  {
    words: ["corporativa", "séria", "financeira", "confiança", "profissional"],
    color: "#244B76",
    harmony: "monochromatic",
    tone: "profissional e segura",
  },
  {
    words: ["escura", "escuro", "dark", "noturna", "cinematográfica"],
    color: "#29335C",
    harmony: "split",
    tone: "noturna e cinematográfica",
  },
  {
    words: ["minimalista", "minimal", "limpo", "clean", "sóbria", "sobria"],
    color: "#3C4650",
    harmony: "monochromatic",
    tone: "contida e silenciosa",
  },
  {
    words: ["vintage", "retrô", "retro", "anos 70", "nostálgic", "nostalgic"],
    color: "#C4703B",
    harmony: "analogous",
    tone: "nostálgica e quente",
  },
  {
    words: ["tropical", "praia", "verão", "verao", "surf", "ilha"],
    color: "#12A5A0",
    harmony: "triadic",
    tone: "solar e refrescante",
  },
  {
    words: ["inverno", "gelo", "neve", "frio", "ártic", "artic"],
    color: "#5E86A8",
    harmony: "analogous",
    tone: "fria e cristalina",
  },
  {
    words: ["comida", "gastronomia", "restaurante", "culinária", "culinaria", "padaria"],
    color: "#C6462E",
    harmony: "analogous",
    tone: "apetitosa e calorosa",
  },
  {
    words: ["moda", "boutique", "estilo", "passarela", "editorial"],
    color: "#1E1B24",
    harmony: "complementary",
    tone: "editorial e assertiva",
  },
  {
    words: ["imobiliária", "imobiliaria", "arquitetura", "construção", "construcao", "interiores"],
    color: "#8A7B65",
    harmony: "analogous",
    tone: "estável e material",
  },
  {
    words: ["educação", "educacao", "escola", "curso", "universidade", "aprend"],
    color: "#2F6BB5",
    harmony: "triadic",
    tone: "clara e encorajadora",
  },
  {
    words: ["música", "musica", "festival", "show", "banda", "áudio", "audio"],
    color: "#7A2BD8",
    harmony: "complementary",
    tone: "expressiva e pulsante",
  },
  {
    words: ["viagem", "turismo", "aventura", "trilha", "explorar", "mapa"],
    color: "#1F7A5C",
    harmony: "triadic",
    tone: "aberta e exploradora",
  },
  {
    words: ["game", "gaming", "jogo", "arcade", "esports", "cyber"],
    color: "#1B1F3B",
    harmony: "split",
    tone: "elétrica e imersiva",
  },
  {
    words: ["fintech", "banco", "investimento", "cripto", "pagament"],
    color: "#0E5C4A",
    harmony: "analogous",
    tone: "sólida e direta",
  },
];
/** Nomes de cor em português mapeados para matiz. Sem isto, "um azul para
 *  uma fintech" caía no hash do texto e podia sair laranja — o pedido mais
 *  explícito que existe era justamente o único ignorado. */
const hueWords: { words: string[]; hue: number; sat?: number; light?: number }[] = [
  { words: ["vermelh", "carmim", "escarlate", "rubi"], hue: 0 },
  { words: ["coral", "salmão", "salmao"], hue: 12, sat: 70, light: 66 },
  { words: ["laranja", "tangerina", "âmbar", "ambar"], hue: 28 },
  { words: ["dourad", "ouro", "mostarda"], hue: 44, sat: 72, light: 52 },
  { words: ["amarel", "limão", "limao"], hue: 52 },
  { words: ["verde", "esmeralda", "menta", "oliva"], hue: 140 },
  { words: ["turquesa", "água", "agua", "ciano", "aqua"], hue: 180 },
  { words: ["azul", "marinho", "cobalto", "safira", "celeste"], hue: 215 },
  { words: ["índigo", "indigo", "anil"], hue: 245 },
  { words: ["roxo", "violeta", "lilás", "lilas", "púrpura", "purpura", "lavanda"], hue: 272 },
  { words: ["magenta", "fúcsia", "fucsia"], hue: 310 },
  { words: ["rosa", "rosé", "rose", "pink"], hue: 335 },
  { words: ["marrom", "castanh", "terracota", "café", "cafe", "chocolate"], hue: 22, sat: 45, light: 38 },
  { words: ["cinza", "grafite", "chumbo", "neutr"], hue: 220, sat: 8, light: 50 },
];

export type PromptReading = {
  seed: string;
  count: number;
  countSource: "pedido" | "padrão";
  harmonySource: "pedido" | "tema" | "padrão";
  hueSource: "hexadecimal no texto" | "nome de cor" | "tema reconhecido" | "texto";
  matchedWord: string | null;
  matchedColorWord: string | null;
  filters: string[];
  unmatched: boolean;
};

/** Reposiciona a paleta inteira dentro de uma faixa de luminosidade,
 *  preservando a ordem e o espaçamento relativo entre as cores.
 *  Grampear (`Math.min(l, 38)`) achatava tudo contra o teto e destruía a
 *  hierarquia: cinco cores escuras viravam cinco cores iguais. */
export const remapLightness = (colors: string[], lo: number, hi: number) => {
  const ls = colors.map((c) => hexToHsl(c)[2]);
  const min = Math.min(...ls),
    max = Math.max(...ls);
  return colors.map((c, i) => {
    const [h, s] = hexToHsl(c);
    const t =
      max - min < 1
        ? colors.length === 1
          ? 0.5
          : i / (colors.length - 1)
        : (ls[i] - min) / (max - min);
    return hslToHex(h, s, lo + t * (hi - lo));
  });
};

/** Afasta cores que ficaram indistinguíveis. Os filtros comprimem a paleta —
 *  pastel espreme tudo entre L 62 e 95, dez cores dividem o círculo em fatias
 *  estreitas — e o encontro dos dois produz duas cores que são a mesma.
 *  Gira o matiz, que preserva luminosidade e saturação e portanto não desfaz o
 *  que o filtro acabou de garantir; só recorre à luminosidade quando a cor é
 *  cinza demais para o giro surtir efeito. */
export const separate = (colors: string[], min = 6) => {
  const out = [...colors];
  // Gira a cor para longe de quem ela está atropelando — não sempre para o
  // mesmo lado. Empurrar todo mundo no mesmo sentido acumulava desvio e abria
  // uma paleta análoga de 85° para 110°; afastar do conflito é simétrico e
  // pára assim que a distância basta.
  const away = (h: number, other: number) => {
    const diff = (((h - other) % 360) + 540) % 360 - 180;
    return diff >= 0 ? 1 : -1;
  };
  for (let i = 1; i < out.length; i++) {
    for (let guard = 0; guard < 48; guard++) {
      const nearest = out
        .slice(0, i)
        .reduce((a, b) => (deltaE(out[i], b) < deltaE(out[i], a) ? b : a));
      if (deltaE(out[i], nearest) >= min) break;
      const [h, sat, l] = hexToHsl(out[i]);
      // Matiz primeiro: preserva luminosidade e saturação, e portanto tudo que
      // os filtros acabaram de garantir. Se depois de 24 giros ainda colide, as
      // duas cores diferem só em luminosidade e é ela que precisa ceder.
      out[i] =
        sat > 12 && guard < 24
          ? hslToHex(h + 9 * away(h, hexToHsl(nearest)[0]), sat, l)
          : hslToHex(h, sat, l + (l > 50 ? -2.5 : 2.5));
    }
  }
  return out;
};

export const paletteFromPrompt = (prompt: string) => {
  const q = prompt.toLocaleLowerCase("pt-BR");
  const match =
    moodSeeds.find((x) => x.words.some((w) => q.includes(w))) || null;
  const matchedWord = match?.words.find((w) => q.includes(w)) ?? null;
  const colorWord = hueWords.find((x) => x.words.some((w) => q.includes(w))) ?? null;
  const matchedColorWord = colorWord?.words.find((w) => q.includes(w)) ?? null;
  const hueFromText = (s: string) => {
    let h = 0;
    for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) % 360;
    return h;
  };
  // Sem este jitter, a mesma descrição devolveria sempre a mesma paleta e o
  // botão de gerar outra variação não faria nada.
  const jitter = (Math.random() - 0.5) * 44;
  const explicitHex = q.match(/#?[0-9a-f]{6}\b/i)?.[0];
  const requestedCount = q.match(/\b([2-9]|10)\s*(?:cores?|tons?)\b/i);
  const count = requestedCount ? Number(requestedCount[1]) : 5;
  // Um nome de cor no texto vale mais que o tema: quem escreveu "azul" quer
  // azul, mesmo que "startup" sugerisse outro ponto de partida.
  const base: [number, number, number] = explicitHex
    ? hexToHsl(normalizeHex(explicitHex))
    : colorWord
      ? [colorWord.hue, colorWord.sat ?? 64, colorWord.light ?? 50]
      : match
        ? hexToHsl(match.color)
        : [hueFromText(q), 62, 52];
  const seed = explicitHex
    ? normalizeHex(explicitHex)
    : hslToHex(base[0] + jitter, base[1], base[2]);
  const requestedHarmony: Harmony | null = /monocrom/.test(q)
    ? "monochromatic"
    : /complementar dividida|split/.test(q)
      ? "split"
      : /complementar/.test(q)
        ? "complementary"
        : /an[aá]log/.test(q)
          ? "analogous"
          : /tri[aá]dic|tr[ií]ade/.test(q)
            ? "triadic"
            : /tetr[aá]dic/.test(q)
              ? "tetradic"
              : /quadrad/.test(q)
                ? "square"
                : null;
  const harmony = (requestedHarmony ?? match?.harmony ?? "smart") as Harmony;
  const tone = match?.tone ?? "única e personalizada";
  let colors = generateHarmony(seed, count, harmony);
  const filters: string[] = [];
  if (/pastel|suave|leve|delicad/.test(q)) {
    filters.push("suavizada");
    // Pastel é croma baixo com muita luz — isso é a saturação do HSB, não a do
    // HSL: uma HSL S de 52 em L 62 ainda dá 48% de croma e não parece pastel.
    // O grampo vem depois do remapeamento porque em luminosidade alta um passo
    // de 8 bits move a saturação vários pontos.
    colors = remapLightness(colors, 62, 95).map((c) => {
      const [h, sb, b] = hexToHsb(c);
      return hsbToHex(h, Math.min(sb, 38), b);
    });
  }
  if (/vibrante|neon|intensa|forte|viva/.test(q)) {
    filters.push("saturação elevada");
    // Empurrar todas as cores ao máximo de saturação apaga a hierarquia e
    // devolve uma paleta que grita; basta elevar o piso.
    colors = remapLightness(
      colors.map((c) => {
        const [h, s, l] = hexToHsl(c);
        return hslToHex(h, Math.max(s, 58), l);
      }),
      30,
      78,
    );
  }
  if (/escura|escuro|dark|noturna/.test(q)) {
    filters.push("rebaixada");
    // Escurecer sem conter a saturação devolve neon sobre preto, não sobriedade.
    // A faixa vai até 52 e não até 38 porque uma paleta inteira abaixo de 38
    // não tem contraste interno nenhum: nada nela pode ser texto sobre o resto.
    colors = remapLightness(
      colors.map((c) => {
        const [h, s, l] = hexToHsl(c);
        return hslToHex(h, Math.min(s, 60), l);
      }),
      7,
      52,
    );
  }
  if (/clara|claro|light|luminosa|arejada/.test(q)) {
    filters.push("clareada");
    colors = remapLightness(colors, 60, 95);
  }
  const wantsContrast = /alto contraste|contraste alto|acess[íi]vel|leg[íi]vel/.test(q);
  if (wantsContrast) filters.push("contraste garantido");

  colors = separate(colors);
  if (wantsContrast) {
    // Toda cor passa a alcançar AA contra a mais clara da paleta, que vira o
    // fundo natural. Sem isto, "acessível" no pedido não mudava nada.
    // Roda depois do `separate` de propósito: o giro de matiz que afasta duas
    // cores idênticas altera o contraste, e aplicado antes esta garantia
    // voltava a cair de vez em quando.
    // Corrigir uma cor pode torná-la a mais clara da paleta, e aí o fundo de
    // referência muda e as outras deixam de passar contra o novo fundo. Duas
    // ou três voltas bastam para o conjunto parar de se mexer.
    for (let round = 0; round < 4; round++) {
      const hi = [...colors].sort((a, b) => luminance(b) - luminance(a))[0];
      if (colors.every((c) => c === hi || contrast(c, hi) >= 4.5)) break;
      colors = colors.map((c) =>
        c === hi || contrast(c, hi) >= 4.5 ? c : nearestAccessible(c, hi, 4.5),
      );
    }
  }
  const reading: PromptReading = {
    seed,
    count,
    countSource: requestedCount ? "pedido" : "padrão",
    harmonySource: requestedHarmony ? "pedido" : match ? "tema" : "padrão",
    hueSource: explicitHex
      ? "hexadecimal no texto"
      : colorWord
        ? "nome de cor"
        : match
          ? "tema reconhecido"
          : "texto",
    matchedWord,
    matchedColorWord,
    filters,
    unmatched: !match && !colorWord && !explicitHex,
  };
  return { colors, harmony, tone, reading };
};

/* ---------- Assistente de cores: base de conhecimento ---------- */
const normText = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLocaleLowerCase("pt-BR");
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type ColorInfoRow = {
  cn: string[];
  word: string;
  hue: number;
  sat?: number;
  light?: number;
  meaning: string;
  pairs: string;
  demoWord?: string;
};
const COLOR_INFO: ColorInfoRow[] = [
  { cn: ["vermelh", "carmim", "escarlate", "rubi"], word: "vermelho", hue: 0,
    meaning: "representa energia, paixão e urgência; transmite força e chama atenção instantânea",
    pairs: "branco, preto, dourado e cinza — o branco equilibra a intensidade" },
  { cn: ["laranja", "tangerina"], word: "laranja", hue: 28,
    meaning: "traz calor, diversão e entusiasmo; é acolhedora e estimula o apetite",
    pairs: "azul (contraste), branco, preto e verde" },
  { cn: ["amarel", "limão", "limao"], word: "amarelo", hue: 52,
    meaning: "é a cor da luz e do otimismo; traz alegria, mas em excesso cansa os olhos",
    pairs: "cinza, azul, preto e branco" },
  { cn: ["verde", "esmeralda", "menta", "oliva"], word: "verde", hue: 140,
    meaning: "remete à natureza, equilíbrio e saúde; transmite calma e crescimento",
    pairs: "branco, madeira, dourado e azul quebrado" },
  { cn: ["azul", "marinho", "cobalto", "safira", "celeste"], word: "azul", hue: 215,
    meaning: "transmite confiança, calma e estabilidade; é a cor mais usada em marcas sérias",
    pairs: "laranja (complementar), branco, cinza e areia" },
  { cn: ["turquesa", "água", "agua", "ciano", "aqua"], word: "ciano", hue: 180,
    meaning: "passa frescor, clareza e modernidade; lembra água e tecnologia limpa",
    pairs: "coral, branco, areia e verde" },
  { cn: ["índigo", "indigo", "anil"], word: "índigo", hue: 245,
    meaning: "é profundo e concentrado; mistura a calma do azul com a seriedade do violeta",
    pairs: "areia, dourado, coral e cinza" },
  { cn: ["roxo", "violeta", "lilás", "lilas", "púrpura", "purpura", "lavanda"], word: "roxo", hue: 272,
    meaning: "sugere luxo, espiritualidade e mistério; é sofisticada e criativa",
    pairs: "dourado, prata, verde e rosa" },
  { cn: ["rosa", "rosé", "rose", "pink"], word: "rosa", hue: 335,
    meaning: "é romântica, doce e delicada; comunica cuidado e proximidade",
    pairs: "branco, cinza, dourado e lilás" },
  { cn: ["magenta", "fúcsia", "fucsia"], word: "magenta", hue: 310,
    meaning: "é ousada, moderna e vibrante; chama atenção sem o peso do vermelho",
    pairs: "cinza, preto, verde e branco" },
  { cn: ["marrom", "castanh", "terracota", "café", "cafe", "chocolate"], word: "marrom", hue: 22, sat: 45, light: 38,
    meaning: "traz terra, estabilidade e aconchego; é sólida e confiável",
    pairs: "creme, verde, laranja e bege" },
  { cn: ["dourad", "ouro", "mostarda"], word: "dourado", hue: 44, sat: 72, light: 52,
    meaning: "representa riqueza, prestígio e celebração; adiciona calor valoroso",
    pairs: "preto, verde, bordô e branco" },
  { cn: ["preto", "negro"], word: "preto", hue: 220, sat: 0, light: 8, demoWord: "cinza monocromática",
    meaning: "é elegante, poderoso e neutro; cria foco e contraste máximo",
    pairs: "quase tudo — especialmente dourado, branco e um acento vivo" },
  { cn: ["branco", "neve"], word: "branco", hue: 220, sat: 0, light: 96, demoWord: "cinza monocromática",
    meaning: "significa pureza, simplicidade e espaço; dá respiro e clareza",
    pairs: "quase tudo — funciona como neutro universal" },
  { cn: ["cinza", "grafite", "chumbo", "neutr"], word: "cinza", hue: 220, sat: 8, light: 50,
    meaning: "é o neutro equilibrado; sofisticado e calmo, não rouba a cena",
    pairs: "azul, amarelo, coral e quase toda cor viva" },
  { cn: ["bege", "areia", "creme", "areia"], word: "bege", hue: 35, sat: 20, light: 75, demoWord: "marrom análoga",
    meaning: "passa calma, natural e acolhedora; amplia e ilumina ambientes",
    pairs: "verde, marrom, terracota e azul quebrado" },
  { cn: ["terracota", "argila", "argil"], word: "terracota", hue: 12, sat: 55, light: 50,
    meaning: "é rústica, quente e orgânica; remete a barro, argila e artesanato",
    pairs: "verde, creme, azul quebrado e mostarda" },
  { cn: ["verde musgo", "oliva", "musgo"], word: "oliva", hue: 95, sat: 40, light: 40,
    meaning: "é terrosa e discreta; comunica natureza madura e estabilidade",
    pairs: "creme, terracota, mostarda e carvão" },
  { cn: ["teal", "petróleo", "verde água", "verde agua"], word: "ciano", hue: 188, sat: 55, light: 38, demoWord: "ciano análoga",
    meaning: "é sofisticada e profunda; mistura a calma do azul com o frescor do verde",
    pairs: "mostarda, coral, areia e creme" },
  { cn: ["coral", "salmão", "salmao"], word: "coral", hue: 12, sat: 70, light: 66,
    meaning: "é alegre e vibrante, mas mais leve que o vermelho; moderna e amigável",
    pairs: "azul, turquesa, areia e carvão" },
];

type QAEntry = {
  k: string[];
  a: string;
  demo?: string;
  w?: number;
  isColor?: boolean;
  cn?: string[];
  qOnly?: boolean;
};

const colorQAEntries: QAEntry[] = [];
for (const c of COLOR_INFO) {
  const demo = c.demoWord ?? `${c.word} análoga`;
  colorQAEntries.push({
    isColor: true,
    cn: c.cn,
    qOnly: true,
    k: [...c.cn, "significa", "significad", "psicologia", "psicológico", "psicologico", "transmite", "emoção", "emoçao", "sentimento", "quer dizer", "sentido", "representa", "simboliza", "symboliz"],
    a: `A cor ${cap(c.word)} ${c.meaning}. Ela combina com ${c.pairs}.`,
    demo,
    w: 1,
  });
  colorQAEntries.push({
    /* isColor/cn tambem aqui: sem eles esta entrada caia no ramo generico e
       casava so pela palavra "combina" — entao "cafe combina com que cor?"
       era respondido pelo VERMELHO, a primeira cor da lista. */
    isColor: true,
    cn: c.cn,
    k: [...c.cn, "combina", "combinar", "combinação", "combinacao", "juntar", "harmoniza", "harmonizar", "par de cor", "pares", "que cor"],
    a: `${cap(c.word)} combina com ${c.pairs}. Montei uma paleta para você ver como fica.`,
    demo: `${c.word} complementar`,
    w: 2,
  });
}

colorQAEntries.push(
  { k: ["matiz", "hue", "tonalidade"], a: "Matiz (ou hue) é o nome da cor no círculo cromático — o que diferencia vermelho de azul. Ele não diz quão clara ou viva a cor está, só em qual ponto do espectro ela está.", demo: "azul análoga" },
  { k: ["saturação", "saturaç", "intensidade", "intenso", "viva", "vivo"], a: "Saturação é a intensidade da cor: 0% é cinza, 100% é a cor mais pura e vibrante. Alta saturação chama atenção; baixa cria calma e elegância.", demo: "vermelho vibrante" },
  { k: ["luminosidade", "luminos", "claro", "escuro", "clareza", "brilho", "value", "valor da cor"], a: "Luminosidade (lightness) é o quanto a cor se aproxima do branco ou do preto. Ela cria hierarquia: cores claras recuam, escuras avançam.", demo: "azul claro" },
  { k: ["círculo cromático", "roda das cores", "roda de cores", "circulo cromatico", "espectro"], a: "O círculo cromático organiza as cores em um anel segundo o matiz. É a base para entender harmonias: vizinhos são análogos, opostos são complementares.", demo: "tríade" },
  { k: ["primária", "primarias", "primárias"], a: "Cores primárias (no pigmento: ciano, magenta e amarelo; na luz: vermelho, verde e azul) não podem ser criadas misturando outras. Todas as demais vêm delas.", demo: "tríade" },
  { k: ["secundária", "secundarias", "secundárias"], a: "Cores secundárias nascem da mistura de duas primárias: laranja (vermelho+amarelo), verde (amarelo+azul) e violeta (vermelho+azul).", demo: "análoga" },
  { k: ["terciária", "terciarias", "terciárias"], a: "Cores terciárias misturam uma primária com uma secundária vizinha (ex.: verde-azulado, vermelho-alaranjado). Elas enriquecem a paleta sem fugir da harmonia.", demo: "análoga" },
  { k: ["complementar", "opost"], a: "Cores complementares ficam em lados opostos do círculo cromático. Funcionam bem quando uma domina e a outra é destaque; usar as duas com a mesma força gera competição visual.", demo: "azul complementar" },
  { k: ["análog", "analoga", "analog", "vizinhas"], a: "Cores análogas são vizinhas no círculo cromático. Produzem unidade e transições naturais, ótimas para marcas calmas, saúde e natureza.", demo: "azul análoga" },
  { k: ["monocrom", "monocroma", "tons da mesma"], a: "Uma harmonia monocromática usa um único matiz, variando luminosidade e saturação. É coesa e ótima para interfaces; o cuidado é garantir contraste entre texto e fundo.", demo: "azul monocromática" },
  { k: ["tríade", "triád", "triade"], a: "Uma tríade usa três matizes separados por 120°. Para ficar funcional, escolha uma cor dominante e deixe as outras duas para apoio e destaque.", demo: "vermelho triádica" },
  { k: ["tetrád", "tetrad"], a: "A tetrádica reúne dois pares complementares. Tem riqueza máxima de cor, mas precisa de hierarquia tonal clara para não virar bagunça.", demo: "azul tetrádica" },
  { k: ["quadrada", "quadrad"], a: "A harmonia quadrada usa quatro matizes equidistantes (90°). Equilibrada e variada, pede uma cor dominante e neutralidade no resto.", demo: "vermelho quadrada" },
  { k: ["complementar dividida", "split", "dividida"], a: "A complementar dividida combina a base com as duas vizinhas de sua oposta. Mantém contraste forte, mas é mais fácil de equilibrar que a complementar pura.", demo: "azul complementar dividida" },
  { k: ["quente", "fria", "temperatura de cor", "cor quente", "cor fria", "warm", "cool"], a: "Temperatura é a sensação que a cor passa: vermelhos, laranjas e amarelos parecem quentes; azuis, verdes e violetas, frios. Ela orienta o clima da marca antes do desenho.", demo: "laranja vibrante" },
  { k: ["contraste", "diferença de cor"], a: "Contraste é a diferença de luminosidade entre duas cores. É o que torna texto legível: procure 4,5:1 para texto normal e 3:1 para texto grande.", demo: "contraste alto acessível" },
  { k: ["wcag", "aa", "aaa", "acessibilidade", "acessível", "legível", "legibilidade"], a: "WCAG define alvos de contraste: AA exige 4,5:1 em texto normal e 3:1 em texto grande; AAA pede 7:1 e 4,5:1. Sem isso, usuários com baixa visão não leem a interface.", demo: "acessível" },
  { k: ["tint", "tinta", "shade", "sombra", "tom", "tone"], a: "Tint é a cor com branco (mais clara); shade, com preto (mais escura); tone, com cinza. Variantes dessas três criam uma paleta coesa a partir de uma só cor.", demo: "azul monocromática" },
  { k: ["neutro", "neutros", "ácromatico", "acromático", "sem cor"], a: "Cores neutras (branco, preto, cinzas e tons de terra) não competem com as coloridas. Elas dão respiro e fazem o destaque brilhar.", demo: "cinza monocromática" },
  { k: ["pastel", "pastéis", "suave", "delicada", "soft"], a: "Pastéis são cores claras e pouco saturadas, ligadas a doçura e calma. Combinam com branco e criam interfaces leves — mas cuidado com o contraste.", demo: "pastel" },
  { k: ["neon", "neon", "vibrante", "elétrico", "fluorescente"], a: "Neons têm saturação e luminosidade altíssimas. Chamam atenção instantânea e pedem fundo escuro para não fadigar a vista.", demo: "neon vibrante" },
  { k: ["terroso", "earthy", "terra", "argila"], a: "Tons terrosos (terracota, ocre, oliva) trazem calor e origem natural. Funcionam em marcas orgânicas, gastronomia e interiores aconchegantes.", demo: "terracota análoga" },
  { k: ["gradiente", "gradient", "degradê", "degrade"], a: "Gradiente é a transição suave entre cores. Com moderação dá profundidade; em excesso confunde a hierarquia. Prefira gradientes entre matizes próximos.", demo: "análoga" },
  { k: ["duotone", "duoton"], a: "Duotone mapeia uma imagem em apenas duas cores (tipicamente um claro e um escuro). É marcante e econômico, comum em pôsteres e identidades de festivais.", demo: "complementar" },
  { k: ["daltonismo", "daltonico", "daltonism", "color blind", "cegueira de cor"], a: "Daltonismo afeta a distinção de certas cores, sobretudo vermelho e verde. Nunca dependa só da cor: use rótulos, ícones e contraste para transmitir informação.", demo: "azul amarelo acessível" },
  { k: ["rgb", "luz", "monitor", "tela", "additive"], a: "RGB é o modelo aditivo das telas: vermelho, verde e azul se somam para formar todas as cores visíveis em monitores e celulares.", demo: "tríade" },
  { k: ["cmyk", "subtrativo", "impressão", "imprimir", "gráfica"], a: "CMYK é o modelo subtrativo da impressão (ciano, magenta, amarelo e preto). Cores vivas na tela podem perder força no papel — sempre tenha o perfil de saída.", demo: "análoga" },
  { k: ["hsl", "hsb", "hsv"], a: "HSL e HSB descrevem cor por matiz, saturação e luminosidade/brilho. São mais intuitivos para ajustar uma paleta que o RGB, pois separam 'qual cor' de 'quão clara/viva'.", demo: "azul análoga" },
  { k: ["pantone", "tinta pantone", "referência de cor"], a: "Pantone é um sistema de referência de cores físicas para impressão, garantindo a mesma cor em qualquer gráfica. Em tela usamos hex; na produção física, Pantone.", demo: "azul análoga" },
  { k: ["60 30 10", "60-30-10", "regra 60", "proporção", "equilíbrio de cor"], a: "A regra 60-30-10 divide o uso em 60% de cor dominante (fundo), 30% de cor secundária e 10% de destaque. Ela traz equilíbrio automático a qualquer composição.", demo: "análoga" },
  { k: ["destaque", "accent", "cor de acento", "chamativa"], a: "A cor de destaque (accent) é a menor fração da paleta e a mais viva — reservada para chamar a ação (botões, links). Use-a com parcimônia para manter impacto.", demo: "complementar" },
  { k: ["primária da interface", "cor primária da", "botão primário", "secundária da interface"], a: "Na interface, a cor primária é da ação principal (preencher, enviar); a secundária, das ações alternativas (contorno). A de destaque fica para alertas e confirmações.", demo: "app azul" },
  { k: ["cor de erro", "cor de sucesso", "cor de aviso", "estado", "feedback de cor"], a: "Use vermelho para erro, verde para sucesso e amarelo/laranja para aviso — mas reforce com ícone ou texto, pois daltonismo confunde vermelho e verde.", demo: "verde vermelho amarelo" },
  { k: ["tendência", "tendencia", "moda de cor", "cores de 2024", "cores de 2025", "paleta da moda"], a: "Tendências giram entre tons terra e verdes musgo (conexão com natureza) e lilases suaves, alternando com neon em contextos digitais. Use tendência como tempero, não como base.", demo: "verde análoga" },
  { k: ["escolher paleta", "escolher a paleta", "escolher cor de marca", "paleta de marca", "paleta da marca", "cor da marca", "cores da marca", "identidade visual", "identidade de marca"], a: "Comece pela personalidade da marca (séria, divertida, premium) e pelo público. Escolha 1 cor dominante, 1 de apoio e 1 de destaque, garantindo contraste para texto.", demo: "marca azul" },
  { k: ["escolher cor de site", "paleta de site", "paleta de website", "cor de landing", "landing page"], a: "Para sites, priorize a legibilidade: fundo estável, texto de alto contraste e no máximo uma cor de destaque para conversão.", demo: "site azul" },
  { k: ["não errar", "evitar erro", "paleta feia", "cores que não combinam", "combinar cores que não"], a: "Se duas cores brigam, insira um neutro entre elas ou use uma harmonia (análoga, complementar). Limite-se a 3 cores fortes e deixe o resto neutro.", demo: "análoga" },
  { k: ["quantas cores", "número de cores", "muitas cores", "poucas cores"], a: "Em design, 3 cores bem usadas superam 10 aleatórias. Uma base neutra + 1 cor de marca + 1 destaque costuma ser o suficiente.", demo: "tríade" },
  { k: ["moderno", "atual", "contemporâneo", "design atual"], a: "Paletas modernas usam muito neutro, um acento vivo e, às vezes, um gradiente sutil. Espaço em branco e contraste nítido ajudam mais que muita cor.", demo: "moderno azul" },
  { k: ["testar daltonismo", "simular daltonismo", "verificar daltonismo"], a: "Use o modo de contraste do sistema ou simuladores de daltonismo. Nunca transmita informação só pela cor — acompanhe com ícone ou rótulo.", demo: "azul amarelo" },
  { k: ["diferença rgb cmyk", "rgb e cmyk", "rgb ou cmyk"], a: "RGB é para telas (luz, aditivo) e CMYK para papel (tinta, subtrativo). Uma cor pode mudar bastante ao ir da tela para a impressão.", demo: "análoga" },
  { k: ["diferença hsl rgb", "hsl e rgb"], a: "RGB lista quanto de vermelho, verde e azul; HSL separa matiz, saturação e luminosidade. HSL é melhor para ajustar tom e clareza sem 'quebrar' a cor.", demo: "azul análoga" },
  { k: ["cultura", "significado cultural", "diferente culturas", "país", "paises"], a: "O sentido da cor varia: branco é luto no Oriente e festa no Ocidente; vermelho é sorte na China e perigo no Ocidente. Pesquise o público antes de decidir.", demo: "vermelho análoga" },
  { k: ["por que o céu", "céu é azul", "porque céu"], a: "O céu parece azul pelo espalhamento de Rayleigh: moléculas do ar dispersam mais a luz azul (de menor comprimento) que a vermelha.", demo: "céu azul" },
  { k: ["folha verde", "planta verde", "clorofila"], a: "As folhas são verdes pela clorofila, que absorve luz vermelha e azul e reflete a verde — é a energia que a planta usa na fotossíntese.", demo: "verde análoga" },
  { k: ["vermelho perigo", "vermelho alerta", "por que vermelho"], a: "Usamos vermelho para perigo porque ele avança visualmente, dispara atenção rápida e tem forte associação com fogo e sangue.", demo: "vermelho complementar" },
  { k: ["psicologia das cores", "psicologia da cor", "como as cores afetam", "emoção das cores"], a: "As cores afetam emoção e decisão antes da razão: azul gera confiança, vermelho urgência, verde equilíbrio. Use esse efeito a favor da mensagem, não ao acaso.", demo: "tríade" },
  { k: ["marketing", "conversão", "venda", "cta", "botão de compra"], a: "No marketing, a cor de um botão de compra pode mudar a conversão. Verde e laranja costumam estimular ação; o essencial é o contraste contra o fundo.", demo: "laranja complementar" },
  { k: ["espaço em branco", "branco negativo", "usar branco", "fundo branco"], a: "O branco (ou o negativo) não é 'ausência': é o que dá respiro e foco. Muitas marcas premium usam muito branco para parecer limpas e caras.", demo: "branco monocromática" },
  { k: ["usar preto", "fundo preto", "preto elegante"], a: "Preto transmite elegância, poder e foco. Em fundos escuros, use cores de alto contraste e evite neon saturado demais para não cansar.", demo: "preto dourado" },
  { k: ["identidade", "marca forte", "reconhecível"], a: "Identidade vem de consistência: use sempre as mesmas cores nos mesmos papéis (fundo, texto, destaque). A repetição é o que torna a marca reconhecível.", demo: "marca azul" },
  { k: ["infantil", "criança", "kids", "bebê", "bebe"], a: "Paletas infantis usam cores primárias puras ou pastéis alegres, com alto contraste para prender atenção. Cuidado para não parecer 'baby' se o público for juvenil.", demo: "infantil triádica" },
  { k: ["luxo", "luxuosa", "premium", "sofisticada"], a: "Luxo evita saturação alta: prefere profundos (vinho, navy, preto) com um metal (dourado, champanhe) e muito espaço negativo.", demo: "luxo vinho" },
  { k: ["saúde", "saude", "clínica", "hospital", "bem-estar"], a: "Saúde pede azuis e verdes calmos, branco de limpeza e um verde de esperança. Transmite segurança e higiene sem alarme.", demo: "saúde azul" },
  { k: ["comida", "gastronomia", "restaurante", "food"], a: "Vermelho e laranja estimulam o apetite; verde sinaliza fresco e natural. Fast-food usa quente para pressa, restaurantes finos usam neutros e um acento.", demo: "comida laranja" },
  { k: ["tecnologia", "tech", "startup", "digital", "saas"], a: "Tech costuma usar azul (confiança) ou violeta (inovação), com muito neutro e um acento vibrante para destacar ações.", demo: "tech azul" },
  { k: ["natureza", "natural", "eco", "sustentável", "sustentavel", "meio ambiente"], a: "Verdes e terrosos comunicam natureza e responsabilidade. Um toque de azul ou areia amplia a sensação de ar livre.", demo: "natureza verde" },
  { k: ["romântic", "romance", "namorado", "casamento", "wedding"], a: "Romântico usa rosas, lilases e cremes suaves, com baixa saturação para um clima delicado e íntimo.", demo: "romântico rosa" },
  { k: ["esporte", "esportiva", "futebol", "energia", "atleta"], a: "Esporte pede energia: vermelho, laranja ou amarelo com alto contraste e preto para força. Transmite movimento e competição.", demo: "esporte vermelho" },
  { k: ["retro", "vintage", "anos 70", "nostálgic", "nostalgic", "antigo"], a: "Retrô usa terra queimada, mostarda e verde oliva — cores desbotadas que remetem a fotos antigas e mid-century.", demo: "vintage laranja" },
  { k: ["botão", "botao", "cta", "ação", "acao", "compra"], a: "A cor do botão de ação principal deve ser a de maior contraste contra o fundo — tipicamente a cor de destaque da marca. Verde e laranja convertem bem; o segredo é a diferença, não a cor em si.", demo: "laranja complementar" },
  { k: ["logo", "logotipo", "marca", "símbolo"], a: "Para logo, prefira 1 ou 2 cores que funcionem também em preto e branco — a marca precisa sobreviver a uma única tinta e a fundos variados.", demo: "marca azul" },
  { k: ["embalagem", "packaging", "rótulo", "rotulo"], a: "Embalagem compete no line-ar de prateleira: use uma cor de domínio que se destaque da categoria e um acento para informação-chave.", demo: "embalagem laranja" },
  { k: ["interior", "sala", "quarto", "decoração", "decoracao", "parede"], a: "Em interiores, paredes pedem tons claros e neutros; a cor de personalidade entra em móveis e adornos. Equilibre sempre com madeira ou branco.", demo: "interior bege" },
  { k: ["pele", "pele", "make", "maquiagem", "beleza"], a: "Em beleza, combine o subtom da pele: quentes com dourado/terracota, frios com rosa/prufu. O contraste certo realça sem descaracterizar.", demo: "beleza rosa" },
  { k: ["yoga", "meditação", "mindful", "relax", "spa"], a: "Yoga e bem-estar pedem verdes suaves, areia e lavanda — cores de baixo estímulo que convidam à calma.", demo: "spa verde" },
  { k: ["festa", "balada", "night", "noite"], a: "Festa e balada usam neon e duotones sobre preto: alto impacto, energia e facilidade de fotografar bem na escuridão.", demo: "festa magenta" },
  { k: ["outono", "outonal", "fall"], a: "Outono traz terracota, mostarda e bordo — quentes e queimados que remetem a folhas secas.", demo: "outono laranja" },
  { k: ["primavera", "spring", "flor"], a: "Primavera é floral e leve: rosa, lilás, verde novo e amarelo suave, com ar de renovação.", demo: "primavera rosa" },
  { k: ["inverno", "invernal", "winter"], a: "Inverno pede profundos e frios: navy, cinza e um toque de gelo ou prata para o toque mineral.", demo: "inverno azul" },
  { k: ["verão", "verao", "summer"], a: "Verão é turquesa, coral e areia — cores de praia e alto brilho que remetem a luz e água.", demo: "verão ciano" },
  { k: ["cidade", "urbano", "street", "metrópole"], a: "Urbano usa concreto (cinza), um neon de acento e preto — referência a sinalização e noite de cidade.", demo: "urbano cinza" },
  { k: ["minimal", "minimalista", "limpo", "clean"], a: "Minimalismo é quase monocromático: muito branco/cinza e uma única cor de apoio. O contraste e o espaço fazem o trabalho.", demo: "minimal cinza" },
  { k: ["industrial", "factory", "loft", "metal"], a: "Industrial usa cinza metálico, carvão e um amarelo de segurança ou laranja quebrado — referência a máquinas e obras.", demo: "industrial cinza" },
  { k: ["boho", "boêmia", "boho", "artesanal"], a: "Boho mistura terrosos, mostarda e verde quebrado com textura — calor e ecletismo sem rigidez.", demo: "boho marrom" },
  { k: ["skincare", "cosmética", "cosmetic"], a: "Skincare prefere branco, verde menta e azul claro — limpeza, frescor e confiança clínica.", demo: "skincare verde" },
  { k: ["crypto", "cripto", "web3", "blockchain"], a: "Cripto adota violeta/azul elétrico e preto, sinalizando tecnologia de fronteira e um toque de mistério.", demo: "crypto roxo" },
  { k: ["podcast", "rádio", "radio", "audio"], a: "Podcast pede uma cor de marca forte para capa (geralmente quente ou violeta) que se destaque no feed de áudio.", demo: "podcast laranja" },
  { k: ["bar", "coquetel", "cocktail", "drink"], a: "Bar e coquetel usam violeta profundo, dourado e um neon — sofisticado e noturno sem perder o apetite.", demo: "bar roxo" },
  { k: ["tattoo", "tatuagem", "studio"], a: "Tatuagem valoriza preto, vermelho oxblood e dourado envelhecido — referência a tradição e tinta permanente.", demo: "tattoo vermelho" },
  { k: ["cerimônia", "formatura", "evento", "gala"], a: "Cerimônias pedem elegância: navy ou bordô com dourado e muito branco/creme de apoio.",     demo: "cerimônia roxo" },
  { k: ["pet", "cachorro", "gato", "animal"], a: "Para pets, cores quentes e arredondadas (laranja, verde menta) comunicam cuidado e brincadeira sem agressividade.", demo: "pet verde" },
  { k: ["educação", "educacao", "escola", "curso", "aprend"], a: "Educação usa azul confiável ou verde crescimento, com um acento amarelo/laranja para estimular sem infantilizar.", demo: "educação azul" },
  { k: ["finanças", "financeiro", "banco", "invest"], a: "Finanças privilegiam azul (confiança) e verde (dinheiro/crescimento), com neutros para seriedade.", demo: "finanças verde" },
  { k: ["moda", "fashion", "boutique", "passarela"], a: "Moda acompanha tendência, mas uma marca forte fixa 1 cor-assinatura e a repete; neutros sustentam a estação.", demo: "moda roxo" },
  { k: ["jogos", "games", "game", "rpg"], a: "Jogos usam saturação alta e duotones de fantasia (roxo+verde, laranja+azul) para mundos imersivos e legíveis em movimento.", demo: "jogos roxo" },
  { k: ["fotografia", "photo", "retrato"], a: "Em fotografia, uma paleta de 2 a 3 cores dominantes dá coerência à série; o fundo neutro valoriza o sujeito.",     demo: "foto marrom" },
  { k: ["hexadecimal", "hex", "código de cor", "codigo de cor"], a: "HEX é a notação de cor da web: # seguido de três pares (vermelho, verde, azul) em base 16, de 00 a FF. #FF0000 é vermelho puro; #000000, preto; #FFFFFF, branco.", demo: "vermelho análoga" },
  { k: ["opacidade", "alpha", "transparência", "transparencia", "rgba", "canal alfa"], a: "Opacidade (alfa) diz o quanto a cor deixa passar o que está atrás. Cuidado: uma cor a 50% sobre fundos diferentes vira duas cores diferentes — para texto, prefira uma cor sólida já calculada.", demo: "cinza monocromática" },
  { k: ["oklch", "lch", "perceptual", "espaço perceptual", "espaco perceptual"], a: "OKLCH descreve cor por luminosidade perceptual, croma e matiz. Diferente do HSL, dois tons com a mesma luminosidade em OKLCH realmente parecem igualmente claros — por isso é o melhor espaço para gerar escalas.", demo: "azul monocromática" },
  { k: ["lab", "cielab", "delta e", "diferença perceptual"], a: "CIELAB e o Delta-E medem o quanto duas cores são diferentes para o olho humano, não para o computador. Delta-E abaixo de 2 é uma diferença que quase ninguém percebe.", demo: "azul monocromática" },
  { k: ["gamut", "fora de gamut", "gama de cor", "display p3"], a: "Gamut é o conjunto de cores que um dispositivo consegue exibir. Uma cor vibrante em Display P3 pode não existir em sRGB e chegar apagada — teste sempre no espaço de destino.", demo: "neon vibrante" },
  { k: ["srgb", "perfil de cor", "icc", "espaço de cor", "espaco de cor"], a: "sRGB é o espaço padrão da web: o denominador comum entre telas. Trabalhe nele para a web e converta para outro perfil só quando o destino exigir.", demo: "azul análoga" },
  { k: ["calibrar", "calibração", "calibracao", "tela diferente"], a: "Duas telas mostram a mesma cor de formas diferentes. Calibrar o monitor é o que garante que o azul aprovado é o azul que o cliente vê — em impressão, é obrigatório.", demo: "azul monocromática" },
  { k: ["metamerismo", "muda de cor na luz", "luz diferente"], a: "Metamerismo é quando duas cores combinam sob uma luz e brigam sob outra. Por isso amostras impressas devem ser vistas na luz do ambiente final.", demo: "bege análoga" },
  { k: ["hsv", "brilho vs luminosidade"], a: "HSB/HSV usa brilho (o quanto a cor se afasta do preto) e HSL usa luminosidade (o meio é a cor pura). No HSB, 100% de brilho é a cor viva; no HSL, 100% é branco.", demo: "azul monocromática" },
  { k: ["contraste simultâneo", "contraste simultaneo", "albers", "cor parece diferente", "mesma cor parece"], a: "A mesma cor parece diferente dependendo do que está ao lado — é o contraste simultâneo estudado por Albers. Avalie uma cor sempre no contexto real, nunca isolada num quadrado branco.", demo: "cinza análoga" },
  { k: ["pós-imagem", "pos-imagem", "after image", "vejo a cor depois"], a: "Olhar fixamente para uma cor satura os receptores do olho; ao desviar, você vê a complementar dela. É por isso que salas de cirurgia usam verde: ele neutraliza a pós-imagem do vermelho.", demo: "verde complementar" },
  { k: ["vibração de cor", "vibracao de cor", "cores que tremem", "borda tremendo"], a: "Duas cores muito saturadas e de luminosidade parecida vibram na fronteira e cansam a vista (vermelho sobre azul é o caso clássico). Separe-as com um neutro ou mude a luminosidade de uma.", demo: "vermelho complementar" },
  { k: ["vibrância", "vibrancia", "vibrance"], a: "Vibrância aumenta a saturação apenas das cores que ainda estão apagadas, poupando as já intensas e os tons de pele. Saturação sobe tudo junto e costuma queimar a imagem.", demo: "coral vibrante" },
  { k: ["dessaturar", "tirar cor", "menos cor", "cor apagada"], a: "Dessaturar aproxima a cor do cinza. É o jeito mais rápido de acalmar uma paleta agressiva sem trocar nenhum matiz — e de criar estados desabilitados.", demo: "cinza monocromática" },
  { k: ["cor avança", "cor recua", "profundidade", "cor que salta"], a: "Cores quentes e claras avançam; frias e escuras recuam. Use isso para criar profundidade: fundo frio, elemento de ação quente.", demo: "azul laranja" },
  { k: ["área de cor", "area de cor", "cor em pouca quantidade"], a: "Uma cor em área grande parece mais saturada e mais clara do que num quadradinho. Teste sempre a cor na proporção real em que ela vai aparecer.", demo: "análoga" },
  { k: ["modo escuro", "dark mode", "tema escuro", "fundo escuro interface"], a: "No modo escuro, não inverta simplesmente: reduza a saturação das cores vivas (elas brilham demais no escuro) e use cinza bem escuro em vez de preto puro, que causa halo no texto.", demo: "azul escura" },
  { k: ["preto puro", "nao usar preto", "não usar preto", "nao use preto", "porque nao preto"], w: 2, a: "Preto puro sobre branco puro cria um contraste duro que cansa. Interfaces confortáveis usam quase-preto (#111 a #1A1A1A) e quase-branco (#F7F7F7 a #FAFAFA).", demo: "cinza monocromática" },
  { k: ["off-white", "branco quebrado", "qual branco"], a: "Um branco levemente quente ou frio dá acabamento onde o branco puro parece cru. O subtom do branco é uma das decisões mais silenciosas e mais eficazes de uma identidade.", demo: "bege monocromática" },
  { k: ["rich black", "preto rico", "preto na impressão", "preto na impressao"], a: "Na impressão, preto só de tinta preta sai lavado em áreas grandes. Preto rico mistura as quatro tintas (ex.: 60/40/40/100) para um preto profundo — mas nunca em texto pequeno, que desalinha.", demo: "preto monocromática" },
  { k: ["cor de link", "link azul", "hyperlink"], a: "Links precisam ser distinguíveis por mais do que a cor: sublinhado ou peso. Se usar só cor, ela deve ter 3:1 contra o texto ao redor e 4,5:1 contra o fundo.", demo: "azul complementar" },
  { k: ["texto secundário", "texto secundario", "hierarquia de texto"], a: "Uma hierarquia de texto costuma bastar com três níveis: tinta cheia para o principal, cerca de 60% para o secundário e 40% para o auxiliar. Abaixo de 4,5:1, o auxiliar deixa de ser legível.", demo: "cinza monocromática" },
  { k: ["cor de borda", "divisória", "divisoria", "linha fina"], a: "Bordas funcionam melhor como um fio quase invisível do que como uma linha marcada. Se a borda chama atenção, ela está competindo com o conteúdo.", demo: "cinza monocromática" },
  { k: ["cor de sombra", "sombra colorida", "box shadow"], a: "Sombra preta pura suja a cor de baixo. Tinja a sombra com o matiz do fundo e baixe a opacidade: o resultado parece luz, não fuligem.", demo: "azul monocromática" },
  { k: ["placeholder", "texto de exemplo no campo"], a: "Placeholder deve ser claramente mais apagado que o texto digitado, mas ainda legível — e nunca deve substituir o rótulo do campo.", demo: "cinza monocromática" },
  { k: ["desabilitado", "disabled", "botão inativo", "botao inativo"], a: "Estados desabilitados são o caso em que o baixo contraste é intencional e permitido pela WCAG. Ainda assim, reduza a saturação, não apenas a opacidade.", demo: "cinza monocromática" },
  { k: ["hover", "estado de passagem", "mouse em cima"], a: "Um bom hover muda a luminosidade em 4 a 8%, não o matiz. Mudar de cor no hover confunde: parece outro botão, não o mesmo botão ativo.", demo: "azul monocromática" },
  { k: ["anel de foco", "focus ring", "contorno de foco", "navegação por teclado"], a: "O anel de foco precisa de 3:1 contra o fundo e contra o próprio componente. Nunca remova o outline sem colocar outro indicador — é o que permite navegar sem mouse.", demo: "azul complementar" },
  { k: ["seleção de texto", "selecao de texto"], a: "A cor de seleção deve ser a cor de marca com opacidade baixa, garantindo que o texto selecionado continue legível — quase todo site esquece de testar isso no modo escuro.", demo: "azul monocromática" },
  { k: ["cor de erro em campo", "campo inválido", "campo invalido", "validação", "validacao"], a: "Um campo com erro precisa de mais que borda vermelha: mensagem em texto e, de preferência, um ícone. Quem não distingue vermelho enxerga apenas uma borda comum.", demo: "vermelho complementar" },
  { k: ["skeleton", "carregando", "loading"], a: "Skeletons usam o cinza de preenchimento da interface com um brilho passando. Se o skeleton tiver cor de marca, ele parece conteúdo real e frustra a leitura.", demo: "cinza monocromática" },
  { k: ["scrollbar", "barra de rolagem"], a: "A barra de rolagem deve usar o cinza de linha da interface, não a cor de marca: ela é infraestrutura, não conteúdo.", demo: "cinza monocromática" },
  { k: ["gráfico", "grafico", "dataviz", "visualização de dados", "visualizacao de dados"], a: "Em gráficos a cor carrega dado, não decoração. Use escala categórica para tipos, sequencial para intensidade, e reserve o vermelho para o que é realmente negativo.", demo: "tríade" },
  { k: ["escala sequencial", "sequencial", "mapa de intensidade"], a: "Escalas sequenciais vão de claro a escuro num mesmo matiz e servem para quantidade. O olho lê luminosidade muito melhor que matiz — a variação tem de ser de claridade.", demo: "azul monocromática" },
  { k: ["escala divergente", "divergente", "dois extremos"], a: "Escalas divergentes têm um meio neutro e dois extremos opostos: ideais para desvio em relação a uma referência. Garanta que o ponto central seja realmente neutro.", demo: "azul laranja complementar" },
  { k: ["escala categórica", "categorica", "cores por categoria"], a: "Para categorias, use no máximo 6 a 8 cores distintas em matiz E em luminosidade — assim a legenda continua funcionando em preto e branco e no daltonismo.", demo: "tríade" },
  { k: ["mapa de calor", "heatmap"], a: "Mapas de calor pedem escala sequencial perceptualmente uniforme: o degrau entre dois tons deve representar sempre o mesmo salto de valor.", demo: "verde monocromática" },
  { k: ["dashboard", "painel de dados", "kpi"], a: "Em dashboards, a maior parte deve ser neutra. A cor entra só onde há decisão: alerta, meta batida, variação. Painel todo colorido é painel sem hierarquia.", demo: "cinza análoga" },
  { k: ["design token", "tokens de cor", "variável de cor", "variavel de cor"], a: "Tokens separam a cor do seu uso: em vez de azul-500 no botão, use acao-primaria. Assim trocar a marca é mudar um valor, não caçar hexadecimais pelo código.", demo: "azul monocromática" },
  { k: ["nomear cores", "nome da cor", "como chamar a cor", "semântico", "semantico"], a: "Nomes semânticos (superficie, texto, acao, perigo) sobrevivem a redesenhos; nomes literais (azul-claro) quebram no dia em que o azul vira verde. Use literais só na camada mais baixa.", demo: "azul monocromática" },
  { k: ["escala 50 900", "50 a 900", "tons numerados"], a: "A escala de 50 a 900 dá onze degraus de um matiz: 50 para fundos, 500 para a cor de marca, 700 ou mais para texto sobre claro. O importante é que os degraus sejam iguais na percepção, não no cálculo.", demo: "azul monocromática" },
  { k: ["gerar tons", "criar variações", "criar variacoes", "tons de uma cor"], a: "Para gerar tons de uma cor, varie a luminosidade e reduza um pouco a saturação nos extremos — senão os claros ficam leitosos e os escuros, sujos.", demo: "azul monocromática" },
  { k: ["quantas cores no sistema", "tamanho da paleta", "paleta de produto"], a: "Um sistema de produto costuma precisar de um neutro com 10 tons, uma cor de marca com 10 tons e três cores de estado (sucesso, aviso, erro). O resto é excesso.", demo: "azul monocromática" },
  { k: ["cor de marca na interface", "usar a cor da marca"], a: "A cor da marca raramente funciona como cor de interface pura: costuma ser saturada demais para texto e grandes áreas. Derive um tom mais escuro para ação e guarde a original para a identidade.", demo: "marca azul" },
  { k: ["duas cores", "paleta de 2"], a: "Com duas cores, a regra é papel definido: uma domina o fundo e a outra existe só para o destaque. É a paleta mais difícil de errar e a mais fácil de tornar memorável.", demo: "azul complementar" },
  { k: ["três cores", "tres cores", "paleta de 3"], a: "Três cores é o formato clássico: dominante, apoio e destaque, nas proporções 60/30/10. Se as três brigam, uma delas deveria ser neutra.", demo: "tríade" },
  { k: ["cinco cores", "paleta de 5"], a: "Cinco cores só funcionam com hierarquia: normalmente dois neutros, uma dominante, uma de apoio e uma de destaque. Cinco cores fortes viram bandeira.", demo: "análoga" },
  { k: ["cores demais", "paleta grande demais"], a: "Se a interface precisa de muitas cores, provavelmente falta hierarquia de tamanho e peso. Resolva com tipografia e espaço antes de acrescentar mais um matiz.", demo: "cinza análoga" },
  { k: ["cinza quente", "cinza frio", "subtom do cinza", "qual cinza"], a: "Cinza nunca é neutro de verdade: um cinza levemente quente combina com marcas terrosas e um cinza frio com marcas azuis. Escolher o subtom do cinza é escolher o clima do produto.", demo: "cinza monocromática" },
  { k: ["cinza colorido", "neutro colorido", "cinza com matiz"], a: "Puxe o cinza de 3 a 8% na direção da cor de marca. Ele continua lendo como neutro, mas a interface inteira passa a parecer da mesma família.", demo: "cinza monocromática" },
  { k: ["escala de cinza", "preto e branco", "tons de cinza"], a: "Teste sempre a paleta em escala de cinza: se dois elementos somem um no outro, eles se distinguem apenas por matiz — e vão sumir para quem tem daltonismo ou imprime em preto e branco.", demo: "cinza monocromática" },
  { k: ["dourado", "ouro", "metálico", "metalico"], a: "Dourado em tela é um degradê entre ocre e amarelo claro, não uma cor chapada: é o brilho que faz o metal. Em impressão, ouro real é tinta especial, não CMYK.", demo: "preto dourado" },
  { k: ["prata", "prateado", "cromado"], a: "Prata na tela se resolve com um degradê de cinzas com um ponto quase branco — a leitura de metal vem do contraste entre reflexo e sombra, não da cor.", demo: "cinza monocromática" },
  { k: ["fluorescente", "tinta especial", "cor especial"], a: "Cores fluorescentes não existem em CMYK: são tintas especiais. Se a marca depende de um neon, ele precisa entrar como cor extra no orçamento de impressão.", demo: "neon vibrante" },
  { k: ["tecido", "têxtil", "textil", "estampa", "roupa"], a: "Em têxtil a mesma cor muda com o tecido: algodão absorve e apaga, cetim reflete e satura. Aprove sempre em amostra do material final.", demo: "análoga" },
  { k: ["sinalização", "sinalizacao", "placa", "wayfinding"], a: "Sinalização exige contraste altíssimo e leitura a distância: no máximo três cores, texto escuro sobre claro (ou o inverso) e nenhum tom médio.", demo: "amarelo preto" },
  { k: ["verniz", "acabamento", "hot stamping"], a: "Acabamentos mudam a cor percebida: verniz fosco escurece e apaga, brilhante satura. Considere isso ao aprovar a cor no papel.", demo: "preto dourado" },
  { k: ["contraste de ícone", "contraste de icone", "não textual", "nao textual"], a: "Elementos não textuais — ícones, bordas de campo, barras de gráfico — precisam de 3:1 contra o fundo. É o critério mais esquecido da WCAG e o que mais quebra formulários.", demo: "azul complementar" },
  { k: ["texto grande", "qual tamanho é texto grande"], a: "Texto grande, para a WCAG, é 24px normal ou 18,7px em negrito. Ele pode usar 3:1 em vez de 4,5:1 — mas isso não vale para texto de leitura.", demo: "azul monocromática" },
  { k: ["apca", "wcag 3", "novo contraste"], a: "A APCA é o modelo de contraste em estudo para a WCAG 3: considera tamanho e peso da fonte e a polaridade (claro no escuro contrasta diferente de escuro no claro). Ainda não substitui o critério oficial.", demo: "azul monocromática" },
  { k: ["quantas pessoas daltonismo", "porcentagem daltonismo", "quantos daltônicos", "quantos daltonicos"], a: "Cerca de 8% dos homens e 0,5% das mulheres têm alguma deficiência na visão de cores — em um público de mil pessoas, dezenas não veem sua paleta como você.", demo: "azul amarelo acessível" },
  { k: ["protanopia"], a: "Protanopia é a ausência dos receptores de vermelho: vermelhos escurecem e se confundem com verdes e marrons. Diferencie por luminosidade, não por matiz.", demo: "azul amarelo acessível" },
  { k: ["deuteranopia"], a: "Deuteranopia, a mais comum, afeta os receptores de verde: verde e vermelho colapsam num tom parecido. Um par azul/laranja é sempre mais seguro que verde/vermelho.", demo: "azul laranja" },
  { k: ["tritanopia"], a: "Tritanopia afeta os receptores de azul: azul e verde se confundem e o amarelo tende ao rosa. É rara, mas quebra paletas que separam informação por azul e verde.", demo: "azul verde" },
  { k: ["acromatopsia", "enxerga em cinza"], a: "Na acromatopsia não há percepção de matiz nenhum — resta a luminosidade. Se sua paleta funciona em escala de cinza, ela funciona aqui.", demo: "cinza monocromática" },
  { k: ["luz azul", "cansaço visual", "cansaco visual", "vista cansada"], a: "O cansaço visual vem mais do contraste extremo e do brilho da tela do que da cor em si. Reduza o branco puro, evite grandes áreas saturadas e dê espaço ao olho.", demo: "azul monocromática" },
  { k: ["texto colorido", "posso escrever colorido"], a: "Texto longo deve ser quase neutro. Cor em texto funciona em títulos curtos e destaques; em parágrafos, ela reduz a velocidade de leitura mesmo com contraste suficiente.", demo: "cinza análoga" },
  { k: ["texto sobre imagem", "overlay", "foto de fundo", "legibilidade sobre foto"], a: "Para texto sobre foto, não confie no acaso: aplique uma camada escura de 40 a 60% ou um degradê na área do texto. O contraste tem de valer no pior ponto da imagem, não na média.", demo: "preto monocromática" },
  { k: ["amarelo em interface", "amarelo na interface", "amarelo funciona", "usar amarelo", "amarelo contraste", "amarelo ilegível", "amarelo ilegivel"], w: 2, a: "Amarelo é a cor mais luminosa do círculo: quase nunca passa em contraste sobre branco. Use-o como fundo com texto escuro, nunca como texto sobre claro.", demo: "amarelo preto" },
  { k: ["laranja"], a: "Laranja é a cor da urgência simpática: chama como o vermelho, mas sem ameaça. Por isso domina promoções, botões de compra e marcas acessíveis.", demo: "laranja complementar" },
  { k: ["marrom"], a: "Marrom carrega origem, café, madeira e couro. Foi evitado por décadas em digital e voltou como sinal de artesanal e honesto — mas exige um claro forte ao lado para não pesar.", demo: "marrom análoga" },
  { k: ["rosa"], a: "Rosa deixou de ser apenas feminino: em saturação alta vira energia digital; em tom empoeirado, sofisticação. O contexto tipográfico decide qual leitura prevalece.", demo: "rosa complementar" },
  { k: ["roxo", "violeta", "lilás", "lilas"], a: "Roxo é a cor da imaginação e do premium acessível — raro na natureza, por isso parece especial. Em escuro vira mistério; em lilás claro, delicadeza.", demo: "roxo análoga" },
  { k: ["azul marinho", "navy", "azul escuro"], a: "Azul-marinho é o neutro que finge ser cor: substitui o preto com mais elegância e menos dureza. É a base de quase toda marca que quer parecer sólida.", demo: "azul monocromática" },
  { k: ["vinho", "bordô", "bordo", "borgonha"], a: "Vinho é o vermelho amadurecido: mantém a paixão e ganha discrição. Funciona onde vermelho puro pareceria barato.", demo: "vinho análoga" },
  { k: ["turquesa"], a: "Turquesa mistura o frescor do verde com a calma do azul. É água, férias e limpeza — e uma das poucas cores vivas que ainda parecem tranquilas.", demo: "turquesa análoga" },
  { k: ["mostarda"], a: "Mostarda é o amarelo com terra dentro: quente sem gritar. Combina com azul-petróleo, marrom e creme, e salva paletas terrosas que ficaram monótonas.", demo: "mostarda complementar" },
  { k: ["cor mais usada", "cor preferida do mundo", "cor favorita"], a: "Azul é a cor preferida na maior parte dos países e a mais usada em marcas — o que também a torna a mais genérica. Escolher azul é escolher segurança; destacar-se exige mais que o matiz.", demo: "azul análoga" },
  { k: ["cor e gênero", "cor e genero", "rosa menina", "azul menino"], a: "A associação rosa/azul com gênero tem menos de um século e já foi invertida. Tratá-la como natural limita a marca — vale mais escolher pela personalidade que pelo público presumido.", demo: "rosa azul" },
  { k: ["público sênior", "publico senior", "idoso", "terceira idade"], a: "Com a idade o cristalino amarela e a pupila reduz: azuis escurecem e o contraste efetivo cai. Para público sênior, aumente contraste e corpo de texto e evite separar informação por azul e verde.", demo: "azul amarelo acessível" },
  { k: ["china", "japão", "japao", "cultura asiática", "oriente"], a: "Na China o vermelho é sorte e prosperidade e o branco é luto; no Japão o vermelho também é proteção. Uma paleta ocidental de luto pode comunicar o oposto do pretendido.", demo: "vermelho dourado" },
  { k: ["brasil", "brasileiro", "cores do brasil"], a: "No Brasil, verde e amarelo carregam leitura política e esportiva forte — usá-los juntos raramente é neutro. Azul, laranja e terrosos costumam dar mais liberdade de posicionamento.", demo: "verde amarelo" },
  { k: ["religião", "religiao", "espiritual", "sagrado"], a: "Cores sagradas variam: açafrão no hinduísmo, verde no islamismo, roxo no cristianismo litúrgico. Verifique antes de usar uma cor forte em contexto cultural específico.", demo: "roxo análoga" },
  { k: ["quantas cores no logo", "logo com muitas cores"], a: "Um logo deve funcionar em uma cor só. Se ele depende de três para ser reconhecido, vai falhar em carimbo, bordado e favicon.", demo: "marca azul" },
  { k: ["logo preto e branco", "versão monocromática", "versao monocromatica"], a: "Antes de escolher a cor do logo, desenhe-o em preto. Se a forma não se sustenta sem cor, a cor está fazendo o trabalho que o desenho deveria fazer.", demo: "preto monocromática" },
  { k: ["registrar cor", "cor registrada", "cor proprietária", "cor proprietaria"], a: "Algumas marcas registram sua cor (o magenta da Deutsche Telekom, o azul Tiffany). Isso exige uso consistente e exclusivo no setor por anos — é consequência, não ponto de partida.", demo: "marca azul" },
  { k: ["concorrente", "cor do concorrente", "me diferenciar"], a: "Levante as cores dos concorrentes antes de escolher a sua. Se o setor inteiro é azul, o azul é o caminho mais rápido para ser invisível.", demo: "complementar" },
  { k: ["rebranding", "trocar a cor da marca"], a: "Trocar a cor da marca é o que o público mais percebe e menos perdoa. Se for necessário, migre por etapas e mantenha a forma do logo constante para não perder o reconhecimento.", demo: "marca azul" },
  { k: ["paleta secundária", "paleta secundaria", "cores de apoio"], a: "A paleta secundária existe para o que a cor principal não dá conta: gráficos, categorias, ilustração. Ela deve ser derivada da principal, não escolhida à parte.", demo: "análoga" },
  { k: ["e-mail", "email marketing", "newsletter"], a: "Clientes de e-mail renderizam cor de formas diferentes e muitos bloqueiam imagens. Garanta que a mensagem funcione com cores de fundo sólidas e texto de alto contraste.", demo: "azul complementar" },
  { k: ["anúncio", "anuncio", "criativo", "banner"], a: "Um anúncio compete num feed colorido: escolha um fundo que não seja a cor do aplicativo (nem branco, nem o azul do feed) e reserve o contraste máximo para a chamada.", demo: "laranja complementar" },
  { k: ["apresentação", "apresentacao", "slide", "powerpoint"], a: "Em slides, projetores lavam a cor: aumente contraste, evite tons médios e não use texto claro sobre fundo claro. Fundo escuro só se a sala for escura.", demo: "azul monocromática" },
  { k: ["portfólio", "portfolio", "currículo", "curriculo"], a: "Portfólio pede neutro quase total: o trabalho é que tem cor. Uma única cor de acento na navegação já basta para dar identidade.", demo: "cinza análoga" },
  { k: ["vídeo", "video", "color grading", "cinema"], a: "Em vídeo a paleta se constrói na correção de cor: normalmente uma dominante fria nas sombras e quente nas altas luzes. O par laranja e azul dominou o cinema por separar pele de fundo.", demo: "laranja azul complementar" },
  { k: ["rede social", "instagram", "feed", "post"], a: "Para redes, escolha duas ou três cores e repita sem medo: o feed é lido em miniatura e em rolagem rápida, onde só a repetição cria reconhecimento.", demo: "análoga" },
  { k: ["papel", "offset", "couché", "couche"], a: "O papel muda a cor: em não revestido a tinta penetra e apaga, em couché ela fica na superfície e satura. Peça prova no papel final antes de aprovar.", demo: "análoga" },
  { k: ["por onde começo", "por onde comeco", "primeiro passo", "como começar uma paleta", "como comeco"], a: "Comece por uma pergunta, não por uma cor: o que a pessoa deve sentir em três segundos? Escolha a dominante que responde isso, derive um neutro dela e só então busque o destaque.", demo: "análoga" },
  { k: ["testar paleta", "testar a paleta", "testar minha paleta", "validar paleta", "avaliar paleta", "paleta esta boa", "como sei que está boa", "como sei que esta boa"], a: "Teste em quatro provas: em escala de cinza, em tela de celular, em contraste de texto e num contexto real (um botão, uma capa). Paleta que só existe em faixinha não foi testada.", demo: "análoga" },
  { k: ["documentar cores", "guia de marca", "brandbook", "manual da marca"], a: "Documente cada cor com HEX, RGB, CMYK, o papel dela e um exemplo de uso proibido. O erro comum é listar cores sem dizer onde cada uma entra.", demo: "marca azul" },
  { k: ["inspiração", "inspiracao", "onde buscar cor", "referência de cor", "referencia de cor"], a: "As melhores paletas vêm de fora do design: fotografia, cinema, embalagem antiga, pintura, natureza. Extraia de uma imagem que já tem a emoção certa em vez de sortear matizes.", demo: "análoga" },
  { k: ["copiar paleta", "usar paleta de outro"], a: "Copiar a paleta de um concorrente é reproduzir a estratégia dele com sua marca. Extraia o princípio (dominante fria, acento quente) e reconstrua com seus valores.", demo: "análoga" },
  { k: ["gradiente em texto", "texto com degradê", "texto com degrade"], a: "Degradê em texto quase sempre custa legibilidade e acessibilidade. Se for usar, restrinja a títulos grandes e garanta que a extremidade mais clara ainda contrasta com o fundo.", demo: "análoga" },
);

/* As chaves sao normalizadas UMA vez, na carga do modulo. A pergunta chega aqui
   sem acento (normText tira), e ate agora toda chave acentuada — "icone",
   "grafico", "saturacao", "cafe" — era letra morta: nunca casava com nada. Era
   por isso que as entradas precisavam repetir cada palavra em duas grafias, e
   metade das duplicatas ainda faltava. */
for (const e of colorQAEntries) {
  e.k = e.k.map(normText);
  if (e.cn) e.cn = e.cn.map(normText);
}

export const colorQA = (
  input: string,
): { a: string; demo?: string } | null => {
  const q = normText(input);
  const isQ =
    /[?]|o que|qual|como|por que|porque|explique|diferenca|significa|significad|quer dizer|sentido|representa|simboliza|transmite|emoc|sentiment|psicolog|me diga|fale|conte/.test(
      q,
    );
  let best: { e: QAEntry; score: number } | null = null;
  for (const e of colorQAEntries) {
    /* entradas de significado so respondem a uma pergunta de verdade */
    if (e.qOnly && !isQ) continue;

    let s = 0;
    if (e.isColor && e.cn) {
      /* Uma entrada de cor so concorre se o NOME da cor estiver na pergunta.
         Antes bastava a palavra de intencao — "transmite", "combina" —, que e
         identica nas vinte cores. Como a pontuacao era o tamanho da palavra
         casada, "o que o azul transmite?" era vencido pela entrada do VERMELHO,
         a primeira da lista, com os 9 caracteres de "transmite" contra os 4 de
         "azul". O bot respondia sobre vermelho em toda pergunta de significado. */
      const hit = e.cn.find((n) => q.includes(n));
      if (!hit) continue;
      const intent = e.k.some((kw) => !e.cn!.includes(kw) && q.includes(kw));
      if (!intent && !isQ) continue;
      s = hit.length + 2;
    } else {
      for (const kw of e.k) if (q.includes(kw)) s = Math.max(s, kw.length);
    }

    /* O peso so entra EM CIMA de um acerto. Somado incondicionalmente, ele dava
       pontos a entradas que nao casaram com nada da pergunta: qualquer texto
       sem tema reconhecido caia na primeira entrada com w > 0 e voltava como
       "vermelho combina com branco, preto e dourado" — uma resposta confiante e
       sem relacao nenhuma com o que foi perguntado. */
    if (s === 0) continue;
    s += e.w ?? 0;
    if (!best || s > best.score) best = { e, score: s };
  }
  if (!best) return null;
  return { a: best.e.a, demo: best.e.demo };
};

/* ---------- HSB / HSV ---------- */
export const hexToHsb = (hex: string): [number, number, number] => {
  const [r, g, b] = rgb(hex).map((v) => v / 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min;
  let h = 0;
  if (d) {
    if (max === r) h = ((g - b) / d + 6) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  return [Math.round(h), Math.round((max ? d / max : 0) * 100), Math.round(max * 100)];
};
export const hsbToHex = (h: number, s: number, b: number) => {
  const S = s / 100,
    V = b / 100,
    c = V * S,
    x = c * (1 - Math.abs((((h / 60) % 2) + 2) % 2 - 1)),
    m = V - c;
  const seg = Math.floor(((h % 360) + 360) % 360 / 60);
  const [r, g, bl] = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][seg];
  return (
    "#" +
    [r, g, bl]
      .map((v) =>
        Math.round((v + m) * 255)
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
      .toUpperCase()
  );
};

/* ---------- rampa perceptural (OKLab) ---------- */
const srgbToLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
const linearToSrgb = (c: number) =>
  c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
const rgbToOklab = (r: number, g: number, b: number) => {
  const [R, G, B] = [r, g, b].map((v) => srgbToLinear(v / 255));
  const l = 0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B;
  const m = 0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B;
  const s = 0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B;
  const l_ = Math.cbrt(l),
    m_ = Math.cbrt(m),
    s_ = Math.cbrt(s);
  return [
    0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
  ];
};
const oklabToRgb = (L: number, a: number, b: number) => {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_,
    m = m_ * m_ * m_,
    s = s_ * s_ * s_;
  let R = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  let G = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  let B = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  const to = (v: number) =>
    Math.round(
      Math.max(0, Math.min(1, linearToSrgb(v))) * 255,
    );
  return [to(R), to(G), to(B)];
};
export const ramp = (hex: string, steps = 10) => {
  const [r, g, b] = rgb(hex);
  const [L, a, bb] = rgbToOklab(r, g, b);
  return Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1),
      Ln = 0.97 - t * 0.93,
      chroma = Math.max(0, 1 - Math.abs(Ln - 0.55) * 1.05);
    const [R, G, B] = oklabToRgb(Ln, a * chroma, bb * chroma);
    return (
      "#" +
      [R, G, B].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase()
    );
  });
};

/* ---------- tints & shades (escala completa por luminosidade) ---------- */
export const tintsAndShades = (hex: string, steps = 11) => ramp(hex, steps);

/* ---------- formatos ---------- */
export const toRgbString = (hex: string) => {
  const [r, g, b] = rgb(hex);
  return `rgb(${r}, ${g}, ${b})`;
};
export const toHslString = (hex: string) => {
  // Sem arredondar, o hex #0B1F3A virava "hsl(214.46808510638297, ...)" —
  // ilegível na tela e estourando a coluna no PDF.
  const [h, s, l] = hexToHsl(hex);
  return `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`;
};
export const toCmykString = (hex: string) => {
  const [r, g, b] = rgb(hex).map((v) => v / 255);
  const k = 1 - Math.max(r, g, b);
  if (k === 1) return "cmyk(0%, 0%, 0%, 100%)";
  const f = (v: number) => Math.round(((1 - v - k) / (1 - k)) * 100);
  return `cmyk(${f(r)}%, ${f(g)}%, ${f(b)}%, ${Math.round(k * 100)}%)`;
};

/* ---------- permalink ---------- */
export const encodePalette = (colors: string[]) =>
  colors.map((c) => normalizeHex(c).slice(1).toLowerCase()).join("-");
export const decodePalette = (slug: string): string[] | null => {
  const parts = slug.replace(/^\/+/, "").split("-").filter(Boolean);
  if (parts.length < 2 || parts.length > 10) return null;
  if (!parts.every((p) => /^([0-9a-f]{3}|[0-9a-f]{6})$/i.test(p))) return null;
  return parts.map((p) => normalizeHex(p));
};

/* ---------- ajuste global ---------- */
export type Adjust = { hue: number; sat: number; bright: number; temp: number };
export const neutralAdjust: Adjust = { hue: 0, sat: 0, bright: 0, temp: 0 };
const clamp = (v: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, v));
export const applyAdjust = (hex: string, a: Adjust) => {
  let [h, s, l] = hexToHsl(hex);
  h = (((h + a.hue) % 360) + 360) % 360;
  s = clamp(s + a.sat);
  l = clamp(l + a.bright);
  let out = hslToHex(h, s, l);
  if (a.temp) {
    const [r, g, b] = rgb(out),
      t = a.temp / 100;
    const mix = (v: number, target: number) => Math.round(v + (target - v) * Math.abs(t) * 0.35);
    const warm = t > 0;
    out =
      "#" +
      [mix(r, warm ? 255 : r), g, mix(b, warm ? b : 255)]
        .map((v) => clamp(v, 0, 255).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
  }
  return out;
};

/* ---------- simulação de daltonismo ---------- */
export type Vision = "normal" | "protanopia" | "deuteranopia" | "tritanopia" | "achromatopsia";
export const visionLabels: Record<Vision, string> = {
  normal: "Visão normal",
  protanopia: "Protanopia",
  deuteranopia: "Deuteranopia",
  tritanopia: "Tritanopia",
  achromatopsia: "Acromatopsia",
};
const visionMatrix: Record<Exclude<Vision, "normal">, number[]> = {
  protanopia: [0.567, 0.433, 0, 0.558, 0.442, 0, 0, 0.242, 0.758],
  deuteranopia: [0.625, 0.375, 0, 0.7, 0.3, 0, 0, 0.3, 0.7],
  tritanopia: [0.95, 0.05, 0, 0, 0.433, 0.567, 0, 0.475, 0.525],
  achromatopsia: [0.299, 0.587, 0.114, 0.299, 0.587, 0.114, 0.299, 0.587, 0.114],
};
export const simulateVision = (hex: string, v: Vision) => {
  if (v === "normal") return normalizeHex(hex);
  const [r, g, b] = rgb(hex),
    m = visionMatrix[v];
  return (
    "#" +
    [
      m[0] * r + m[1] * g + m[2] * b,
      m[3] * r + m[4] * g + m[5] * b,
      m[6] * r + m[7] * g + m[8] * b,
    ]
      .map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
};

/* ---------- psicologia da cor ---------- */
export type ColorInfo = {
  family: string;
  tagline: string;
  psychology: string;
  application: string;
  keywords: string[];
};
export const colorInfo = (hex: string): ColorInfo => {
  const [h, s, l] = hexToHsl(hex),
    neutral = s < 14 || l < 9 || l > 95;
  const fam = (
    family: string,
    tagline: string,
    psychology: string,
    application: string,
    keywords: string[],
  ): ColorInfo => ({ family, tagline, psychology, application, keywords });
  if (neutral) {
    if (l < 14)
      return fam(
        "Preto / Tom profundo",
        "Autoridade e sofisticação",
        "Transmite seriedade, luxo e mistério. É a cor do contraste máximo e da elegância atemporal; em excesso pode parecer pesada ou fechar o layout.",
        "Use como texto principal, em áreas de destaque ou para criar dramaturgia. Combine com um acento vivo para evitar visual opressivo.",
        ["sofisticado", "poderoso", "elegante"],
      );
    if (l > 92)
      return fam(
        "Branco / Tom claro",
        "Pureza e respiro",
        "Representa clareza, simplicidade e espaço. Traz leveza e foco ao conteúdo, além de ampliar a sensação de área útil.",
        "Ideal para fundos e áreas de respiro. Em telas, prefira um branco levemente off-white (#FAFAFA) para reduzir cansaço visual.",
        ["limpo", "leve", "minimal"],
      );
    return fam(
      "Cinza / Neutro",
      "Equilíbrio e versatilidade",
      "É a cor do meio-termo: calma, profissional e neutra. Serve de base para qualquer acento brilhar sem competição.",
      "Use em superfícies, bordas e textos secundários. Alterne tons para criar hierarquia sem introduzir novas matizes.",
      ["neutro", "estável", "corporativo"],
    );
  }
  if (h < 15 || h >= 345)
    return fam(
      "Vermelho",
      "Energia e urgência",
      "Evoca paixão, coragem e alerta. É a cor mais estimulante — atrai o olhar na hora e acelera o pulso. Pode sinalizar perigo ou chamar à ação.",
      "Reserve para CTAs, selos de oferta e mensagens críticas. Em UI, use com parcimônia: muito vermelho cansa e gera ansiedade.",
      ["paixão", "urgência", "coragem"],
    );
  if (h < 45)
    return fam(
      "Laranja",
      "Entusiasmo e proximidade",
      "Mistura a energia do vermelho com a alegria do amarelo. Parece acessível, divertido e acolhedor — convida à interação sem pressão.",
      "Ótimo para botões amigáveis, onboarding e marcas de food/lifestyle. Combine com azul para equilibrar calor e confiança.",
      ["amigável", "energético", "divertido"],
    );
  if (h < 65)
    return fam(
      "Amarelo",
      "Otimismo e atenção",
      "É a cor da luz e do sol: desperta otimismo e confiança. Chama a atenção rápido, mas em áreas grandes pode causar fadiga.",
      "Use em destaques, ícones e iluminações. Evite longos blocos de texto amarelo; prefira-o para detalhes e acentos.",
      ["otimista", "quente", "atencioso"],
    );
  if (h < 160)
    return fam(
      "Verde",
      "Natureza e equilíbrio",
      "Traz saúde, crescimento e tranquilidade. É reconfortante e associado a sustentabilidade e dinheiro — passa confiança sem ameaça.",
      "Perfeito para fintechs, saúde e eco-brands. Verdes escuros transmitem solidez; os claros, frescor e leveza.",
      ["natural", "equilibrado", "crescimento"],
    );
  if (h < 200)
    return fam(
      "Ciano / Verde-água",
      "Frescor e clareza",
      "Sugere água, ar e modernidade. É uma cor limpa e técnica que passa sensação de renovação e bem-estar.",
      "Use em saúde, spa, tecnologia limpa e interfaces que precisam parecer arejadas. Combina com branco e navy.",
      ["fresco", "limpo", "moderno"],
    );
  if (h < 255)
    return fam(
      "Azul",
      "Confiança e calma",
      "A cor mais usada em marcas: transmite segurança, ordem e racionalidade. É relaxante e universalmente bem recebida.",
      "Padrão para bancos, SaaS e governos. Azuis escuros = autoridade; azuis claros = amigável e aberto.",
      ["confiável", "calmo", "profissional"],
    );
  if (h < 285)
    return fam(
      "Violeta / Roxo",
      "Luxo e criatividade",
      "Históricamente associado à realeza e ao místico. Hoje fala de inovação, imaginação e produtos premium.",
      "Use em beleza, bem-estar e tech criativa. Roxos profundos = luxo; lilases = delicadeza e jovialidade.",
      ["criativo", "premium", "místico"],
    );
  if (h < 330)
    return fam(
      "Magenta / Rosa",
      "Romance e ousadia",
      "Une a energia do vermelho à leveza do branco. Vai do divertido ao sofisticado conforme a saturação.",
      "Forte em moda, lifestyle e causas sociais. Rosas claros = carinho; magentas = atitude e rebeldia.",
      ["afetuoso", "ousado", "vibrante"],
    );
  return fam(
    "Vermelho-rosa",
    "Afeto e vitalidade",
    "Ponte entre vermelho e rosa: mantém o calor e a proximidade, suavizando a agressividade. É acolhedor e atual.",
    "Ótimo para selos, destaques e marcas jovens. Combine com neutros para mantê-lo elegante.",
    ["acolhedor", "vívido", "jovem"],
  );
};

/* ---------- exports ---------- */
export const scssPalette = (colors: string[]) =>
  colors.map((c, i) => `$color-${i + 1}: ${c};`).join("\n");
export const svgPalette = (colors: string[], w = 1000, h = 300) => {
  const step = w / colors.length;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">\n${colors
    .map(
      (c, i) =>
        `  <rect x="${i * step}" y="0" width="${step}" height="${h}" fill="${c}"/>`,
    )
    .join("\n")}\n</svg>`;
};

/* ---------- info secundária sob cada cor ---------- */
export type Info = "name" | "hex" | "rgb" | "hsb" | "hsl" | "cmyk" | "none";
export const infoLabels: Record<Info, string> = {
  name: "Nome",
  hex: "HEX",
  rgb: "RGB",
  hsb: "HSB",
  hsl: "HSL",
  cmyk: "CMYK",
  none: "Nenhuma",
};
export const formatInfo = (hex: string, mode: Info) => {
  if (mode === "none") return "";
  if (mode === "name") return colorName(hex);
  if (mode === "hex") return normalizeHex(hex);
  if (mode === "rgb") return toRgbString(hex);
  if (mode === "cmyk") return toCmykString(hex);
  if (mode === "hsl") return toHslString(hex);
  const [h, s, b] = hexToHsb(hex);
  return `hsb(${h}, ${s}%, ${b}%)`;
};

/* ---------- contraste entre cores vizinhas ---------- */
export type PairCheck = {
  index: number;
  ratio: number;
  level: "bom" | "razoável" | "ruim";
};
export const adjacentContrast = (colors: string[]): PairCheck[] =>
  colors.slice(0, -1).map((c, i) => {
    const ratio = contrast(c, colors[i + 1]);
    return {
      index: i,
      ratio,
      level: ratio >= 3 ? "bom" : ratio >= 1.5 ? "razoável" : "ruim",
    };
  });

/* ---------- classificação para filtros ---------- */
export type Style =
  | "warm"
  | "cold"
  | "bright"
  | "dark"
  | "pastel"
  | "mono";
export const styleLabels: Record<Style, string> = {
  warm: "Quente",
  cold: "Fria",
  bright: "Vibrante",
  dark: "Escura",
  pastel: "Pastel",
  mono: "Monocromática",
};
const isWarmHue = (h: number) => h < 75 || h > 300;
export const paletteStyles = (colors: string[]): Style[] => {
  const hs = colors.map(hexToHsl);
  // Croma e brilho vêm do HSB: em HSL um pêssego claro marca 83% de saturação,
  // o que confundiria pastel com vibrante.
  const hb = colors.map(hexToHsb);
  const avg = (xs: number[]) => xs.reduce((a, x) => a + x, 0) / xs.length;
  const chroma = avg(hb.map((x) => x[1]));
  const bright = avg(hb.map((x) => x[2]));
  const light = avg(hs.map((x) => x[2]));
  const warm = hs.filter((x) => isWarmHue(x[0])).length;
  // Matizes de cores quase neutras são instáveis; ignore-os na dispersão.
  const hues = hb.filter((x) => x[1] > 12).map((x) => x[0]);
  const spread = hues.length
    ? Math.max(...hues) - Math.min(...hues)
    : 0;
  const out: Style[] = [];
  out.push(warm > colors.length / 2 ? "warm" : "cold");
  if (chroma >= 55 && bright >= 65) out.push("bright");
  if (bright < 45 || light < 32) out.push("dark");
  if (chroma <= 35 && bright >= 80) out.push("pastel");
  if (spread <= 40) out.push("mono");
  return out;
};
export const hueFamilies = [
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "violet",
  "pink",
] as const;
export type Family = (typeof hueFamilies)[number] | "white" | "gray" | "black";
export const familyLabels: Record<Family, string> = {
  red: "Vermelho",
  orange: "Laranja",
  yellow: "Amarelo",
  green: "Verde",
  turquoise: "Turquesa",
  blue: "Azul",
  violet: "Violeta",
  pink: "Rosa",
  white: "Branco",
  gray: "Cinza",
  black: "Preto",
};
export const colorFamily = (hex: string): Family => {
  const [h, s, l] = hexToHsl(hex);
  if (s < 12) return l > 82 ? "white" : l < 18 ? "black" : "gray";
  if (h < 18 || h >= 342) return "red";
  if (h < 45) return "orange";
  if (h < 70) return "yellow";
  if (h < 155) return "green";
  if (h < 195) return "turquoise";
  if (h < 255) return "blue";
  if (h < 300) return "violet";
  return "pink";
};
export const paletteFamilies = (colors: string[]) => [
  ...new Set(colors.map(colorFamily)),
];

/* ---------- shuffle ---------- */
export const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/* ---------- estudo de uma cor ---------- */
export type HarmonySet = { label: string; colors: string[] };
export const harmoniesOf = (hex: string): HarmonySet[] => {
  const [h, sat, l] = hexToHsl(hex);
  const at = (deg: number) => hslToHex(h + deg, sat, l);
  return [
    { label: "Complementar", colors: [hex, at(180)] },
    { label: "Análoga", colors: [at(-30), hex, at(30)] },
    { label: "Complementar dividida", colors: [hex, at(150), at(210)] },
    { label: "Tríade", colors: [hex, at(120), at(240)] },
    { label: "Tetrádica", colors: [hex, at(90), at(180), at(270)] },
    {
      label: "Monocromática",
      colors: [25, 40, 55, 70, 85].map((x) => hslToHex(h, sat, x)),
    },
  ];
};
export const similarColors = (hex: string, count = 6) => {
  const [h, s, l] = hexToHsl(hex);
  return Array.from({ length: count }, (_, i) => {
    const t = i - Math.floor(count / 2);
    return hslToHex(h + t * 6, Math.max(8, Math.min(96, s + t * 4)), Math.max(10, Math.min(94, l + t * 5)));
  });
};
export const accessibilityOf = (hex: string) => {
  const onWhite = contrast(hex, "#FFFFFF");
  const onBlack = contrast(hex, "#000000");
  const grade = (r: number) =>
    r >= 7 ? "AAA" : r >= 4.5 ? "AA" : r >= 3 ? "AA grande" : "Reprovado";
  return {
    onWhite,
    onBlack,
    onWhiteGrade: grade(onWhite),
    onBlackGrade: grade(onBlack),
    bestText: onWhite >= onBlack ? "#FFFFFF" : "#000000",
  };
};

/* ---------- export ASE (Adobe Swatch Exchange) ---------- */
export const asePalette = (colors: string[], names?: string[]) => {
  const chunks: number[] = [];
  const u8 = (v: number) => chunks.push(v & 0xff);
  const u16 = (v: number) => {
    u8(v >> 8);
    u8(v);
  };
  const u32 = (v: number) => {
    u16(v >>> 16);
    u16(v & 0xffff);
  };
  const f32 = (v: number) => {
    const b = new DataView(new ArrayBuffer(4));
    b.setFloat32(0, v, false); // big-endian, como manda o formato
    for (let i = 0; i < 4; i++) u8(b.getUint8(i));
  };
  const ascii = (s: string) => {
    for (const ch of s) u8(ch.charCodeAt(0));
  };

  ascii("ASEF");
  u16(1);
  u16(0);
  u32(colors.length);

  colors.forEach((hex, i) => {
    const raw = names?.[i] ?? colorName(hex);
    // Nomes viajam em UTF-16BE terminados em nulo.
    const name = [...raw].map((c) => c.charCodeAt(0));
    u16(0x0001); // bloco de cor
    // corpo = nome(2) + chars*2 + nulo(2) + modelo(4) + 3 floats(12) + tipo(2)
    u32(2 + name.length * 2 + 2 + 4 + 12 + 2);
    u16(name.length + 1);
    name.forEach(u16);
    u16(0);
    ascii("RGB ");
    rgb(hex).forEach((v) => f32(v / 255));
    u16(2); // normal
  });
  return new Uint8Array(chunks);
};

/* ---------- export PDF ---------- */
/** Uma folha de paleta em PDF 1.4, escrita byte a byte.
 *
 *  Nada de biblioteca: o formato pede que cada objeto seja referenciado pelo
 *  seu deslocamento absoluto no arquivo, então os offsets são registrados na
 *  hora em que cada objeto é escrito e a tabela xref sai no fim. As fontes são
 *  as base-14 (Helvetica e Helvetica-Bold), que não precisam ser embutidas mas
 *  só aceitam Latin-1 — daí o escape.
 *
 *  A folha tem cabeçalho, uma faixa com a paleta inteira, um cartão por cor
 *  com os valores em quatro notações e a rampa de tons, e um resumo de
 *  contraste no fim. Pagina sozinha quando a paleta não cabe. */
export const pdfPalette = (colors: string[], title = "Paleta GR Colors") => {
  const W = 595, // A4 retrato, em pontos
    H = 842,
    M = 46; // margem
  const bytes: number[] = [];
  const put = (s: string) => {
    for (let i = 0; i < s.length; i++) bytes.push(s.charCodeAt(i) & 0xff);
  };
  const offsets: number[] = [];
  const obj = (n: number, body: string) => {
    offsets[n] = bytes.length;
    put(`${n} 0 obj\n${body}\nendobj\n`);
  };
  const esc = (s: string) =>
    [...s]
      .map((c) => (c.charCodeAt(0) < 256 ? c : "?"))
      .join("")
      .replace(/\\/g, "\\\\")
      .replace(/\(/g, "\\(")
      .replace(/\)/g, "\\)");

  /* ---- primitivas de desenho ---- */
  const col = (hex: string) =>
    rgb(hex)
      .map((v) => (v / 255).toFixed(4))
      .join(" ");
  const rect = (x: number, y: number, w: number, h: number, hex: string) =>
    `${col(hex)} rg ${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f\n`;
  const text = (
    x: number,
    y: number,
    size: number,
    hex: string,
    s: string,
    bold = false,
  ) =>
    `BT /${bold ? "F2" : "F1"} ${size} Tf ${col(hex)} rg ${x.toFixed(2)} ${y.toFixed(2)} Td (${esc(s)}) Tj ET\n`;
  // Helvetica não é monoespaçada; 0.52 em é a largura média que serve para
  // centralizar rótulos curtos sem carregar a tabela de métricas da fonte.
  const width = (s: string, size: number, bold = false) =>
    s.length * size * (bold ? 0.56 : 0.52);
  const centered = (
    cx: number,
    y: number,
    size: number,
    hex: string,
    s: string,
    bold = false,
  ) => text(cx - width(s, size, bold) / 2, y, size, hex, s, bold);

  const ink = "#1A1A1F",
    soft = "#6B6B76",
    hair = "#E2E2DF";

  /* ---- páginas ---- */
  const pages: string[] = [];
  let page = "";
  const cardH = 100;
  let y = 0;

  const startPage = (first: boolean) => {
    page = rect(0, 0, W, H, "#FFFFFF");
    if (first) {
      page += text(M, H - 74, 26, ink, title, true);
      page += text(
        M,
        H - 92,
        9.5,
        soft,
        `${colors.length} cores  ·  GR Colors  ·  ${new Date().toLocaleDateString("pt-BR")}`,
      );
      page += rect(M, H - 104, W - M * 2, 0.7, hair);

      // faixa com a paleta inteira
      const stripY = H - 226,
        stripH = 110,
        sw = (W - M * 2) / colors.length;
      colors.forEach((hex, i) => {
        page += rect(M + i * sw, stripY, sw + 0.5, stripH, hex);
        page += centered(M + i * sw + sw / 2, stripY + 12, 8, textOn(hex), hex);
      });
      y = stripY - 34;
    } else {
      page += text(M, H - 56, 11, soft, title, true);
      page += rect(M, H - 66, W - M * 2, 0.7, hair);
      y = H - 96;
    }
  };
  const endPage = () => pages.push(page);

  startPage(true);

  colors.forEach((hex, i) => {
    if (y - cardH < M + 28) {
      endPage();
      startPage(false);
    }
    const top = y,
      // A rampa fica 14pt acima da base do cartão: encostada nos valores, os
      // descendentes do "cmyk" caíam dentro dela.
      bottom = y - cardH + 14;
    // amostra grande à esquerda
    page += rect(M, bottom, 92, cardH - 14, hex);
    page += text(M + 108, top - 20, 17, ink, hex, true);
    page += text(M + 108, top - 36, 9.5, soft, `${i + 1}. ${colorName(hex)}`);

    // valores em duas colunas
    const rows: [string, string][] = [
      ["RGB", toRgbString(hex)],
      ["HSL", toHslString(hex)],
      ["CMYK", toCmykString(hex)],
      ["LAB", toLabString(hex)],
    ];
    rows.forEach(([k, v], j) => {
      const cx = M + 108 + (j % 2) * 210,
        cy = top - 52 - Math.floor(j / 2) * 14;
      page += text(cx, cy, 8, soft, k, true);
      page += text(cx + 34, cy, 8.5, ink, v);
    });

    // rampa de tons sob o cartão
    const ramp = tintsAndShades(hex, 11);
    const rw = (W - M * 2 - 108) / ramp.length;
    ramp.forEach((c, j) => {
      page += rect(M + 108 + j * rw, bottom, rw + 0.4, 11, c);
    });

    page += rect(M, bottom - 13, W - M * 2, 0.6, hair);
    y -= cardH;
  });

  /* ---- resumo de contraste ---- */
  const audit = paletteAudit(colors);
  const best = audit.best;
  if (y - 96 < M) {
    endPage();
    startPage(false);
  }
  y -= 14;
  page += text(M, y, 12, ink, "Contraste entre as cores", true);
  y -= 16;
  page += text(
    M,
    y,
    9,
    soft,
    `${audit.aa} de ${audit.total} pares alcançam 4.5:1 (AA para texto corrido); ${audit.aaLarge} servem apenas a texto grande.`,
  );
  if (best) {
    y -= 13;
    page += text(
      M,
      y,
      9,
      soft,
      `Par mais forte: ${best.fg} sobre ${best.bg}, ${best.ratio.toFixed(2)}:1.`,
    );
  }
  if (audit.textCandidates[0]) {
    y -= 13;
    page += text(
      M,
      y,
      9,
      soft,
      `Melhor cor de texto: ${audit.textCandidates[0].color}, legível sobre ${audit.textCandidates[0].over} das outras ${colors.length - 1}.`,
    );
  }

  // grade de razões, uma linha por cor
  y -= 20;
  const cell = Math.min(30, (W - M * 2 - 34) / colors.length);
  colors.forEach((bg, j) =>
    (page += centered(M + 34 + j * cell + cell / 2, y + 10, 6.5, soft, bg.slice(1))),
  );
  colors.forEach((fg, i) => {
    const ry = y - (i + 1) * 15;
    page += rect(M, ry - 2, 26, 11, fg);
    colors.forEach((bg, j) => {
      const r = contrast(fg, bg);
      const grade = i === j ? "—" : r.toFixed(1);
      page += centered(
        M + 34 + j * cell + cell / 2,
        ry,
        7.5,
        i === j ? hair : r >= 4.5 ? "#1B7F3B" : r >= 3 ? "#9A6B00" : "#B03030",
        grade,
      );
    });
  });

  page += text(
    M,
    M - 8,
    7.5,
    soft,
    "Razões conforme o WCAG 2. Verde passa em AA para texto corrido, âmbar serve só a texto grande, vermelho reprova.",
  );
  endPage();

  /* ---- montagem do arquivo ---- */
  put("%PDF-1.4\n");
  const n = pages.length;
  // 1 catálogo, 2 árvore de páginas, 3..2+n páginas, 3+n..2+2n conteúdos,
  // depois as duas fontes
  const pageObj = (i: number) => 3 + i;
  const contentObj = (i: number) => 3 + n + i;
  const fontR = 3 + 2 * n,
    fontB = 4 + 2 * n;

  obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
  obj(
    2,
    `<< /Type /Pages /Kids [${pages.map((_, i) => `${pageObj(i)} 0 R`).join(" ")}] /Count ${n} >>`,
  );
  pages.forEach((_, i) =>
    obj(
      pageObj(i),
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /F1 ${fontR} 0 R /F2 ${fontB} 0 R >> >> /Contents ${contentObj(i)} 0 R >>`,
    ),
  );
  pages.forEach((c, i) =>
    obj(contentObj(i), `<< /Length ${c.length} >>\nstream\n${c}endstream`),
  );
  // Sem /Encoding, a base-14 usa StandardEncoding, onde os bytes acentuados do
  // Latin-1 caem em outros glifos ou em nenhum — "alcançam" saía "alcaam".
  // WinAnsiEncoding coincide com o Latin-1 na faixa acentuada.
  obj(
    fontR,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  );
  obj(
    fontB,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  );

  const total = fontB;
  const xref = bytes.length;
  put(`xref\n0 ${total + 1}\n0000000000 65535 f \n`);
  for (let i = 1; i <= total; i++)
    put(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  put(
    `trailer\n<< /Size ${total + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`,
  );
  return new Uint8Array(bytes);
};

/* ---------- CIELAB e distância perceptual ---------- */
export const hexToLab = (hex: string): [number, number, number] => {
  const lin = rgb(hex).map((v) => {
    const x = v / 255;
    return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  // sRGB -> XYZ (D65), depois XYZ -> LAB
  const [X, Y, Z] = [
    lin[0] * 0.4124 + lin[1] * 0.3576 + lin[2] * 0.1805,
    lin[0] * 0.2126 + lin[1] * 0.7152 + lin[2] * 0.0722,
    lin[0] * 0.0193 + lin[1] * 0.1192 + lin[2] * 0.9505,
  ];
  const ref = [0.95047, 1, 1.08883];
  const f = (t: number) =>
    t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29;
  const [fx, fy, fz] = [X / ref[0], Y / ref[1], Z / ref[2]].map(f);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
};
export const deltaE = (a: string, b: string) => {
  const [l1, a1, b1] = hexToLab(a),
    [l2, a2, b2] = hexToLab(b);
  return Math.sqrt((l1 - l2) ** 2 + (a1 - a2) ** 2 + (b1 - b2) ** 2);
};
export const similarity = (a: string, b: string) =>
  Math.max(0, Math.min(100, Math.round(100 - deltaE(a, b))));
export const toLabString = (hex: string) => {
  const [l, a, b] = hexToLab(hex);
  return `lab(${l.toFixed(0)}, ${a.toFixed(0)}, ${b.toFixed(0)})`;
};

/* ---------- tons, matizes e tonalidades ----------
   Convenção clássica: matiz clareia com branco, tom escurece com preto,
   tonalidade dessatura com cinza. */
const mixWith = (hex: string, target: number[], steps: number) => {
  const [r, g, b] = rgb(hex);
  return Array.from({ length: steps }, (_, i) => {
    const p = i / (steps - 1);
    return (
      "#" +
      [r, g, b]
        .map((v, j) =>
          Math.round(v + (target[j] - v) * p)
            .toString(16)
            .padStart(2, "0"),
        )
        .join("")
        .toUpperCase()
    );
  });
};
export const tintsOf = (hex: string, steps = 10) =>
  mixWith(hex, [255, 255, 255], steps);
export const shadesOf = (hex: string, steps = 10) =>
  mixWith(hex, [0, 0, 0], steps);
export const tonesOf = (hex: string, steps = 10) =>
  mixWith(hex, [128, 128, 128], steps);

/* ---------- escala Tailwind ---------- */
export const tailwindKeys = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;
/** A escala clássica, sem curvas. Delega para `tailwindRamp` para que exista
 *  uma implementação só: quando a busca por luminosidade ganhou o recuo de
 *  saturação, as duas versões teriam divergido em silêncio. */
export const tailwindScale = (base: string) =>
  tailwindRamp(base).map(({ key, hex }) => ({ key, hex }));

/* ---------- contraste: texto pequeno vs grande, e correção ---------- */
export type ContrastReport = {
  ratio: number;
  smallAA: boolean;
  smallAAA: boolean;
  largeAA: boolean;
  largeAAA: boolean;
  verdict: string;
};
export const contrastReport = (fg: string, bg: string): ContrastReport => {
  const ratio = contrast(fg, bg);
  return {
    ratio,
    smallAA: ratio >= 4.5,
    smallAAA: ratio >= 7,
    largeAA: ratio >= 3,
    largeAAA: ratio >= 4.5,
    verdict:
      ratio >= 7
        ? "Excelente"
        : ratio >= 4.5
          ? "Bom"
          : ratio >= 3
            ? "Fraco"
            : "Muito ruim",
  };
};
/** Empurra a luminosidade de `fg` até alcançar `target` sobre `bg`.
 *  Busca nos dois sentidos em paralelo: contra um fundo de luminância média
 *  só um deles alcança a meta, e qual é não dá para prever pelo fundo sozinho.
 *  Devolve o primeiro que passar — logo, o de menor desvio da cor original. */
export const enhanceContrast = (fg: string, bg: string, target = 4.5) => {
  if (contrast(fg, bg) >= target) return normalizeHex(fg);
  const [h, s, l] = hexToHsl(fg);
  let best = normalizeHex(fg),
    bestRatio = contrast(fg, bg);
  for (let step = 1; step <= 100; step++) {
    for (const dir of [-1, 1]) {
      const cand = hslToHex(h, s, l + dir * step);
      const r = contrast(cand, bg);
      if (r > bestRatio) {
        bestRatio = r;
        best = cand;
      }
      if (r >= target) return cand;
    }
  }
  return best;
};

/* ---------- prevalência dos tipos de daltonismo ---------- */
export const visionPrevalence: Record<Vision, string> = {
  normal: "cerca de 92% das pessoas",
  protanopia: "~1% dos homens, 0,01% das mulheres",
  deuteranopia: "~1% dos homens, 0,01% das mulheres",
  tritanopia: "~0,01% da população",
  achromatopsia: "~0,003% da população",
};

/* ---------- papéis semânticos de uma paleta ----------
   Sem isto, um mockup pinta texto e fundo com cores de luminosidade parecida
   e o resultado fica ilegível por acidente. */
export type Roles = {
  bg: string;
  surface: string;
  ink: string;
  primary: string;
  accent: string;
  onPrimary: string;
  onAccent: string;
  onBg: string;
  onSurface: string;
};
export const paletteRoles = (colors: string[]): Roles => {
  const pool = colors.length ? colors : ["#222222", "#EEEEEE"];
  const byLum = [...pool].sort((a, b) => luminance(a) - luminance(b));
  const darkest = byLum[0];
  const lightest = byLum[byLum.length - 1];

  // A primária é a cor mais viva que ainda não é o fundo nem o texto.
  const middle = byLum.slice(1, -1);
  const candidates = middle.length ? middle : pool;
  const vivid = [...candidates].sort(
    (a, b) => hexToHsb(b)[1] * hexToHsb(b)[2] - hexToHsb(a)[1] * hexToHsb(a)[2],
  );
  const primary = vivid[0] ?? darkest;
  const accent = vivid.find((c) => deltaE(c, primary) > 18) ?? vivid[1] ?? primary;

  // Um fundo claro precisa de texto escuro e vice-versa; se a paleta não
  // oferecer contraste suficiente, cai para preto ou branco.
  const readable = (on: string, prefer: string) =>
    contrast(prefer, on) >= 4.5 ? prefer : readableOn(on);

  const bg = lightest;
  const surface =
    contrast(lightest, bg) > 1.15
      ? lightest
      : readableOn(bg) === "#FFFFFF"
        ? "#FFFFFF"
        : bg;
  return {
    bg,
    surface,
    ink: readable(bg, darkest),
    primary,
    accent,
    onPrimary: readableOn(primary),
    onAccent: readableOn(accent),
    onBg: readable(bg, darkest),
    onSurface: readable(surface, darkest),
  };
};

/* ===================================================================
   Espaços de cor adicionais
   ===================================================================
   O LAB já estava aqui; o resto do caminho (XYZ, LCH, LUV, HWB, OKLab)
   sai do mesmo ponto. Ter todos permite medir distância perceptual,
   girar matiz sem desbotar e mostrar os valores que um design system
   moderno pede em CSS.                                              */

/** sRGB -> linear. A curva do sRGB não é uma gama 2.2 simples: tem um
 *  trecho reto perto do preto, e ignorá-lo erra as cores escuras. */
const linearize = (v: number) =>
  v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
const delinearize = (v: number) =>
  v <= 0.0031308 ? v * 12.92 : 1.055 * Math.pow(v, 1 / 2.4) - 0.055;
const linRgb = (hex: string) => rgb(hex).map((v) => linearize(v / 255));

/** XYZ com iluminante D65 e observador 2°, a mesma base do CIELAB daqui. */
export const hexToXyz = (hex: string): [number, number, number] => {
  const [r, g, b] = linRgb(hex);
  return [
    r * 0.4124 + g * 0.3576 + b * 0.1805,
    r * 0.2126 + g * 0.7152 + b * 0.0722,
    r * 0.0193 + g * 0.1192 + b * 0.9505,
  ];
};

/** LCH(ab): o mesmo LAB em coordenadas polares. C é a intensidade da cor
 *  e H o matiz — ao contrário do HSL, aqui girar H não muda o brilho. */
export const hexToLch = (hex: string): [number, number, number] => {
  const [l, a, b] = hexToLab(hex);
  const c = Math.sqrt(a * a + b * b);
  const h = (Math.atan2(b, a) * 180) / Math.PI;
  return [l, c, (h + 360) % 360];
};

/** CIELUV. Menos usado que o LAB em design, mas é o espaço em que se
 *  medem misturas aditivas — telas, luz, LED. */
export const hexToLuv = (hex: string): [number, number, number] => {
  const [X, Y, Z] = hexToXyz(hex);
  const d = X + 15 * Y + 3 * Z;
  const [un, vn] = [0.19783990904, 0.46833047435];
  const l =
    Y > 216 / 24389 ? 116 * Math.cbrt(Y) - 16 : (24389 / 27) * Y;
  if (d === 0) return [l, 0, 0];
  const u = 4 * X / d,
    v = 9 * Y / d;
  return [l, 13 * l * (u - un), 13 * l * (v - vn)];
};

/** HWB: matiz + quanto branco e quanto preto foram misturados. É o
 *  modelo que descreve tinta melhor que HSL, e é CSS válido. */
export const hexToHwb = (hex: string): [number, number, number] => {
  const [r, g, b] = rgb(hex).map((v) => v / 255);
  const [h] = hexToHsl(hex);
  return [h, Math.min(r, g, b) * 100, (1 - Math.max(r, g, b)) * 100];
};

/** OKLab (Björn Ottosson, 2020). Corrige o desvio de matiz do CIELAB nos
 *  azuis — é por isso que o CSS moderno padronizou oklch() para rampas. */
export const hexToOklab = (hex: string): [number, number, number] => {
  const [r, g, b] = linRgb(hex);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
};
export const hexToOklch = (hex: string): [number, number, number] => {
  const [l, a, b] = hexToOklab(hex);
  return [
    l,
    Math.sqrt(a * a + b * b),
    ((Math.atan2(b, a) * 180) / Math.PI + 360) % 360,
  ];
};
/** Volta de OKLCH para hex, grampeando o que cair fora do sRGB. */
export const oklchToHex = (L: number, C: number, H: number) => {
  const hr = (H * Math.PI) / 180;
  const a = C * Math.cos(hr),
    b = C * Math.sin(hr);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return (
    "#" +
    lin
      .map((v) =>
        Math.max(0, Math.min(255, Math.round(delinearize(v) * 255)))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
      .toUpperCase()
  );
};

export const toXyzString = (hex: string) => {
  const [x, y, z] = hexToXyz(hex).map((v) => v * 100);
  return `xyz(${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`;
};
export const toLchString = (hex: string) => {
  const [l, c, h] = hexToLch(hex);
  return `lch(${l.toFixed(1)}% ${c.toFixed(1)} ${h.toFixed(1)})`;
};
export const toLuvString = (hex: string) => {
  const [l, u, v] = hexToLuv(hex);
  return `luv(${l.toFixed(1)}, ${u.toFixed(1)}, ${v.toFixed(1)})`;
};
export const toHwbString = (hex: string) => {
  const [h, w, b] = hexToHwb(hex);
  return `hwb(${Math.round(h)} ${Math.round(w)}% ${Math.round(b)}%)`;
};
export const toOklchString = (hex: string) => {
  const [l, c, h] = hexToOklch(hex);
  return `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(3)} ${h.toFixed(1)})`;
};

/* ===================================================================
   Temperatura de cor
   =================================================================== */

/** Temperatura de cor correlata em kelvin, pela aproximação de McCamy.
 *  Só faz sentido perto do lugar dos brancos: uma cor saturada não tem
 *  temperatura real, por isso `meaningful` avisa quando o número é ruído. */
export const colorTemperature = (hex: string) => {
  const [X, Y, Z] = hexToXyz(hex);
  const sum = X + Y + Z;
  const [, chroma] = hexToLch(hex);
  if (sum === 0)
    return { kelvin: 0, meaningful: false, label: "Sem luz", chroma: 0 };
  const x = X / sum,
    y = Y / sum;
  const n = (x - 0.332) / (0.1858 - y);
  const kelvin = Math.round(
    449 * n ** 3 + 3525 * n ** 2 + 6823.3 * n + 5520.33,
  );
  const meaningful = chroma < 35 && kelvin > 1000 && kelvin < 25000;
  return {
    kelvin,
    chroma,
    meaningful,
    label: !meaningful
      ? "Cor saturada demais para ter temperatura"
      : kelvin < 3000
        ? "Quente, luz de tungstênio"
        : kelvin < 4500
          ? "Morna, luz de fim de tarde"
          : kelvin < 5500
            ? "Neutra, luz do dia"
            : kelvin < 7500
              ? "Fria, céu nublado"
              : "Muito fria, sombra azulada",
  };
};

/** Quente ou fria pelo matiz — a leitura que designers usam de fato.
 *  Vermelho/laranja/amarelo aquecem, ciano/azul/violeta esfriam, e as
 *  bordas (verde, magenta) ficam no meio. */
export const warmth = (hex: string) => {
  const [h, , l] = hexToHsl(hex);
  const [, c] = hexToLch(hex);
  if (c < 8)
    return { score: 0, label: "Neutra", note: "Cinza sem viés de matiz" };
  // cos centrado em 45° (laranja) dá +1 no mais quente e -1 no mais frio (225°, azul)
  const score = Math.cos(((h - 45) * Math.PI) / 180);
  const strength = Math.min(1, c / 60);
  const v = score * strength;
  return {
    score: v,
    label: v > 0.35 ? "Quente" : v < -0.35 ? "Fria" : "Neutra",
    note:
      v > 0.35
        ? `Avança em direção ao observador; boa para chamar ação${l > 70 ? ", aqui em versão suave" : ""}`
        : v < -0.35
          ? "Recua e acalma; boa para fundos e áreas extensas"
          : "Fica entre os dois lados, útil como ponte na paleta",
  };
};

/* ===================================================================
   Biblioteca de cores: nomes CSS
   ===================================================================
   A lista de cores nomeadas do CSS é a única biblioteca universal — todo
   navegador aceita esses nomes. Casar a cor escolhida com a mais próxima
   dá um rótulo verificável, não um apelido inventado. São 141 entradas:
   a lista oficial tem 148, mas sete são só a grafia britânica (grey) de
   uma cor já presente e entrariam aqui como resultado duplicado.       */
export const cssColorNames: [string, string][] = [
  ["aliceblue", "#F0F8FF"], ["antiquewhite", "#FAEBD7"], ["aqua", "#00FFFF"],
  ["aquamarine", "#7FFFD4"], ["azure", "#F0FFFF"], ["beige", "#F5F5DC"],
  ["bisque", "#FFE4C4"], ["black", "#000000"], ["blanchedalmond", "#FFEBCD"],
  ["blue", "#0000FF"], ["blueviolet", "#8A2BE2"], ["brown", "#A52A2A"],
  ["burlywood", "#DEB887"], ["cadetblue", "#5F9EA0"], ["chartreuse", "#7FFF00"],
  ["chocolate", "#D2691E"], ["coral", "#FF7F50"], ["cornflowerblue", "#6495ED"],
  ["cornsilk", "#FFF8DC"], ["crimson", "#DC143C"], ["cyan", "#00FFFF"],
  ["darkblue", "#00008B"], ["darkcyan", "#008B8B"], ["darkgoldenrod", "#B8860B"],
  ["darkgray", "#A9A9A9"], ["darkgreen", "#006400"], ["darkkhaki", "#BDB76B"],
  ["darkmagenta", "#8B008B"], ["darkolivegreen", "#556B2F"], ["darkorange", "#FF8C00"],
  ["darkorchid", "#9932CC"], ["darkred", "#8B0000"], ["darksalmon", "#E9967A"],
  ["darkseagreen", "#8FBC8F"], ["darkslateblue", "#483D8B"], ["darkslategray", "#2F4F4F"],
  ["darkturquoise", "#00CED1"], ["darkviolet", "#9400D3"], ["deeppink", "#FF1493"],
  ["deepskyblue", "#00BFFF"], ["dimgray", "#696969"], ["dodgerblue", "#1E90FF"],
  ["firebrick", "#B22222"], ["floralwhite", "#FFFAF0"], ["forestgreen", "#228B22"],
  ["fuchsia", "#FF00FF"], ["gainsboro", "#DCDCDC"], ["ghostwhite", "#F8F8FF"],
  ["gold", "#FFD700"], ["goldenrod", "#DAA520"], ["gray", "#808080"],
  ["green", "#008000"], ["greenyellow", "#ADFF2F"], ["honeydew", "#F0FFF0"],
  ["hotpink", "#FF69B4"], ["indianred", "#CD5C5C"], ["indigo", "#4B0082"],
  ["ivory", "#FFFFF0"], ["khaki", "#F0E68C"], ["lavender", "#E6E6FA"],
  ["lavenderblush", "#FFF0F5"], ["lawngreen", "#7CFC00"], ["lemonchiffon", "#FFFACD"],
  ["lightblue", "#ADD8E6"], ["lightcoral", "#F08080"], ["lightcyan", "#E0FFFF"],
  ["lightgoldenrodyellow", "#FAFAD2"], ["lightgray", "#D3D3D3"], ["lightgreen", "#90EE90"],
  ["lightpink", "#FFB6C1"], ["lightsalmon", "#FFA07A"], ["lightseagreen", "#20B2AA"],
  ["lightskyblue", "#87CEFA"], ["lightslategray", "#778899"], ["lightsteelblue", "#B0C4DE"],
  ["lightyellow", "#FFFFE0"], ["lime", "#00FF00"], ["limegreen", "#32CD32"],
  ["linen", "#FAF0E6"], ["magenta", "#FF00FF"], ["maroon", "#800000"],
  ["mediumaquamarine", "#66CDAA"], ["mediumblue", "#0000CD"], ["mediumorchid", "#BA55D3"],
  ["mediumpurple", "#9370DB"], ["mediumseagreen", "#3CB371"], ["mediumslateblue", "#7B68EE"],
  ["mediumspringgreen", "#00FA9A"], ["mediumturquoise", "#48D1CC"], ["mediumvioletred", "#C71585"],
  ["midnightblue", "#191970"], ["mintcream", "#F5FFFA"], ["mistyrose", "#FFE4E1"],
  ["moccasin", "#FFE4B5"], ["navajowhite", "#FFDEAD"], ["navy", "#000080"],
  ["oldlace", "#FDF5E6"], ["olive", "#808000"], ["olivedrab", "#6B8E23"],
  ["orange", "#FFA500"], ["orangered", "#FF4500"], ["orchid", "#DA70D6"],
  ["palegoldenrod", "#EEE8AA"], ["palegreen", "#98FB98"], ["paleturquoise", "#AFEEEE"],
  ["palevioletred", "#DB7093"], ["papayawhip", "#FFEFD5"], ["peachpuff", "#FFDAB9"],
  ["peru", "#CD853F"], ["pink", "#FFC0CB"], ["plum", "#DDA0DD"],
  ["powderblue", "#B0E0E6"], ["purple", "#800080"], ["rebeccapurple", "#663399"],
  ["red", "#FF0000"], ["rosybrown", "#BC8F8F"], ["royalblue", "#4169E1"],
  ["saddlebrown", "#8B4513"], ["salmon", "#FA8072"], ["sandybrown", "#F4A460"],
  ["seagreen", "#2E8B57"], ["seashell", "#FFF5EE"], ["sienna", "#A0522D"],
  ["silver", "#C0C0C0"], ["skyblue", "#87CEEB"], ["slateblue", "#6A5ACD"],
  ["slategray", "#708090"], ["snow", "#FFFAFA"], ["springgreen", "#00FF7F"],
  ["steelblue", "#4682B4"], ["tan", "#D2B48C"], ["teal", "#008080"],
  ["thistle", "#D8BFD8"], ["tomato", "#FF6347"], ["turquoise", "#40E0D0"],
  ["violet", "#EE82EE"], ["wheat", "#F5DEB3"], ["white", "#FFFFFF"],
  ["whitesmoke", "#F5F5F5"], ["yellow", "#FFFF00"], ["yellowgreen", "#9ACD32"],
];

export type NamedMatch = { name: string; hex: string; distance: number };
/** As `count` cores nomeadas mais próximas, por distância CIELAB. */
export const nearestNamed = (hex: string, count = 1): NamedMatch[] =>
  cssColorNames
    .map(([name, h]) => ({ name, hex: h, distance: deltaE(hex, h) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count);

/* ===================================================================
   APCA — contraste perceptual (rascunho do WCAG 3)
   ===================================================================
   A razão do WCAG 2 trata polaridade como irrelevante: texto claro sobre
   fundo escuro e o inverso recebem o mesmo número, ainda que se leiam
   muito diferente. O APCA mede os dois sentidos separadamente e devolve
   Lc — quanto maior o módulo, mais legível. Ainda é rascunho, então aqui
   ele acompanha o WCAG 2, nunca o substitui.
   Constantes da versão 0.1.9 do algoritmo.                            */
const apcaY = (hex: string) => {
  const [r, g, b] = rgb(hex).map((v) => Math.pow(v / 255, 2.4));
  return 0.2126729 * r + 0.7151522 * g + 0.072175 * b;
};
export const apca = (text: string, bg: string) => {
  const clampBlack = (y: number) =>
    y > 0.022 ? y : y + Math.pow(0.022 - y, 1.414);
  const txtY = clampBlack(apcaY(text)),
    bgY = clampBlack(apcaY(bg));
  if (Math.abs(bgY - txtY) < 0.0005) return 0;
  let out: number;
  if (bgY > txtY) {
    // texto escuro sobre fundo claro
    const s = (Math.pow(bgY, 0.56) - Math.pow(txtY, 0.57)) * 1.14;
    out = s < 0.1 ? 0 : s - 0.027;
  } else {
    // texto claro sobre fundo escuro
    const s = (Math.pow(bgY, 0.65) - Math.pow(txtY, 0.62)) * 1.14;
    out = s > -0.1 ? 0 : s + 0.027;
  }
  return out * 100;
};

export type ApcaUse = { lc: number; label: string; detail: string };
/** O que o valor de Lc autoriza usar, resumido da tabela de fontes do APCA. */
export const apcaGuidance = (lc: number): ApcaUse => {
  const a = Math.abs(lc);
  const at = (label: string, detail: string) => ({ lc: a, label, detail });
  if (a >= 90)
    return at("Texto corrido em qualquer tamanho", "Inclusive 14px normal e textos longos");
  if (a >= 75)
    return at("Texto corrido a partir de 16px", "Ou 14px em negrito");
  if (a >= 60)
    return at("Texto de apoio a partir de 18px", "Ou 16px semibold; não use em leitura longa");
  if (a >= 45)
    return at("Só títulos grandes", "36px normal ou 24px em negrito");
  if (a >= 30)
    return at("Só elementos não textuais", "Ícones, bordas, estados desabilitados");
  if (a >= 15) return at("Apenas decorativo", "Invisível como informação");
  return at("Invisível", "Não use para nada que precise ser percebido");
};

/* ===================================================================
   Correção de contraste com custo mínimo
   =================================================================== */
export type Fix = {
  strategy: "text" | "bg" | "both";
  label: string;
  fg: string;
  bg: string;
  ratio: number;
  shift: number;
};
/** Cor mais próxima de `color` (em CIELAB) que atinge `target` contra `against`.
 *  Varre a luminosidade em passos finos preservando matiz e saturação; se
 *  nenhuma passar, ainda tenta soltar a saturação, porque cores muito
 *  saturadas travam a luminância antes de alcançar a meta. */
export const nearestAccessible = (
  color: string,
  against: string,
  target = 4.5,
) => {
  if (contrast(color, against) >= target) return normalizeHex(color);
  const [h, s, l] = hexToHsl(color);
  let best = "",
    bestCost = Infinity;
  for (const sat of [s, s * 0.8, s * 0.6, s * 0.4, s * 0.15]) {
    for (let step = 0; step <= 200; step++) {
      for (const dir of [-1, 1]) {
        const nl = l + (dir * step) / 2;
        if (nl < 0 || nl > 100) continue;
        const cand = hslToHex(h, sat, nl);
        if (contrast(cand, against) < target) continue;
        const cost = deltaE(cand, color);
        if (cost < bestCost) {
          bestCost = cost;
          best = cand;
        }
      }
    }
    if (best) break; // a primeira saturação que resolve já é a de menor desvio
  }
  return best || (luminance(against) > 0.4 ? "#000000" : "#FFFFFF");
};

/** As três formas de resolver um par reprovado, com o custo de cada uma.
 *  Mostrar as três importa: mexer no fundo às vezes custa muito menos que
 *  mexer no texto, e só a comparação revela isso. */
export const contrastFixes = (
  fg: string,
  bg: string,
  target = 4.5,
): Fix[] => {
  const out: Fix[] = [];
  const push = (
    strategy: Fix["strategy"],
    label: string,
    f: string,
    b: string,
  ) => {
    const ratio = contrast(f, b);
    if (ratio < target - 0.001) return;
    const shift = deltaE(f, fg) + deltaE(b, bg);
    if (out.some((o) => o.fg === f && o.bg === b)) return;
    out.push({ strategy, label, fg: f, bg: b, ratio, shift });
  };
  push("text", "Ajustar o texto", nearestAccessible(fg, bg, target), normalizeHex(bg));
  push("bg", "Ajustar o fundo", normalizeHex(fg), nearestAccessible(bg, fg, target));
  // Metade do caminho de cada lado costuma sair mais barato que empurrar um só.
  const [fh, fs, fl] = hexToHsl(fg),
    [bh, bs, bl] = hexToHsl(bg);
  const away = fl >= bl ? 1 : -1;
  for (let step = 1; step <= 100; step++) {
    const f = hslToHex(fh, fs, Math.max(0, Math.min(100, fl + away * step / 2)));
    const b = hslToHex(bh, bs, Math.max(0, Math.min(100, bl - away * step / 2)));
    if (contrast(f, b) >= target) {
      push("both", "Afastar os dois", f, b);
      break;
    }
  }
  return out.sort((a, b) => a.shift - b.shift);
};

/* ===================================================================
   Contraste em escala de paleta
   =================================================================== */
export type MatrixCell = {
  fg: string;
  bg: string;
  ratio: number;
  grade: "AAA" | "AA" | "AA grande" | "Reprovado";
};
export const gradeOf = (ratio: number): MatrixCell["grade"] =>
  ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3 ? "AA grande" : "Reprovado";
/** Matriz completa de todos contra todos. A diagonal fica em 1:1 e é o
 *  jeito mais rápido de ver que uma paleta inteira não sustenta texto. */
export const contrastMatrix = (colors: string[]): MatrixCell[][] =>
  colors.map((fg) =>
    colors.map((bg) => {
      const ratio = contrast(fg, bg);
      return { fg, bg, ratio, grade: gradeOf(ratio) };
    }),
  );

export type PaletteAudit = {
  total: number;
  aa: number;
  aaLarge: number;
  fail: number;
  best: MatrixCell | null;
  worstUseful: MatrixCell | null;
  textCandidates: { color: string; over: number }[];
  coverage: number;
};
/** Resumo numérico de quanto a paleta serve para texto. `textCandidates`
 *  ordena as cores por quantas outras elas conseguem cobrir em AA — a que
 *  cobre mais é a candidata natural a cor de texto do sistema. */
export const paletteAudit = (colors: string[]): PaletteAudit => {
  const pairs: MatrixCell[] = [];
  colors.forEach((a, i) =>
    colors.slice(i + 1).forEach((b) => {
      const ratio = contrast(a, b);
      pairs.push({ fg: a, bg: b, ratio, grade: gradeOf(ratio) });
    }),
  );
  const aa = pairs.filter((p) => p.ratio >= 4.5).length;
  const aaLarge = pairs.filter((p) => p.ratio >= 3 && p.ratio < 4.5).length;
  const sorted = [...pairs].sort((a, b) => b.ratio - a.ratio);
  return {
    total: pairs.length,
    aa,
    aaLarge,
    fail: pairs.length - aa - aaLarge,
    best: sorted[0] ?? null,
    worstUseful: sorted.filter((p) => p.ratio >= 4.5).pop() ?? null,
    textCandidates: colors
      .map((c) => ({
        color: c,
        over: colors.filter((o) => o !== c && contrast(c, o) >= 4.5).length,
      }))
      .sort((a, b) => b.over - a.over),
    coverage: pairs.length ? aa / pairs.length : 0,
  };
};

/** Pares que somem para quem tem daltonismo: cores distintas aos olhos de
 *  quem enxerga as três faixas, mas quase idênticas depois da simulação.
 *  Contraste de luminância não pega isso — dois tons de igual luminância
 *  passam no WCAG e ainda assim ficam indistinguíveis. */
export type VisionRisk = {
  a: string;
  b: string;
  vision: Vision;
  before: number;
  after: number;
  severity: "colapso" | "risco";
};
/** Duas cores só entram aqui se eram claramente distintas antes (deltaE >= 30)
 *  e deixam de ser depois da simulação. Abaixo de 12 elas viram a mesma cor;
 *  entre 12 e 20 ainda dá para separar lado a lado, mas não em pontos de um
 *  gráfico ou em ícones pequenos — daí os dois níveis. Nas 32 paletas prontas
 *  daqui isso acusa colapso em 10 e deixa 13 limpas: acusa o suficiente para
 *  valer a leitura, e não tanto que vire ruído. */
export const visionRisks = (colors: string[]): VisionRisk[] => {
  const risks: VisionRisk[] = [];
  const kinds: Vision[] = ["protanopia", "deuteranopia", "tritanopia"];
  colors.forEach((a, i) =>
    colors.slice(i + 1).forEach((b) => {
      const before = deltaE(a, b);
      if (before < 30) return; // já eram parecidas para todo mundo
      for (const vision of kinds) {
        const after = deltaE(simulateVision(a, vision), simulateVision(b, vision));
        if (after < 20)
          risks.push({
            a,
            b,
            vision,
            before,
            after,
            severity: after < 12 ? "colapso" : "risco",
          });
      }
    }),
  );
  return risks.sort((x, y) => x.after - y.after);
};

/* ===================================================================
   Tamanhos de texto reais para a prévia
   ===================================================================
   O WCAG define "texto grande" em pontos: 18pt, ou 14pt em negrito. Em
   CSS a 96dpi isso dá 24px e 18.66px — números que valem mostrar em vez
   de dizer só "pequeno" e "grande". */
export type Spec = {
  label: string;
  px: number;
  weight: number;
  large: boolean;
  need: number;
};
export const textSpecs: Spec[] = [
  { label: "Legenda 12px", px: 12, weight: 400, large: false, need: 4.5 },
  { label: "Corpo 16px", px: 16, weight: 400, large: false, need: 4.5 },
  { label: "Corpo 18.66px negrito", px: 18.66, weight: 700, large: true, need: 3 },
  { label: "Subtítulo 24px", px: 24, weight: 400, large: true, need: 3 },
  { label: "Título 40px", px: 40, weight: 800, large: true, need: 3 },
];

/* ===================================================================
   Escalas Tailwind: curva ajustável, neutros e semânticas
   =================================================================== */

export type ScaleOptions = {
  /** Quanto a saturação cai nas pontas da rampa, de 0 a 100. Rampas reais
   *  raramente mantêm o croma constante: um 50 tão saturado quanto o 500 sai
   *  esverdeado, e um 950 saturado vira uma mancha em vez de quase-preto. */
  chroma: number;
  /** Torção de matiz do claro para o escuro, em graus. Deslocar alguns graus
   *  faz a rampa parecer pigmento em vez de interpolação: sombra puxa para o
   *  frio, luz puxa para o quente (ou o contrário, se o valor for negativo). */
  hueShift: number;
  /** L* do degrau 50 e do 950. Aumentar a distância entre eles alarga o
   *  alcance de contraste da escala. */
  lightest: number;
  darkest: number;
};
export const defaultScaleOptions: ScaleOptions = {
  chroma: 0,
  hueShift: 0,
  lightest: 0,
  darkest: 0,
};

export type Step = { key: number; hex: string; lab: number; delta: number };

/** Versão com curva. Sem opções, devolve exatamente a mesma escala de antes:
 *  croma constante, matiz fixo e pontas calculadas a partir da base. */
export const tailwindRamp = (
  base: string,
  opts: Partial<ScaleOptions> = {},
): Step[] => {
  const o = { ...defaultScaleOptions, ...opts };
  const [h, s] = hexToHsl(base);
  const hex0 = normalizeHex(base);
  const mid = hexToLab(hex0)[0];
  // Sem grampo, uma base quase branca gerava alvos acima de 100 e uma base
  // quase preta, alvos abaixo de 0 — vários degraus caíam no mesmo branco (ou
  // no mesmo preto) e a rampa invertia. As pontas também precisam de espaço
  // real em relação ao 500, que é a base: pedir
  // "mais escuro em L* 14" para uma base que já está em L* 16 espremia cinco
  // degraus em dois pontos de L*, e a quantização de 8 bits fazia dois deles
  // caírem na mesma cor. Oito pontos por metade é o mínimo para que cada
  // degrau ainda tenha cor própria perto do preto.
  const span = 8;
  const top = Math.min(99.5, Math.max(o.lightest || Math.max(97, mid + 6), mid + span));
  // O piso é 0.5 e não 0 para que o degrau mais escuro ainda seja uma cor, e
  // não o mesmo preto do vizinho.
  const bottom = Math.max(0.5, Math.min(o.darkest || Math.min(14, mid - 6), mid - span));
  const targets = tailwindKeys.map((_, i) =>
    i < 5
      ? top + ((mid - top) * i) / 5
      : i === 5
        ? mid
        : mid + ((bottom - mid) * (i - 5)) / 5,
  );
  // Uma base colada num extremo não deixa espaço para os cinco degraus daquele
  // lado: #FFFD95 está em L* 97.5 e o teto é 99.5, então 400 e 500 caem no
  // mesmo lugar e a rampa pára de descer. Quando não cabe, os alvos são
  // redistribuídos linearmente e o 500 deixa de ser exatamente a base — pior
  // que preservar a base, melhor que devolver uma rampa quebrada.
  const gap = 0.9;
  const redistributed = targets.some((t, i) => i > 0 && targets[i - 1] - t < gap);
  if (redistributed)
    for (let i = 0; i < targets.length; i++)
      targets[i] = top - ((top - bottom) * i) / (targets.length - 1);

  /** Procura a luminosidade HSL que produz o L* pedido. Uma cor muito saturada
   *  não alcança L* alto nenhum — amarelo puro para no 97, azul puro no 32 —
   *  e nesse caso a busca encosta no limite e devolve o mesmo valor para dois
   *  degraus vizinhos, invertendo a rampa. Quando o alvo fica fora de alcance,
   *  a saturação cede até caber: é o que a própria escala do Tailwind faz. */
  const solve = (hue: number, sat: number, target: number) => {
    // A última tentativa é saturação zero: um cinza alcança qualquer L*, então
    // essa é a única que nunca falha. Antes o fim de linha era
    // `hslToHex(hue, 0, target)`, que trata o alvo como luminosidade HSL e não
    // como L* — em cinza os dois diferem uns quatro pontos, o suficiente para
    // dois degraus vizinhos trocarem de ordem.
    for (let attempt = 0; attempt <= 12; attempt++) {
      const trySat = sat * (1 - attempt / 12);
      let lo = 0,
        hi = 100,
        hex = hex0;
      for (let step = 0; step < 20; step++) {
        const m = (lo + hi) / 2;
        hex = hslToHex(hue, trySat, m);
        if (hexToLab(hex)[0] < target) lo = m;
        else hi = m;
      }
      if (Math.abs(hexToLab(hex)[0] - target) < 0.6 || attempt === 12) return hex;
    }
    return hex0;
  };

  return tailwindKeys.map((k, i) => {
    // -1 no 50, 0 no 500, +1 no 950
    const pos = (i - 5) / 5;
    const sat = Math.max(0, Math.min(100, s * (1 - (o.chroma / 100) * Math.abs(pos))));
    // hueShift é a abertura total entre as duas pontas, não o desvio de cada
    // uma: quem digita 40 espera 40 graus de diferença do 50 ao 950.
    const hue = h + (o.hueShift * pos) / 2;
    const hex =
      k === 500 && o.chroma === 0 && o.hueShift === 0 && !redistributed
        ? hex0 // o 500 é a base, intacta, quando nada foi torcido
        : // Base quase preta com os alvos redistribuídos: prender o 500 na base
          // o deixaria fora da própria rampa, e ela inverteria ali.
          solve(hue, sat, targets[i]);
    return { key: k, hex, lab: hexToLab(hex)[0], delta: deltaE(hex, hex0) };
  });
};

/** Cinzas com um sopro do matiz da marca. Um cinza puro ao lado de uma cor
 *  saturada parece sujo; 6% de saturação basta para os dois pertencerem à
 *  mesma família sem que o cinza deixe de ser cinza. */
export const neutralRamp = (base: string, tint = 6) => {
  const [h] = hexToHsl(base);
  return tailwindRamp(hslToHex(h, tint, 46), { lightest: 98, darkest: 10 });
};

export type SemanticRamp = { name: string; label: string; base: string; scale: Step[] };
/** Sucesso, atenção, erro e informação no mesmo croma e na mesma luminosidade
 *  da marca — só o matiz muda. Assim os alertas pertencem ao sistema em vez de
 *  parecerem colados de outro lugar. */
export const semanticRamps = (base: string): SemanticRamp[] => {
  const [, s, l] = hexToHsl(base);
  const sat = Math.max(45, Math.min(80, s));
  const light = Math.max(38, Math.min(56, l));
  return [
    ["success", "Sucesso", 145],
    ["warning", "Atenção", 42],
    ["danger", "Erro", 6],
    ["info", "Informação", 205],
  ].map(([name, label, hue]) => {
    const b = hslToHex(hue as number, sat, light);
    return {
      name: name as string,
      label: label as string,
      base: b,
      scale: tailwindRamp(b),
    };
  });
};

export type StepPair = { text: number; surface: number; ratio: number };
/** Quais degraus podem ser texto sobre quais degraus. É a pergunta que se faz
 *  toda vez que se usa uma escala, e que normalmente se responde no olho. */
export const readablePairs = (scale: Step[], target = 4.5): StepPair[] => {
  const out: StepPair[] = [];
  for (const t of scale)
    for (const s of scale) {
      const ratio = contrast(t.hex, s.hex);
      if (ratio >= target) out.push({ text: t.key, surface: s.key, ratio });
    }
  return out;
};

/** O par de menor distância entre os degraus que ainda passa em AA: o jeito
 *  mais econômico de usar a escala sem perder legibilidade. */
export const tightestReadablePair = (scale: Step[], target = 4.5) => {
  const idx = (k: number) => tailwindKeys.indexOf(k as (typeof tailwindKeys)[number]);
  return readablePairs(scale, target).sort(
    (a, b) =>
      Math.abs(idx(a.text) - idx(a.surface)) - Math.abs(idx(b.text) - idx(b.surface)),
  )[0];
};

/** O espelho para modo escuro: 50 vira 950, 100 vira 900 e assim por diante.
 *  É a convenção que todo design system acaba adotando. */
export const darkPairing = () =>
  tailwindKeys.map((k, i) => ({
    light: k,
    dark: tailwindKeys[tailwindKeys.length - 1 - i],
  }));

export type ExportFormat = "js" | "css" | "vars" | "scss" | "json";
export const exportFormatLabels: Record<ExportFormat, string> = {
  js: "tailwind.config.js",
  css: "CSS @theme (v4)",
  vars: "Variáveis CSS",
  scss: "SCSS",
  json: "JSON",
};
export const exportRamps = (
  ramps: { name: string; scale: Step[] }[],
  format: ExportFormat,
) => {
  const body = (fn: (r: { name: string; scale: Step[] }) => string) =>
    ramps.map(fn).join("\n");
  switch (format) {
    case "js":
      return `colors: {\n${body(
        (r) =>
          `  '${r.name}': {\n${r.scale
            .map((x) => `    ${x.key}: '${x.hex}',`)
            .join("\n")}\n  },`,
      )}\n}`;
    case "css":
      return `@theme {\n${ramps
        .map((r) =>
          r.scale.map((x) => `  --color-${r.name}-${x.key}: ${x.hex};`).join("\n"),
        )
        .join("\n\n")}\n}`;
    case "vars":
      return `:root {\n${ramps
        .map((r) =>
          r.scale.map((x) => `  --${r.name}-${x.key}: ${x.hex};`).join("\n"),
        )
        .join("\n\n")}\n}`;
    case "scss":
      return ramps
        .map(
          (r) =>
            `$${r.name}: (\n${r.scale
              .map((x) => `  "${x.key}": ${x.hex},`)
              .join("\n")}\n);`,
        )
        .join("\n\n");
    case "json":
      return JSON.stringify(
        Object.fromEntries(
          ramps.map((r) => [
            r.name,
            Object.fromEntries(r.scale.map((x) => [x.key, x.hex])),
          ]),
        ),
        null,
        2,
      );
  }
};

/* ===================================================================
   Tokens de um sistema real, derivados da paleta
   ===================================================================
   O passo que falta entre "tenho cinco cores" e "sei o que escrever no CSS".
   Cada token é escolhido por medição, não por posição na rampa: o texto
   secundário é o degrau mais claro que ainda alcança 4.5:1 sobre o fundo
   daquele modo, e não um 500 qualquer que às vezes passa e às vezes não. */

export type TokenName =
  | "bg"
  | "surface"
  | "surface-2"
  | "border"
  | "border-strong"
  | "text"
  | "text-muted"
  | "text-faint"
  | "primary"
  | "primary-hover"
  | "primary-active"
  | "primary-soft"
  | "on-primary"
  | "accent"
  | "on-accent"
  | "focus"
  | "success"
  | "warning"
  | "danger"
  | "on-status";

export type Token = {
  name: TokenName;
  hex: string;
  role: string;
  /** Contra qual token ele foi medido, quando a medição faz sentido. */
  against?: TokenName;
  ratio?: number;
  need?: number;
};

export type TokenSet = { light: Token[]; dark: Token[] };

/** O degrau mais discreto (mais próximo do fundo) que ainda alcança `target`.
 *  Percorre a rampa a partir da ponta oposta ao fundo, então devolve o
 *  primeiro que passa: qualquer outro seria mais contrastado do que precisa. */
const quietestOver = (scale: Step[], bg: string, target: number, fromDark: boolean) => {
  const order = fromDark ? [...scale].reverse() : scale;
  for (const s of order) if (contrast(s.hex, bg) >= target) return s.hex;
  return readableOn(bg);
};

export const designTokens = (palette: string[]): TokenSet => {
  const roles = paletteRoles(palette);
  const primary = roles.primary;
  const accent = roles.accent;
  const n = neutralRamp(primary).map((s) => s.hex);
  const p = tailwindRamp(primary);
  const a = tailwindRamp(accent);
  const sem = semanticRamps(primary);
  /** O degrau da rampa semântica é escolhido medindo, não fixando o 600: um
   *  amarelo de atenção em 600 passa em AA sobre branco e reprova sobre o
   *  fundo escuro, e o inverso vale para o verde. */
  const semStep = (name: string, bg: string, dark: boolean) => {
    const scale = sem.find((s) => s.name === name)!.scale;
    const order = dark ? [...scale].reverse() : scale;
    return order.find((s) => contrast(s.hex, bg) >= 4.5)?.hex ?? readableOn(bg);
  };

  const build = (dark: boolean): Token[] => {
    // No escuro a rampa neutra é lida ao contrário: o índice 0 é o quase-branco.
    const nx = dark ? [...n].reverse() : n;
    const bg = nx[0];
    const surface = dark ? nx[1] : "#FFFFFF";
    const surface2 = nx[2];
    const border = nx[dark ? 3 : 2];
    const borderStrong = nx[dark ? 4 : 3];
    const text = nx[9];

    // A cor da ação tem de ser legível sobre o fundo daquele modo: o mesmo
    // 500 que funciona no claro costuma sumir no escuro, e vice-versa.
    const pOrder = dark ? [...p].reverse() : p;
    const action =
      pOrder.find((s) => contrast(s.hex, bg) >= 4.5)?.hex ??
      readableOn(bg);
    /** Hover e pressionado não podem ser "um degrau adiante": perto das pontas
     *  não existe degrau adiante, e numa rampa comprimida o degrau seguinte
     *  está a ΔE 2 — a mudança fica no código e não na tela. Aqui a busca é
     *  pela primeira cor que se afaste o bastante, no sentido preferido do
     *  modo, e o sentido inverte quando aquele lado acaba. */
    const step = (from: string, minDelta: number) => {
      // no claro o estado escurece, no escuro ele clareia
      const order = dark ? [...p].reverse() : p;
      const i0 = Math.max(0, order.findIndex((x) => x.hex === from));
      for (let j = i0 + 1; j < order.length; j++)
        if (deltaE(order[j].hex, from) >= minDelta) return order[j].hex;
      for (let j = i0 - 1; j >= 0; j--)
        if (deltaE(order[j].hex, from) >= minDelta) return order[j].hex;
      // a rampa inteira cabe dentro de ΔE minDelta: afasta na mão
      const [hh, ss, ll] = hexToHsl(from);
      for (let d = 1; d <= 100; d++)
        for (const way of dark ? [1, -1] : [-1, 1]) {
          const cand = hslToHex(hh, ss, ll + way * d);
          if (deltaE(cand, from) >= minDelta) return cand;
        }
      return from;
    };
    // Pressionado parte do hover, não da ação: buscando os dois a partir da
    // mesma cor, o primeiro degrau que satisfaz ΔE 6 quase sempre satisfazia
    // ΔE 13 também, e os dois estados saíam idênticos.
    const hover = step(action, 6);
    const pressed = step(hover, 6);

    const aOrder = dark ? [...a].reverse() : a;
    const accentToken =
      aOrder.find((s) => contrast(s.hex, bg) >= 4.5)?.hex ?? readableOn(bg);

    const t = (
      name: TokenName,
      hex: string,
      role: string,
      against?: TokenName,
      need?: number,
    ): Token => ({
      name,
      hex,
      role,
      against,
      need,
      ratio: against
        ? contrast(
            hex,
            { bg, surface, "surface-2": surface2 }[against as string] ?? bg,
          )
        : undefined,
    });

    return [
      t("bg", bg, "Fundo da página inteira"),
      t("surface", surface, "Cartões, painéis, modais"),
      t("surface-2", surface2, "Segundo nível: cabeçalhos de tabela, campos"),
      t("border", border, "Divisórias, contornos de campo em repouso"),
      t("border-strong", borderStrong, "Contorno em foco ou hover"),
      t("text", text, "Texto principal", "bg", 4.5),
      t(
        "text-muted",
        quietestOver(neutralRamp(primary), bg, 4.5, !dark),
        "Texto secundário que ainda precisa passar em AA",
        "bg",
        4.5,
      ),
      t(
        "text-faint",
        quietestOver(neutralRamp(primary), bg, 3, !dark),
        "Rótulos e legendas grandes; nunca texto corrido",
        "bg",
        3,
      ),
      t("primary", action, "Ação principal", "bg", 4.5),
      t("primary-hover", hover, "Estado hover da ação"),
      t("primary-active", pressed, "Estado pressionado, botão apertado"),
      t(
        "primary-soft",
        p[dark ? 9 : 1].hex,
        "Fundo suave para avisos e seleção da marca",
      ),
      t("on-primary", readableOn(action), "Texto sobre a ação principal"),
      t("accent", accentToken, "Destaque secundário", "bg", 4.5),
      t("on-accent", readableOn(accentToken), "Texto sobre o destaque"),
      t(
        "focus",
        // O anel de foco é elemento não textual: 3:1 contra o fundo basta, e
        // é o requisito 1.4.11 do WCAG que quase todo site erra.
        contrast(action, bg) >= 3 ? action : readableOn(bg),
        "Anel de foco, precisa de 3:1 contra o fundo",
        "bg",
        3,
      ),
      t("success", semStep("success", bg, dark), "Confirmação, salvo, disponível", "bg", 4.5),
      t("warning", semStep("warning", bg, dark), "Atenção, pendente, revisar", "bg", 4.5),
      t("danger", semStep("danger", bg, dark), "Erro, exclusão, ação irreversível", "bg", 4.5),
      t("on-status", readableOn(semStep("danger", bg, dark)), "Texto sobre um estado preenchido"),
    ];
  };

  return { light: build(false), dark: build(true) };
};

export type TokenFormat = "css" | "tailwind" | "ts" | "sc";
export const tokenFormatLabels: Record<TokenFormat, string> = {
  css: "Variáveis CSS",
  tailwind: "Tailwind @theme",
  ts: "TypeScript",
  sc: "styled-components",
};
export const exportTokens = (set: TokenSet, format: TokenFormat) => {
  const lines = (list: Token[], prefix: string, sep = ": ", end = ";") =>
    list.map((t) => `  ${prefix}${t.name}${sep}${t.hex}${end}`).join("\n");
  switch (format) {
    case "css":
      return `:root {\n${lines(set.light, "--")}\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n${lines(
        set.dark,
        "--",
      )
        .split("\n")
        .map((l) => `  ${l}`)
        .join("\n")}\n  }\n}\n\n[data-theme="dark"] {\n${lines(set.dark, "--")}\n}`;
    case "tailwind":
      return `@theme {\n${lines(set.light, "--color-")}\n}\n\n/* O @theme não muda sozinho com o tema: as variáveis do escuro\n   são reatribuídas fora dele. */\n[data-theme="dark"] {\n${lines(
        set.dark,
        "--color-",
      )}\n}`;
    case "ts":
      return `export const tokens = {\n  light: {\n${set.light
        .map((t) => `    "${t.name}": "${t.hex}",`)
        .join("\n")}\n  },\n  dark: {\n${set.dark
        .map((t) => `    "${t.name}": "${t.hex}",`)
        .join("\n")}\n  },\n} as const;`;
    case "sc":
      return `export const light = {\n${set.light
        .map((t) => `  "${t.name}": "${t.hex}",`)
        .join("\n")}\n};\n\nexport const dark = {\n${set.dark
        .map((t) => `  "${t.name}": "${t.hex}",`)
        .join("\n")}\n};`;
  }
};

/** Duas listas diferentes, e a diferença importa. As "garantias" são
 *  propriedades que este gerador sempre entrega — mostrá-las com o número
 *  medido é prova, não checklist. As "verificações" dependem da paleta que
 *  entrou e podem reprovar: são elas que pedem uma decisão de quem projeta. */
export type Rule = {
  kind: "garantia" | "verificação";
  title: string;
  detail: string;
  ok: boolean;
  evidence: string;
};
export const tokenRules = (set: TokenSet, palette: string[] = []): Rule[] => {
  const get = (mode: Token[], name: TokenName) =>
    mode.find((t) => t.name === name)!.hex;
  const out: Rule[] = [];
  const add = (
    kind: Rule["kind"],
    title: string,
    detail: string,
    ok: boolean,
    evidence: string,
  ) => out.push({ kind, title, detail, ok, evidence });

  for (const [modeName, mode] of [
    ["claro", set.light],
    ["escuro", set.dark],
  ] as const) {
    const bg = get(mode, "bg"),
      text = get(mode, "text"),
      muted = get(mode, "text-muted"),
      primary = get(mode, "primary"),
      focus = get(mode, "focus"),
      onPrimary = get(mode, "on-primary");
    const g = (title: string, detail: string, ok: boolean, evidence: string) =>
      add("garantia", `${title} · modo ${modeName}`, detail, ok, evidence);

    g(
      "Texto principal em AA",
      "O texto vem do degrau neutro mais escuro do modo, medido contra o fundo daquele mesmo modo.",
      contrast(text, bg) >= 4.5,
      `${contrast(text, bg).toFixed(2)}:1`,
    );
    g(
      "Texto secundário em AA",
      "É o cinza mais discreto que ainda alcança 4.5:1 — o primeiro token que se erra ao escolher no olho.",
      contrast(muted, bg) >= 4.5,
      `${contrast(muted, bg).toFixed(2)}:1`,
    );
    g(
      "Ação legível sobre o fundo",
      "Links e botões de texto usam a primária direto sobre o fundo, então ela é escolhida por medição na rampa.",
      contrast(primary, bg) >= 4.5,
      `${contrast(primary, bg).toFixed(2)}:1`,
    );
    g(
      "Texto sobre a ação em AA",
      "O rótulo do botão preenchido cai para preto ou branco puro quando a cor da ação não sustenta os dois.",
      contrast(onPrimary, primary) >= 4.5,
      `${contrast(onPrimary, primary).toFixed(2)}:1`,
    );
    g(
      "Anel de foco em 3:1",
      "Requisito 1.4.11 do WCAG: o indicador de foco é elemento não textual e precisa se destacar do fundo.",
      contrast(focus, bg) >= 3,
      `${contrast(focus, bg).toFixed(2)}:1`,
    );
  }

  const l = set.light,
    d = set.dark;
  const c = (title: string, detail: string, ok: boolean, evidence: string) =>
    add("verificação", title, detail, ok, evidence);
  const g2 = (title: string, detail: string, ok: boolean, evidence: string) =>
    add("garantia", title, detail, ok, evidence);

  g2(
    "Texto principal alcança AAA",
    "7:1 no corpo de texto cansa menos em leitura longa e atende baixa visão sem lupa. Sai de graça porque a rampa neutra vai de quase-branco a quase-preto.",
    contrast(get(l, "text"), get(l, "bg")) >= 7 &&
      contrast(get(d, "text"), get(d, "bg")) >= 7,
    `${contrast(get(l, "text"), get(l, "bg")).toFixed(1)}:1 no claro, ${contrast(get(d, "text"), get(d, "bg")).toFixed(1)}:1 no escuro`,
  );
  g2(
    "Hover se distingue do repouso",
    "Abaixo de ΔE 5 o estado existe no código e não na tela. Quando a ação já está na ponta da rampa, o hover inverte o sentido em vez de repetir a cor.",
    deltaE(get(l, "primary"), get(l, "primary-hover")) >= 5 &&
      deltaE(get(d, "primary"), get(d, "primary-hover")) >= 5,
    `ΔE ${deltaE(get(l, "primary"), get(l, "primary-hover")).toFixed(1)} no claro, ${deltaE(get(d, "primary"), get(d, "primary-hover")).toFixed(1)} no escuro`,
  );
  g2(
    "Bordas visíveis",
    "Contornos abaixo de 1.5:1 somem em tela com brilho baixo e sob luz do sol.",
    contrast(get(l, "border"), get(l, "bg")) >= 1.5 &&
      contrast(get(d, "border"), get(d, "bg")) >= 1.5,
    `${contrast(get(l, "border"), get(l, "bg")).toFixed(2)}:1 no claro, ${contrast(get(d, "border"), get(d, "bg")).toFixed(2)}:1 no escuro`,
  );
  c(
    "Primária e destaque não competem",
    "Duas cores de ação a menos de ΔE 25 confundem qual é a principal. Se reprovar, gire o matiz do destaque.",
    deltaE(get(l, "primary"), get(l, "accent")) >= 25,
    `ΔE ${deltaE(get(l, "primary"), get(l, "accent")).toFixed(0)}`,
  );
  if (palette.length > 1) {
    const audit = paletteAudit(palette);
    c(
      "A paleta sustenta texto sozinha",
      "Quando nenhum par interno passa em AA, todo texto do site vai acabar em preto ou branco puro e a paleta some da tipografia.",
      audit.aa > 0,
      `${audit.aa} de ${audit.total} pares em AA`,
    );
    const risks = visionRisks(palette);
    c(
      "Nenhuma cor colapsa no daltonismo",
      "Cores que viram a mesma em protanopia ou deuteranopia não podem ser o único jeito de distinguir informação.",
      risks.every((r) => r.severity !== "colapso"),
      `${risks.filter((r) => r.severity === "colapso").length} colapso(s) em ${risks.length} par(es) sinalizado(s)`,
    );
  }
  return out;
};
