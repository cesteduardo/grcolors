import React, {
  createContext,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Check,
  Code2,
  Copy,
  Download,
  GripVertical,
  Heart,
  Lock,
  Menu,
  Palette as PaletteIcon,
  Plus,
  RefreshCw,
  Redo2,
  Search,
  Settings2,
  Shuffle,
  Maximize2,
  Minimize2,
  Focus,
  FileText,
  Layers,
  History,
  AlertTriangle,
  Share2,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  Undo2,
  Unlock,
  Upload,
  X,
} from "lucide-react";
const ColorPanel = lazy(() => import("./ColorPanel"));
import { htmlLang, langs, translate, type Lang } from "./i18n";

/* O idioma vive num contexto porque as telas que precisam dele — o
   assistente, o visualizador — estao a varios niveis de distancia do
   estado, e passar a lingua de mao em mao por toda a arvore poluiria a
   assinatura de componentes que nao tem nada com traducao. */
const LangCtx = createContext<Lang>("pt");
/* t("frase em portugues") devolve a traducao ou a propria frase. */
const useT = () => {
  const lang = useContext(LangCtx);
  return (phrase: string) => translate(lang, phrase);
};
import {
  Adjust,
  Family,
  Harmony,
  Info,
  Palette,
  Roles,
  Style,
  Vision,
  ExportFormat,
  PromptReading,
  Step,
  TokenFormat,
  TokenName,
  designTokens,
  exportTokens,
  tokenFormatLabels,
  tokenRules,
  adjacentContrast,
  apca,
  exportFormatLabels,
  exportRamps,
  neutralRamp,
  readablePairs,
  semanticRamps,
  tailwindKeys,
  tailwindRamp,
  tightestReadablePair,
  colorTemperature,
  nearestNamed,
  toHwbString,
  toLchString,
  toLuvString,
  toOklchString,
  toXyzString,
  warmth,
  apcaGuidance,
  applyAdjust,
  contrastFixes,
  contrastMatrix,
  hexToLab,
  nearestAccessible,
  paletteAudit,
  textSpecs,
  visionRisks,
  colorFamily,
  familyLabels,
  formatInfo,
  infoLabels,
  luminance,
  asePalette,
  paletteFamilies,
  paletteRoles,
  paletteStyles,
  pdfPalette,
  tailwindScale,
  shuffle,
  styleLabels,
  colorName,
  decodePalette,
  deltaE,
  contrastReport,
  encodePalette,
  enhanceContrast,
  neutralAdjust,
  scssPalette,
  similarColors,
  similarity,
  simulateVision,
  shadesOf,
  tintsOf,
  toCmykString,
  toHslString,
  toLabString,
  toRgbString,
  tonesOf,
  visionPrevalence,
  svgPalette,
  visionLabels,
  contrast,
  cssPalette,
  colorInfo,
  generateHarmony,
  harmonyDescription,
  harmonyLabels,
  hexToHsl,
  hslToHex,
  paletteFromPrompt,
  colorQA,
  paletteMetrics,
  parseColor,
  defaultPalette,
  getPresets,
  randomColor,
  rgb,
  shades,
  textOn,
} from "./color";

/* Onde o app esta montado dentro do site: "/colors/". Vem do Vite (base no
   vite.config.ts), e nao escrito a mao, para que mover o app de lugar seja uma
   linha so — e para que dev e producao nunca discordem sobre o prefixo. */
const BASE = import.meta.env.BASE_URL;

/* A paleta e o caminho depois de /colors/. decodePalette ja tolera a barra
   inicial, entao aqui basta tirar o prefixo do site. */
const paletteFromUrl = () =>
  decodePalette(
    location.pathname.startsWith(BASE)
      ? location.pathname.slice(BASE.length)
      : location.pathname,
  );

type Tool =
  | "generate"
  | "explore"
  | "image"
  | "contrast"
  | "visualize"
  | "picker"
  | "tailwind"
  | "dev"
  | "bot"
  | "apoiar";

/* A marca de verdade da GR Brands — as duas metades de circulo giradas -22deg,
   a mesma arte de Logo1-icone.svg do site principal. O que estava aqui antes era
   um "GR" desenhado a mao dentro de um quadrado arredondado, que nao existe em
   lugar nenhum da identidade.
   O preenchimento e currentColor: a marca acompanha a cor do texto ao lado, em
   qualquer fundo, sem precisar de uma segunda arte. */
function BrandMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="22.5 22 84 84" className={className} aria-hidden="true">
      <defs>
        <clipPath id="grb-mark-top">
          <rect x="-60" y="-60" width="220" height="107" />
        </clipPath>
        <clipPath id="grb-mark-bottom">
          <rect x="-60" y="53" width="220" height="160" />
        </clipPath>
      </defs>
      <g transform="translate(25.30,24.00)">
        <g transform="scale(1.00125) translate(-16,-8.2)">
          <g fill="currentColor" transform="rotate(-22 50 50)">
            <g clipPath="url(#grb-mark-top)">
              <circle cx="50" cy="50" r="38" transform="translate(10,0)" />
            </g>
            <g clipPath="url(#grb-mark-bottom)">
              <circle cx="50" cy="50" r="38" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

/* "Colors" com a onda cromatica do site principal. Nao sao seis cores
   escolhidas ao acaso: sao exatamente os tokens --t1..--t6 que percorrem as
   palavras em pixel da GR Brands, e a palavra tem seis letras — uma cor cada,
   na mesma ordem em que a onda passa la. E o unico lugar colorido da interface,
   que e justamente o assunto do produto. */
const COLORS_HUES = [
  "#00A63F",
  "#F59300",
  "#0091FF",
  "#9B3DFF",
  "#FF2D6F",
  "#E4322A",
];
function BrandWord({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[-.055em] ${className}`}>
      GR{" "}
      {"Colors".split("").map((ch, i) => (
        <span key={i} style={{ color: COLORS_HUES[i] }}>
          {ch}
        </span>
      ))}
    </span>
  );
}
const nav: { id: Tool; label: string }[] = [
  { id: "generate", label: "Gerar" },
  { id: "explore", label: "Explorar" },
  { id: "image", label: "Imagem" },
  { id: "contrast", label: "Contraste" },
  { id: "visualize", label: "Visualizar" },
  { id: "picker", label: "Seletor" },
  { id: "tailwind", label: "Tailwind" },
  { id: "dev", label: "Para devs" },
  { id: "bot", label: "Color Bot" },
];
const titles: Record<Tool, [string, string]> = {
  generate: [
    "Crie uma paleta",
    "Pressione espaço para gerar novas cores. Trave as que você ama.",
  ],
  explore: [
    "Explore paletas",
    "Combinações prontas para começar sua próxima ideia.",
  ],
  image: [
    "Cores de uma imagem",
    "Envie uma imagem e extraia sua essência em cores.",
  ],
  contrast: [
    "Verifique o contraste",
    "Teste legibilidade conforme as diretrizes WCAG.",
  ],
  visualize: [
    "Veja antes de usar",
    "Experimente sua paleta em uma interface real.",
  ],
  picker: [
    "Entenda qualquer cor",
    "Variações, valores e combinações em um só lugar.",
  ],
  tailwind: ["Paleta Tailwind", "Gere uma escala pronta para seus projetos."],
  dev: [
    "Cores no seu código",
    "Tokens verificados para fundo, texto, ação, foco e estados — nos dois modos.",
  ],
  bot: [
    "Converse sobre cores",
    "Descreva uma sensação e receba uma direção de paleta.",
  ],
  apoiar: [
    "Ajude a manter no ar",
    "O GR Colors é aberto e gratuito. Quem quiser retribuir, retribui.",
  ],
};
const copy = (v: string) => navigator.clipboard.writeText(v);

/* ---------------------------------------------------------------
   Sol e lua.

   Sao os MESMOS desenhos do alternador de tema do site da GR Brands
   (o botao #theme do index.html): os mesmos caminhos, o traco de 1.6,
   a ponta arredondada e o miolo vazado. Nao sao os do lucide — a
   biblioteca ja esta aqui e teria sol e lua prontos, mas o sol dela
   tem oito raios de comprimento igual e a lua e mais fechada; lado a
   lado com o site a diferenca aparece. Icone de marca se copia, nao
   se aproxima.

   O tamanho vem por prop porque aqui eles moram dentro de botoes
   pequenos, e nao no botao de 49.5px do header do site.
   --------------------------------------------------------------- */
function SunIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.6M12 19v2.6M4.6 4.6l1.9 1.9M17.5 17.5l1.9 1.9M2.4 12H5M19 12h2.6M4.6 19.4l1.9-1.9M17.5 6.5l1.9-1.9" />
    </svg>
  );
}
function MoonIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z" />
    </svg>
  );
}

function HexField({
  value,
  onChange,
  className = "",
  ariaLabel = "Código hexadecimal",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}) {
  const [draft, setDraft] = useState(value);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  const apply = (raw: string) => {
    const parsed = parseColor(raw.startsWith("#") ? raw : `#${raw}`);
    if (parsed) onChange(parsed);
    return parsed;
  };

  return (
    <input
      value={editing ? draft : value}
      aria-label={ariaLabel}
      spellCheck={false}
      autoComplete="off"
      maxLength={7}
      onFocus={(e) => {
        setEditing(true);
        setDraft(value);
        e.currentTarget.select();
      }}
      onChange={(e) => {
        const next = e.target.value.toUpperCase();
        if (/^#?[0-9A-F]{0,6}$/.test(next)) {
          setDraft(next);
          apply(next);
        }
      }}
      onBlur={() => {
        if (!apply(draft)) setDraft(value);
        setEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.currentTarget.blur();
        if (e.key === "Escape") {
          setDraft(value);
          e.currentTarget.blur();
        }
      }}
      className={className}
    />
  );
}

