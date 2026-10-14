import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Car,
  Check,
  Copy,
  Download,
  FileArchive,
  Images,
  MapPin,
  Mic,
  User,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  v1Aesthetic,
  v1CharacterLocks,
  v1LocationLocks,
  v1Scenes,
  V1_AUDIO_LOCK,
  V1_STYLE_LOCK,
  V1_VOICE_LOCK,
} from "@/data/v1";
import { v1VideoPrompts } from "@/data/v1-video-prompts";

export const Route = createFileRoute("/resultados-v1")({
  head: () => ({
    meta: [
      { title: "Resultados v1 — Marea Eterno" },
      {
        name: "description",
        content:
          "Sessão cinematográfica completa: 20 cenas, prompts de imagem e vídeo do comercial 'Marea Eterno'.",
      },
      { property: "og:title", content: "Resultados v1 — Marea Eterno" },
      {
        property: "og:description",
        content:
          "Sessão cinematográfica completa: 20 cenas, prompts de imagem e vídeo do comercial 'Marea Eterno'.",
      },
    ],
  }),
  component: ResultadosV1,
});

// Imagens resolvem dinamicamente: ficam disponíveis assim que forem geradas
// em src/assets/v1/c01..c20.png — nada quebra enquanto elas não existem.
const imageModules = import.meta.glob<{ default: string }>(
  "../assets/v1/c*.png",
  { eager: true },
);

const images: Record<string, string> = {};
for (const [path, mod] of Object.entries(imageModules)) {
  const key = path.split("/").pop()!.replace(".png", "");
  images[key] = mod.default;
}

// ---------- ZIP (store, sem dependências) ----------
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c >>> 0;
  }
  return t;
})();

function crc32(buf: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++)
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function concat(...parts: Uint8Array[]): Uint8Array {
  const len = parts.reduce((s, p) => s + p.length, 0);
  const out = new Uint8Array(len);
  let o = 0;
  for (const p of parts) {
    out.set(p, o);
    o += p.length;
  }
  return out;
}

function buildZip(files: { name: string; data: Uint8Array }[]): Blob {
  const enc = new TextEncoder();
  const locals: Uint8Array[] = [];
  const centrals: Uint8Array[] = [];
  let offset = 0;
  for (const f of files) {
    const nameBytes = enc.encode(f.name);
    const crc = crc32(f.data);
    const size = f.data.length;
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(8, 0, true); // stored
    lh.setUint32(14, crc, true);
    lh.setUint32(18, size, true);
    lh.setUint32(22, size, true);
    lh.setUint16(26, nameBytes.length, true);
    const local = concat(new Uint8Array(lh.buffer), nameBytes, f.data);
    locals.push(local);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint32(16, crc, true);
    ch.setUint32(20, size, true);
    ch.setUint32(24, size, true);
    ch.setUint16(28, nameBytes.length, true);
    ch.setUint32(42, offset, true);
    centrals.push(concat(new Uint8Array(ch.buffer), nameBytes));
    offset += local.length;
  }
  const centralSize = centrals.reduce((s, x) => s + x.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, centralSize, true);
  end.setUint32(16, offset, true);
  return new Blob(
    [...locals, ...centrals, new Uint8Array(end.buffer)],
    { type: "application/zip" },
  );
}

// ---------- helpers ----------
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function CopyButton({
  label,
  text,
  className,
}: {
  label: string;
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={async () => {
        if (await copyText(text)) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      }}
    >
      {copied ? (
        <Check className="size-3.5 text-emerald-400" />
      ) : (
        <Copy className="size-3.5" />
      )}
      {copied ? "Copiado!" : label}
    </Button>
  );
}

