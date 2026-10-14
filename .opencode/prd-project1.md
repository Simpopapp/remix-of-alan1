# PRD — project1 (Sessão "Marea Eterno")

## 1. Origem e objetivo

O pedido (em `project1.md`) manda usar a skill `nova-sessao-aka-cine` para criar
**tudo menos as imagens e os vídeos**: roteiro, locks, 20 prompts de imagem,
20 prompts de vídeo, dados e página — deixando o projeto num estado em que
**só falta disparar as gerações**. Nenhuma configuração pode faltar depois
disso. Ao chegar nesse ponto, avisar o usuário e pedir:

- **"ok"** → gerar as 20 imagens (Etapa 6 da skill);
- **"ok2"** → gerar as 20 imagens **e** renderizar os 20 vídeos (Etapas 6 + 7b).

Tema de inspiração (não direção de arte): "comercial vendendo um Marea como o
melhor carro do mundo, preço elevado, só pontos positivos". Protagonista: o
personagem da foto `.opencode/cena00.jpg` (vendedor/influencer).

Restrição explícita: **não usar o Project Monitor nesta tarefa.**

## 2. Decisões técnicas

- **Stack:** TanStack Start (rotas em `src/routes/`), dados em `src/data/`.
- **Versão:** v1 (nenhuma vN existia no projeto — remix limpo).
- **Imagens quando geradas:** `src/assets/v1/c01..c20.png`, modelo
  `premium.gemini`, 1920×1088, via `imagegen--generate_image`.
- **Vídeos quando gerados:** `google/veo-3.1`, 16:9, 1080p, `generateAudio: true`,
  duração por cena 4/6/8s, salvos em `src/assets/v1/videos/`.
- **Adaptação da skill para geração diferida:** como as imagens ainda não existem
  no momento do build, `src/routes/resultados-v1.tsx` resolve as imagens via
  `import.meta.glob("../assets/v1/c*.png", { eager: true })`. Glob sem matches
  retorna objeto vazio — o build não quebra e a página mostra o estado
  "Imagem pendente de geração". Quando as 20 imagens forem geradas, elas
  aparecem automaticamente, sem nova edição de código.
- **ZIP sem dependência nova:** o projeto não tem `jszip`/`fflate`; a página
  implementa um ZIP store-only (sem compressão, com CRC32 próprio) para o
  download em lote. Evita instalar pacote só para isso.
- **Feedback de cópia:** botões trocam para "Copiado!" localmente em vez de
  depender do sonner (Toaster não está montado no `__root`).

## 3. Escopo por fase

### Fase 1 — Roteiro e locks (Etapas 1–4 da skill)
- Logline, sinopse em 3 atos, 20 beats com progressão dramática real.
- Style Lock, Character Locks (Rafael + Herdeira), Voice Lock (Rafael),
  Location Locks (showroom, oficina, serra, estúdio, mirante), Car Lock,
  Audio Lock — todos escritos do zero nesta sessão e colados **verbatim**.
- Ledger de continuidade respeitado (figurino fixo, hora do dia progredindo).

### Fase 2 — 20 prompts de imagem (Etapa 5)
- 150–250 palavras, inglês denso, ordem fixa: plano → sujeito/ação → cenário →
  props → luz da cena → Location Lock → Character Lock → Car Lock → Style Lock.
- Mapa de ritmo de planos sem repetição consecutiva de enquadramento.

### Fase 3 — 20 prompts de vídeo (Etapa 7)
- Corpo visual + bloco `Audio:` obrigatório (Audio Lock → diálogo PT-BR entre
  aspas com Voice Lock verbatim → SFX → ambiência em camadas).
- Máx. 1 falante por clipe; duração ∈ {4, 6, 8}s coerente com os marcos.
- Salvos em `src/data/v1-video-prompts.ts` (`id`, `prompt`, `durationSeconds`).

### Fase 4 — Dados e página (Etapa 8)
- `src/data/v1.ts`: aesthetic, locks exportados e `v1Scenes` com prompt de imagem.
- `src/routes/resultados-v1.tsx`: grid 16:9 das 20 cenas, estado pendente por
  cena, copiar prompt de imagem/vídeo individual, download de imagem,
  copiar prompts em bloco, baixar .zip das imagens (quando existirem).
- Link "Resultados v1 — Marea Eterno" na home (`src/routes/index.tsx`).
- Head próprio da rota (title/description/og) sem og:image (sem URL absoluta).

### Fase 5 — Ponto de parada (obrigatório)
- **Não** disparar Etapa 6 (imagens) nem 7b (vídeos) nesta rodada.
- Avisar o usuário: pedir **"ok"** (só imagens) ou **"ok2"** (imagens + vídeos).

## 4. Critérios de aceite

1. Os 20 prompts de imagem terminam com o mesmo Style Lock verbatim.
2. Character/Location/Car Locks colados verbatim onde a entidade aparece.
3. Todo prompt de vídeo tem bloco `Audio:` iniciando pelo Audio Lock verbatim.
4. Durações todas em {4, 6, 8}s e falas dimensionadas (~2–3 palavras/s).
5. Build da app passa com as imagens ainda ausentes (glob vazio).
6. `/resultados-v1` renderiza as 20 cenas com estado pendente sem erros.
7. Nenhuma geração disparada antes do "ok"/"ok2" do usuário.