export default function App() {
  const [tool, setTool] = useState<Tool>("generate"),
    [colors, setColors] = useState(defaultPalette.colors),
    [locked, setLocked] = useState<boolean[]>([
      false,
      false,
      false,
      false,
      false,
    ]),
    [saved, setSaved] = useState<Palette[]>(() =>
      JSON.parse(localStorage.getItem("gr-colors-palettes") || localStorage.getItem("pintou-palettes") || localStorage.getItem("coreees-palettes") || "[]"),
    ),
    [menu, setMenu] = useState(false),
    [history, setHistory] = useState<string[][]>([]),
    [future, setFuture] = useState<string[][]>([]),
    [harmony, setHarmony] = useState<Harmony>("smart"),
    [adjust, setAdjust] = useState<Adjust>(neutralAdjust),
    [vision, setVision] = useState<Vision>("normal"),
    [info, setInfo] = useState<Info>("name"),
    [panel, setPanel] = useState<number | null>(null),
    [lang, setLang] = useState<Lang>(
      () => (localStorage.getItem("gr-colors-lang") as Lang) || "pt",
    );
  const t = (phrase: string) => translate(lang, phrase);
  /* Destaca o header do topo ao rolar. Passiva e em rAF — durante a rolagem
     a thread principal ja tem trabalho suficiente. */
  useEffect(() => {
    let ticking = false;
    const read = () => {
      ticking = false;
      document.querySelector(".head")?.classList.toggle("is-stuck", window.scrollY > 24);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tool]);

  useEffect(() => {
    localStorage.setItem("gr-colors-lang", lang);
    /* o atributo lang do <html> guia leitor de tela, hifenizacao e o
       corretor ortografico do navegador */
    document.documentElement.lang = htmlLang[lang];
  }, [lang]);
  useEffect(
    () => localStorage.setItem("gr-colors-palettes", JSON.stringify(saved)),
    [saved],
  );

  // A paleta vive na URL: /colors/023047-219ebc-8ecae6 — recarregar ou
  // compartilhar preserva. O prefixo /colors/ vem de BASE porque o app e uma
  // pagina do site da GR Brands, nao a raiz de um dominio; sem descontar esse
  // prefixo, "colors/023047" nao passa pelo teste de hexadecimal e toda paleta
  // compartilhada abriria na paleta padrao.
  const skipUrlWrite = useRef(true);
  useEffect(() => {
    const fromUrl = paletteFromUrl();
    if (fromUrl) {
      setColors(fromUrl);
      setLocked(fromUrl.map(() => false));
    }
    const onPop = () => {
      const c = paletteFromUrl();
      if (c) {
        skipUrlWrite.current = true;
        setColors(c);
        setLocked(c.map(() => false));
      }
    };
    addEventListener("popstate", onPop);
    return () => removeEventListener("popstate", onPop);
  }, []);
  useEffect(() => {
    const slug = BASE + encodePalette(colors);
    if (slug === location.pathname) return;
    if (skipUrlWrite.current) {
      skipUrlWrite.current = false;
      return;
    }
    window.history.pushState(null, "", slug);
  }, [colors]);

  const push = (c: string[]) => {
    setHistory((h) => [...h.slice(-49), c]);
    setFuture([]);
  };
  const generate = () => {
    push(colors);
    setColors((c) => {
      // Com algo travado, essa cor ancora a harmonia. Sem nada travado a
      // âncora tem de ser nova a cada geração, senão a paleta só orbita a atual.
      const first = locked.findIndex(Boolean);
      const anchor = first >= 0 ? c[first] : randomColor();
      const next = generateHarmony(anchor, c.length, harmony);
      return c.map((x, i) => (locked[i] ? x : next[i]));
    });
  };
  const chooseHarmony = (nextHarmony: Harmony) => {
    setHarmony(nextHarmony);
    push(colors);
    setColors((current) => {
      const firstLocked = locked.findIndex(Boolean);
      const anchor = firstLocked >= 0 ? current[firstLocked] : current[0];
      const next = generateHarmony(anchor, current.length, nextHarmony);
      return current.map((existing, i) => (locked[i] ? existing : next[i]));
    });
  };
  const shuffleColors = () =>
    setColors((c) => {
      push(c);
      return shuffle(c);
    });
  const undo = () =>
    setHistory((h) => {
      if (!h.length) return h;
      setColors((c) => {
        setFuture((f) => [...f, c]);
        return h[h.length - 1];
      });
      return h.slice(0, -1);
    });
  const redo = () =>
    setFuture((f) => {
      if (!f.length) return f;
      setColors((c) => {
        setHistory((h) => [...h, c]);
        return f[f.length - 1];
      });
      return f.slice(0, -1);
    });
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      const typing = ["INPUT", "TEXTAREA"].includes(
        (e.target as HTMLElement).tagName,
      );
      if (typing) return;
      if (e.code === "Space" && tool === "generate") {
        e.preventDefault();
        generate();
      }
      if (e.key.toLowerCase() === "s" && tool === "generate" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        shuffleColors();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        e.shiftKey ? redo() : undo();
      }
    };
    addEventListener("keydown", fn);
    return () => removeEventListener("keydown", fn);
  });
  const save = (
    p: Palette = {
      id: crypto.randomUUID(),
      name: "Minha paleta",
      colors,
      savedAt: Date.now(),
    },
  ) =>
    setSaved((s) =>
      s.some((x) => x.colors.join() == p.colors.join()) ? s : [p, ...s],
    );
  const removeSaved = (id: string) =>
    setSaved((s) => s.filter((x) => x.id !== id));
  const openPalette = (p: Palette) => {
    push(colors);
    setColors(p.colors);
    setLocked(p.colors.map(() => false));
    setTool("generate");
  };
  return (
    <LangCtx.Provider value={lang}>
    <div className="min-h-screen">
      {/* O header comeca de borda a borda e, ao rolar, se destaca do topo e
          vira uma pilula de vidro flutuante — a assinatura do site. A classe
          is-stuck e posta pelo listener de rolagem la em cima. */}
      <header className="head">
        <button
          onClick={() => setTool("generate")}
          className="text-[21px] font-semibold tracking-[-.02em] flex items-center gap-3 shrink-0"
        >
          <BrandMark className="size-8" />
          <BrandWord />
        </button>
        {/* A navegacao deixou de ser uma fileira de pilulas — o desenho de
            barra de app — e virou texto, com a ferramenta atual marcada por
            um fio vermelho embaixo, do jeito que o site marca a etapa
            corrente do processo. */}
        <nav className="hidden lg:flex items-center gap-6 ml-2 mr-auto">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setTool(n.id)}
              className={`relative py-1 text-[13.5px] tracking-[-.01em] transition ${
                tool === n.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {t(n.label)}
              <i
                className={`absolute left-0 right-0 -bottom-0.5 h-[2.2px] bg-accent origin-left transition-transform duration-500 ${
                  tool === n.id ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transitionTimingFunction: "var(--ease)" }}
              />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Barra de idiomas. Espanhol e chines aparecem porque estao no
              plano, mas ficam desativados enquanto nao houver dicionario:
              deixa-los clicaveis so entregaria a mesma tela em portugues
              com uma bandeira diferente, o que e pior que dizer que ainda
              nao esta pronto. */}
          <div
            className="hidden md:flex items-center bg-fill rounded-full p-0.5"
            role="group"
            aria-label={t("Idioma")}
          >
            {langs.map((l) => (
              <button
                key={l.id}
                onClick={() => l.ready && setLang(l.id)}
                disabled={!l.ready}
                aria-pressed={lang === l.id}
                title={l.ready ? l.label : `${l.label} — ${t("Em breve")}`}
                className={`px-2.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide transition ${
                  lang === l.id
                    ? "bg-surface text-ink shadow-card"
                    : l.ready
                      ? "text-muted hover:text-ink"
                      : "text-faint/60 cursor-not-allowed"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
          <button
            onClick={() => setTool("explore")}
            title={t("Explorar")}
            className="hidden sm:flex p-2.5 text-muted hover:text-ink hover:bg-fill rounded-full transition"
          >
            <Search size={19} />
          </button>
          {/* O topo deixou de guardar paleta e passou a pedir apoio. O salvar
              nao sumiu: desceu para a barra do gerador, ao lado de desfazer e
              embaralhar, que e onde a paleta atual vive. */}
          <button
            onClick={() => setTool("apoiar")}
            className="px-5 py-2.5 bg-accent text-accent-ink rounded-full text-sm font-semibold flex gap-2 items-center hover:brightness-95 transition"
          >
            <Heart size={16} /> {t("Doe para o projeto")}
          </button>
          <button
            className="lg:hidden p-2 text-muted"
            onClick={() => setMenu(!menu)}
          >
            <Menu />
          </button>
        </div>
      </header>
      {/* O header saiu do fluxo (fixed, para poder virar pilula flutuante),
          entao o conteudo recupera a altura dele aqui. */}
      <div className="h-[72px] md:h-[80px]" aria-hidden="true" />
      {menu && (
        <div className="fixed inset-0 z-40 bg-surface p-6">
          <div className="flex justify-between mb-8 text-xl font-semibold">
            <span className="flex items-center gap-2">
              <BrandMark className="size-8" />
              <BrandWord />
            </span>{" "}
            <button onClick={() => setMenu(false)}>
              <X />
            </button>
          </div>
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                setTool(n.id);
                setMenu(false);
              }}
              className="block w-full text-left text-2xl font-semibold py-3"
            >
              {t(n.label)}
            </button>
          ))}
          <div className="mt-6 pt-5 border-t border-line">
            <p className="text-[11px] uppercase tracking-[0.18em] text-faint mb-3">{t("Idioma")}</p>
            <div className="flex gap-2">
              {langs.map((l) => (
                <button
                  key={l.id}
                  onClick={() => l.ready && setLang(l.id)}
                  disabled={!l.ready}
                  aria-pressed={lang === l.id}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    lang === l.id
                      ? "bg-ink text-canvas border-ink"
                      : l.ready
                        ? "border-line text-muted"
                        : "border-line text-faint/60 cursor-not-allowed"
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <main>
        {tool === "apoiar" ? (
          <Support />
        ) : tool === "generate" ? (
          <Generator
            colors={colors}
            setColors={setColors}
            locked={locked}
            setLocked={setLocked}
            generate={generate}
            undo={undo}
            redo={redo}
            canUndo={history.length > 0}
            canRedo={future.length > 0}
            harmony={harmony}
            setHarmony={chooseHarmony}
            adjust={adjust}
            setAdjust={setAdjust}
            vision={vision}
            setVision={setVision}
            info={info}
            setInfo={setInfo}
            shuffleColors={shuffleColors}
            saveCurrent={() => save()}
            history={history}
            restore={(c) => {
              push(colors);
              setColors(c);
              setLocked(c.map(() => false));
            }}
            openPanel={setPanel}
            commit={push}
          />
        ) : (
          <>
            <Hero tool={tool} />
            <div className="mx-auto w-full pb-24" style={{ paddingInline: "var(--gut)", maxWidth: "var(--maxw)" }}>
              {tool === "explore" && (
                <Explore
                  saved={saved}
                  open={openPalette}
                  save={save}
                  remove={removeSaved}
                />
              )}{" "}
              {tool === "image" && (
                <ImagePicker
                  onColors={(c) => setColors(c)}
                  onOpen={(c) => {
                    setColors(c);
                    setLocked(c.map(() => false));
                    setTool("generate");
                  }}
                />
              )}{" "}
              {tool === "contrast" && (
                <Contrast palette={colors} setColors={setColors} />
              )}{" "}
              {tool === "visualize" && (
                <Visualizer colors={colors} setColors={setColors} onOpen={() => setTool("generate")} />
              )}{" "}
              {tool === "picker" && (
                <Picker onPalette={(c) => {
                  setColors(c);
                  setLocked(c.map(() => false));
                  setTool("generate");
                }} />
              )}{" "}
              {tool === "tailwind" && <Tailwind palette={colors} />}{" "}
              {tool === "dev" && <DevTokens palette={colors} />}{" "}
              {tool === "bot" && (
                <Bot
                  onPalette={(c) => {
                    setColors(c);
                    setLocked(c.map(() => false));
                    setTool("generate");
                  }}
                />
              )}
            </div>
          </>
        )}
      </main>
      {panel !== null && colors[panel] && (
        <Suspense fallback={null}>
          <ColorPanel
            color={colors[panel]}
            t={(phrase) => translate(lang, phrase)}
            onChange={(c) => {
              const n = [...colors];
              n[panel] = c;
              setColors(n);
            }}
            onClose={() => setPanel(null)}
          />
        </Suspense>
      )}
    </div>
    </LangCtx.Provider>
  );
}
/* O cabecalho de ferramenta traz o indice em pixel da familia, do mesmo jeito
   que os servicos sao numerados no site. O rotulo de secao que ficava acima do
   titulo saiu: ele repetia o nome que ja esta marcado na navegacao, e um
   titulo nao precisa de uma etiqueta dizendo onde voce esta. */
function Hero({ tool }: { tool: Tool }) {
  const t = useT();
  /* "apoiar" nao esta na navegacao — chega pelo botao do topo —, entao o
     findIndex volta -1. Sem esta guarda o Hero escreveria "00" no lugar do
     indice. */
  const index = nav.findIndex((n) => n.id === tool) + 1;
  const temIndice = index > 0;
  return (
    <section className="mx-auto w-full pt-10 pb-9 border-b border-line mb-9" style={{ paddingInline: "var(--gut)", maxWidth: "var(--maxw)" }}>
      <div className="flex items-start gap-4 md:gap-6">
        {/* O indice divide a fonte com o titulo agora, entao ele deixou de ter
            um tamanho proprio: acompanha o mesmo clamp em 62%, e a entrelinha
            .82 alinha o topo dos dois sem precisar de margem de acerto. */}
        {temIndice && (
          <span
            className="pixel-n text-faint select-none shrink-0"
            style={{ fontSize: "clamp(27px, 3.5vw, 46px)", lineHeight: "0.82" }}
            aria-hidden="true"
          >
            {String(index).padStart(2, "0")}
          </span>
        )}
        <div className="min-w-0">
          <h1 className="page-title max-w-4xl">{t(titles[tool][0])}</h1>
          <p className="text-sm md:text-base text-muted mt-3 max-w-2xl leading-relaxed">
            {t(titles[tool][1])}
          </p>
        </div>
      </div>
    </section>
  );
}
/* ---------------------------------------------------------------
   Apoiar o projeto.

   O QR nao e desenhado por codigo aqui de proposito: um QR de PIX
   carrega a CHAVE de quem recebe, e um payload inventado ou copiado
   de exemplo manda dinheiro para o vazio — ou, pior, para a conta de
   outra pessoa. Entao a imagem entra como arquivo, exportada do
   proprio banco, e a chave aparece tambem em texto: na pratica a
   maioria das pessoas usa o "copia e cola", nao a camera.

   Enquanto o arquivo nao existir, o lugar dele fica marcado em vez de
   mostrar um QR quebrado.
   --------------------------------------------------------------- */
const PIX_QR = "/pix.png";
const PIX_CHAVE = "";

function Support() {
  const t = useT();
  const [copiado, setCopiado] = useState(false);
  const [semQr, setSemQr] = useState(false);
  return (
    /* Uma tela, sem rolagem. A altura e 100svh menos o header: svh e nao vh
       porque no celular a barra do navegador entra e sai, e com vh o rodape
       ficaria escondido atras dela justamente quando ela aparece.
       Abaixo de 900px de altura a trava cede e a pagina volta a rolar — e
       melhor rolar do que cortar o QR ao meio num notebook baixo. */
    <section
      className="flex flex-col overflow-hidden min-h-[640px] lg:h-[calc(100svh-80px)]"
      style={{ paddingInline: "var(--gut)" }}
    >
      <div className="mx-auto w-full flex-1 flex flex-col" style={{ maxWidth: "var(--maxw)" }}>
        {/* ---- manchete ----
            O titulo cabe numa linha so. Ele nao tem mais teto em ch: um
            max-w em ch quebrava "Ajude a manter no ar" no meio e sobrava
            um "no ar" orfao na segunda linha. Quem resolve agora e o
            .title-1line, que mede a caixa e escolhe o corpo — por isso o
            .fit-box aqui, que e o container de medida. */}
        <header className="fit-box pt-8 lg:pt-12 pb-7 border-b border-line">
          <h1 className="page-title title-1line">{t("Ajude a manter no ar")}</h1>
        </header>

        {/* ---- corpo: texto a esquerda, QR a direita, um fio no meio ----
            O fio nao e enfeite: sem ele as duas colunas ficavam boiando em
            lados opostos de um vazio de mais de meio metro de tela, e a
            pagina parecia inacabada em vez de arejada. Ele atravessa a
            altura toda (self-stretch) e desbota nas pontas, senao um risco
            reto de 600px pesaria mais que o conteudo. */}
        <div className="flex-1 grid lg:grid-cols-[auto_1px_auto] lg:justify-between gap-10 lg:gap-0 items-center py-8 lg:py-0 min-h-0">
          <div className="max-w-[46ch] space-y-6">
            <p className="text-[18px] lg:text-[22px] leading-[1.55] text-ink">
              {t(
                "O GR Colors é software aberto: o código está publicado, roda inteiro no seu navegador e não guarda nada sobre você. Não há conta, não há plano pago e não há anúncio.",
              )}
            </p>
            <p className="text-[15px] lg:text-[16px] leading-[1.65] text-muted">
              {t(
                "O que existe é uma conta de hospedagem e de domínio que chega todo mês. Se a ferramenta te poupou tempo em algum projeto, uma doação por PIX ajuda a manter ela no ar — de qualquer valor, uma vez só, sem cadastro.",
              )}
            </p>
          </div>

          <div
            className="hidden lg:block self-stretch w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-line) 14%, var(--color-line) 86%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* O QR fica grande: e a acao da pagina, e um codigo pequeno obriga a
              pessoa a chegar perto da tela com o celular. A chave mudou de
              lugar e passou a morar DENTRO do mesmo cartao: ler o codigo e
              copiar a chave sao a mesma acao feita de dois jeitos, e separar
              as duas em cantos opostos da tela era pedir para a pessoa
              escolher sem ter visto as opcoes juntas. */}
          <figure className="m-0 justify-self-start lg:justify-self-end shrink-0">
            <div className="rounded-3xl border border-line bg-surface shadow-panel p-4 xl:p-5">
              <div
                className={`size-[236px] lg:size-[268px] xl:size-[320px] grid place-items-center overflow-hidden rounded-2xl ${
                  semQr ? "border border-dashed border-line-strong bg-canvas" : ""
                }`}
              >
                {semQr ? (
                  <span className="text-[11px] text-faint text-center px-6 leading-relaxed">
                    {t("Coloque o QR do PIX em public/pix.png")}
                  </span>
                ) : (
                  <img
                    src={PIX_QR}
                    alt={t("QR Code do PIX para doação")}
                    className="size-full object-contain"
                    onError={() => setSemQr(true)}
                  />
                )}
              </div>

              {PIX_CHAVE && (
                <div className="mt-4 pt-4 border-t border-line">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-faint mb-2">
                    {t("Chave PIX")}
                  </p>
                  <button
                    onClick={() => {
                      copy(PIX_CHAVE);
                      setCopiado(true);
                      setTimeout(() => setCopiado(false), 1600);
                    }}
                    className="w-full flex items-center gap-3 bg-canvas border border-line rounded-xl px-3 py-2.5 text-left hover:border-line-strong hover:bg-accent-soft transition"
                  >
                    <span className="flex-1 min-w-0 truncate font-mono text-[13px] text-ink">
                      {PIX_CHAVE}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent shrink-0">
                      {t(copiado ? "Copiada!" : "Copiar")}
                    </span>
                  </button>
                </div>
              )}
            </div>
            <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold text-faint mt-4 text-center">
              {t("Aponte a câmera")}
            </figcaption>
          </figure>
        </div>

        {/* ---- rodape da secao ---- */}
        <footer className="border-t border-line py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-faint leading-relaxed max-w-[58ch]">
            {t(
              "Doar não desbloqueia nada: todas as ferramentas já são gratuitas para todo mundo, com ou sem doação.",
            )}
          </p>
          <span className="pixel-n text-faint text-2xl select-none" aria-hidden="true">
            PIX
          </span>
        </footer>
      </div>
    </section>
  );
}

function Generator({
  colors,
  setColors,
  locked,
  setLocked,
  generate,
  undo,
  redo,
  canUndo,
  canRedo,
  harmony,
  setHarmony,
  adjust,
  setAdjust,
  vision,
  setVision,
  info,
  setInfo,
  shuffleColors,
  saveCurrent,
  history,
  restore,
  openPanel,
  commit,
}: {
  colors: string[];
  setColors: (c: string[]) => void;
  locked: boolean[];
  setLocked: (v: boolean[]) => void;
  generate: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  harmony: Harmony;
  setHarmony: (h: Harmony) => void;
  adjust: Adjust;
  setAdjust: (a: Adjust) => void;
  vision: Vision;
  setVision: (v: Vision) => void;
  info: Info;
  setInfo: (i: Info) => void;
  shuffleColors: () => void;
  saveCurrent: () => void;
  history: string[][];
  restore: (c: string[]) => void;
  openPanel: (i: number | null) => void;
  commit: (c: string[]) => void;
}) {
  const t = useT();
  const [exporting, setExporting] = useState(false),
    [drag, setDrag] = useState<number | null>(null),
    [copied, setCopied] = useState(""),
    [insights, setInsights] = useState(false),
    [tuning, setTuning] = useState(false),
    [linked, setLinked] = useState(false),
    [settings, setSettings] = useState(false),
    [past, setPast] = useState(false),
    [zen, setZen] = useState(false),
    [isolated, setIsolated] = useState<number | null>(null),
    [focused, setFocused] = useState<number | null>(null),
    [draft, setDraft] = useState("");
  // O ajuste global é uma prévia: só entra na paleta quando aplicado.
  const shown = useMemo(
    () => colors.map((c) => applyAdjust(c, adjust)),
    [colors, adjust],
  );
  const dirty = (Object.keys(adjust) as (keyof Adjust)[]).some(
    (k) => adjust[k] !== neutralAdjust[k],
  );
  const applyTuning = () => {
    if (!dirty) return;
    commit(colors);
    setColors(shown);
    setAdjust(neutralAdjust);
  };
  const metrics = useMemo(() => paletteMetrics(colors), [colors]);
  const pairs = useMemo(() => adjacentContrast(shown), [shown]);
  const weakPairs = pairs.filter((p) => p.level === "ruim");
  const replace = (i: number, c: string) => {
    const n = [...colors];
    n[i] = c;
    setColors(n);
  };
  const commitCode = (i: number) => {
    const parsed = parseColor(draft.startsWith("#") ? draft : "#" + draft);
    if (parsed) replace(i, parsed);
  };
  const remove = (i: number) => {
    if (colors.length <= 2) return;
    commit(colors);
    setColors(colors.filter((_, x) => x !== i));
    setLocked(locked.filter((_, x) => x !== i));
  };
  const add = (i: number) => {
    if (colors.length >= 10) return;
    commit(colors);
    const n = [...colors];
    n.splice(i + 1, 0, randomColor());
    setColors(n);
    const l = [...locked];
    l.splice(i + 1, 0, false);
    setLocked(l);
  };
  const reorder = (to: number) => {
    if (drag === null || drag === to) return;
    commit(colors);
    const n = [...colors],
      l = [...locked],
      [c] = n.splice(drag, 1),
      [k] = l.splice(drag, 1);
    n.splice(to, 0, c);
    l.splice(to, 0, k);
    setColors(n);
    setLocked(l);
    setDrag(null);
  };
  const download = (body: BlobPart, ext: string, mime = "text/plain") => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([body], { type: mime }));
    a.download = `gr-colors-paleta.${ext}`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const exportFile = (
    type: "css" | "scss" | "json" | "svg" | "png" | "pdf" | "ase",
  ) => {
    if (type === "pdf") {
      download(pdfPalette(shown), "pdf", "application/pdf");
      return;
    }
    if (type === "ase") {
      download(asePalette(shown), "ase", "application/octet-stream");
      return;
    }
    if (type === "png") {
      const w = 1000,
        h = 300,
        cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      const ctx = cv.getContext("2d")!;
      shown.forEach((c, i) => {
        ctx.fillStyle = c;
        ctx.fillRect((i * w) / shown.length, 0, w / shown.length, h);
      });
      cv.toBlob((b) => b && download(b, "png", "image/png"));
      return;
    }
    const body =
      type === "css"
        ? cssPalette(shown)
        : type === "scss"
          ? scssPalette(shown)
          : type === "svg"
            ? svgPalette(shown)
            : JSON.stringify({ name: "Paleta GR Colors", colors: shown }, null, 2);
    download(body, type, type === "svg" ? "image/svg+xml" : "text/plain");
  };
  const shareUrl = () => `${location.origin}${BASE}${encodePalette(shown)}`;
  useEffect(() => {
    if (!zen && isolated === null) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (isolated !== null) setIsolated(null);
      else setZen(false);
    };
    addEventListener("keydown", fn);
    return () => removeEventListener("keydown", fn);
  }, [zen, isolated]);
  return (
      /* pb-5 e a folga de baixo da folha branca. Ela NAO pode ser margem na
         faixa: margem de bloco colapsa para fora deste div, a folha termina
         rente a faixa e os cantos arredondados ficam com branco na curva e
         cinza um pixel abaixo. Em padding, a sobra e a mesma dos lados. */
      <div className="bg-surface relative pb-3 md:pb-5">
        <div
          style={{ paddingInline: "var(--gut)" }}
          className={`h-[68px] items-center justify-between border-b border-line ${zen ? "hidden" : "flex"}`}
        >
        <div className="flex items-center gap-2">
          <button
            disabled={!canUndo}
            onClick={undo}
            title={t("Desfazer (Ctrl+Z)")}
            className="p-3 rounded-full hover:bg-fill text-muted disabled:opacity-20 transition"
          >
            <Undo2 size={19} />
          </button>
          <button
            disabled={!canRedo}
            onClick={redo}
            title={t("Refazer (Ctrl+Shift+Z)")}
            className="p-3 rounded-full hover:bg-fill text-muted disabled:opacity-20 transition"
          >
            <Redo2 size={19} />
          </button>
          <button
            onClick={saveCurrent}
            title={t("Salvar esta paleta")}
            className="p-3 rounded-full hover:bg-fill text-muted transition"
          >
            <Heart size={19} />
          </button>
          <button
            onClick={shuffleColors}
            title={t("Embaralhar a ordem das cores (S)")}
            className="p-3 rounded-full hover:bg-fill text-muted transition"
          >
            <Shuffle size={19} />
          </button>
          <button
            disabled={!history.length}
            onClick={() => {
              setPast(!past);
              setTuning(false);
              setInsights(false);
              setSettings(false);
            }}
            title={t("Paletas anteriores")}
            className={`p-3 rounded-full transition disabled:opacity-20 ${past ? "bg-accent text-accent-ink" : "text-muted hover:bg-fill"}`}
          >
            <History size={19} />
          </button>
          <select
            aria-label={t("Harmonia de cores")}
            value={harmony}
            onChange={(e) => setHarmony(e.target.value as Harmony)}
            className="bg-fill hover:bg-fill-strong rounded-full px-4 py-2.5 font-semibold text-sm outline-none transition cursor-pointer"
          >
            {(Object.keys(harmonyLabels) as Harmony[]).map((x) => (
              <option key={x} value={x}>
                {t(harmonyLabels[x])}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              setTuning(!tuning);
              setInsights(false);
            }}
            title={t("Ajustar a paleta inteira")}
            className={`px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition ${tuning || dirty ? "bg-accent text-accent-ink shadow-card" : "text-muted hover:bg-fill"}`}
          >
            <SlidersHorizontal size={17} />
            <span className="hidden sm:inline">{t("Ajustar")}</span>
          </button>
          <button
            onClick={() => {
              setInsights(!insights);
              setTuning(false);
            }}
            className={`hidden sm:block px-4 py-2.5 rounded-full text-sm font-semibold transition ${insights ? "bg-accent text-accent-ink shadow-card" : "text-muted hover:bg-fill"}`}
          >
            {t("Analisar")} · {metrics.score}
            {weakPairs.length > 0 && (
              <span
                title={`${weakPairs.length} par(es) de cores vizinhas com contraste muito baixo`}
                className={`ml-2 px-1.5 py-0.5 rounded-full text-[11px] ${insights ? "bg-white/25" : "bg-amber-100 text-amber-800"}`}
              >
                {weakPairs.length} ⚠
              </span>
            )}
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              setZen(true);
              setSettings(false);
              setPast(false);
              setTuning(false);
              setInsights(false);
            }}
            title={t("Modo zen — só as cores (Esc para sair)")}
            className="p-3 rounded-full text-muted hover:bg-fill transition"
          >
            <Maximize2 size={19} />
          </button>
          <button
            onClick={() => {
              setSettings(!settings);
              setPast(false);
            }}
            title={t("O que mostrar sob cada cor")}
            className={`p-3 rounded-full transition ${settings ? "bg-accent text-accent-ink" : "text-muted hover:bg-fill"}`}
          >
            <Settings2 size={19} />
          </button>
          <select
            aria-label={t("Simular visão de cores")}
            value={vision}
            onChange={(e) => setVision(e.target.value as Vision)}
            className={`hidden md:block rounded-full px-4 py-2.5 font-semibold text-sm outline-none transition cursor-pointer ${vision === "normal" ? "bg-fill hover:bg-fill-strong text-muted" : "bg-amber-400 text-amber-950"}`}
          >
            {(Object.keys(visionLabels) as Vision[]).map((v) => (
              <option key={v} value={v}>
                {t(visionLabels[v])}
              </option>
            ))}
          </select>
          <button
            onClick={() => setExporting(true)}
            className="flex gap-2 items-center rounded-full border border-line px-4 py-2.5 font-semibold text-muted hover:bg-fill transition"
          >
            <Download size={17} />
            <span className="hidden sm:inline">{t("Exportar")}</span>
          </button>
          <button
            onClick={generate}
            className="flex gap-2 items-center rounded-full bg-[#111] text-white px-5 py-2.5 font-semibold shadow-card hover:bg-ink transition"
          >
            <RefreshCw size={17} /> {t("Gerar")}
          </button>
        </div>
      </div>
      {settings && (
        <div className="absolute z-30 right-4 top-24 w-[min(320px,calc(100vw-2rem))] bg-surface rounded-2xl shadow-pop border border-line p-5">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold">{t("Info secundária")}</h3>
            <button onClick={() => setSettings(false)} aria-label={t("Fechar")}>
              <X size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {(Object.keys(infoLabels) as Info[]).map((m) => (
              <button
                key={m}
                onClick={() => setInfo(m)}
                className={`px-3 py-2.5 rounded-xl text-sm font-semibold transition ${info === m ? "bg-ink text-canvas" : "bg-fill hover:bg-fill-strong"}`}
              >
                {t(infoLabels[m])}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            {t("Aparece abaixo do código de cada cor.")}
          </p>
        </div>
      )}
      {past && (
        <div className="absolute z-30 left-4 top-24 w-[min(420px,calc(100vw-2rem))] max-h-[60vh] overflow-y-auto bg-surface rounded-2xl shadow-pop border border-line p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-accent">
                {history.length} anterior{history.length === 1 ? "" : "es"}
              </span>
              <h3 className="text-xl font-semibold mt-1">{t("Histórico")}</h3>
            </div>
            <button onClick={() => setPast(false)} aria-label={t("Fechar")}>
              <X size={18} />
            </button>
          </div>
          <div className="space-y-2">
            {[...history].reverse().map((h, i) => (
              <button
                key={i}
                onClick={() => {
                  restore(h);
                  setPast(false);
                }}
                className="w-full flex h-12 rounded-xl overflow-hidden ring-1 ring-line hover:ring-black/30 transition"
                title={h.join(", ")}
              >
                {h.map((c, j) => (
                  <i key={j} className="flex-1" style={{ background: c }} />
                ))}
              </button>
            ))}
          </div>
        </div>
      )}
      {tuning && (
        <div className="absolute z-30 left-4 top-24 w-[min(420px,calc(100vw-2rem))] bg-surface rounded-2xl shadow-pop border border-line p-5">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-accent">
                {t("Prévia ao vivo")}
              </span>
              <h3 className="text-xl font-semibold mt-1">{t("Ajustar paleta")}</h3>
            </div>
            <button onClick={() => setTuning(false)} aria-label={t("Fechar")}>
              <X size={18} />
            </button>
          </div>
          <div className="space-y-4 mt-5">
            {(
              [
                ["hue", "Matiz", -180, 180],
                ["sat", "Saturação", -100, 100],
                ["bright", "Brilho", -100, 100],
                ["temp", "Temperatura", -100, 100],
              ] as [keyof Adjust, string, number, number][]
            ).map(([key, label, min, max]) => (
              <label key={key} className="block">
                <span className="flex justify-between text-xs font-semibold mb-1.5">
                  <span className="uppercase tracking-wider text-muted">
                    {t(label)}
                  </span>
                  <span className="tabular-nums">
                    {adjust[key] > 0 ? "+" : ""}
                    {adjust[key]}
                  </span>
                </span>
                <input
                  type="range"
                  min={min}
                  max={max}
                  value={adjust[key]}
                  onChange={(e) =>
                    setAdjust({ ...adjust, [key]: Number(e.target.value) })
                  }
                  className="w-full accent-[var(--color-accent)] cursor-pointer"
                />
              </label>
            ))}
          </div>
          <div className="flex gap-2 mt-6">
            <button
              onClick={applyTuning}
              disabled={!dirty}
              className="flex-1 bg-ink text-canvas rounded-xl py-3 font-semibold disabled:opacity-25"
            >
              {t("Aplicar")}
            </button>
            <button
              onClick={() => setAdjust(neutralAdjust)}
              disabled={!dirty}
              className="px-5 rounded-xl border border-line font-semibold disabled:opacity-25"
            >
              {t("Redefinir")}
            </button>
          </div>
          <p className="text-xs text-muted mt-3">
            {t("As mudanças são só uma prévia até você aplicar — cores travadas também são afetadas.")}
          </p>
        </div>
      )}
      {insights && (
        <div className="absolute z-30 left-4 top-24 w-[min(420px,calc(100vw-2rem))] bg-surface rounded-2xl shadow-pop border border-line p-5">
          <div className="flex justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-accent">
                {t(harmonyLabels[harmony])}
              </span>
              <h3 className="text-xl font-semibold mt-1">
                {t("Qualidade da paleta")} · {metrics.score}/100
              </h3>
            </div>
            <button onClick={() => setInsights(false)}>
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-muted mt-3 leading-relaxed">
            {t(harmonyDescription(harmony))}
          </p>
          <div className="grid grid-cols-3 gap-2 mt-5">
            {[
              ["Amplitude tonal", `${metrics.tonalRange}%`],
              ["Saturação média", `${metrics.averageSaturation}%`],
              ["Par acessível", metrics.hasAccessiblePair ? "Sim" : "Não"],
            ].map((x) => (
              <div key={x[0]} className="bg-fill rounded-xl p-3">
                <small className="text-muted">{t(x[0])}</small>
                <b className="block mt-1">{t(x[1])}</b>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-4">
            {t("A nota considera hierarquia de luminosidade, saturação controlada e presença de cores capazes de formar pares WCAG AA.")}
          </p>
        </div>
      )}
      {zen && (
        <button
          onClick={() => setZen(false)}
          title={t("Sair do modo zen (Esc)")}
          className="fixed z-40 top-5 right-5 p-3 rounded-full bg-black/45 text-white backdrop-blur hover:bg-black/70 transition"
        >
          <Minimize2 size={19} />
        </button>
      )}
      <div
        className={`flex flex-col md:flex-row overflow-hidden ${
          zen
            ? "fixed inset-0 z-30 h-screen"
            : "h-[calc(100vh-192px)] min-h-[560px] mx-3 md:mx-5 rounded-3xl shadow-panel ring-1 ring-line"
        }`}
      >
        {shown.map((c, i) => {
          const view = simulateVision(c, vision);
          return (
          <section
            // A key não pode conter a cor: ela muda a cada tecla digitada no
            // campo HEX, remontando a faixa e derrubando o foco do input.
            key={i}
            draggable
            onDragStart={() => setDrag(i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => reorder(i)}
            onClick={() => {
              copy(c);
              setCopied(c);
              setTimeout(() => setCopied(""), 900);
            }}
            className={`group relative min-h-28 md:min-h-0 flex md:flex-col justify-between items-stretch md:items-center px-3 py-3 md:py-0 transition-[background-color,flex-grow] duration-500 ${
              isolated === null
                ? "flex-1"
                : isolated === i
                  ? "flex-[8]"
                  : "flex-[0.35]"
            }`}
            style={{ background: view, color: textOn(view) }}
          >
            <button
              title={t("Arraste para reordenar")}
              className="hidden md:block absolute top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-45 cursor-grab"
            >
              <GripVertical size={16} />
            </button>
            {/* O cadeado só existia dentro da barra que aparece no hover, então
                não havia como ver o que estava travado sem passar o mouse cor
                por cor — que é justamente o estado que precisa estar visível
                enquanto se aperta espaço. */}
            {locked[i] && (
              <span
                title={t("Cor travada: não muda ao gerar")}
                className="absolute top-3.5 left-3.5 md:left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm"
                style={{
                  background: "color-mix(in srgb, currentColor 16%, transparent)",
                }}
              >
                <Lock size={11} /> {t("travada")}
              </span>
            )}
            {/* A legenda da cor sai do centro da faixa e vai para o rodape,
                alinhada a esquerda. O eixo central e a silhueta do Coolors; uma
                legenda no pe da coluna e o gesto de ficha tecnica que a GR
                Brands usa no Sobre e no rodape. */}
            <div className="flex-1 flex flex-col items-start justify-end gap-1 p-4 md:p-5">
              <input
                aria-label={`${t("Cor")} ${i + 1}`}
                value={focused === i ? draft : c.replace("#", "").toUpperCase()}
                onFocus={(e) => {
                  setFocused(i);
                  setDraft(c.replace("#", "").toUpperCase());
                  e.currentTarget.select();
                }}
                onChange={(e) => {
                  const v = e.target.value;
                  setDraft(v);
                  const parsed = parseColor(v.startsWith("#") ? v : "#" + v);
                  if (parsed) replace(i, parsed);
                }}
                onBlur={() => {
                  commitCode(i);
                  setFocused(null);
                }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.currentTarget.blur();
                  if (e.key === "Escape") {
                    setDraft(c);
                    e.currentTarget.blur();
                  }
                }}
                title={t("Edite o HEX, RGB ou HSL da cor")}
                /* HEX na fonte de pixel da marca: e a letra que escreve os
                   numeros dos servicos no site e nao existe em nenhum gerador
                   de paleta por ai. */
                className="pixel-n w-full max-w-[11rem] text-left bg-transparent outline-none text-[34px] lg:text-[42px] uppercase rounded-md focus:bg-white/15 -ml-0.5 px-1"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] opacity-55">
                {t(colorName(c))}
              </p>
              {info !== "none" && info !== "name" && (
                <p className="text-xs font-semibold opacity-45 tabular-nums">
                  {formatInfo(c, info)}
                </p>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copy(c);
                  setCopied(c);
                  setTimeout(() => setCopied(""), 900);
                }}
                className={`text-[10px] font-semibold ${copied === c ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
              >
                {t(copied === c ? "COPIADO!" : "COPIAR")}
              </button>
            </div>
            <div
              className="flex md:flex-col gap-0.5 md:mb-6 justify-center items-center rounded-full p-1 backdrop-blur-sm opacity-85 md:opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition"
              style={{
                background: "color-mix(in srgb, currentColor 10%, transparent)",
              }}
            >
              <button
                title={t("Ver tons e informações")}
                onClick={(e) => {
                  e.stopPropagation();
                  openPanel(i);
                }}
                className="p-2.5 rounded-full hover:bg-white/20"
              >
                <PaletteIcon size={18} />
              </button>
              <button
                title={
                  isolated === i ? "Mostrar todas (Esc)" : "Isolar esta cor"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  setIsolated(isolated === i ? null : i);
                }}
                className={`p-2.5 rounded-full hover:bg-white/20 ${isolated === i ? "bg-white/25" : ""}`}
              >
                <Focus size={18} />
              </button>
              <button
                title={t("Copiar HEX")}
                onClick={(e) => {
                  e.stopPropagation();
                  copy(c);
                }}
                className="p-2.5 rounded-full hover:bg-white/20"
              >
                <Copy size={18} />
              </button>
              <button
                title={locked[i] ? "Destravar cor" : "Travar cor"}
                onClick={(e) => {
                  e.stopPropagation();
                  const n = [...locked];
                  n[i] = !n[i];
                  setLocked(n);
                }}
                className="p-2.5 rounded-full hover:bg-white/20"
              >
                {locked[i] ? <Lock size={18} /> : <Unlock size={18} />}
              </button>
              <button
                title={t("Remover cor")}
                disabled={colors.length <= 2}
                onClick={(e) => {
                  e.stopPropagation();
                  remove(i);
                }}
                className="p-2.5 rounded-full hover:bg-white/20 disabled:opacity-20"
              >
                <Trash2 size={18} />
              </button>
            </div>
            {pairs[i]?.level === "ruim" && (
              <span
                title={`Contraste de apenas ${pairs[i].ratio.toFixed(2)}:1 com a cor ao lado — elas quase se fundem.`}
                className="hidden md:grid absolute z-20 -right-3.5 bottom-8 size-7 place-items-center bg-amber-400 text-amber-950 rounded-full shadow-lg ring-2 ring-white"
              >
                <AlertTriangle size={14} />
              </span>
            )}
            {colors.length < 10 && (
              <button
                title={t("Adicionar cor")}
                onClick={(e) => {
                  e.stopPropagation();
                  add(i);
                }}
                /* Nas emendas o botao fica a cavaleiro das duas colunas. Na
                   ULTIMA nao da: ali a emenda e a borda arredondada da faixa,
                   e o overflow-hidden cortava o circulo ao meio. Entao o
                   ultimo entra para dentro. */
                className={`hidden md:grid absolute z-10 top-1/2 -translate-y-1/2 size-7 place-items-center bg-surface text-ink rounded-full shadow-lg opacity-0 group-hover:opacity-100 ${
                  i === colors.length - 1 ? "right-3" : "-right-3"
                }`}
              >
                <Plus size={15} />
              </button>
            )}
          </section>
          );
        })}
      </div>
      {/* A dica ocupa o rodapé para sempre no layout antigo. Depois da
          primeira geração ela já cumpriu o papel e vira ruído. */}
      {!history.length && !zen && (
        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-1/2">
          <span className="pointer-events-auto flex items-center gap-2 text-sm font-semibold text-muted bg-surface/90 backdrop-blur px-4 py-2.5 rounded-full shadow-pop border border-line">
            {t("Pressione")}
            <kbd className="font-semibold bg-fill rounded-md px-2 py-0.5 text-xs border border-line-strong">
              {t("espaço")}
            </kbd>
            {t("para gerar paletas")}
          </span>
        </div>
      )}
      {exporting && (
        <div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm grid place-items-center p-5"
          onMouseDown={() => setExporting(false)}
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className="bg-surface rounded-3xl p-7 w-full max-w-lg shadow-pop"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold">{t("Exportar paleta")}</h2>
                <p className="text-muted mt-1">
                  {t("Leve estas cores para qualquer projeto.")}
                </p>
              </div>
              <button
                onClick={() => setExporting(false)}
                className="p-2 rounded-full hover:bg-fill"
              >
                <X />
              </button>
            </div>
            <div className="flex h-24 rounded-2xl overflow-hidden my-7 ring-1 ring-line">
              {shown.map((c, i) => (
                <span
                  key={`${i}-${c}`}
                  className="flex-1 flex items-end justify-center pb-2 text-[9px] font-semibold tracking-wider"
                  style={{ background: c, color: textOn(c) }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {(
                [
                  ["css", "CSS", "Variáveis :root", Code2],
                  ["scss", "SCSS", "Variáveis $", Code2],
                  ["json", "JSON", "Arquivo de dados", Download],
                  ["svg", "SVG", "Vetor 1000×300", Download],
                  ["png", "PNG", "Imagem 1000×300", Download],
                  ["pdf", "PDF", "Folha A4 com valores e contraste", FileText],
                  ["ase", "ASE", "Adobe Swatch", Layers],
                ] as const
              ).map(([type, label, hint, Icon]) => (
                <button
                  key={type}
                  onClick={() => exportFile(type)}
                  className="border border-line rounded-2xl p-4 text-left transition hover:border-line-strong hover:bg-fill"
                >
                  <Icon className="mb-3 text-muted" size={20} />
                  <b>{label}</b>
                  <p className="text-xs text-muted mt-1">{hint}</p>
                </button>
              ))}
              <button
                onClick={() => {
                  copy(shareUrl());
                  setLinked(true);
                  setTimeout(() => setLinked(false), 1200);
                }}
                className="border border-line rounded-2xl p-4 text-left transition hover:border-line-strong hover:bg-fill"
              >
                {linked ? (
                  <Check className="mb-3 text-green-600" size={20} />
                ) : (
                  <Share2 className="mb-3" size={20} />
                )}
                <b>{linked ? "Copiado!" : "Link"}</b>
                <p className="text-xs text-muted mt-1">{t("URL da paleta")}</p>
              </button>
            </div>
            <button
              onClick={() => {
                copy(shown.join(", "));
                setExporting(false);
              }}
              className="w-full mt-3 bg-ink text-canvas rounded-xl py-3 font-semibold flex justify-center gap-2"
            >
              <Copy size={17} /> {t("Copiar códigos HEX")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
function PaletteCard({
  p,
  open,
  save,
  remove,
}: {
  p: Palette;
  open: (p: Palette) => void;
  save: (p: Palette) => void;
  remove?: (id: string) => void;
}) {
  const t = useT();
  return (
    <article className="bg-surface rounded-3xl p-3 border border-line shadow-card hover:shadow-md transition">
      <button
        onClick={() => open(p)}
        className="w-full h-32 rounded-2xl overflow-hidden flex"
      >
        {p.colors.map((c) => (
          <i key={c} className="h-full flex-1" style={{ background: c }} />
        ))}
      </button>
      <div className="flex justify-between items-center p-2 pt-4">
        <div>
          <b>{t(p.name)}</b>
          <p className="text-xs text-muted mt-1">{p.colors.join(" · ")}</p>
        </div>
        <div className="flex shrink-0">
          {remove ? (
            <button
              onClick={() => remove(p.id)}
              title={t("Remover dos salvos")}
              className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full"
            >
              <Trash2 size={18} />
            </button>
          ) : (
            <button
              onClick={() => save(p)}
              title={t("Salvar")}
              className="p-2 hover:bg-fill rounded-full"
            >
              <Heart size={18} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
const familySwatch: Record<Family, string> = {
  red: "#E23B3B",
  orange: "#F08A24",
  yellow: "#F2C230",
  green: "#3EA75A",
  turquoise: "#25B5AE",
  blue: "#2F6FE0",
  violet: "#8347D9",
  pink: "#E24C93",
  white: "#FFFFFF",
  gray: "#9A9A9A",
  black: "#1A1A1A",
};
function Explore({
  saved,
  open,
  save,
  remove,
}: {
  saved: Palette[];
  open: (p: Palette) => void;
  save: (p: Palette) => void;
  remove: (id: string) => void;
}) {
  const t = useT();
  const [q, setQ] = useState(""),
    [style, setStyle] = useState<Style | null>(null),
    [family, setFamily] = useState<Family | null>(null),
    [sort, setSort] = useState<"recent" | "name" | "light" | "dark">("recent");
  const savedIds = new Set(saved.map((p) => p.id));
  const all = useMemo(() => {
    const list = [...saved, ...getPresets()].filter((p) => {
      const term = q.trim();
      if (
        term &&
        !p.name.toLowerCase().includes(term.toLowerCase()) &&
        !p.colors.some((c) => c.includes(term.toUpperCase().replace("#", "")))
      )
        return false;
      if (style && !paletteStyles(p.colors).includes(style)) return false;
      if (family && !paletteFamilies(p.colors).includes(family)) return false;
      return true;
    });
    const lum = (p: Palette) =>
      p.colors.reduce((a, c) => a + luminance(c), 0) / p.colors.length;
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
    if (sort === "light") list.sort((a, b) => lum(b) - lum(a));
    if (sort === "dark") list.sort((a, b) => lum(a) - lum(b));
    if (sort === "recent")
      list.sort((a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0));
    return list;
  }, [saved, q, style, family, sort]);

  const Chip = ({
    active,
    onClick,
    children,
    swatch,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    swatch?: string;
  }) => (
    <button
      onClick={onClick}
      className={`px-3.5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${active ? "bg-ink text-canvas" : "bg-surface border border-line hover:border-line-strong"}`}
    >
      {swatch && (
        <i
          className="size-3 rounded-full ring-1 ring-line"
          style={{ background: swatch }}
        />
      )}
      {children}
    </button>
  );

  return (
    <>
      <div className="bg-surface border border-line rounded-full px-5 flex items-center mb-5 focus-within:border-line-strong transition">
        <Search size={19} className="text-faint" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("Busque por nome ou código hexadecimal")}
          className="p-4 outline-none flex-1 bg-transparent"
        />
        {q && (
          <button onClick={() => setQ("")} aria-label={t("Limpar busca")}>
            <X size={17} className="text-faint" />
          </button>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-faint w-14">
            {t("Estilo")}
          </span>
          {(Object.keys(styleLabels) as Style[]).map((x) => (
            <Chip
              key={x}
              active={style === x}
              onClick={() => setStyle(style === x ? null : x)}
            >
              {t(styleLabels[x])}
            </Chip>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-faint w-14">
            {t("Cor")}
          </span>
          {(Object.keys(familyLabels) as Family[]).map((x) => (
            <Chip
              key={x}
              active={family === x}
              onClick={() => setFamily(family === x ? null : x)}
              swatch={familySwatch[x]}
            >
              {t(familyLabels[x])}
            </Chip>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 justify-between items-center mb-6">
        <p className="text-sm text-muted">
          {all.length} paleta{all.length === 1 ? "" : "s"}
          {(style || family || q) && (
            <button
              onClick={() => {
                setStyle(null);
                setFamily(null);
                setQ("");
              }}
              className="ml-3 font-semibold text-muted hover:text-ink underline underline-offset-2"
            >
              limpar filtros
            </button>
          )}
        </p>
        <select
          aria-label={t("Ordenar paletas")}
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="bg-surface border border-line rounded-full px-4 py-2.5 font-semibold text-sm outline-none cursor-pointer"
        >
          <option value="recent">{t("Mais recentes")}</option>
          <option value="name">{t("Nome (A–Z)")}</option>
          <option value="light">{t("Mais claras")}</option>
          <option value="dark">{t("Mais escuras")}</option>
        </select>
      </div>

      {!all.length && (
        <div className="text-center py-24 text-faint">
          <PaletteIcon className="mx-auto mb-4" size={40} />
          <p className="font-semibold">{t("Nenhuma paleta com esses filtros.")}</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {all.map((p, i) => (
          <PaletteCard
            key={p.id + i}
            p={p}
            open={open}
            save={save}
            remove={savedIds.has(p.id) ? remove : undefined}
          />
        ))}
      </div>
    </>
  );
}
function ImagePicker({
  onColors,
  onOpen,
}: {
  onColors: (c: string[]) => void;
  onOpen: (c: string[]) => void;
}) {
  const t = useT();
  const [src, setSrc] = useState(""),
    [points, setPoints] = useState<{ x: number; y: number }[]>([]),
    [dragging, setDragging] = useState<number | null>(null),
    [urlInput, setUrlInput] = useState(""),
    [error, setError] = useState(""),
    canvas = useRef<HTMLCanvasElement>(null),
    box = useRef<HTMLDivElement>(null);

  /** Média de uma vizinhança 5×5 — um pixel só pega ruído de compressão. */
  const sampleAt = (nx: number, ny: number) => {
    const cv = canvas.current;
    if (!cv || !cv.width) return "#000000";
    const x = Math.max(0, Math.min(cv.width - 1, Math.round(nx * cv.width))),
      y = Math.max(0, Math.min(cv.height - 1, Math.round(ny * cv.height))),
      r = 2,
      x0 = Math.max(0, x - r),
      y0 = Math.max(0, y - r),
      w = Math.min(cv.width - x0, r * 2 + 1),
      h = Math.min(cv.height - y0, r * 2 + 1);
    const d = cv.getContext("2d", { willReadFrequently: true })!.getImageData(x0, y0, w, h).data;
    let sr = 0, sg = 0, sb = 0, n = 0;
    for (let i = 0; i < d.length; i += 4) {
      sr += d[i];
      sg += d[i + 1];
      sb += d[i + 2];
      n++;
    }
    return (
      "#" +
      [sr / n, sg / n, sb / n]
        .map((v) => Math.round(v).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };

  const colors = points.map((p) => sampleAt(p.x, p.y));
  const grab = useRef({ dx: 0, dy: 0 });
  const publish = (pts: { x: number; y: number }[]) =>
    onColors(pts.map((p) => sampleAt(p.x, p.y)));

  const analyse = (img: HTMLImageElement) => {
    const cv = canvas.current!,
      // Resolução generosa: a fidelidade da cor vem daqui.
      scale = Math.min(1, 900 / Math.max(img.naturalWidth, img.naturalHeight));
    cv.width = Math.max(1, Math.round(img.naturalWidth * scale));
    cv.height = Math.max(1, Math.round(img.naturalHeight * scale));
    const ctx = cv.getContext("2d", { willReadFrequently: true })!;
    ctx.drawImage(img, 0, 0, cv.width, cv.height);
    const d = ctx.getImageData(0, 0, cv.width, cv.height).data;

    // Agrupa em 16 níveis por canal, mas guarda a soma real para não
    // devolver o centro do balde no lugar da cor que estava lá.
    type Bin = { n: number; r: number; g: number; b: number; x: number; y: number };
    const bins = new Map<number, Bin>();
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] < 128) continue;
      const [r, g, b] = [d[i], d[i + 1], d[i + 2]];
      const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
      const px = (i / 4) % cv.width,
        py = Math.floor(i / 4 / cv.width);
      const e = bins.get(key);
      if (e) {
        e.n++; e.r += r; e.g += g; e.b += b; e.x += px; e.y += py;
      } else bins.set(key, { n: 1, r, g, b, x: px, y: py });
    }
    const ranked = [...bins.values()]
      .sort((a, b) => b.n - a.n)
      .map((e) => ({
        hex:
          "#" +
          [e.r / e.n, e.g / e.n, e.b / e.n]
            .map((v) => Math.round(v).toString(16).padStart(2, "0"))
            .join("")
            .toUpperCase(),
        x: e.x / e.n / cv.width,
        y: e.y / e.n / cv.height,
      }));

    // Descarta candidatos perceptualmente quase idênticos aos já escolhidos.
    const picked: typeof ranked = [];
    for (const c of ranked) {
      if (picked.length >= 5) break;
      if (picked.every((p) => deltaE(p.hex, c.hex) > 12)) picked.push(c);
    }
    while (picked.length < 5 && ranked.length)
      picked.push(ranked[picked.length % ranked.length]);

    const pts = picked.map((p) => ({ x: p.x, y: p.y }));
    setPoints(pts);
    onColors(pts.map((p) => sampleAt(p.x, p.y)));
  };

  const loadFrom = (url: string, revoke = false) => {
    setError("");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        analyse(img);
        setSrc(url);
      } catch {
        setError("Não consegui ler os pixels dessa imagem.");
        if (revoke) URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      setError("Não consegui carregar essa imagem.");
      if (revoke) URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const move = (i: number, clientX: number, clientY: number) => {
    const rect = box.current!.getBoundingClientRect();
    const { dx, dy } = grab.current;
    const x = Math.max(0, Math.min(1, (clientX - dx - rect.left) / rect.width)),
      y = Math.max(0, Math.min(1, (clientY - dy - rect.top) / rect.height));
    setPoints((ps) => {
      const next = ps.map((p, j) => (j === i ? { x, y } : p));
      publish(next);
      return next;
    });
  };

  useEffect(() => {
    if (dragging === null) return;
    const onMove = (e: PointerEvent) => move(dragging, e.clientX, e.clientY);
    const onUp = () => setDragging(null);
    addEventListener("pointermove", onMove);
    addEventListener("pointerup", onUp);
    return () => {
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerup", onUp);
    };
  }, [dragging]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-3">
        <div
          ref={box}
          className="relative min-h-96 bg-surface border-2 border-dashed border-line rounded-3xl overflow-hidden select-none"
        >
          {src ? (
            <>
              <img
                src={src}
                alt=""
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
              />
              {points.map((p, i) => (
                <button
                  key={i}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    // Guarda a distância entre o cursor e a ponta: sem isso o
                    // marcador salta para debaixo do dedo assim que é tocado, e
                    // o ponto que estava sendo lido se perde.
                    const rect = box.current!.getBoundingClientRect();
                    grab.current = {
                      dx: e.clientX - (rect.left + p.x * rect.width),
                      dy: e.clientY - (rect.top + p.y * rect.height),
                    };
                    setDragging(i);
                  }}
                  title={`${t("Ponto")} ${i + 1} — ${t("arraste a mira para o pixel desejado")}`}
                  /* A mira fica a 55.5 de 62 do topo do SVG: o deslocamento
                     leva esse ponto — e nao a base da caixa — para cima do
                     pixel lido. */
                  className={`absolute cursor-grab active:cursor-grabbing transition-transform ${
                    dragging === i ? "scale-110 z-20" : "hover:scale-105 z-10"
                  }`}
                  style={{
                    left: `${p.x * 100}%`,
                    top: `${p.y * 100}%`,
                    transform: "translate(-50%, -55.5px)",
                    transformOrigin: "50% 55.5px",
                  }}
                >
                  {/* A gota de mapa saiu. Um marcador de mapa aponta um LUGAR;
                      aqui a peca esta medindo um PIXEL, e as duas coisas nao se
                      desenham igual. No lugar dela: uma mira fina exatamente
                      sobre o ponto lido, uma haste de 1px e, no alto, uma placa
                      quadrada com a cor e o indice em pixel — retangulo e fio,
                      que e o vocabulario do site, em vez de balao arredondado.

                      Tudo em SVG com traco duplo (branco por fora, preto
                      translucido por dentro): a peca fica legivel tanto sobre
                      uma foto clara quanto sobre uma escura, sem depender de
                      sombra. */}
                  <svg
                    width="46"
                    height="62"
                    viewBox="0 0 46 62"
                    className="block overflow-visible"
                  >
                    {/* haste */}
                    <line
                      x1="23" y1="34" x2="23" y2="55"
                      stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"
                    />
                    <line
                      x1="23" y1="34" x2="23" y2="55"
                      stroke="rgba(0,0,0,.45)" strokeWidth="1" strokeLinecap="round"
                    />
                    {/* placa da cor */}
                    <rect
                      x="4.5" y="2.5" width="37" height="32" rx="6"
                      fill={colors[i] || "#888888"}
                      stroke="#FFFFFF" strokeWidth="3"
                    />
                    <rect
                      x="4.5" y="2.5" width="37" height="32" rx="6"
                      fill="none" stroke="rgba(0,0,0,.32)" strokeWidth="1"
                    />
                    <text
                      x="23" y="24"
                      textAnchor="middle"
                      fontSize="17"
                      fontFamily="'Jersey 10', 'Courier New', monospace"
                      fill={textOn(colors[i] || "#888888")}
                    >
                      {i + 1}
                    </text>
                    {/* mira: o cruzamento cai no pixel que esta sendo lido */}
                    <g stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round">
                      <line x1="23" y1="49" x2="23" y2="62" />
                      <line x1="16.5" y1="55.5" x2="29.5" y2="55.5" />
                    </g>
                    <g stroke="rgba(0,0,0,.5)" strokeWidth="1" strokeLinecap="round">
                      <line x1="23" y1="49" x2="23" y2="62" />
                      <line x1="16.5" y1="55.5" x2="29.5" y2="55.5" />
                    </g>
                    <circle
                      cx="23" cy="55.5" r="3.6"
                      fill="none" stroke="#FFFFFF" strokeWidth="2.6"
                    />
                    <circle
                      cx="23" cy="55.5" r="3.6"
                      fill="none" stroke="rgba(0,0,0,.5)" strokeWidth="0.9"
                    />
                  </svg>
                </button>
              ))}
            </>
          ) : (
            <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer">
              <span className="p-5 rounded-full bg-accent-soft text-accent mb-4">
                <Upload />
              </span>
              <b>{t("Escolha uma imagem")}</b>
              <small className="text-muted mt-2">{t("PNG, JPG ou WEBP")}</small>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) =>
                  e.target.files?.[0] &&
                  loadFrom(URL.createObjectURL(e.target.files[0]), true)
                }
              />
            </label>
          )}
        </div>

        <div className="flex gap-2">
          <label className="px-4 py-3 rounded-xl bg-ink text-canvas font-semibold text-sm cursor-pointer shrink-0">
            {t("Trocar imagem")}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                e.target.files?.[0] &&
                loadFrom(URL.createObjectURL(e.target.files[0]), true)
              }
            />
          </label>
          <input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && urlInput.trim() && loadFrom(urlInput.trim())
            }
            placeholder={t("ou cole o endereço de uma imagem")}
            className="flex-1 min-w-0 bg-surface border border-line rounded-xl px-4 outline-none focus:border-line-strong transition"
          />
        </div>
        {error && (
          <p className="text-sm font-semibold text-red-600">
            {error} Sites que bloqueiam acesso externo impedem a leitura dos
            pixels.
          </p>
        )}
      </div>

      <div className="bg-surface rounded-3xl p-7 border border-line">
        <h2 className="text-2xl font-semibold mb-1">{t("Cores extraídas")}</h2>
        <p className="text-sm text-muted mb-5">
          {t("Os cinco pontos começam nas cores predominantes. Arraste qualquer um sobre a imagem para trocar a cor.")}
        </p>
        {colors.length ? (
          <>
            {colors.map((c, i) => (
              <button
                onClick={() => copy(c)}
                key={i}
                title={t("Copiar")}
                className="w-full h-14 px-4 flex items-center gap-3 font-semibold rounded-xl mb-2"
                style={{ background: c, color: textOn(c) }}
              >
                <span className="size-6 grid place-items-center rounded-full bg-black/20 text-[11px]">
                  {i + 1}
                </span>
                <span className="flex-1 text-left">{c}</span>
                <Copy size={17} />
              </button>
            ))}
            <button
              onClick={() => copy(colors.join(", "))}
              className="w-full mt-3 border border-line rounded-xl py-3 font-semibold flex justify-center gap-2"
            >
              <Copy size={17} /> Copiar todos
            </button>
            <button
              onClick={() => onOpen(colors)}
              className="w-full mt-2 bg-ink text-canvas rounded-xl py-3 font-semibold flex justify-center gap-2"
            >
              <PaletteIcon size={17} /> {t("Editar no gerador")}
            </button>
          </>
        ) : (
          <p className="text-muted">{t("Envie uma imagem para começar.")}</p>
        )}
        <canvas ref={canvas} hidden />
      </div>
    </div>
  );
}
const targets = [
  { value: 3, label: "AA grande", note: "texto ≥24px ou ≥18.66px negrito" },
  { value: 4.5, label: "AA", note: "texto corrido, o piso legal na maioria dos casos" },
  { value: 7, label: "AAA", note: "leitura prolongada, baixa visão" },
] as const;

function Badge({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold inline-flex items-center gap-1 ${
        ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700"
      }`}
    >
      {ok ? <Check size={11} /> : <X size={11} />}
      {children}
    </span>
  );
}

function Contrast({
  palette,
  setColors,
}: {
  palette: string[];
  setColors: (c: string[]) => void;
}) {
  const t = useT();
  const [fg, setFg] = useState("#6B7280"),
    [bg, setBg] = useState("#FFFFFF"),
    [target, setTarget] = useState<number>(4.5);
  const report = contrastReport(fg, bg);
  const ratio = report.ratio;
  const lc = apca(fg, bg);
  const guide = apcaGuidance(lc);
  const fixes = contrastFixes(fg, bg, target);
  const audit = paletteAudit(palette);
  const matrix = contrastMatrix(palette);
  const risks = visionRisks(palette);
  const passes = ratio >= target;

  const swap = () => {
    setFg(bg);
    setBg(fg);
  };

  return (
    <div className="space-y-5">
      {/* ---------- par + veredito ---------- */}
      <div className="grid xl:grid-cols-[1fr_1.35fr] gap-5">
        <div className="bg-surface rounded-3xl border border-line p-6 space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="sec-title">{t("Par em análise")}</h2>
              <p className="text-xs text-muted">
                {t("Uma cor de texto sobre uma cor de fundo.")}
              </p>
            </div>
            <button
              onClick={swap}
              className="px-3 py-2 rounded-xl bg-fill hover:bg-fill-strong text-sm font-semibold flex items-center gap-2 shrink-0"
            >
              <RefreshCw size={14} /> Inverter
            </button>
          </div>

          {(
            [
              ["Texto", fg, setFg],
              ["Fundo", bg, setBg],
            ] as const
          ).map(([label, value, set]) => (
            <div key={label}>
              <div className="flex items-baseline justify-between mb-2">
                <b className="text-sm">{label}</b>
                <span className="text-[11px] text-muted">
                  {t(colorName(value))} · L* {hexToLab(value)[0].toFixed(0)}
                </span>
              </div>
              <span className="border border-line rounded-xl p-2 flex items-center gap-2">
                <input
                  type="color"
                  value={value.toLowerCase()}
                  onChange={(e) => set(e.target.value.toUpperCase())}
                  aria-label={`Escolher ${label.toLowerCase()}`}
                  className="size-9 border-0 bg-transparent shrink-0"
                />
                <HexField
                  value={value}
                  onChange={set}
                  ariaLabel={`Código hexadecimal de ${label.toLowerCase()}`}
                  className="p-1 outline-none font-mono flex-1 min-w-0"
                />
              </span>
              {palette.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {palette.map((c, i) => (
                    <button
                      key={`${c}-${i}`}
                      title={`Usar ${c} como ${label.toLowerCase()}`}
                      onClick={() => set(c)}
                      className={`size-6 rounded-md ring-1 transition ${
                        value === c ? "ring-2 ring-ink" : "ring-line hover:ring-line-strong"
                      }`}
                      style={{ background: c }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          <div>
            <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-faint">
              {t("Meta")}
            </span>
            <div className="flex gap-1.5 mt-2">
              {targets.map((targetOption) => (
                <button
                  key={targetOption.value}
                  onClick={() => setTarget(targetOption.value)}
                  title={t(targetOption.note)}
                  className={`flex-1 px-2 py-2 rounded-xl text-xs font-semibold transition ${
                    target === targetOption.value
                      ? "bg-ink text-canvas"
                      : "bg-fill hover:bg-fill-strong"
                  }`}
                >
                  {t(targetOption.label)}
                  <span className="block font-mono opacity-60 text-[10px]">
                    {targetOption.value}:1
                  </span>
                </button>
              ))}
            </div>
            <p className="text-[11px] text-muted mt-2">
              {targets.find((t) => t.value === target)?.note}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div
            className={`rounded-3xl border p-6 flex flex-col justify-between ${
              passes ? "border-green-200 bg-green-50/50" : "border-red-200 bg-red-50/40"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                WCAG 2.2
                <span className="font-normal normal-case tracking-normal text-faint">
                  {t("norma vigente")}
                </span>
              </div>
              <div className="text-5xl font-semibold tabular-nums mt-3">
                {ratio.toFixed(2)}
                <span className="text-2xl text-muted">:1</span>
              </div>
              <div
                className={`text-sm font-semibold mt-1 ${
                  passes ? "text-green-800" : "text-red-700"
                }`}
              >
                {passes
                  ? `Passa em ${targets.find((t) => t.value === target)?.label}`
                  : `Faltam ${(target - ratio).toFixed(2)} para a meta`}
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-5">
              <Badge ok={report.smallAA}>{t("AA texto")}</Badge>
              <Badge ok={report.smallAAA}>{t("AAA texto")}</Badge>
              <Badge ok={report.largeAA}>{t("AA grande")}</Badge>
              <Badge ok={report.largeAAA}>{t("AAA grande")}</Badge>
              <Badge ok={ratio >= 3}>{t("Componentes 3:1")}</Badge>
            </div>
            <p className="text-[11px] text-muted mt-3 leading-relaxed">
              {t("A razão do WCAG 2 compara só a luminância, e trata os dois sentidos como iguais: trocar texto e fundo não muda este número.")}
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-surface p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                APCA
                <span className="font-normal normal-case tracking-normal text-faint">
                  {t("rascunho WCAG 3")}
                </span>
              </div>
              <div className="text-5xl font-semibold tabular-nums mt-3">
                {lc > 0 ? "+" : ""}
                {lc.toFixed(1)}
                <span className="text-2xl text-muted"> Lc</span>
              </div>
              <div className="text-sm font-semibold mt-1">
                {t(lc > 0 ? "Texto escuro sobre claro" : lc < 0 ? "Texto claro sobre escuro" : "Sem diferença")}
              </div>
            </div>
            <div className="mt-5">
              <div className="h-2 rounded-full bg-fill overflow-hidden">
                <div
                  className="h-full rounded-full bg-ink transition-all"
                  style={{ width: `${Math.min(100, (Math.abs(lc) / 108) * 100)}%` }}
                />
              </div>
              <b className="block text-sm mt-2.5">{t(guide.label)}</b>
              <p className="text-[11px] text-muted">{t(guide.detail)}</p>
            </div>
            <p className="text-[11px] text-muted mt-3 leading-relaxed">
              {t("O APCA mede cada polaridade em separado e responde em tamanho de fonte, não em aprovado/reprovado. Ainda é rascunho — aqui ele informa, quem decide é o WCAG 2.")}
            </p>
          </div>
        </div>
      </div>

      {/* ---------- prévia em tamanhos reais ---------- */}
      <section
        className="rounded-3xl border border-line p-8 md:p-10"
        style={{ background: bg, color: fg }}
      >
        <div className="flex items-center justify-between gap-4 mb-7 flex-wrap">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold opacity-60">
              {t("Prévia nos tamanhos que a norma define")}
            </span>
            <p className="text-sm opacity-70 mt-1">
              {t("18.66px em negrito e 24px são exatamente os limites de “texto grande” do WCAG, convertidos de 14pt e 18pt.")}
            </p>
          </div>
          <span
            className="px-3 py-1.5 rounded-full text-xs font-semibold shrink-0"
            style={{ background: fg, color: bg }}
          >
            {ratio.toFixed(2)}:1
          </span>
        </div>
        <div className="space-y-5">
          {textSpecs.map((spec) => {
            const good = ratio >= spec.need;
            return (
              <div
                key={spec.label}
                className="flex items-baseline gap-4 flex-wrap border-t pt-4 first:border-0 first:pt-0"
                style={{ borderColor: `color-mix(in srgb, ${fg} 18%, transparent)` }}
              >
                <span
                  className="text-[11px] font-mono w-40 shrink-0 opacity-60"
                  style={{ fontSize: 11 }}
                >
                  {t(spec.label)}
                </span>
                <span
                  className="flex-1 min-w-56"
                  style={{ fontSize: spec.px, fontWeight: spec.weight, lineHeight: 1.35 }}
                >
                  {t("Contraste é o que separa ler de adivinhar.")}
                </span>
                <span
                  className="text-[11px] font-semibold px-2 py-1 rounded-full shrink-0"
                  style={{
                    background: good ? fg : "transparent",
                    color: good ? bg : fg,
                    border: `1px solid ${fg}`,
                  }}
                >
                  {good ? "passa" : "reprova"} · precisa {spec.need}:1
                </span>
              </div>
            );
          })}
        </div>
        <div
          className="mt-8 pt-7 flex flex-wrap items-center gap-4 border-t"
          style={{ borderColor: `color-mix(in srgb, ${fg} 18%, transparent)` }}
        >
          <button
            className="px-5 py-3 rounded-xl font-semibold"
            style={{ background: fg, color: bg }}
          >
            {t("Botão preenchido")}
          </button>
          <button
            className="px-5 py-3 rounded-xl font-semibold border-2"
            style={{ borderColor: fg }}
          >
            {t("Botão de contorno")}
          </button>
          <span className="text-sm underline underline-offset-4 decoration-2">
            {t("Um link dentro do texto")}
          </span>
          <span className="text-sm opacity-60">
            {t("Texto secundário a 60% — some antes do resto")}
          </span>
        </div>
      </section>

      {/* ---------- correções ---------- */}
      <section className="bg-surface rounded-3xl border border-line p-6">
        <div className="flex items-end justify-between gap-4 mb-4 flex-wrap">
          <div>
            <h2 className="sec-title">
              {passes ? "Este par já passa" : `Três formas de chegar a ${target}:1`}
            </h2>
            <p className="text-sm text-muted">
              {passes
                ? "Aumente a meta para ver o que seria preciso mudar."
                : "Ordenadas pelo desvio das cores originais, medido em CIELAB. Mexer no fundo costuma custar menos que mexer no texto."}
            </p>
          </div>
          {!passes && fixes.length > 0 && (
            <span className="text-xs font-semibold text-muted">
              mais barata: {fixes[0].label.toLowerCase()}, desvio {fixes[0].shift.toFixed(1)} ΔE
            </span>
          )}
        </div>
        {passes ? (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 text-green-900">
            <Check size={20} className="shrink-0" />
            <p className="text-sm font-semibold">
              {ratio.toFixed(2)}:1 supera a meta de {target}:1
              {report.smallAAA ? " e ainda alcança AAA para texto corrido." : "."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-3">
            {fixes.map((fix, i) => (
              <button
                key={fix.strategy}
                onClick={() => {
                  setFg(fix.fg);
                  setBg(fix.bg);
                }}
                className={`text-left rounded-2xl border p-4 transition hover:border-line-strong ${
                  i === 0 ? "border-ink" : "border-line"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <b className="text-sm">{t(fix.label)}</b>
                  {i === 0 && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-ink text-canvas">
                      menor desvio
                    </span>
                  )}
                </div>
                <div
                  className="rounded-xl h-16 flex items-center justify-center font-semibold mb-3"
                  style={{ background: fix.bg, color: fix.fg }}
                >
                  {t("Texto de exemplo")}
                </div>
                <div className="flex justify-between text-[11px] font-mono text-muted">
                  <span>{fix.fg}</span>
                  <span>{fix.bg}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold mt-2">
                  <span>{fix.ratio.toFixed(2)}:1</span>
                  <span className="text-muted">desvio {fix.shift.toFixed(1)} ΔE</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ---------- matriz da paleta ---------- */}
      {palette.length > 1 && (
        <section className="bg-surface rounded-3xl border border-line p-6">
          <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
            <div>
              <h2 className="sec-title">{t("Matriz da paleta")}</h2>
              <p className="text-sm text-muted">
                {t("Cada cor da paleta como texto sobre cada uma como fundo. Clique em qualquer célula para analisar aquele par.")}
              </p>
            </div>
            <div className="flex gap-3 text-[11px] font-semibold text-muted">
              <span className="flex items-center gap-1.5">
                <i className="size-2.5 rounded-full bg-green-500" /> AAA
              </span>
              <span className="flex items-center gap-1.5">
                <i className="size-2.5 rounded-full bg-lime-500" /> AA
              </span>
              <span className="flex items-center gap-1.5">
                <i className="size-2.5 rounded-full bg-amber-500" /> {t("só grande")}
              </span>
              <span className="flex items-center gap-1.5">
                <i className="size-2.5 rounded-full bg-red-500" /> reprovado
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="border-separate border-spacing-1">
              <thead>
                <tr>
                  <th className="w-16" />
                  {palette.map((c, i) => (
                    <th key={`h${i}`} className="p-0">
                      <span
                        className="block size-9 rounded-lg ring-1 ring-line mx-auto"
                        style={{ background: c }}
                        title={`Fundo ${c}`}
                      />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={`r${i}`}>
                    <th className="p-0 pr-1">
                      <span
                        className="block size-9 rounded-lg ring-1 ring-line"
                        style={{ background: palette[i] }}
                        title={`Texto ${palette[i]}`}
                      />
                    </th>
                    {row.map((cell, j) => (
                      <td key={`c${j}`} className="p-0">
                        <button
                          disabled={i === j}
                          onClick={() => {
                            setFg(cell.fg);
                            setBg(cell.bg);
                          }}
                          title={`${cell.fg} sobre ${cell.bg} — ${cell.grade}`}
                          className={`size-9 rounded-lg text-[10px] font-semibold tabular-nums grid place-items-center w-full transition ${
                            i === j
                              ? "bg-fill text-faint cursor-default"
                              : cell.ratio >= 7
                                ? "bg-green-100 text-green-800 hover:ring-2 ring-green-500"
                                : cell.ratio >= 4.5
                                  ? "bg-lime-100 text-lime-800 hover:ring-2 ring-lime-500"
                                  : cell.ratio >= 3
                                    ? "bg-amber-100 text-amber-800 hover:ring-2 ring-amber-500"
                                    : "bg-red-100 text-red-700 hover:ring-2 ring-red-500"
                          }`}
                        >
                          {cell.ratio.toFixed(1)}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-3 gap-3 mt-6">
            <div className="rounded-2xl bg-fill p-4">
              <span className="text-3xl font-semibold tabular-nums">
                {Math.round(audit.coverage * 100)}%
              </span>
              <p className="text-xs text-muted mt-1">
                dos {audit.total} pares possíveis passam em AA ({audit.aa} pares).
                Outros {audit.aaLarge} servem só para texto grande e {audit.fail}{" "}
                não servem para texto.
              </p>
            </div>
            <div className="rounded-2xl bg-fill p-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-faint">
                {t("Melhor cor de texto")}
              </span>
              {audit.textCandidates[0] && (
                <div className="flex items-center gap-2 mt-2">
                  <i
                    className="size-8 rounded-lg ring-1 ring-line shrink-0"
                    style={{ background: audit.textCandidates[0].color }}
                  />
                  <div className="min-w-0">
                    <b className="block font-mono text-sm">
                      {audit.textCandidates[0].color}
                    </b>
                    <small className="text-muted">
                      legível sobre {audit.textCandidates[0].over} das{" "}
                      {palette.length - 1} outras
                    </small>
                  </div>
                </div>
              )}
            </div>
            <div className="rounded-2xl bg-fill p-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-faint">
                {t("Par mais forte")}
              </span>
              {audit.best && (
                <button
                  onClick={() => {
                    setFg(audit.best!.fg);
                    setBg(audit.best!.bg);
                  }}
                  className="flex items-center gap-2 mt-2 w-full text-left"
                >
                  <span className="flex -space-x-2 shrink-0">
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: audit.best.fg }}
                    />
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: audit.best.bg }}
                    />
                  </span>
                  <div>
                    <b className="block text-sm tabular-nums">
                      {audit.best.ratio.toFixed(2)}:1
                    </b>
                    <small className="text-muted">{audit.best.grade}</small>
                  </div>
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ---------- daltonismo ---------- */}
      <div className="grid lg:grid-cols-2 gap-5">
        <section className="bg-surface rounded-3xl border border-line p-6">
          <h2 className="sec-title">{t("Este par sob outras visões")}</h2>
          <p className="text-sm text-muted mb-4">
            {t("O contraste de luminância quase não muda com daltonismo — o que muda é a diferença de matiz, e é isso que se perde aqui.")}
          </p>
          <div className="space-y-2">
            {(Object.keys(visionLabels) as Vision[]).map((v) => {
              const sf = simulateVision(fg, v),
                sb = simulateVision(bg, v);
              const r = contrast(sf, sb),
                d = deltaE(sf, sb);
              return (
                <div key={v} className="flex items-center gap-3">
                  <span
                    className="rounded-xl px-3 py-2 text-sm font-semibold w-40 shrink-0 text-center ring-1 ring-line"
                    style={{ background: sb, color: sf }}
                  >
                    {t("Exemplo")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <b className="block text-sm">{t(visionLabels[v])}</b>
                    <small className="text-muted">{visionPrevalence[v]}</small>
                  </span>
                  <span className="text-right shrink-0">
                    <b className="block text-sm tabular-nums">{r.toFixed(2)}:1</b>
                    <small className="text-muted tabular-nums">ΔE {d.toFixed(0)}</small>
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-surface rounded-3xl border border-line p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h2 className="sec-title">{t("Cores que se confundem")}</h2>
              <p className="text-sm text-muted">
                {t("Pares distintos na visão comum que ficam iguais para quem tem daltonismo. Contraste alto não protege contra isso.")}
              </p>
            </div>
            {risks.length > 0 && (
              <span className="shrink-0 px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold flex items-center gap-1">
                <AlertTriangle size={12} /> {risks.length}
              </span>
            )}
          </div>
          {risks.length === 0 ? (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-50 text-green-900">
              <Check size={18} className="shrink-0" />
              <p className="text-sm font-semibold">
                {t("Nenhum par da paleta colapsa nos três tipos simulados.")}
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {risks.slice(0, 8).map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-fill"
                >
                  <span className="flex -space-x-2 shrink-0">
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: r.a }}
                    />
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: r.b }}
                    />
                  </span>
                  <span className="text-faint text-xs shrink-0">{t("vira")}</span>
                  <span className="flex -space-x-2 shrink-0">
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: simulateVision(r.a, r.vision) }}
                    />
                    <i
                      className="size-8 rounded-full ring-2 ring-surface"
                      style={{ background: simulateVision(r.b, r.vision) }}
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <b className="block text-xs">{t(visionLabels[r.vision])}</b>
                    <small className="text-muted tabular-nums">
                      ΔE {r.before.toFixed(0)} → {r.after.toFixed(0)}
                    </small>
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-1 rounded-full shrink-0 ${
                      r.severity === "colapso"
                        ? "bg-red-100 text-red-700"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {r.severity}
                  </span>
                </div>
              ))}
            </div>
          )}
          {risks.length > 0 && (
            <p className="text-[11px] text-muted mt-3">
              {t("A saída não é trocar a cor: é não depender só dela. Some forma, rótulo ou posição ao que hoje só se distingue pelo matiz.")}
            </p>
          )}
        </section>
      </div>

      {/* ---------- aplicar de volta ---------- */}
      {palette.length > 1 && (
        <section className="bg-surface rounded-3xl border border-line p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="sec-title">{t("Corrigir a paleta inteira")}</h2>
            <p className="text-sm text-muted">
              Empurra cada cor até que todas alcancem {target}:1 contra a mais
              clara da paleta, preservando matiz e ordem.
            </p>
          </div>
          <button
            onClick={() => {
              const base = [...palette].sort((a, b) => luminance(b) - luminance(a))[0];
              setColors(
                palette.map((c) =>
                  c === base ? c : nearestAccessible(c, base, target),
                ),
              );
            }}
            className="px-5 py-3 rounded-xl bg-ink text-canvas font-semibold flex items-center gap-2 shrink-0"
          >
            <Sparkles size={16} /> Ajustar contra {" "}
            {[...palette].sort((a, b) => luminance(b) - luminance(a))[0]}
          </button>
        </section>
      )}
    </div>
  );
}
type Design = "ui" | "brand" | "type" | "pattern" | "illus";
const designLabels: Record<Design, string> = {
  ui: "Interface",
  brand: "Marca",
  type: "Tipografia",
  pattern: "Padrão",
  illus: "Ilustração",
};

/* Larguras de previa. Nao sao numeros redondos de catalogo: 1280 e a largura
   util de um laptop comum, 834 e o iPad retrato e 390 e o iPhone 14/15. */
type Viewport = "desk" | "tablet" | "phone";
const viewports: Record<Viewport, { label: string; w: number | null }> = {
  desk: { label: "Desktop", w: null },
  tablet: { label: "Tablet", w: 834 },
  phone: { label: "Celular", w: 390 },
};

function Visualizer({
  colors,
  setColors,
  onOpen,
}: {
  colors: string[];
  setColors: (c: string[]) => void;
  onOpen: () => void;
}) {
  const t = useT();
  const [design, setDesign] = useState<Design>("ui");
  const [previewVision, setPreviewVision] = useState<Vision>("normal");
  const [viewport, setViewport] = useState<Viewport>("desk");
  const [tokensCopied, setTokensCopied] = useState(false);
  const viewColors = colors.map((c) => simulateVision(c, previewVision));
  const r = paletteRoles(viewColors);
  const at = (i: number) => viewColors[i % viewColors.length] ?? r.primary;
  const roleChecks = [
    ["Texto principal", r.onBg, r.bg],
    ["Texto em superfície", r.onSurface, r.surface],
    ["Texto no botão", r.onPrimary, r.primary],
    ["Texto no destaque", r.onAccent, r.accent],
  ] as const;
  const failing = roleChecks.filter(([, fg, bg]) => contrast(fg, bg) < 4.5).length;
  const frameW = viewports[viewport].w;
  const roleTokens = [
    ["background", "Fundo", r.bg],
    ["surface", "Superfície", r.surface],
    ["text", "Texto", r.onBg],
    ["primary", "Primária", r.primary],
    ["accent", "Destaque", r.accent],
  ] as const;
  const copyRoleTokens = () => {
    copy(`:root {\n${roleTokens.map(([name, , value]) => `  --color-${name}: ${value};`).join("\n")}\n}`);
    setTokensCopied(true);
    setTimeout(() => setTokensCopied(false), 1200);
  };

  return (
    <>
      {/* Uma barra de controle so. Antes as abas de peca ficavam numa linha, a
          simulacao de visao estava escondida dentro do cartao de cores e nao
          havia como ver a paleta em tela estreita — tres decisoes da mesma
          previa, em tres lugares diferentes da pagina. */}
      <div className="bg-surface border border-line rounded-2xl p-2 mb-4 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-1">
          {(Object.keys(designLabels) as Design[]).map((d) => (
            <button
              key={d}
              onClick={() => setDesign(d)}
              className={`px-3.5 py-2 rounded-full text-sm font-semibold transition ${design === d ? "bg-ink text-canvas" : "text-muted hover:bg-fill hover:text-ink"}`}
            >
              {t(designLabels[d])}
            </button>
          ))}
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          {/* segmentado de largura: a mesma paleta se comporta muito diferente
              num cartao de 390px e numa tela de 1280 */}
          <div className="flex bg-fill rounded-full p-0.5">
            {(Object.keys(viewports) as Viewport[]).map((v) => (
              <button
                key={v}
                onClick={() => setViewport(v)}
                title={viewports[v].w ? `${viewports[v].w}px` : t("Largura total")}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${viewport === v ? "bg-surface text-ink shadow-card" : "text-muted hover:text-ink"}`}
              >
                {t(viewports[v].label)}
              </button>
            ))}
          </div>
          <select
            value={previewVision}
            onChange={(e) => setPreviewVision(e.target.value as Vision)}
            aria-label={t("Simular tipo de visão")}
            className="bg-fill rounded-full px-3.5 py-2 outline-none text-ink text-xs font-semibold"
          >
            {(Object.keys(visionLabels) as Vision[]).map((v) => (
              <option key={v} value={v}>
                {t(visionLabels[v])}
              </option>
            ))}
          </select>
          <button
            onClick={onOpen}
            className="px-3.5 py-2 rounded-full text-xs font-semibold border border-line hover:border-line-strong transition"
          >
            {t("Editar no gerador")}
          </button>
        </div>
      </div>

      <section className="mb-4 grid lg:grid-cols-[1fr_auto] gap-3 items-stretch">
        <div className="bg-surface border border-line rounded-2xl p-3 flex flex-wrap gap-2 items-center">
          <span className="px-2 text-[10px] uppercase tracking-[.18em] font-semibold text-faint">
            {t("Papéis da paleta")}
          </span>
          {roleTokens.map(([name, label, value]) => (
            <button
              key={name}
              onClick={() => copy(value)}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-fill hover:bg-fill-strong transition"
              title={`${t("Copiar")} ${value}`}
            >
              <i className="size-4 rounded-md ring-1 ring-line" style={{ background: value }} />
              <span className="text-[11px] font-semibold">{t(label)}</span>
              <code className="text-[10px] text-faint group-hover:text-muted">{value}</code>
            </button>
          ))}
        </div>
        <button
          onClick={copyRoleTokens}
          className="px-5 py-3 rounded-2xl bg-ink text-canvas font-semibold text-sm flex items-center justify-center gap-2"
        >
          {tokensCopied ? <Check size={16} /> : <Copy size={16} />}
          {t(tokensCopied ? "Tokens copiados" : "Copiar tokens CSS")}
        </button>
      </section>

      {/* A previa dentro de uma moldura de navegador. Sem ela, o mock flutuava
          no meio da pagina e se confundia com a propria interface da ferramenta:
          nao dava para saber onde terminava o GR Colors e comecava o exemplo. */}
      <div className="rounded-3xl overflow-hidden border border-line shadow-panel bg-fill">
        <div className="flex items-center gap-2 px-4 h-11 border-b border-line bg-surface">
          <span className="flex gap-1.5">
            <i className="size-2.5 rounded-full bg-line-strong" />
            <i className="size-2.5 rounded-full bg-line-strong" />
            <i className="size-2.5 rounded-full bg-line-strong" />
          </span>
          <span className="mx-auto px-3 py-1 rounded-full bg-fill text-[11px] font-semibold text-faint tabular-nums">
            {t(designLabels[design]).toLowerCase()}
            {frameW ? ` · ${frameW}px` : ` · ${t("largura total")}`}
            {previewVision !== "normal" ? ` · ${t(visionLabels[previewVision]).toLowerCase()}` : ""}
          </span>
          <span className="w-14" />
        </div>
        <div className="p-0 sm:p-4 grid place-items-center">
          {/* @container: as consultas dentro dos mocks passam a medir ESTA
              moldura, nao a janela do navegador. Sem isso, escolher "Celular"
              so estreitava a caixa — o layout continuava o de desktop, com tres
              colunas espremidas em 390px, que era o que estava horrivel. */}
          <div
            className="@container w-full overflow-hidden sm:rounded-2xl transition-[max-width] duration-300"
            style={frameW ? { maxWidth: frameW } : undefined}
          >
            {design === "ui" && <MockUI r={r} at={at} />}
            {design === "brand" && <MockBrand r={r} at={at} />}
            {design === "type" && <MockType r={r} at={at} />}
            {design === "pattern" && <MockPattern r={r} at={at} />}
            {design === "illus" && <MockIllus r={r} at={at} />}
          </div>
        </div>
      </div>

      {/* As cores da previa saem do cartao grande e viram uma tira: elas sao um
          controle da previa, nao um assunto por conta propria. */}
      <div className="mt-4 flex flex-wrap gap-2">
        {colors.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-surface border border-line rounded-xl p-2 min-w-0 flex-1 basis-40"
          >
            <label
              className="relative size-9 rounded-lg overflow-hidden shrink-0 cursor-pointer ring-1 ring-line"
              style={{ background: c }}
              title={`Abrir seletor da cor ${i + 1}`}
            >
              <input
                type="color"
                aria-label={`Seletor da cor ${i + 1}`}
                value={c.toLowerCase()}
                onChange={(e) => {
                  const n = [...colors];
                  n[i] = e.target.value.toUpperCase();
                  setColors(n);
                }}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </label>
            <div className="min-w-0 flex-1">
              <small className="block text-[9px] uppercase tracking-widest font-semibold text-faint">
                {t("Cor")} {i + 1}
              </small>
              <HexField
                value={c}
                onChange={(value) => {
                  const n = [...colors];
                  n[i] = value;
                  setColors(n);
                }}
                ariaLabel={`HEX da cor ${i + 1}`}
                className="w-full bg-transparent font-mono text-xs font-semibold outline-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* O veredito passou a abrir com uma frase: quatro numeros soltos exigem
          que a pessoa some sozinha quantos deles reprovaram. */}
      <div className="mt-4 bg-surface border border-line rounded-2xl overflow-hidden">
        <p className="px-4 py-3 border-b border-line text-sm font-semibold flex items-center gap-2">
          {failing === 0 ? (
            <>
              <Check size={15} className="text-[#00A63F]" />
              {t("Os quatro pares de texto desta prévia passam em AA.")}
            </>
          ) : (
            <>
              <AlertTriangle size={15} className="text-accent" />
              {failing} de 4 pares de texto não alcançam 4,5:1
              {previewVision !== "normal" ? ` na visão ${t(visionLabels[previewVision]).toLowerCase()}` : ""}.
            </>
          )}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {roleChecks.map(([label, fg, bg]) => {
            const ratio = contrast(fg, bg);
            return (
              <div key={label} className="p-3 flex items-center gap-3 min-w-0">
                <span
                  className="size-9 rounded-xl grid place-items-center font-semibold ring-1 ring-line shrink-0"
                  style={{ background: bg, color: fg }}
                >
                  Aa
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block text-xs truncate">{t(label)}</b>
                  <small className="text-muted tabular-nums">
                    {ratio.toFixed(2)}:1 ·{" "}
                    {ratio >= 7
                      ? "AAA"
                      : ratio >= 4.5
                        ? "AA"
                        : ratio >= 3
                          ? t("só texto grande")
                          : t("reprovado")}
                  </small>
                </span>
                <span
                  className="size-2.5 rounded-full shrink-0"
                  style={{
                    background:
                      ratio >= 4.5 ? "#00A63F" : ratio >= 3 ? "#F59300" : "var(--color-accent)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-xs text-muted mt-3">
        {t(
          "Os papéis são atribuídos automaticamente por luminosidade e saturação. A simulação visual também recalcula os contrastes para mostrar o impacto funcional, não apenas a aparência.",
        )}
      </p>
    </>
  );
}

type MockProps = { r: Roles; at: (i: number) => string };

function MockUI({ r, at }: MockProps) {
  const t = useT();
  return (
    <div style={{ background: r.bg, color: r.onBg }}>
      <div
        className="px-4 @xl:px-6 py-4 flex items-center justify-between gap-3"
        style={{ background: r.surface, color: r.onSurface }}
      >
        <b className="text-lg tracking-tight">{t("Painel")}</b>
        <div className="flex items-center gap-5 text-sm font-semibold">
          <span>{t("Visão geral")}</span>
          <span className="opacity-60 hidden @sm:inline">{t("Relatórios")}</span>
          <span
            className="size-8 rounded-full grid place-items-center text-xs font-semibold"
            style={{ background: r.primary, color: r.onPrimary }}
          >
            EV
          </span>
        </div>
      </div>
      <div className="p-4 @xl:p-6 @3xl:p-8 grid @xl:grid-cols-3 gap-3 @xl:gap-4">
        {[
          ["Receita", "R$ 128.400", "+12,4%"],
          ["Assinantes", "3.812", "+4,1%"],
          ["Churn", "1,9%", "−0,3pp"],
        ].map(([label, value, delta], i) => (
          <div
            key={label}
            className="rounded-2xl p-5"
            style={{ background: r.surface, color: r.onSurface }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider opacity-55">
              {label}
            </span>
            <div className="text-3xl font-semibold mt-2 tracking-tight">
              {value}
            </div>
            <span
              className="inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: i === 2 ? r.accent : r.primary,
                color: i === 2 ? r.onAccent : r.onPrimary,
              }}
            >
              {delta}
            </span>
          </div>
        ))}
        <div
          className="@xl:col-span-2 rounded-2xl p-5"
          style={{ background: r.surface, color: r.onSurface }}
        >
          <b className="text-sm">{t("Últimos 12 meses")}</b>
          <div className="flex items-end gap-1.5 h-36 mt-5">
            {[38, 52, 44, 61, 55, 72, 66, 84, 78, 91, 86, 100].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  height: `${h}%`,
                  background: i % 3 === 2 ? r.accent : r.primary,
                  opacity: 0.55 + (i / 12) * 0.45,
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="rounded-2xl p-5 flex flex-col justify-between"
          style={{ background: r.primary, color: r.onPrimary }}
        >
          <div>
            <b className="text-sm opacity-80">{t("Plano atual")}</b>
            <div className="text-2xl font-semibold mt-2 tracking-tight">
              {t("Estúdio")}
            </div>
            <p className="text-sm mt-2 opacity-80">
              {t("Renova em 14 de setembro.")}
            </p>
          </div>
          <button
            className="mt-5 w-full py-2.5 rounded-xl font-semibold text-sm"
            style={{ background: r.onPrimary, color: r.primary }}
          >
            {t("Gerenciar")}
          </button>
        </div>
      </div>
    </div>
  );
}

function MockBrand({ r, at }: MockProps) {
  const t = useT();
  return (
    <div style={{ background: r.bg }}>
      <div className="p-6 @xl:p-8 @3xl:p-14 grid @xl:grid-cols-2 gap-6 @xl:gap-8 items-center">
        <div style={{ color: r.onBg }}>
          <div className="flex items-center gap-3">
            <span
              className="size-12 rounded-2xl grid place-items-center text-xl font-semibold"
              style={{ background: r.primary, color: r.onPrimary }}
            >
              ◆
            </span>
            <b className="text-3xl tracking-[-.05em]">{t("Vértice")}</b>
          </div>
          <p className="text-lg mt-6 max-w-sm opacity-80">
            {t("Identidade construída sobre uma paleta só — a mesma cor que assina o logotipo sustenta botão, fundo e destaque.")}
          </p>
          <div className="flex gap-2 mt-7">
            <button
              className="px-5 py-3 rounded-xl font-semibold"
              style={{ background: r.primary, color: r.onPrimary }}
            >
              {t("Ver identidade")}
            </button>
            <button
              className="px-5 py-3 rounded-xl font-semibold border-2"
              style={{ borderColor: r.onBg, color: r.onBg }}
            >
              {t("Manual")}
            </button>
          </div>
        </div>
        <div className="grid gap-4">
          <div
            className="rounded-2xl p-6 aspect-[1.7] flex flex-col justify-between shadow-panel"
            style={{ background: r.surface, color: r.onSurface }}
          >
            <span
              className="size-9 rounded-xl grid place-items-center font-semibold"
              style={{ background: r.primary, color: r.onPrimary }}
            >
              ◆
            </span>
            <div>
              <b className="block text-lg tracking-tight">Eduardo Vieira</b>
              <span className="text-sm opacity-60">{t("Direção de arte")}</span>
            </div>
          </div>
          <div className="flex gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="flex-1 h-14 rounded-xl"
                style={{ background: at(i) }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockType({ r, at }: MockProps) {
  const t = useT();
  return (
    <div className="p-6 @xl:p-8 @3xl:p-14" style={{ background: r.bg, color: r.onBg }}>
      <span
        className="text-xs font-semibold uppercase tracking-[.24em]"
        style={{ color: r.primary }}
      >
        {t("Espécime tipográfico")}
      </span>
      <h2 className="text-5xl @xl:text-6xl @3xl:text-8xl font-semibold tracking-[-.06em] mt-4 leading-[0.92]">
        Aa Bb Cc
      </h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-3xl font-semibold tracking-tight">
        {["Leve", "Regular", "Forte", "Preta"].map((w, i) => (
          <span key={w} style={{ color: i === 3 ? r.accent : r.onBg, opacity: 1 - i * 0.12 }}>
            {w}
          </span>
        ))}
      </div>
      <div className="grid @xl:grid-cols-2 gap-6 @xl:gap-8 mt-8 @xl:mt-10">
        <p className="text-lg leading-relaxed opacity-85">
          {t("A hierarquia de uma página nasce menos do tamanho da fonte e mais do contraste entre os tons. Um título escuro sobre fundo claro cria entrada; um destaque saturado marca a ação.")}
        </p>
        <div
          className="rounded-2xl p-6"
          style={{ background: r.surface, color: r.onSurface }}
        >
          <b className="text-sm uppercase tracking-wider opacity-55">{t("Citação")}</b>
          <p className="text-2xl font-semibold tracking-tight mt-3 leading-snug">
            {t("“A cor não decora a tipografia — ela decide o que se lê primeiro.”")}
          </p>
        </div>
      </div>
    </div>
  );
}

function MockPattern({ r, at }: MockProps) {
  const t = useT();
  return (
    <div style={{ background: r.bg }}>
      <svg viewBox="0 0 480 220" className="w-full block" role="img" aria-label={t("Padrão geométrico")}>
        <defs>
          <pattern id="vz-p" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill={at(0)} />
            <circle cx="30" cy="30" r="21" fill={at(1)} />
            <circle cx="30" cy="30" r="11" fill={at(2)} />
            <path d="M0 0 L60 60 M60 0 L0 60" stroke={at(3)} strokeWidth="3" opacity=".5" />
          </pattern>
          <pattern id="vz-q" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill={at(4)} />
            <path d="M0 20 Q10 0 20 20 T40 20" fill="none" stroke={at(0)} strokeWidth="4" />
          </pattern>
        </defs>
        <rect width="300" height="220" fill="url(#vz-p)" />
        <rect x="300" width="180" height="220" fill="url(#vz-q)" />
      </svg>
      <div
        className="p-6 flex flex-wrap items-center justify-between gap-4"
        style={{ background: r.surface, color: r.onSurface }}
      >
        <div>
          <b className="text-lg tracking-tight">{t("Padrão repetível")}</b>
          <p className="text-sm opacity-60">
            {t("As cinco cores aplicadas em um ladrilho de superfície.")}
          </p>
        </div>
        <span
          className="px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: r.accent, color: r.onAccent }}
        >
          {t("Repete a cada 60px")}
        </span>
      </div>
    </div>
  );
}

function MockIllus({ r, at }: MockProps) {
  const t = useT();
  return (
    <div style={{ background: r.bg }}>
      <svg viewBox="0 0 480 260" className="w-full block" role="img" aria-label={t("Ilustração de paisagem")}>
        <rect width="480" height="260" fill={at(2)} />
        <circle cx="380" cy="62" r="34" fill={at(3)} />
        <path d="M0 190 Q80 120 160 172 T320 158 T480 186 L480 260 L0 260 Z" fill={at(1)} />
        <path d="M0 214 Q110 168 220 206 T480 214 L480 260 L0 260 Z" fill={at(0)} />
        <g fill={at(4)}>
          <rect x="66" y="150" width="9" height="46" rx="4" />
          <circle cx="70" cy="140" r="21" />
          <rect x="150" y="162" width="8" height="38" rx="4" />
          <circle cx="154" cy="154" r="17" />
        </g>
      </svg>
      <div
        className="p-6 flex flex-wrap items-center justify-between gap-4"
        style={{ background: r.surface, color: r.onSurface }}
      >
        <div>
          <b className="text-lg tracking-tight">{t("Cena ilustrada")}</b>
          <p className="text-sm opacity-60">
            {t("Profundidade construída por camadas de luminosidade.")}
          </p>
        </div>
        <span
          className="px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: r.primary, color: r.onPrimary }}
        >
          5 camadas
        </span>
      </div>
    </div>
  );
}
function Picker({ onPalette }: { onPalette: (colors: string[]) => void }) {
  const t = useT();
  const [color, setColor] = useState("#7C3AED"),
    [r, g, b] = rgb(color),
    info = colorInfo(color);
  const warm = warmth(color),
    temp = colorTemperature(color),
    named = nearestNamed(color, 6);
  const conversions: [string, string, string?][] = [
    ["HEX", color, "o que se cola em qualquer lugar"],
    ["RGB", toRgbString(color), "canais do monitor, 0 a 255"],
    ["HSL", toHslString(color), "matiz, saturação, luminosidade"],
    ["HSB", formatInfo(color, "hsb"), "o modelo dos seletores gráficos"],
    ["HWB", toHwbString(color), "matiz + quanto branco e preto"],
    ["CMYK", toCmykString(color), "impressão em quatro tintas"],
    ["LAB", toLabString(color), "perceptual, base do ΔE"],
    ["LCH", toLchString(color), "LAB em polar: girar H não muda o brilho"],
    ["LUV", toLuvString(color), "misturas de luz e tela"],
    ["XYZ", toXyzString(color), "o espaço-base do qual todos derivam"],
    ["OKLCH", toOklchString(color), "o perceptual que o CSS moderno adotou"],
  ];
  const harmony = [
    ["Complementar", hslToHex((hexToHsl(color)[0] + 180) % 360, hexToHsl(color)[1], hexToHsl(color)[2])],
    ["Análogo", hslToHex((hexToHsl(color)[0] + 30) % 360, hexToHsl(color)[1], hexToHsl(color)[2])],
    ["Triádica", hslToHex((hexToHsl(color)[0] + 120) % 360, hexToHsl(color)[1], hexToHsl(color)[2])],
  ] as const;
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sem altura fixa: o bloco da cor acompanha a altura da coluna de
            "Variações". Com h-96 ele parava em 384px enquanto a coluna ao lado
            passava dos 600, e sobrava um vazio embaixo da cor — justo a peca
            que deveria dominar a tela. min-h garante o tamanho quando a coluna
            da direita e curta, e empilhado no mobile. */}
        <div
          className="min-h-96 rounded-3xl p-8 flex flex-col justify-between"
          style={{ background: color, color: textOn(color) }}
        >
          <input
            type="color"
            value={color.toLowerCase()}
            onChange={(e) => setColor(e.target.value.toUpperCase())}
            className="size-16 bg-transparent border-0"
          />
          <div>
            <h2 className="text-5xl font-semibold">{color}</h2>
            <p>
              rgb({r}, {g}, {b})
            </p>
          </div>
        </div>
        <div className="bg-surface rounded-3xl p-7 border border-line">
          <h2 className="text-2xl font-semibold mb-5">{t("Variações")}</h2>
          <div className="grid grid-cols-5 overflow-hidden rounded-xl">
            {shades(color).map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className="h-28 flex items-end p-2 text-[10px]"
                style={{ background: c, color: textOn(c) }}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="block mt-7 font-semibold">
            {t("Código hexadecimal")}
            <HexField
              value={color}
              onChange={setColor}
              className="block w-full border border-line rounded-xl p-4 mt-2 font-mono"
            />
          </label>
          <button onClick={() => onPalette(generateHarmony(color, 5, "smart"))} className="w-full mt-3 bg-ink text-canvas rounded-xl py-3 font-semibold flex items-center justify-center gap-2"><PaletteIcon size={17} /> {t("Criar paleta com esta cor")}</button>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">{t("Combinações")}</h3>
            <div className="flex gap-2">
              {harmony.map(([name, c]) => (
                <button
                  key={name}
                  onClick={() => setColor(c)}
                  className="flex-1 rounded-xl p-3 text-center"
                  style={{ background: c, color: textOn(c) }}
                >
                  <small className="block text-[10px] opacity-80">{name}</small>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-surface rounded-3xl p-7 border border-line grid md:grid-cols-[1.4fr_1fr] gap-7">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              className="size-6 rounded-full ring-1 ring-line"
              style={{ background: color }}
            />
            <h2 className="text-3xl font-semibold">{info.family}</h2>
          </div>
          <p className="text-sm font-semibold text-muted mb-5">{info.tagline}</p>
          <h3 className="font-semibold mb-2">{t("Psicologia da cor")}</h3>
          <p className="text-muted leading-relaxed">{info.psychology}</p>
        </div>
        <div className="border-l border-line pl-7">
          <h3 className="font-semibold mb-2">{t("Como aplicar")}</h3>
          <p className="text-muted leading-relaxed mb-5">{info.application}</p>
          <h3 className="font-semibold mb-2">{t("Palavras-chave")}</h3>
          <div className="flex flex-wrap gap-2">
            {info.keywords.map((k) => (
              <span
                key={k}
                className="px-3 py-1.5 rounded-full bg-fill text-sm font-semibold capitalize"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-surface rounded-3xl p-7 border border-line">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">{t("Conversões")}</h2>
            <p className="text-sm text-muted mt-1">
              {t("Onze notações da mesma cor. As cinco de baixo são espaços perceptuais: distância neles corresponde a diferença vista.")}
            </p>
          </div>
          <button
            onClick={() =>
              copy(
                conversions.map(([l, v]) => `${l}: ${v}`).join("\n"),
              )
            }
            className="px-4 py-2 rounded-xl bg-fill hover:bg-fill-strong text-sm font-semibold flex items-center gap-2"
          >
            <Copy size={14} /> Copiar todas
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {conversions.map(([label, value, note]) => (
            <button
              key={label}
              onClick={() => copy(value)}
              title={`Copiar ${value}`}
              className="flex items-start gap-3 px-4 py-3 bg-fill hover:bg-fill-strong rounded-xl text-left transition"
            >
              <span className="text-xs font-semibold text-muted w-12 shrink-0 pt-0.5">
                {label}
              </span>
              <span className="min-w-0 flex-1">
                <span className="font-mono text-sm block truncate">{value}</span>
                {note && (
                  <small className="text-[11px] text-faint block truncate">
                    {note}
                  </small>
                )}
              </span>
              <Copy size={14} className="text-faint shrink-0 mt-0.5" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
        <div className="bg-surface rounded-3xl p-7 border border-line">
          <h2 className="text-2xl font-semibold mb-1">{t("Temperatura")}</h2>
          <p className="text-sm text-muted mb-5">
            {t("Quente avança, fria recua. É a decisão que define se a cor chama ou acomoda.")}
          </p>
          <div className="relative h-12 rounded-2xl overflow-hidden ring-1 ring-line">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #2E6FE8, #6FA8F0, #E9E9E9, #F5C77E, #F08B2E)",
              }}
            />
            <div
              /* O curso e o anel param antes da curva da pista. Colado no
                 topo e no pe (top-0 bottom-0) e indo ate 0% e 100%, o
                 marcador entrava na zona do raio de 19.8px e voltava
                 fatiado na diagonal — justamente nos extremos, que sao os
                 valores que mais interessam ver. */
              className="absolute top-2 bottom-2 w-1.5 bg-ink rounded-full ring-2 ring-white transition-all"
              style={{
                left: `calc(12px + (100% - 24px) * ${(warm.score + 1) / 2} - 3px)`,
              }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-semibold text-faint mt-1.5">
            <span>{t("fria")}</span>
            <span>{t("neutra")}</span>
            <span>{t("quente")}</span>
          </div>
          <div className="flex items-baseline gap-3 mt-5">
            <b className="text-2xl font-semibold">{t(warm.label)}</b>
            <span className="text-sm text-muted tabular-nums">
              {warm.score >= 0 ? "+" : ""}
              {warm.score.toFixed(2)}
            </span>
          </div>
          <p className="text-muted leading-relaxed mt-1">{t(warm.note)}</p>

          <div className="mt-6 pt-6 border-t border-line">
            <h3 className="font-semibold mb-1">{t("Temperatura correlata")}</h3>
            {temp.meaningful ? (
              <>
                <div className="text-3xl font-semibold tabular-nums">
                  {temp.kelvin.toLocaleString("pt-BR")} K
                </div>
                <p className="text-muted mt-1">{t(temp.label)}</p>
                <p className="text-[11px] text-faint mt-2">
                  {t("Aproximação de McCamy a partir da cromaticidade xy. Descreve a luz que produziria esta cor — luz do dia fica perto de 6500 K.")}
                </p>
              </>
            ) : (
              <p className="text-muted">
                Croma {temp.chroma.toFixed(0)}: saturada demais para ficar perto
                do eixo dos brancos. Kelvin só descreve cores próximas de um
                branco, então aqui o número não significaria nada.
              </p>
            )}
          </div>
        </div>

        <div className="bg-surface rounded-3xl p-7 border border-line">
          <h2 className="text-2xl font-semibold mb-1">{t("Biblioteca CSS")}</h2>
          <p className="text-sm text-muted mb-5">
            {t("As cores nomeadas que todo navegador entende, ordenadas por distância perceptual desta.")}
          </p>
          <div className="space-y-1.5">
            {named.map((n) => (
              <button
                key={n.name}
                onClick={() => setColor(n.hex)}
                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-fill transition text-left"
              >
                <span
                  className="size-9 rounded-lg shrink-0 ring-1 ring-line"
                  style={{ background: n.hex }}
                />
                <span className="min-w-0 flex-1">
                  <b className="block text-sm truncate">{n.name}</b>
                  <small className="text-muted font-mono">{n.hex}</small>
                </span>
                <span className="text-xs font-semibold text-muted tabular-nums shrink-0">
                  {n.distance < 0.5 ? "exata" : `ΔE ${n.distance.toFixed(1)}`}
                </span>
              </button>
            ))}
          </div>
          <p className="text-[11px] text-faint mt-4">
            {named[0].distance < 2
              ? `Esta cor é praticamente ${named[0].name} — dá para escrever o nome direto no CSS.`
              : `A mais próxima, ${named[0].name}, ainda está a ${named[0].distance.toFixed(0)} ΔE: use o hexadecimal.`}
          </p>
        </div>
      </div>

      <div className="bg-surface rounded-3xl p-7 border border-line">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h2 className="text-2xl font-semibold">{t("Legibilidade")}</h2>
            <p className="text-sm text-muted mt-1">
              {t("Onde esta cor funciona como texto e onde funciona como fundo.")}
            </p>
          </div>
          <span className="text-xs font-semibold text-muted">
            {t("AA pede 4.5:1 para texto corrido")}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {(
            [
              ["Como texto", true],
              ["Como fundo", false],
            ] as const
          ).map(([label, asText]) => (
            <div key={label} className="rounded-2xl border border-line p-4">
              <b className="block text-sm mb-3">{label}</b>
              <div className="space-y-2">
                {["#FFFFFF", "#F2F2F2", "#767676", "#333333", "#000000"].map(
                  (other) => {
                    const ratio = contrast(color, other);
                    const fgc = asText ? color : other;
                    const bgc = asText ? other : color;
                    return (
                      <div key={other} className="flex items-center gap-3">
                        <span
                          className="rounded-lg px-3 py-1.5 text-sm font-semibold w-28 shrink-0 text-center ring-1 ring-line"
                          style={{ background: bgc, color: fgc }}
                        >
                          Aa texto
                        </span>
                        <span className="font-mono text-[11px] text-muted flex-1">
                          {other}
                        </span>
                        <span className="text-xs font-semibold tabular-nums">
                          {ratio.toFixed(2)}:1
                        </span>
                        <span
                          className={`size-2.5 rounded-full shrink-0 ${
                            ratio >= 7
                              ? "bg-green-500"
                              : ratio >= 4.5
                                ? "bg-lime-500"
                                : ratio >= 3
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                          }`}
                        />
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-muted mt-4">
          #767676 é o cinza mais claro que ainda alcança 4.5:1 sobre branco — a
          fronteira exata do AA em texto secundário.
        </p>
      </div>

      <div className="bg-surface rounded-3xl p-7 border border-line space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">{t("Matizes, tons e tonalidades")}</h2>
          <p className="text-sm text-muted mt-1">
            {t("Matiz mistura branco, tom mistura preto, tonalidade mistura cinza.")}
          </p>
        </div>
        {(
          [
            ["Matizes", tintsOf(color)],
            ["Tons", shadesOf(color)],
            ["Tonalidades", tonesOf(color)],
          ] as const
        ).map(([label, ramp]) => (
          <div key={label}>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-muted mb-2">
              {label}
            </h3>
            <div className="flex h-14 rounded-xl overflow-hidden ring-1 ring-line">
              {ramp.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setColor(c)}
                  title={c}
                  className="flex-1 hover:opacity-85 transition"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface rounded-3xl p-7 border border-line">
          <h2 className="text-2xl font-semibold mb-1">{t("Cores similares")}</h2>
          <p className="text-sm text-muted mb-5">
            {t("Proximidade medida em CIELAB, que se aproxima da percepção humana.")}
          </p>
          <div className="space-y-2">
            {similarColors(color, 6).map((c, i) => (
              <button
                key={i}
                onClick={() => setColor(c)}
                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-fill transition text-left"
              >
                <span
                  className="size-10 rounded-lg shrink-0 ring-1 ring-line"
                  style={{ background: c }}
                />
                <span className="font-mono text-sm flex-1">{c}</span>
                <span className="text-xs font-semibold text-muted tabular-nums">
                  {similarity(c, color)}% similar
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface rounded-3xl p-7 border border-line">
          <h2 className="text-2xl font-semibold mb-1">{t("Simulador de daltonismo")}</h2>
          <p className="text-sm text-muted mb-5">
            {t("Como esta cor é percebida por diferentes tipos de visão.")}
          </p>
          <div className="space-y-2">
            {(Object.keys(visionLabels) as Vision[]).map((v) => {
              const sim = simulateVision(color, v);
              return (
                <div
                  key={v}
                  className="flex items-center gap-3 p-2 rounded-xl"
                >
                  <span
                    className="size-10 rounded-lg shrink-0 ring-1 ring-line"
                    style={{ background: sim }}
                  />
                  <span className="flex-1 min-w-0">
                    <b className="block text-sm">{t(visionLabels[v])}</b>
                    <small className="text-muted">
                      {visionPrevalence[v]}
                    </small>
                  </span>
                  <span className="font-mono text-xs text-muted shrink-0">
                    {sim}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
type Ramp = { name: string; base: string };

function Curve({
  label,
  hint,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const t = useT();
  return (
    <label className="block">
      <span className="flex justify-between items-baseline text-xs mb-1">
        <b>{t(label)}</b>
        <span className="tabular-nums font-mono text-muted">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-ink)] cursor-pointer"
      />
      <span className="text-[11px] text-faint block mt-0.5">{t(hint)}</span>
    </label>
  );
}

function Tailwind({ palette }: { palette: string[] }) {
  const t = useT();
  const [ramps, setRamps] = useState<Ramp[]>([
    { name: "brand", base: "#2563EB" },
    { name: "accent", base: "#F59E0B" },
  ]);
  const [format, setFormat] = useState<ExportFormat>("js");
  const [active, setActive] = useState(0);
  const [chroma, setChroma] = useState(0);
  const [hueShift, setHueShift] = useState(0);
  const [range, setRange] = useState(0); // 0 = automático
  const [withNeutral, setWithNeutral] = useState(true);
  const [withSemantic, setWithSemantic] = useState(false);
  const [dark, setDark] = useState(false);
  const [copiedValue, setCopiedValue] = useState("");

  const slug = (n: string) =>
    n.trim().replace(/\s+/g, "-").toLowerCase() || "brand";
  const opts = {
    chroma,
    hueShift,
    ...(range ? { lightest: 96 + range / 2, darkest: 16 - range / 2 } : {}),
  };

  const brandScales = ramps.map((r) => ({
    name: slug(r.name),
    base: r.base,
    scale: tailwindRamp(r.base, opts),
  }));
  const idx = Math.min(active, brandScales.length - 1);
  const cur = brandScales[idx];
  const neutral = { name: "neutral", base: cur.base, scale: neutralRamp(cur.base) };
  const semantics = semanticRamps(cur.base);
  const all = [
    ...brandScales,
    ...(withNeutral ? [neutral] : []),
    ...(withSemantic ? semantics.map((s) => ({ name: s.name, base: s.base, scale: s.scale })) : []),
  ];
  const code = exportRamps(all, format);
  const pairs = readablePairs(cur.scale);
  const tight = tightestReadablePair(cur.scale);
  const copyWithFeedback = (value: string) => {
    copy(value);
    setCopiedValue(value);
    setTimeout(() => setCopiedValue(""), 1200);
  };
  const downloadCode = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([code], { type: "text/plain;charset=utf-8" }));
    link.download = `gr-colors-tailwind.${format === "vars" ? "css" : format}`;
    link.click();
    URL.revokeObjectURL(link.href);
  };
  const set = (i: number, patch: Partial<Ramp>) =>
    setRamps((rs) => rs.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const at = (scale: Step[], k: number) => scale.find((x) => x.key === k)!.hex;
  // No modo escuro os papéis se invertem: a superfície vira o 950 e o texto,
  // o 100. É o espelho que `darkPairing` descreve.
  const surface = (k: number) =>
    at(neutral.scale, dark ? tailwindKeys[tailwindKeys.length - 1 - tailwindKeys.indexOf(k as 50)] : k);

  return (
    <div className="space-y-5">
      {/* ---------- barra de escalas ---------- */}
      <div className="bg-surface rounded-3xl border border-line shadow-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 pt-4 flex-wrap">
          {ramps.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition ${idx === i ? "bg-ink text-canvas" : "bg-fill hover:bg-fill-strong"}`}
            >
              <i
                className="size-3 rounded-full ring-1 ring-line"
                style={{ background: r.base }}
              />
              {slug(r.name)}
            </button>
          ))}
          {ramps.length < 6 && (
            <button
              onClick={() => {
                setRamps((rs) => [
                  ...rs,
                  { name: `cor-${rs.length + 1}`, base: randomColor() },
                ]);
                setActive(ramps.length);
              }}
              title={t("Adicionar escala")}
              className="px-3 py-2 rounded-full bg-fill hover:bg-fill-strong font-semibold"
            >
              <Plus size={16} />
            </button>
          )}
          {palette.length > 0 && (
            <button
              onClick={() => {
                setRamps(
                  palette
                    .slice(0, 6)
                    .map((c, i) => ({ name: `cor-${i + 1}`, base: c })),
                );
                setActive(0);
              }}
              title={t("Criar uma escala para cada cor da paleta atual")}
              className="px-3.5 py-2 rounded-full bg-fill hover:bg-fill-strong text-sm font-semibold flex items-center gap-2"
            >
              <PaletteIcon size={15} /> {t("Importar paleta")}
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 p-4">
          <label className="relative size-11 shrink-0 rounded-xl overflow-hidden ring-1 ring-line cursor-pointer">
            <span
              className="block size-full"
              style={{ background: cur.base }}
              aria-hidden
            />
            <input
              type="color"
              aria-label={t("Cor base")}
              value={cur.base.toLowerCase()}
              onChange={(e) => set(idx, { base: e.target.value.toUpperCase() })}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </label>
          <HexField
            value={cur.base}
            onChange={(base) => set(idx, { base })}
            ariaLabel="Código da cor base"
            className="font-mono font-semibold outline-none w-28 bg-transparent"
          />
          <input
            value={ramps[idx].name}
            onChange={(e) => set(idx, { name: e.target.value })}
            aria-label={t("Nome da escala")}
            placeholder="brand"
            className="bg-fill rounded-xl px-3 py-2 outline-none font-mono w-36"
          />
          <span className="text-xs text-muted">
            {t(colorName(cur.base))} · {toOklchString(cur.base)}
          </span>
          {ramps.length > 1 && (
            <button
              onClick={() => {
                setRamps((rs) => rs.filter((_, j) => j !== idx));
                setActive(0);
              }}
              title={t("Remover esta escala")}
              className="ml-auto p-2.5 rounded-full text-muted hover:bg-fill transition"
            >
              <Trash2 size={17} />
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-line divide-x divide-line">
          {[
            [t("Degraus"), "11"],
            [t("Pares AA"), `${pairs.length}/121`],
            [t("Cor base"), cur.scale.find((step) => step.key === 500)?.hex ?? cur.base],
            [t("Escalas exportadas"), String(all.length)],
          ].map(([label, value]) => (
            <div key={label} className="px-4 py-3 min-w-0">
              <small className="block text-[9px] uppercase tracking-widest font-semibold text-faint">{label}</small>
              <b className="block text-sm mt-1 font-mono truncate">{value}</b>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- curva ---------- */}
      <div className="bg-surface rounded-3xl border border-line p-6">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h2 className="sec-title">{t("Curva da escala")}</h2>
            <p className="text-sm text-muted">
              {t("Uma rampa de croma constante é o padrão, mas não é o que os sistemas maduros usam: as pontas quase sempre desbotam e o matiz gira um pouco.")}
            </p>
          </div>
          <button
            onClick={() => {
              setChroma(0);
              setHueShift(0);
              setRange(0);
            }}
            className="text-xs font-semibold text-muted hover:text-ink underline underline-offset-2"
          >
            {t("voltar ao padrão")}
          </button>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <Curve
            label="Queda de croma"
            hint="Dessatura o 50 e o 950 e mantém o 500 intacto"
            value={chroma}
            min={0}
            max={100}
            suffix="%"
            onChange={setChroma}
          />
          <Curve
            label="Torção de matiz"
            hint="Abertura total entre o degrau mais claro e o mais escuro"
            value={hueShift}
            min={-40}
            max={40}
            suffix="°"
            onChange={setHueShift}
          />
          <Curve
            label="Alcance"
            hint="Afasta as pontas para ampliar o contraste disponível"
            value={range}
            min={0}
            max={12}
            suffix=" L*"
            onChange={setRange}
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          {(
            [
              ["Plana", 0, 0],
              ["Suave", 25, 8],
              ["Pigmento", 55, 20],
              ["Cinematográfica", 80, -32],
            ] as const
          ).map(([label, c, h]) => (
            <button
              key={label}
              onClick={() => {
                setChroma(c);
                setHueShift(h);
              }}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold transition ${
                chroma === c && hueShift === h
                  ? "bg-ink text-canvas"
                  : "bg-fill hover:bg-fill-strong"
              }`}
            >
              {t(label)}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={withNeutral}
              onChange={(e) => setWithNeutral(e.target.checked)}
              className="size-4 accent-[var(--color-ink)]"
            />
            {t("Cinzas da marca")}
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold cursor-pointer">
            <input
              type="checkbox"
              checked={withSemantic}
              onChange={(e) => setWithSemantic(e.target.checked)}
              className="size-4 accent-[var(--color-ink)]"
            />
            {t("Semânticas")}
          </label>
        </div>
      </div>

      {/* ---------- as rampas ---------- */}
      {all.map((r) => (
        <div key={r.name} className="space-y-2">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-semibold text-lg">{r.name}</h3>
            <span className="text-xs text-faint">
              L* de {r.scale[0].lab.toFixed(0)} a {r.scale[10].lab.toFixed(0)} ·
              passo médio{" "}
              {((r.scale[0].lab - r.scale[10].lab) / 10).toFixed(1)}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-11 rounded-2xl overflow-hidden ring-1 ring-line">
            {r.scale.map((x) => {
              const onWhite = contrast(x.hex, "#FFFFFF") >= 4.5;
              const onBlack = contrast(x.hex, "#000000") >= 4.5;
              return (
                <button
                  key={x.key}
                  onClick={() => copyWithFeedback(x.hex)}
                  title={`Copiar ${x.hex} — L* ${x.lab.toFixed(1)}, ΔE ${x.delta.toFixed(1)} da base`}
                  className="h-32 p-3 flex flex-col justify-between text-left hover:opacity-90 transition"
                  style={{ background: x.hex, color: textOn(x.hex) }}
                >
                  <span className="flex gap-1 text-[9px] font-semibold opacity-75">
                    {onWhite && <span title={t("Legível sobre branco")}>AA↑</span>}
                    {onBlack && <span title={t("Legível sobre preto")}>AA↓</span>}
                  </span>
                  <span>
                    <small className="flex items-center justify-between gap-1 opacity-70 font-semibold">
                      {x.key}
                      {copiedValue === x.hex && <Check size={12} />}
                    </small>
                    <span className="text-[11px] font-mono">{x.hex}</span>
                    <span className="block text-[9px] font-mono opacity-60 mt-0.5">
                      L* {x.lab.toFixed(0)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* ---------- que degrau sobre que degrau ---------- */}
      <section className="bg-surface rounded-3xl border border-line p-6">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h2 className="sec-title">{t("Que degrau vai sobre qual")}</h2>
            <p className="text-sm text-muted">
              {t("A pergunta que se faz toda vez que se usa uma escala. Linhas são texto, colunas são fundo; verde passa em AA.")}
            </p>
          </div>
          {tight && (
            <span className="text-xs font-semibold text-muted">
              {t("par mais econômico:")} <b>{tight.text}</b> sobre <b>{tight.surface}</b>{" "}
              ({tight.ratio.toFixed(2)}:1)
            </span>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="border-separate border-spacing-0.5 text-[10px]">
            <thead>
              <tr>
                <th className="w-10" />
                {tailwindKeys.map((k) => (
                  <th key={k} className="font-mono text-faint font-semibold px-1">
                    {k}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tailwindKeys.map((t) => (
                <tr key={t}>
                  <th className="font-mono text-faint font-semibold pr-1 text-right">
                    {t}
                  </th>
                  {tailwindKeys.map((sK) => {
                    const ratio = contrast(at(cur.scale, t), at(cur.scale, sK));
                    return (
                      <td key={sK}>
                        <span
                          title={`texto ${t} sobre fundo ${sK}: ${ratio.toFixed(2)}:1`}
                          className={`grid place-items-center size-8 rounded font-semibold tabular-nums ${
                            ratio >= 7
                              ? "bg-green-500/85 text-white"
                              : ratio >= 4.5
                                ? "bg-lime-400/80"
                                : ratio >= 3
                                  ? "bg-amber-200"
                                  : "bg-fill text-faint"
                          }`}
                        >
                          {ratio >= 3 ? ratio.toFixed(1) : ""}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-muted mt-3">
          {pairs.length} das 121 combinações passam em AA
          {tight && (
            <>
              , e nenhuma com menos de{" "}
              {Math.abs(
                tailwindKeys.indexOf(tight.text as 50) -
                  tailwindKeys.indexOf(tight.surface as 50),
              )}{" "}
              degraus de distância — é o custo real de usar tons vizinhos
            </>
          )}
          .
        </p>
      </section>

      {/* ---------- a escala em uso ---------- */}
      <section
        className="rounded-3xl border p-7"
        style={{
          background: surface(50),
          borderColor: surface(200),
          color: surface(900),
        }}
      >
        <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
          <div>
            <h2 className="text-xl font-semibold">{t("A escala em uso")}</h2>
            <p className="text-sm opacity-70">
              {t("Os mesmos degraus aplicados a estados reais de componente, sobre os cinzas da marca.")}
            </p>
          </div>
          <button
            onClick={() => setDark((d) => !d)}
            className="px-4 py-2 rounded-xl text-sm font-semibold shrink-0 flex items-center gap-2"
            style={{ background: surface(200), color: surface(900) }}
          >
            {dark ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            {t(dark ? "Ver em claro" : "Ver em escuro")}
          </button>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {(
            [
              ["Padrão", 500],
              ["Hover", 600],
              ["Ativo", 700],
            ] as const
          ).map(([label, k]) => (
            <span
              key={label}
              className="px-5 py-3 rounded-xl font-semibold"
              style={{ background: at(cur.scale, k), color: textOn(at(cur.scale, k)) }}
            >
              {t(label)}
            </span>
          ))}
          <span
            className="px-5 py-3 rounded-xl font-semibold"
            style={{
              background: at(cur.scale, dark ? 900 : 100),
              color: at(cur.scale, dark ? 200 : 700),
            }}
          >
            {t("Suave")}
          </span>
          <span
            className="px-5 py-3 rounded-xl font-semibold border-2"
            style={{
              borderColor: at(cur.scale, dark ? 700 : 300),
              color: at(cur.scale, dark ? 300 : 700),
            }}
          >
            {t("Contorno")}
          </span>
          <span
            className="px-5 py-3 rounded-xl font-semibold"
            style={{ background: surface(200), color: surface(500) }}
          >
            {t("Desabilitado")}
          </span>
          <span
            className="px-5 py-3 rounded-xl font-semibold ring-4"
            style={{
              background: at(cur.scale, 500),
              color: textOn(at(cur.scale, 500)),
              boxShadow: `0 0 0 4px ${at(cur.scale, dark ? 800 : 200)}`,
            }}
          >
            {t("Com foco")}
          </span>
        </div>

        {withSemantic && (
          <div className="flex flex-wrap gap-3 mt-5">
            {semantics.map((sm) => (
              <span
                key={sm.name}
                className="px-4 py-2.5 rounded-xl font-semibold text-sm"
                style={{
                  background: at(sm.scale, dark ? 900 : 100),
                  color: at(sm.scale, dark ? 200 : 800),
                  border: `1px solid ${at(sm.scale, dark ? 700 : 300)}`,
                }}
              >
                {t(sm.label)}
              </span>
            ))}
          </div>
        )}

        <div
          className="mt-6 rounded-2xl p-6"
          style={{ background: surface(100), color: surface(900) }}
        >
          <h4 className="text-2xl font-semibold" style={{ color: at(cur.scale, dark ? 300 : 800) }}>
            {t("Superfície elevada")}
          </h4>
          <p className="mt-2 opacity-80">
            {t("Fundo, título e texto saem dos mesmos três papéis nos dois modos: o espelho troca 100 por 800 e 900 por 100 sozinho. Aqui o texto lê a")} {" "}
            {contrast(surface(900), surface(100)).toFixed(1)}:1 sobre o fundo.
          </p>
        </div>
      </section>

      {/* ---------- código ---------- */}
      <div className="bg-[#151515] text-white rounded-3xl overflow-hidden">
        <div className="flex items-center gap-1 p-3 border-b border-white/10 flex-wrap">
          {(Object.keys(exportFormatLabels) as ExportFormat[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                format === f ? "bg-white/15" : "text-white/50 hover:text-white"
              }`}
            >
              {t(exportFormatLabels[f])}
            </button>
          ))}
          <button
            onClick={() => copyWithFeedback(code)}
            title={t("Copiar código")}
            className="ml-auto px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2 text-xs font-semibold"
          >
            {copiedValue === code ? <Check size={16} /> : <Copy size={16} />}
            {t(copiedValue === code ? "Copiado" : "Copiar")}
          </button>
          <button
            onClick={downloadCode}
            title={t("Baixar arquivo")}
            className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2 text-xs font-semibold"
          >
            <Download size={16} /> {t("Baixar")}
          </button>
        </div>
        <pre className="text-sm overflow-auto text-green-300 p-6 max-h-96">
          {code}
        </pre>
      </div>
      <p className="text-sm text-muted">
        {t("Os degraus são espaçados por L* do CIELAB, não por luminosidade HSL: passos iguais em HSL parecem irregulares porque o olho não responde de forma linear. Sem torcer a curva, o 500 é exatamente a sua cor base.")}
      </p>
    </div>
  );
}

type BotMessage = {
  id: number;
  role: "user" | "bot";
  text: string;
  colors?: string[];
  harmony?: Harmony;
  reading?: PromptReading;
};

/* A etiqueta do chip ("tema", "harmonia", "cores") passa pelo dicionario; o
   valor, nao — ele e o que a pessoa escreveu ou o nome de uma harmonia, e
   traduzir isso mentiria sobre o que foi entendido do pedido. */
const Chip = ({
  k,
  v,
  strong,
}: {
  k: string;
  v: string;
  strong?: boolean;
}) => {
  const t = useT();
  return (
    <span
      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold ${
        strong ? "bg-ink text-canvas" : "bg-surface border border-line"
      }`}
    >
      <span className="opacity-55 font-semibold">{t(k)} </span>
      {v}
    </span>
  );
};

function BotResult({
  m,
  onPalette,
  onRefine,
  onVariation,
}: {
  m: BotMessage;
  onPalette: (c: string[]) => void;
  onRefine: (extra: string, count?: number) => void;
  onVariation: () => void;
}) {
  const t = useT();
  const colors = m.colors!;
  const r = m.reading!;
  const roles = paletteRoles(colors);
  const audit = paletteAudit(colors);
  const risks = visionRisks(colors);
  const best = audit.best;

  /* A resposta do bot deixou de ser uma pilha de blocos soltos embaixo da
     bolha. Tudo que o bot produziu — paleta, leitura do pedido, papeis,
     veredito, acoes — vive num UNICO cartao, com a paleta sangrando no topo
     como capa. Assim uma resposta se le como uma peca so, e duas respostas
     seguidas na conversa nao se confundem uma com a outra.
     A analise virou duas colunas a partir de 640px: "o que eu entendi" e
     "onde usar cada uma" tem tamanhos parecidos e, empilhadas, empurravam as
     acoes para fora da tela em quase todo laptop. */
  return (
    <div className="mt-3 rounded-2xl border border-line bg-surface overflow-hidden shadow-card">
      <div className="flex h-32">
        {colors.map((c, i) => (
          <button
            key={`${c}-${i}`}
            onClick={() => copy(c)}
            className="group/swatch flex-1 flex items-end justify-center pb-3 min-w-0 transition-[flex] duration-300 hover:flex-[1.35]"
            style={{ background: c }}
            title={`Copiar ${c}`}
          >
            <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-black/50 text-white opacity-70 group-hover/swatch:opacity-100 truncate">
              {c}
            </span>
          </button>
        ))}
      </div>

      <div className="p-4 grid gap-x-5 gap-y-4 sm:grid-cols-2">
        {/* o que foi entendido do pedido */}
        <div className="min-w-0">
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-faint">
            {t("O que eu entendi")}
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {r.matchedWord && <Chip k="tema" v={r.matchedWord} strong />}
            {r.matchedColorWord && <Chip k="cor" v={r.matchedColorWord} strong />}
            {r.hueSource === "hexadecimal no texto" && (
              <Chip k="base" v={r.seed} strong />
            )}
            <Chip
              k="harmonia"
              v={`${t(harmonyLabels[m.harmony!]).toLowerCase()} (${t(r.harmonySource)})`}
            />
            <Chip k="cores" v={`${r.count} (${t(r.countSource)})`} />
            {r.filters.map((f) => (
              <Chip key={f} k="ajuste" v={t(f)} strong />
            ))}
          </div>
          {r.unmatched && (
            <p className="text-[11px] text-muted mt-2 flex items-start gap-1.5">
              <AlertTriangle size={13} className="shrink-0 mt-px" />
              {t(
                "Não reconheci nenhum tema nem nome de cor aí, então derivei o matiz do próprio texto. Diga uma cor (“azul”), um setor (“fintech”, “restaurante”) ou um código como #2563EB para eu ancorar melhor.",
              )}
            </p>
          )}
          <p className="text-[11px] text-muted mt-2 leading-relaxed">
            {t(harmonyDescription(m.harmony!))}
          </p>
        </div>

        {/* papéis sugeridos */}
        <div className="min-w-0">
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-faint">
            {t("Onde usar cada uma")}
          </span>
          <div className="grid grid-cols-2 gap-1.5 mt-1.5">
            {(
              [
                ["Fundo", roles.bg],
                ["Texto", roles.ink],
                ["Primária", roles.primary],
                ["Sobre a primária", roles.onPrimary],
                ["Destaque", roles.accent],
                ["Sobre o destaque", roles.onAccent],
              ] as const
            ).map(([label, hex]) => (
              <button
                key={label}
                onClick={() => copy(hex)}
                title={`Copiar ${hex}`}
                className="flex items-center gap-2 p-2 rounded-lg bg-canvas border border-line text-left hover:border-line-strong transition min-w-0"
              >
                <i
                  className="size-6 rounded-md shrink-0 ring-1 ring-line"
                  style={{ background: hex }}
                />
                <span className="min-w-0">
                  <b className="block text-[11px] truncate">{t(label)}</b>
                  <small className="text-muted font-mono text-[10px]">{hex}</small>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* veredito de legibilidade */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        <span
          className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
            audit.aa > 0
              ? "bg-[rgba(0,166,63,.11)] text-[#00713A]"
              : "bg-[rgba(245,147,0,.15)] text-[#8A5200]"
          }`}
        >
          {audit.aa > 0 ? <Check size={13} /> : <AlertTriangle size={13} />}
          {audit.aa > 0
            ? `${audit.aa} de ${audit.total} pares passam em AA${best ? ` — o melhor é ${best.ratio.toFixed(1)}:1` : ""}`
            : "Nenhum par interno sustenta texto: use preto ou branco por cima"}
        </span>
        {risks.length > 0 && (
          <span className="px-3 py-2 rounded-lg text-xs font-semibold bg-[rgba(245,147,0,.15)] text-[#8A5200] flex items-center gap-2">
            <AlertTriangle size={13} />
            {risks.length} par{risks.length > 1 ? "es" : ""} se confunde
            {risks.length > 1 ? "m" : ""} no daltonismo
          </span>
        )}
      </div>

      {/* ações */}
      <div className="px-4 pb-4 flex flex-wrap gap-2">
        <button
          onClick={() => onPalette(colors)}
          className="flex-1 min-w-40 bg-accent text-accent-ink rounded-xl py-3 font-semibold hover:brightness-95 transition"
        >
          {t("Abrir no gerador")}
        </button>
        <button
          onClick={onVariation}
          className="px-5 py-3 rounded-xl border border-line font-semibold bg-canvas hover:bg-fill transition"
        >
          {t("Outra variação")}
        </button>
        <button
          onClick={() => copy(colors.join(", "))}
          title={t("Copiar todos os códigos")}
          className="px-4 py-3 rounded-xl border border-line bg-canvas hover:bg-fill transition"
        >
          <Copy size={16} />
        </button>
      </div>

      {/* refinamentos em um clique: separados por um fio, porque nao sao mais
         informacao sobre a paleta — sao o proximo passo da conversa */}
      <div className="px-4 py-3 border-t border-line bg-canvas">
        <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-faint">
          {t("Ajustar")}
        </span>
        <div className="flex flex-wrap gap-1.5 mt-1.5">
          {(
            [
              ["mais clara", "clara"],
              ["mais escura", "escura"],
              ["mais suave", "suave"],
              ["mais vibrante", "vibrante"],
              ["garantir contraste", "acessível"],
              ["monocromática", "monocromática"],
              ["análoga", "análoga"],
              ["complementar", "complementar"],
            ] as const
          ).map(([label, word]) => (
            <button
              key={label}
              onClick={() => onRefine(word)}
              className="px-3 py-1.5 rounded-full bg-surface border border-line text-[11px] font-semibold hover:border-line-strong transition"
            >
              {t(label)}
            </button>
          ))}
          {colors.length > 2 && (
            <button
              onClick={() => onRefine("", colors.length - 1)}
              className="px-3 py-1.5 rounded-full bg-surface border border-line text-[11px] font-semibold hover:border-line-strong transition"
            >
              {t("− uma cor")}
            </button>
          )}
          {colors.length < 10 && (
            <button
              onClick={() => onRefine("", colors.length + 1)}
              className="px-3 py-1.5 rounded-full bg-surface border border-line text-[11px] font-semibold hover:border-line-strong transition"
            >
              {t("+ uma cor")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function DevTokens({ palette }: { palette: string[] }) {
  const t = useT();
  const [dark, setDark] = useState(false);
  const [format, setFormat] = useState<TokenFormat>("css");
  const set = useMemo(() => designTokens(palette), [palette.join()]);
  const rules = useMemo(() => tokenRules(set, palette), [set, palette.join()]);
  const mode = dark ? set.dark : set.light;
  const v = (name: TokenName) => mode.find((t) => t.name === name)!.hex;
  const code = exportTokens(set, format);
  const guarantees = rules.filter((r) => r.kind === "garantia");
  const checks = rules.filter((r) => r.kind === "verificação");
  const failing = checks.filter((r) => !r.ok);

  return (
    <div className="space-y-5">
      {/* ---------- prévia com os tokens ---------- */}
      <section
        className="rounded-3xl border overflow-hidden"
        style={{ background: v("bg"), borderColor: v("border"), color: v("text") }}
      >
        <header
          className="flex items-center justify-between gap-4 px-6 py-4 border-b flex-wrap"
          style={{ background: v("surface"), borderColor: v("border") }}
        >
          <div className="flex items-center gap-3">
            <span
              className="size-8 rounded-lg grid place-items-center font-semibold text-sm"
              style={{ background: v("primary"), color: v("on-primary") }}
            >
              A
            </span>
            <b>Acme</b>
            <nav className="hidden sm:flex gap-4 text-sm ml-4">
              <span style={{ color: v("primary") }} className="font-semibold">
                {t("Painel")}
              </span>
              <span style={{ color: v("text-muted") }}>{t("Projetos")}</span>
              <span style={{ color: v("text-muted") }}>{t("Equipe")}</span>
              <span style={{ color: v("text-faint") }}>{t("Arquivados")}</span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1.5 rounded-lg text-sm font-semibold"
              style={{
                background: v("primary-soft"),
                color: v("primary"),
              }}
            >
              {t("Plano Pro")}
            </span>
            <button
              onClick={() => setDark((d) => !d)}
              className="px-3.5 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2"
              style={{ background: v("surface-2"), color: v("text") }}
            >
              {dark ? <SunIcon size={15} /> : <MoonIcon size={15} />}
              {t(dark ? "Claro" : "Escuro")}
            </button>
          </div>
        </header>

        <div className="p-6 md:p-8 grid lg:grid-cols-[1.6fr_1fr] gap-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                {t("Tudo abaixo usa só os tokens")}
              </h2>
              <p className="mt-2" style={{ color: v("text-muted") }}>
                {t("Nenhum valor solto: cada cor desta prévia sai de uma variável da lista, e cada variável foi escolhida medindo o contraste contra o fundo deste modo.")}
              </p>
              <p className="mt-1 text-sm" style={{ color: v("text-faint") }}>
                {t("Metadado, legenda, rodapé — o degrau que não sustenta texto corrido.")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <button
                className="px-5 py-2.5 rounded-xl font-semibold"
                style={{ background: v("primary"), color: v("on-primary") }}
              >
                {t("Ação principal")}
              </button>
              <button
                className="px-5 py-2.5 rounded-xl font-semibold"
                style={{ background: v("primary-hover"), color: v("on-primary") }}
              >
                {t("Hover")}
              </button>
              <button
                className="px-5 py-2.5 rounded-xl font-semibold"
                style={{ background: v("primary-active"), color: v("on-primary") }}
              >
                {t("Pressionado")}
              </button>
              <button
                className="px-5 py-2.5 rounded-xl font-semibold border-2"
                style={{ borderColor: v("border-strong"), color: v("text") }}
              >
                {t("Secundária")}
              </button>
              <button
                className="px-5 py-2.5 rounded-xl font-semibold"
                style={{
                  background: v("primary"),
                  color: v("on-primary"),
                  boxShadow: `0 0 0 3px ${v("bg")}, 0 0 0 6px ${v("focus")}`,
                }}
              >
                {t("Com foco")}
              </button>
              <button
                className="px-5 py-2.5 rounded-xl font-semibold"
                style={{ background: v("surface-2"), color: v("text-faint") }}
              >
                {t("Desabilitada")}
              </button>
            </div>

            <div
              className="rounded-2xl border overflow-hidden"
              style={{ background: v("surface"), borderColor: v("border") }}
            >
              <div
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-widest flex justify-between"
                style={{ background: v("surface-2"), color: v("text-muted") }}
              >
                <span>{t("Implantações")}</span>
                <span>{t("Status")}</span>
              </div>
              {(
                [
                  ["api-gateway", "success", "no ar"],
                  ["worker-fila", "warning", "reiniciando"],
                  ["site-web", "danger", "falhou"],
                ] as const
              ).map(([name, status, label], i) => (
                <div
                  key={name}
                  className="px-4 py-3 flex items-center justify-between gap-3 border-t"
                  style={{ borderColor: i === 0 ? "transparent" : v("border") }}
                >
                  <span className="font-mono text-sm">{name}</span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                    style={{ color: v(status as TokenName) }}
                  >
                    <i
                      className="size-2 rounded-full"
                      style={{ background: v(status as TokenName) }}
                    />
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div
              className="rounded-2xl p-5 border"
              style={{ background: v("surface"), borderColor: v("border") }}
            >
              <b className="block">{t("Campo de formulário")}</b>
              <div
                className="mt-3 rounded-xl px-3 py-2.5 border text-sm"
                style={{
                  background: v("bg"),
                  borderColor: v("border"),
                  color: v("text-muted"),
                }}
              >
                {t("em repouso")}
              </div>
              <div
                className="mt-2 rounded-xl px-3 py-2.5 border-2 text-sm"
                style={{
                  background: v("bg"),
                  borderColor: v("focus"),
                  color: v("text"),
                }}
              >
                {t("em foco")}
              </div>
              <div
                className="mt-2 rounded-xl px-3 py-2.5 border-2 text-sm"
                style={{
                  background: v("bg"),
                  borderColor: v("danger"),
                  color: v("text"),
                }}
              >
                {t("com erro")}
              </div>
              <p className="mt-2 text-xs font-semibold" style={{ color: v("danger") }}>
                {t("Este campo é obrigatório.")}
              </p>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ background: v("primary-soft"), color: v("text") }}
            >
              <b className="block" style={{ color: v("primary") }}>
                {t("Aviso da marca")}
              </b>
              <p className="text-sm mt-1" style={{ color: v("text-muted") }}>
                {t("Fundo suave da primária — o único lugar em que a cor da marca aparece grande sem virar ruído.")}
              </p>
            </div>
            <div
              className="rounded-2xl p-5 font-semibold"
              style={{ background: v("accent"), color: v("on-accent") }}
            >
              {t("Destaque secundário")}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- lista de tokens ---------- */}
      <section className="bg-surface rounded-3xl border border-line p-6">
        <div className="flex items-end justify-between gap-4 mb-5 flex-wrap">
          <div>
            <h2 className="sec-title">
              Os {mode.length} tokens · modo {dark ? "escuro" : "claro"}
            </h2>
            <p className="text-sm text-muted">
              {t("Derivados da sua paleta. Onde há uma razão medida, ela é a prova de que o token serve para o que o papel diz.")}
            </p>
          </div>
          <div className="flex gap-1 bg-fill rounded-full p-1">
            {[false, true].map((d) => (
              <button
                key={String(d)}
                onClick={() => setDark(d)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
                  dark === d ? "bg-surface shadow-card" : "text-muted"
                }`}
              >
                {d ? <MoonIcon size={15} /> : <SunIcon size={15} />}
                {t(d ? "Escuro" : "Claro")}
              </button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-1.5">
          {mode.map((t) => (
            <button
              key={t.name}
              onClick={() => copy(t.hex)}
              title={`Copiar ${t.hex}`}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-fill transition text-left"
            >
              <span
                className="size-10 rounded-lg shrink-0 ring-1 ring-line"
                style={{ background: t.hex }}
              />
              <span className="min-w-0 flex-1">
                <b className="block font-mono text-sm">--{t.name}</b>
                <small className="text-muted block truncate">{t.role}</small>
              </span>
              <span className="text-right shrink-0">
                <span className="block font-mono text-[11px] text-muted">
                  {t.hex}
                </span>
                {t.ratio !== undefined && t.need !== undefined && (
                  <span
                    className={`text-[10px] font-semibold tabular-nums ${
                      t.ratio >= t.need ? "text-green-700" : "text-red-600"
                    }`}
                  >
                    {t.ratio.toFixed(2)}:1 · precisa {t.need}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ---------- garantias e verificações ---------- */}
      <div className="grid lg:grid-cols-2 gap-5">
        <section className="bg-surface rounded-3xl border border-line p-6">
          <div className="flex items-center gap-2 mb-1">
            <Check size={18} className="text-green-600" />
            <h2 className="sec-title">{t("O que já está garantido")}</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            {t("Propriedades que a derivação sempre entrega. O número ao lado é a medição desta paleta, não uma promessa.")}
          </p>
          <div className="space-y-1.5 max-h-[26rem] overflow-y-auto pr-1">
            {guarantees.map((r) => (
              <div
                key={r.title}
                className="flex items-start gap-3 p-2.5 rounded-xl bg-fill"
              >
                <Check size={15} className="text-green-600 shrink-0 mt-0.5" />
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{t(r.title)}</b>
                  <small className="text-muted block leading-snug">
                    {t(r.detail)}
                  </small>
                </span>
                <span className="text-[11px] font-semibold font-mono text-muted shrink-0 text-right">
                  {r.evidence}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface rounded-3xl border border-line p-6">
          <div className="flex items-center gap-2 mb-1">
            {failing.length ? (
              <AlertTriangle size={18} className="text-amber-600" />
            ) : (
              <Check size={18} className="text-green-600" />
            )}
            <h2 className="sec-title">{t("O que depende da sua paleta")}</h2>
          </div>
          <p className="text-sm text-muted mb-4">
            {failing.length
              ? `${failing.length} de ${checks.length} pedem uma decisão sua — nenhuma delas o gerador consegue resolver sozinho sem trair a paleta.`
              : "Todas verdes: a paleta que você escolheu não impõe nenhuma concessão."}
          </p>
          <div className="space-y-1.5">
            {checks.map((r) => (
              <div
                key={r.title}
                className={`flex items-start gap-3 p-3 rounded-xl ${
                  r.ok ? "bg-fill" : "bg-amber-50 ring-1 ring-amber-200"
                }`}
              >
                {r.ok ? (
                  <Check size={15} className="text-green-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                )}
                <span className="min-w-0 flex-1">
                  <b className="block text-sm">{t(r.title)}</b>
                  <small className="text-muted block leading-snug">
                    {t(r.detail)}
                  </small>
                </span>
                <span className="text-[11px] font-semibold font-mono text-muted shrink-0 text-right">
                  {r.evidence}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted mt-4">
            {t("Uma regra que nunca reprova não mede nada. Estas três reprovam de verdade — a de daltonismo passa em cerca de um terço das paletas aleatórias.")}
          </p>
        </section>
      </div>

      {/* ---------- código ---------- */}
      <div className="bg-[#151515] text-white rounded-3xl overflow-hidden">
        <div className="flex items-center gap-1 p-3 border-b border-white/10 flex-wrap">
          {(Object.keys(tokenFormatLabels) as TokenFormat[]).map((f) => (
            <button
              key={f}
              onClick={() => setFormat(f)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                format === f ? "bg-white/15" : "text-white/50 hover:text-white"
              }`}
            >
              {t(tokenFormatLabels[f])}
            </button>
          ))}
          <button
            onClick={() => copy(code)}
            title={t("Copiar")}
            className="ml-auto p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
          >
            <Copy size={17} />
          </button>
        </div>
        <pre className="text-sm overflow-auto text-green-300 p-6 max-h-[30rem]">
          {code}
        </pre>
      </div>
      <p className="text-sm text-muted">
        {t("O bloco de CSS já vem com")} <code>prefers-color-scheme</code> e com{" "}
        <code>[data-theme=&quot;dark&quot;]</code>: o primeiro respeita a
        preferência do sistema, o segundo permite um botão de tema que a
        sobrescreva.
      </p>
    </div>
  );
}

function Bot({ onPalette }: { onPalette: (c: string[]) => void }) {
  const t = useT();
  const [input, setInput] = useState("");
  const welcomeMessage: BotMessage =
    {
      id: 0,
      role: "bot",
      text: "Converse comigo sobre cor: pergunte o que uma cor significa, como combinar duas cores, o que é matiz ou contraste — ou descreva seu projeto e eu monto a paleta. Entendo temas (clínica, fintech, restaurante…), nomes de cor, HEX, quantidade de cores e harmonia, e mostro o que entendi de cada pedido.",
    };
  const [messages, setMessages] = useState<BotMessage[]>([welcomeMessage]);
  const lastRequest = useRef("");
  const lastResult = useRef<ReturnType<typeof paletteFromPrompt> | null>(null);
  const messageId = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);
  const commands = [
    ["/clear", "Limpar toda a conversa"],
    ["/help", "Mostrar os comandos disponíveis"],
    ["/again", "Gerar outra versão da última paleta"],
    ["/copy", "Copiar os códigos da última paleta"],
    ["/palette", "Criar uma paleta a partir do texto seguinte"],
  ] as const;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages]);

  const run = (request: string, quiet: boolean, echo?: string) => {
    lastRequest.current = request;
    const result = paletteFromPrompt(request);
    lastResult.current = result;
    const { reading } = result;
    /* A frase e montada peca por peca para poder ser traduzida: uma unica
       string com interpolacao nunca casaria com uma chave do dicionario. */
    const parts = [
      `${result.colors.length} ${t("cores")}`,
      `${t("direção")} ${t(result.tone)}`,
      `${t("harmonia")} ${t(harmonyLabels[result.harmony]).toLowerCase()}`,
    ];
    setMessages((cur) => [
      ...cur,
      ...(echo
        ? [{ id: messageId.current++, role: "user" as const, text: echo }]
        : []),
      {
        id: messageId.current++,
        role: "bot",
        text: `${t(quiet ? "Outra leitura do mesmo pedido: " : "Preparei ")}${parts.join(", ")}.`,
        colors: result.colors,
        harmony: result.harmony,
        reading,
      },
    ]);
  };

  const talk = (userText: string, botText: string) => {
    setMessages((cur) => [
      ...cur,
      { id: messageId.current++, role: "user", text: userText },
      { id: messageId.current++, role: "bot", text: botText },
    ]);
  };

  /* O corpo do envio vive em ask() e nao dentro de suggest(): os exemplos da
     tela vazia precisam entrar pelo MESMO caminho do texto digitado. Antes eles
     chamavam run() direto, entao clicar em "O que o azul transmite?" pulava a
     base de perguntas e montava uma paleta em vez de responder. */
  const ask = (clean: string) => {
    if (!clean) return;
    const [command, ...commandArgs] = clean.split(/\s+/);
    const argument = commandArgs.join(" ").trim();
    if (command.startsWith("/")) {
      if (command === "/clear") {
        setMessages([{ ...welcomeMessage, id: 0 }]);
        lastRequest.current = "";
        lastResult.current = null;
        messageId.current = 1;
        return;
      }
      if (command === "/help") {
        talk(clean, "Comandos disponíveis:\n/clear — limpar a conversa\n/help — mostrar esta ajuda\n/again — gerar outra versão\n/copy — copiar a última paleta\n/palette descrição — criar uma paleta a partir da descrição");
        return;
      }
      if (command === "/again") {
        if (lastRequest.current) run(lastRequest.current, true, clean);
        else talk(clean, "Ainda não há uma paleta para variar. Descreva primeiro um projeto, uma sensação ou uma cor.");
        return;
      }
      if (command === "/copy") {
        if (lastResult.current) {
          copy(lastResult.current.colors.join(", "));
          talk(clean, `${t("Copiei")} ${lastResult.current.colors.length} ${t("códigos para a área de transferência.")}`);
        } else talk(clean, "Ainda não há uma paleta para copiar.");
        return;
      }
      if (command === "/palette") {
        if (argument) run(argument, false, clean);
        else talk(clean, "Escreva uma descrição depois do comando. Exemplo: /palette clínica calma azul, 5 cores.");
        return;
      }
      talk(clean, `${t("Não reconheço o comando")} “${command}”. ${t("Use /help para ver os comandos disponíveis.")}`);
      return;
    }
    const q = clean.toLocaleLowerCase("pt-BR").replace(/[!?.,]+$/g, "").trim();

    if (/^(oi+|ol[aá]|opa|e a[ií]|bom dia|boa tarde|boa noite)$/.test(q)) {
      talk(clean, "Olá! Vamos encontrar uma direção de cor que faça sentido para o seu projeto. O que você está criando — e como quer que as pessoas se sintam ao ver a marca ou interface?");
      return;
    }
    if (/^(tudo bem|como (voc[eê]|vai)|beleza)$/.test(q)) {
      talk(clean, "Tudo certo por aqui — e pronto para pensar em cor com você. Me conte o projeto, o público e a sensação desejada; se preferir, começamos apenas por uma cor que você já gosta.");
      return;
    }
    if (/\b(obrigad[oa]?|valeu|perfeito|legal|ótimo|otimo)\b/.test(q) && q.split(/\s+/).length <= 5) {
      talk(clean, lastResult.current ? "Que bom! Se quiser, posso deixar a última paleta mais clara, escura, suave, vibrante ou acessível — ou explicar por que escolhi cada cor." : "Por nada! Quando quiser, descreva seu projeto e eu ajudo a construir a direção cromática.");
      return;
    }
    if (/^(ajuda|me ajude|o que voc[eê] faz|como funciona|quem [ée] voc[eê])/.test(q)) {
      talk(clean, "Eu converso sobre estratégia de cor e também monto paletas. Posso explicar harmonias e contraste, sugerir cores para um setor, partir de um HEX, criar de 2 a 10 cores e refinar o resultado. Para começar: o que você está criando e qual sensação quer transmitir?");
      return;
    }
    const qa = colorQA(clean);
    if (qa) {
      if (qa.demo) {
        const res = paletteFromPrompt(qa.demo);
        lastRequest.current = qa.demo;
        lastResult.current = res;
        setMessages((cur) => [
          ...cur,
          { id: messageId.current++, role: "user", text: clean },
          {
            id: messageId.current++,
            role: "bot",
            text: qa.a,
            colors: res.colors,
            harmony: res.harmony,
            reading: res.reading,
          },
        ]);
      } else {
        talk(clean, `${qa.a} Se quiser, monto uma paleta de exemplo com essa ideia.`);
      }
      return;
    }
    if (/^(por qu[eê]|explique|como chegou)/.test(q) && lastResult.current) {
      const result = lastResult.current;
      const source = result.reading.matchedColorWord
        ? `a cor “${result.reading.matchedColorWord}”`
        : result.reading.matchedWord
          ? `o tema “${result.reading.matchedWord}”`
          : "o sentido geral do seu texto";
      talk(clean, `Parti de ${source}, apliquei uma harmonia ${harmonyLabels[result.harmony].toLowerCase()} e distribuí a luminosidade para criar hierarquia. ${harmonyDescription(result.harmony)} A análise abaixo da paleta também mostra os papéis e os pares que passam em contraste.`);
      return;
    }
    if (/\b(n[aã]o gostei|n[aã]o curti|ficou ruim|outra ideia|tente de novo)\b/.test(q)) {
      if (lastRequest.current) {
        run(lastRequest.current, true, clean);
      } else {
        talk(clean, "Sem problema. O que incomodou: as cores estão fortes demais, escuras, frias ou pouco contrastantes? Com uma pista eu consigo mudar a direção, não apenas sortear outra combinação.");
      }
      return;
    }
    if (/^(quero|preciso|faça|crie|gere)?\s*(uma|de)?\s*paleta( de cores)?$/.test(q)) {
      talk(clean, "Claro. Para eu não te entregar uma combinação genérica, me diga pelo menos duas coisas: para qual projeto é a paleta e qual sensação ela deve transmitir. Se já tiver uma preferência, inclua uma cor ou HEX.");
      return;
    }
    // Um pedido curto e sem tema depois de outro é quase sempre um ajuste do
    // anterior — "mais escura" sozinho não descreve projeto nenhum.
    const isRefinement =
      !!lastRequest.current &&
      clean.split(/\s+/).length <= 4 &&
      /^(mais|menos|troque|mude|faça|deixe|agora|com|sem)\b|\b(clara|escura|suave|forte|vibrante|pastel|acess[íi]vel|monocrom|an[aá]log|complementar|tri[aá]dic)/i.test(
        clean,
      );
    run(
      isRefinement ? `${lastRequest.current}, ${clean}` : clean,
      false,
      clean,
    );
  };

  const suggest = () => {
    const clean = input.trim();
    if (!clean) return;
    setInput("");
    ask(clean);
  };

  const refine = (extra: string, count?: number) => {
    let base = lastRequest.current || "uma paleta";
    if (count) base = `${base.replace(/\b(?:[2-9]|10)\s*(?:cores?|tons?)\b/gi, "").trim()}, ${count} cores`;
    // Ajustes de harmonia substituem o anterior em vez de empilhar: pedir
    // "análoga" depois de "monocromática" tem de trocar, não somar.
    if (/monocrom|an[aá]log|complementar|tri[aá]dic|tetr[aá]dic|quadrad/i.test(extra))
      base = base.replace(
        /,?\s*(monocrom\w*|an[aá]log\w*|complementar( dividida)?|tri[aá]dic\w*|tetr[aá]dic\w*|quadrad\w*)/gi,
        "",
      );
    run(extra ? `${base}, ${extra}` : base, false, extra || `${count} cores`);
  };

  /* Sugestoes de partida em dois grupos: perguntar e criar. Antes eram seis
     frases soltas num embolado central, e nao dava para ver que o bot faz as
     duas coisas. */
  const examples: { g: string; items: string[] }[] = [
    {
      g: "Tirar uma dúvida",
      items: [
        "O que o azul transmite?",
        "O que é tríade?",
        "Café combina com que cor?",
        "Quanto contraste um texto precisa?",
      ],
    },
    {
      g: "Montar uma paleta",
      items: [
        "Clínica calma e confiável",
        "Marca de luxo escura",
        "Fintech azul, 6 cores",
        "Cafeteria aconchegante",
      ],
    },
  ];

  const empty = messages.length === 1;

  return (
    /* ---------------------------------------------------------------
       O assistente deixou de ser um MENSAGEIRO.

       Balão cinza à esquerda, balão escuro à direita, avatar redondo no
       cabeçalho: esse é o desenho de qualquer chat da internet, e era o
       que mais aproximava a tela de um produto genérico. A GR Brands não
       tem balão em lugar nenhum — ela separa assunto por FIO e nomeia
       cada bloco com um rótulo em versalete.

       Aqui a conversa virou uma transcrição editorial: cada troca é uma
       entrada numerada em pixel (como os serviços do site), a pergunta
       é o título da entrada e a resposta é texto corrido de leitura.
       Nada de bolha, nada de avatar, nada de cauda de balão.
       --------------------------------------------------------------- */
    <div className="max-w-3xl mx-auto">
      {/* Sem titulo proprio: o Hero da ferramenta ja escreveu "Converse sobre
          cores" logo acima, e repetir a manchete dois blocos seguidos era a
          unica coisa que a transcricao nao podia fazer. Sobra a nota de
          procedencia, que o Hero nao diz. */}
      <p className="text-xs text-muted border-b border-line pb-5 max-w-[52ch] leading-relaxed">
        {t(
          "Converse, tire dúvidas e construa uma paleta passo a passo — tudo processado no seu navegador.",
        )}
      </p>

      <div
        className="divide-y divide-line"
        aria-live="polite"
      >
        {messages.map((m, i) =>
          m.role === "user" ? (
            /* A pergunta é o TÍTULO da entrada, com o índice em pixel ao
               lado — a mesma numeração dos serviços e do processo no site. */
            <div key={m.id} className="flex gap-4 md:gap-6 pt-8 pb-4">
              <span
                className="pixel-n text-faint text-2xl pt-1 shrink-0 tabular-nums select-none"
                aria-hidden="true"
              >
                {String(Math.ceil(i / 2)).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl tracking-[-.035em] leading-tight min-w-0">
                {m.text}
              </h3>
            </div>
          ) : (
            <div
              key={m.id}
              className={`md:pl-[3.25rem] ${i === 0 ? "py-8" : "pb-9 pt-1"}`}
            >
              <p className="text-[15.5px] leading-[1.68] text-muted max-w-[64ch] whitespace-pre-line">
                {t(m.text)}
              </p>
              {m.colors && m.reading && (
                <BotResult
                  m={m}
                  onPalette={onPalette}
                  onRefine={refine}
                  onVariation={() => run(lastRequest.current, true)}
                />
              )}
            </div>
          ),
        )}
      </div>

      {empty && (
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pb-9">
          {examples.map((group) => (
            <div key={group.g}>
              <p className="text-[11px] uppercase tracking-[0.18em] text-faint mb-3">{t(group.g)}</p>
              <ul className="border-t border-line">
                {group.items.map((x) => (
                  <li key={x}>
                    {/* linha de lista, não pílula: a pílula é o vocabulário
                        de botão do site e aqui isto é um índice de assuntos */}
                    <button
                      onClick={() => {
                        setInput("");
                        ask(x);
                      }}
                      className="group w-full text-left py-3 border-b border-line flex items-center gap-3 text-[15px] text-muted hover:text-ink transition"
                    >
                      <i className="size-1.5 rounded-full bg-line group-hover:bg-accent transition shrink-0" />
                      <span className="min-w-0">{t(x)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div ref={endRef} />

      {/* O compositor gruda no rodapé da janela em vez de viver no fim de um
          painel rolável: a conversa cresce para baixo e a pergunta seguinte
          continua ao alcance sem caçar a caixa. */}
      <form
        className="sticky bottom-0 -mx-1 px-1 pt-4 pb-5 bg-canvas"
        onSubmit={(e) => {
          e.preventDefault();
          suggest();
        }}
      >
        {input.startsWith("/") && (
          <div className="mb-2 bg-surface border border-line rounded-2xl overflow-hidden shadow-pop">
            {commands
              .filter(([name]) => name.startsWith(input.split(/\s/)[0].toLowerCase()))
              .map(([name, description]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setInput(name === "/palette" ? `${name} ` : name)}
                  className="w-full px-4 py-3 flex items-center gap-4 text-left border-b last:border-b-0 border-line hover:bg-fill transition"
                >
                  <code className="font-semibold text-sm text-accent w-20">{name}</code>
                  <span className="text-sm text-muted">{t(description)}</span>
                </button>
              ))}
          </div>
        )}
        <div className="flex gap-2 mb-2 px-2 overflow-x-auto">
          {commands.slice(0, 4).map(([name, description]) => (
            <button
              key={name}
              type="button"
              onClick={() => setInput(name)}
              title={t(description)}
              className="text-[11px] font-mono font-semibold text-faint hover:text-accent transition shrink-0"
            >
              {name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-surface border border-line rounded-full p-1.5 pl-5 focus-within:border-accent transition">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t(
              "Fale comigo: “oi”, “o que é tríade?” ou descreva seu projeto",
            )}
            className="flex-1 bg-transparent outline-none min-w-0 text-[15px] py-2.5"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-accent text-accent-ink h-11 px-6 rounded-full font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-95 transition shrink-0"
          >
            {t("Enviar")}
          </button>
        </div>
      </form>
    </div>
  );
}