// ---------- página ----------
function ResultadosV1() {
  const available = useMemo(
    () => v1Scenes.filter((s) => images[s.id]).map((s) => s.id),
    [],
  );

  const allImagePrompts = v1Scenes
    .map((s) => `=== ${s.id} — ${s.title} ===\n${s.prompt}`)
    .join("\n\n");
  const allVideoPrompts = v1VideoPrompts
    .map(
      (v) =>
        `=== ${v.id} (${v.durationSeconds}s) ===\n${v.prompt}`,
    )
    .join("\n\n");

  async function downloadZip() {
    const files: { name: string; data: Uint8Array }[] = [];
    for (const id of available) {
      const res = await fetch(images[id]);
      files.push({
        name: `${id}.png`,
        data: new Uint8Array(await res.arrayBuffer()),
      });
    }
    if (files.length) downloadBlob(buildZip(files), "marea-eterno-v1.zip");
  }

  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      <header className="border-b border-border/40 bg-card/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </a>
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/5 text-xs font-normal"
          >
            <span className="mr-1.5 size-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
            Sessão v1 — pronta para gerar
          </Badge>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-10">
        <section className="mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
            <Car className="size-3.5 text-primary" />
            <span>Sessão cinematográfica — 20 cenas</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            {v1Aesthetic.title}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-3xl">
            {v1Aesthetic.summary}
          </p>
          <p className="text-muted-foreground/80 text-xs sm:text-sm leading-relaxed max-w-3xl mt-3">
            {v1Aesthetic.visual}
          </p>
        </section>

        {/* Locks */}
        <section className="grid gap-4 sm:grid-cols-2 mb-10">
          <Card className="border-border/60 bg-card/60">
            <CardHeader className="p-5 pb-2">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <User className="size-4 text-primary" /> Locks de personagem
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-1 space-y-2">
              {v1CharacterLocks.map((l, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                  {l}
                </p>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/60">
            <CardHeader className="p-5 pb-2">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Locks de locação
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-1 space-y-2">
              {v1LocationLocks.map((l, i) => (
                <p key={i} className="text-xs text-muted-foreground leading-relaxed">
                  {l}
                </p>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/60 bg-card/60 sm:col-span-2">
            <CardHeader className="p-5 pb-2">
              <CardTitle className="text-sm font-semibold flex items-center gap-2">
                <Mic className="size-4 text-primary" /> Voice Lock & Registro Sonoro
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-1 space-y-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {V1_VOICE_LOCK}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {V1_AUDIO_LOCK}
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Ações em lote */}
        <section className="rounded-xl border border-border/60 bg-card/40 p-5 mb-10 flex flex-wrap gap-2">
          <CopyButton
            label="Copiar todos os prompts de imagem"
            text={allImagePrompts}
          />
          <CopyButton
            label="Copiar todos os prompts de vídeo"
            text={allVideoPrompts}
          />
          <CopyButton label="Copiar Style Lock" text={V1_STYLE_LOCK} />
          <Button
            variant="outline"
            size="sm"
            onClick={downloadZip}
            disabled={available.length === 0}
          >
            <FileArchive className="size-3.5" />
            Baixar .zip das imagens
            {available.length > 0 && ` (${available.length})`}
          </Button>
          <Badge
            variant="outline"
            className="border-border/60 text-muted-foreground font-normal text-xs self-center"
          >
            <Images className="size-3.5 mr-1" />
            {available.length}/20 imagens geradas
          </Badge>
        </section>

        {/* Grid de cenas */}
        <section className="grid gap-4 md:grid-cols-2">
          {v1Scenes.map((scene) => {
            const video = v1VideoPrompts.find((v) => v.id === scene.id);
            const img = images[scene.id];
            return (
              <Card
                key={scene.id}
                className="border-border/60 bg-card/60 overflow-hidden"
              >
                <div className="relative aspect-video bg-secondary/40">
                  {img ? (
                    <img
                      src={img}
                      alt={scene.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground/60">
                      <Images className="size-6" />
                      <span className="text-xs">Imagem pendente de geração</span>
                      <span className="text-[10px] uppercase tracking-widest">
                        {scene.id}
                      </span>
                    </div>
                  )}
                </div>
                <CardHeader className="p-4 pb-1">
                  <CardTitle className="text-sm font-semibold flex items-center gap-2">
                    {scene.id.toUpperCase()} · {scene.title}
                    {video && (
                      <Badge
                        variant="outline"
                        className="ml-auto border-primary/30 text-primary bg-primary/5 text-[10px] font-normal"
                      >
                        <Video className="size-3 mr-1" />
                        {video.durationSeconds}s
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {scene.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <CopyButton
                      label="Copiar prompt de imagem"
                      text={scene.prompt}
                      className="text-xs"
                    />
                    {video && (
                      <CopyButton
                        label="Copiar prompt de vídeo"
                        text={video.prompt}
                        className="text-xs"
                      />
                    )}
                    {img && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={async () => {
                          const res = await fetch(img);
                          downloadBlob(
                            await res.blob(),
                            `${scene.id}.png`,
                          );
                        }}
                      >
                        <Download className="size-3.5" />
                        Baixar imagem
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>
      </main>

      <footer className="border-t border-border/30 py-6 text-center text-xs text-muted-foreground">
        <p>Sessão v1 — Marea Eterno · prompts prontos, gerações pendentes.</p>
      </footer>
    </div>
  );
}
