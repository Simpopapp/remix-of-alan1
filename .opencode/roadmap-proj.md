# Roadmap — project1 (Sessão "Marea Eterno")

Execução da skill `nova-sessao-aka-cine` com geração diferida (ver PRD).

## Fase 1 — Roteiro e locks (Etapas 1–4)
- [x] Decodificar pedido: gênero, meio, tom, locações, personagens
- [x] Style Lock construído do zero (fidelidade fotorrealista ponto 2/3)
- [x] Character Locks (Rafael da cena00.jpg + Herdeira) e Car Lock
- [x] Voice Lock (Rafael) + Audio Lock (registro sonoro verité/naturalista)
- [x] 5 Location Locks (showroom, oficina, serra, estúdio, mirante)
- [x] Logline + sinopse 3 atos + 20 beats com progressão e continuidade
- Gates: beats contam uma história só; locks citam referências nominais.

## Fase 2 — 20 prompts de imagem (Etapa 5)
- [x] Mapa de ritmo de planos sem repetição consecutiva
- [x] 20 prompts (150–250 palavras, ordem fixa, locks verbatim)
- Gates: todos terminam no Style Lock; auditoria anti-drift de registro.

## Fase 3 — 20 prompts de vídeo (Etapa 7)
- [x] Durações atribuídas por peso do beat (4/6/8s)
- [x] Corpo visual com micro-eventos temporizados por duração
- [x] Bloco `Audio:` completo em todas as cenas (Audio Lock + diálogo + SFX + ambiência)
- Gates: 1 falante por clipe; falas ~2–3 palavras/s; nada implícito no som.

## Fase 4 — Dados e página (Etapa 8)
- [x] `src/data/v1.ts` (aesthetic, locks, scenes)
- [x] `src/data/v1-video-prompts.ts` (id, prompt, durationSeconds)
- [x] `src/routes/resultados-v1.tsx` (grid, cópia, download, zip, estado pendente)
- [x] Link na home + head da rota
- Gates: build passa com glob vazio; página renderiza as 20 cenas.

## Fase 5 — Ponto de parada (Etapa 6/7b pendentes de consentimento)
- [ ] "ok" do usuário → Etapa 6: 20 imagens (`premium.gemini`, 1920×1088)
- [ ] "ok2" do usuário → Etapa 6 + 7b: imagens + 20 vídeos (veo-3.1, com áudio)
- Gates: nenhuma geração antes do ok/ok2; após gerar, conferir no preview.
