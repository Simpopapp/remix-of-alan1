// ============ Sessão v1 — "Marea Eterno" ============
// Locks construídos do zero nesta sessão (skill nova-sessao-aka-cine).
// Colados verbatim em cada cena onde a entidade aparece.

export const V1_STYLE_LOCK = `Style: live-action prestige automotive commercial captured photographically on an Arri Alexa 35 with vintage Lomo anamorphic primes in 2.39:1, no illustration, no painted look, no concept-art rendering, exact palette of sodium-amber #d68a3a highlights, deep steel-blue #1a3a4a shadows and chrome-neutral midtones, naturalistic motivated lighting with hard practical sources, fine 35mm grain with gentle halation around point lights and oval blue anamorphic flares, visual grammar of Ridley Scott's automotive grandeur crossbred with David Fincher's cold restraint, mood: solemn and absurdly reverent.`;

export const V1_CAR_LOCK = `THE CAR: a 1999 Fiat Marea sedan in deep midnight-blue metallic paint with honest swirl marks and micro-scratches, chrome MAREA badge on the trunk, five-spoke factory alloy wheels with faint brake dust, original beige interior with cracked dashboard trim, 2.0 five-cylinder turbo under the hood.`;

export const V1_RAF_LOCK = `RAFAEL: Brazilian man in his late thirties, olive tan skin, dense black pompadour swept back with a clean side part, full black beard trimmed short, amber-tinted rectangular glasses with thin gold frames, lean build, fitted black crew-neck t-shirt and dark tailored trousers, silver vintage chronograph on the left wrist.`;

export const V1_HEIRESS_LOCK = `HEIRESS: Brazilian woman in her sixties, light olive skin, silver-grey chignon, thin gold-rimmed oval glasses, aristocratic lined face, small pearl earrings, tailored cream silk blazer over a black turtleneck, small gold dress watch.`;

export const V1_SHOWROOM_LOCK = `GRAN TURISMO SHOWROOM: polished dark concrete floor with mirror reflections, exposed black steel beams overhead, floor-to-ceiling glass wall with night-city bokeh, a single amber neon strip spelling MAREA above the rotating podium, minimalist Scandinavian furniture in the far corner.`;

export const V1_WORKSHOP_LOCK = `HERITAGE WORKSHOP COURTYARD: crumbling ochre-painted brick walls, rusted corrugated roof panels, vintage Fiat parts and wooden crates stacked along the wall, one hanging fluorescent tube flickering faintly, oil-stained checkerboard concrete floor.`;

export const V1_SERRA_LOCK = `SERRA MOUNTAIN PASS: narrow two-lane asphalt with a faded white edge line, steep grassy slopes dropping into a misty valley, weathered white-and-red guardrail posts, low clouds hugging the ridge above the tree line.`;

export const V1_STUDIO_LOCK = `WHITE CATALOGUE STUDIO: seamless white cyc wall, even high-key softbox lighting, faint floor shadow line under the car, zero background detail.`;

export const V1_OVERLOOK_LOCK = `MOUNTAIN OVERLOOK: cracked concrete parapet terrace above the valley, a rusted telescopic tourist viewer bolted to the stone, a small vending kiosk with a faded awning, clouds drifting below the railing.`;

export const V1_VOICE_LOCK = `RAFAEL (voice): warm mid-low baritone with light rasp, Brazilian Portuguese with a soft paulista accent, fast conspiratorial cadence that slows into deliberate gravitas on key words, audible intake of breath before key phrases, delivery like a car dealer who studied TED talks.`;

export const V1_AUDIO_LOCK = `Audio fidelity: all sound sources feel physically present on location, no non-diegetic score hits, no trailer-style bass drops; ambient bed always audible under dialogue; Foley recorded at human-scale proximity.`;

export const v1Aesthetic = {
  title: "Marea Eterno",
  summary:
    "Um comercial cinematográfico em vinte atos: Rafael, o vendedor-influencer mais sincero do Brasil, apresenta um Fiat Marea 1999 como a maior obra-prima automotiva da humanidade — e cobra por ela como se fosse o Davi de Michelangelo. Três atos: o mito apresentado, as virtudes escalando, e o preço revelado como uma verdade inegociável. Tom: solene, absurdo e absolutamente reverente.",
  visual:
    "Live-action fotorrealista em 2.39:1, Alexa 35 com anamórficas Lomo vintage; paleta de âmbar-sódio nas altas luzes, azul-aço profundo nas sombras e meios-tons neutros de cromo; iluminação naturalista com fontes práticas duras; grão 35mm com halação suave e flares ovais azuis; gramática visual de Ridley Scott cruzada com a frieza de David Fincher.",
};

export const v1CharacterLocks = [V1_RAF_LOCK, V1_HEIRESS_LOCK];

export const v1LocationLocks = [
  V1_SHOWROOM_LOCK,
  V1_WORKSHOP_LOCK,
  V1_SERRA_LOCK,
  V1_STUDIO_LOCK,
  V1_OVERLOOK_LOCK,
];

export interface V1Scene {
  id: string;
  title: string;
  description: string;
  prompt: string;
}

const S = V1_STYLE_LOCK;
const CAR = V1_CAR_LOCK;
const RAF = V1_RAF_LOCK;
const HER = V1_HEIRESS_LOCK;
const SHW = V1_SHOWROOM_LOCK;
const WKS = V1_WORKSHOP_LOCK;
const SER = V1_SERRA_LOCK;
const STD = V1_STUDIO_LOCK;
const OVR = V1_OVERLOOK_LOCK;

export const v1Scenes: V1Scene[] = [
  {
    id: "c01",
    title: "As luzes despertam",
    description:
      "Ato 1 — Abertura fria: o showroom às cegas e o Marea sozinho no pódio, faróis acendendo dentro do quadro. Estabelece o carro como relíquia antes de qualquer pessoa aparecer.",
    prompt: `Extreme wide establishing shot, locked-off camera from the far end of a pitch-black showroom: a 1999 Fiat Marea sedan stands alone on a low rotating podium, its headlights igniting inside the frame, twin beams cutting through faint dust haze toward the lens, the polished dark concrete floor mirroring the light into two long rippled columns, exposed black steel beams overhead barely readable, the floor-to-ceiling glass wall spilling blurred night-city bokeh, a single amber neon strip glowing dimly above the podium, no people anywhere, temple-like silence, micro-droplets of moisture suspended in the headlight cones, everything beyond the beams collapsing into dense unlit shadow where detail simply dies, ISO noise blooming softly in the blacks, gentle halation ringing each headlight point, framing slightly off-center with the podium pushed left of axis. Lighting: two hard headlight sources only, everything else unlit. Location: ${SHW}. ${CAR}. ${S}.`,
  },
  {
    id: "c02",
    title: "O vendedor surge",
    description:
      "Ato 1 — Rafael emerge da escuridão entre os faróis, óculos acendendo em flares, primeira palavra do discurso ensaiado mil vezes.",
    prompt: `Low-angle medium shot with a slow dolly-in feel: RAFAEL steps out of the blackness between the still-settling headlight beams, half his face lit warm amber and half lost to shadow, amber-tinted glasses catching two oval anamorphic flares, mouth just opening on the first rehearsed word, one hand rising with the weight of a man about to teach a lesson, faint breath visible in the cool air, the Marea a soft blue shape in the foreground bokeh, the podium light raking up from below to expose beard texture and skin pores, asymmetric framing with his shoulder cropped by the left margin, deep shadow eating the right half of the frame where the showroom furniture vanishes, halation on the amber tint of the lenses, fine grain visible across the blacks. Lighting: warm amber practical from the podium, nothing else. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c03",
    title: "A relíquia no cromo",
    description:
      "Ato 1 — Macro no emblema MAREA: o polegar limpa a poeira em um arco lento, revelando o nome como quem limpa um museu.",
    prompt: `Extreme close-up macro shot, locked off at trunk height: a hand-worn chrome MAREA badge, RAFAEL's thumb wiping a slow arc through a film of dust to reveal the lettering, hard amber practical raking across the chrome from above so the cleaned strip burns bright while the untouched dust stays dull, honest swirl marks and micro-scratches orbiting the badge in the midnight-blue clear-coat, shallow focus with the trunk edge falling off into darkness, a fingerprint smudge half-erased in the wipe path, a tiny specular star on the chrome edge, grain dense in the shadowed trunk lid, the moment captured mid-wipe with the thumb still in motion. Lighting: one hard amber practical, raking. Location: ${SHW}. ${CAR}. ${RAF} (only the hand and black sleeve visible in frame). ${S}.`,
  },
  {
    id: "c04",
    title: "Toque de curador",
    description:
      "Ato 1 — Rafael pousa a palma no capô como um curador toca tela; os swirl marks valem como proveniência.",
    prompt: `Intimate medium shot at hood height: RAFAEL resting his left palm flat on the midnight-blue hood the way a curator touches canvas, eyes half closed, lips mid-whisper, his broken reflection swimming in the clear-coat, the silver chronograph catching a point light, the podium spotlight carving the car out of the dark while the rest of the showroom stays unreadable, subtle swirl marks treated as provenance, his other hand describing a slow reverent arc above the panel without touching it, breath still faintly visible, framing slightly off-center, one stray hair out of place on the pompadour. Lighting: single warm podium key from above-left, raking the paint. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c05",
    title: "A herdeira circunda",
    description:
      "Ato 1 — A herdeira cética orbita o carro no pódio enquanto Rafael observa com paciência de guia de museu.",
    prompt: `High wide static shot from a mezzanine level looking down: the HEIRESS circles the Marea on its podium with arms crossed and one eyebrow raised, mid-stride posture implying a recent heel click, while RAFAEL stands opposite with hands folded behind his back, patient as a museum guide, the single overhead spotlight carving a bright stage around the car and dropping everything else into steel-blue darkness, their two long shadows crossing on the mirror-polished floor, the amber neon strip reflected in the windshield, off-center podium composition with dead space on the right, faint dust drifting through the spotlight cone. Lighting: one hard overhead podium spot, warm. Location: ${SHW}. ${CAR}. ${RAF}. ${HER}. ${S}.`,
  },
  {
    id: "c06",
    title: "O coração",
    description:
      "Ato 1 — O capô sobe em inevitabilidade hidráulica e o cinco-cilindros turbo aparece iluminado como relicário.",
    prompt: `Medium close-up from the front of the car at hood height: the hood pops and rises with slow hydraulic inevitability, releasing a faint breath of cold garage air, RAFAEL leaning in behind it and raising the prop wide to present the five-cylinder turbo block lit by a single warm work-light like a reliquary in an otherwise dark frame, his hands framing the plenum without touching, chrome and aluminum catching the light, the engine bay clean but honest with factory stamps and a weathered plastic cover, his face half-lit above the open hood, the amber tint of his glasses doubled on the radiator cap. Lighting: one warm work-light inside the engine bay plus the dim podium glow. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c07",
    title: "Catálogo do absurdo",
    description:
      "Ato 2 — Quadro de catálogo em estúdio branco: Rafael apresenta, a herdeira desconfia; a reverência fica mais engraçada no branco estéril.",
    prompt: `High wide catalogue shot in a seamless white studio: the Marea parked at a perfect three-quarter angle while RAFAEL and the HEIRESS stand beside it in a staged tableau, Rafael presenting the car with both open hands like a magician's reveal, the heiress studying it with aristocratic suspicion and arms still crossed, a faint floor shadow line under the tires, everything crisp, over-lit and deliberately bland so the reverence reads funnier, zero background detail, the only saturated color the deep midnight-blue of the body against white, subtle lens vignetting betraying the anamorphic glass, Rafael's shadow overlapping the heiress's on the floor, a slight chromatic aberration fringe on the car's roofline. Lighting: even high-key softbox, shadowless background. Location: ${STD}. ${CAR}. ${RAF}. ${HER}. ${S}.`,
  },
  {
    id: "c08",
    title: "O relógio de 1999",
    description:
      "Ato 2 — Macro no painel bege e no relógio digital verde-pálido marcando 23:59, tratado como relíquia da era de ouro.",
    prompt: `Extreme close-up inside the cabin: the original beige dashboard with a cracked trim seam crossing the frame, the pale green 1999 digital clock glowing 23:59 like a holy relic, RAFAEL's index finger hovering beside it in a presenting gesture without touching, warm amber instrument-cluster glow washing across the cracked plastic and the steering-wheel rim out of focus behind, dust motes drifting through the soft beam, shallow depth with the focus pinned to the digits, honest nineties plastics with fading and micro-scratches, a keychain dangling in the ignition at frame edge, bokeh circles from the cluster lights. Lighting: warm practical from the instrument cluster only. Location: ${SHW} (interior of the podium car). ${CAR}. ${RAF} (hand and black sleeve only). ${S}.`,
  },
  {
    id: "c09",
    title: "Serra ao entardecer",
    description:
      "Ato 2 — Travelling lateral na serra ao pôr do sol: Rafael dirigindo com uma mão só, falando em cima do motor, sol riscando o para-brisa.",
    prompt: `Wide tracking shot alongside the Marea sweeping through a golden-hour mountain pass, the camera vehicle pacing it on the parallel lane, low sun flaring one oval blue anamorphic streak through the windshield, RAFAEL at the wheel with one relaxed hand on the rim and his mouth clearly mid-sentence, guardrail posts strobing past, valley mist sitting below the shoulder, the body leaning honestly into the long right-hand sweeper, heat shimmer off the hood line, the grass slope rim-lit gold, deep steel-blue shadow pooling in the valley floor, dust kicked off the rear wheel, motion blur on the road surface while the car stays sharp, imperfect rural asphalt with patched tar seams. Lighting: hard golden side sun with long shadows. Location: ${SER}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c10",
    title: "Rodagem e asfalto",
    description:
      "Ato 2 — Macro da roda em velocidade: cascalho chibatando, shimmer de calor no disco, tar seams estroboscópicos.",
    prompt: `Extreme close-up on the front wheel and asphalt at speed: the five-spoke factory alloy spinning with a soft motion blur, small gravel chattering away from the contact patch, heat shimmer rising off the brake disc, the midnight-blue fender edge smeared with speed, a hard golden sidelight raking the tire wall and pocking the rubber texture, tar seams strobing under the wheel, shallow focus with the background valley dissolving into gold and blue abstraction, one tiny stone caught mid-air, brake dust ghosting the rim. Lighting: hard low golden sidelight. Location: ${SER} (road surface detail only). ${CAR} (wheel detail). ${S}.`,
  },
  {
    id: "c11",
    title: "Banho de honra",
    description:
      "Ato 2 — Chuva noturna: Rafael sereno ao volante, limpadores em metrônomo, chuva tratada como cerimônia de glória.",
    prompt: `Medium shot through the windshield at night rain: RAFAEL behind the wheel utterly calm, one hand resting at twelve o'clock, wipers swinging in metronome rhythm, droplets strobing through the headlight beams ahead, the amber dash glow pooled on his glasses and beard, deep steel-blue night tones outside with sodium streetlights smearing gold across the wet windshield, his face relaxed in the middle of an ordinary task performed like a ceremony, a faint reflection of the dash floating on the glass, the wiper arc frozen mid-sweep, off-center composition with the rearview mirror cropped by the frame. Lighting: amber cluster glow inside, sodium and headlights outside. Location: ${SER} (night descent stretch). ${RAF}. ${CAR} (cabin). ${S}.`,
  },
  {
    id: "c12",
    title: "A pergunta do preço",
    description:
      "Ato 2→3 — No mirante, a herdeira faz a única pergunta que importa; Rafael sorri devagar antes de responder.",
    prompt: `Medium two-shot at a cracked concrete parapet overlook above the valley: RAFAEL leaning on the parapet beside the HEIRESS, the Marea parked behind them in frame with morning mist filling the valley below, the heiress raising one manicured hand mid-question as she asks the only question that matters, Rafael absorbing it with a slow widening smile, clouds drifting below the railing level, the rusted telescopic tourist viewer beside them, the kiosk awning faded in the background, morning light soft and diffused with no hard shadow, his glasses reflecting a small patch of sky, off-center framing with the parapet edge cutting the lower third. Lighting: soft overcast morning. Location: ${OVR}. ${RAF}. ${HER}. ${CAR}. ${S}.`,
  },
  {
    id: "c13",
    title: "A chave voa",
    description:
      "Ato 3 — A chave congelada no ar entre os dedos de Rafael e a mão aberta da herdeira, contraluz dourada.",
    prompt: `Extreme close-up frozen mid-air: the Marea key fob tumbling in a slow arc between RAFAEL's outstretched fingers and the waiting palm of the HEIRESS, backlit by low golden haze so the key's teeth flare, dust suspended in the light shaft, the car's hood line a soft blue shape in the background bokeh, his fingers relaxed mid-release, her manicured hand open and steady, an oval flare bleeding off the chrome, imperceptible motion blur on the fob, framing tight with the key sitting exactly on the golden-ratio point of the frame. Lighting: hard warm backlight with atmospheric haze. Location: ${OVR} (foreground detail). ${RAF} (hands only). ${HER} (hand only). ${S}.`,
  },
  {
    id: "c14",
    title: "A bênção do mecânico",
    description:
      "Ato 3 — No pátio do mecânico veterano, o velho Fiat pressiona o peito e curva a cabeça diante do Marea; Rafael consagra.",
    prompt: `Medium shot inside the heritage workshop: an old Fiat mechanic in oil-stained overalls presses one hand to his chest and bows his head before the Marea as RAFAEL presents it with a single solemn hand flat on the roof, the hanging fluorescent tube flickering above and catching the blue paint in weak pulses, vintage Fiat parts and wooden crates stacked along the ochre wall, the oil-stained checkerboard floor reading like a chessboard of devotion, dust and old posters on the brick, the mechanic's eyes wet with something between grief and gratitude, Rafael upright and grave like a priest at a canonization, framing slightly off-center with the workbench intruding at frame right. Lighting: flickering practical fluorescent plus one dusty shaft of daylight through a broken roof panel. Location: ${WKS}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c15",
    title: "Suspense no showroom",
    description:
      "Ato 3 — Por trás de Rafael: silhueta contra o holofote, o Marea brilhando além do ombro, o instante do preço chegando.",
    prompt: `Intimate over-the-shoulder medium close-up from behind RAFAEL: his dark silhouette and the amber rim of his glasses against the podium spotlight, the Marea glowing beyond his shoulder with its paint holding one long amber reflection, his hand resting on the roof edge, head tilted a few degrees toward the off-frame heiress as the moment of pricing arrives, the neon strip flickering once above, deep shadow swallowing the rest of the room, tension held in total stillness, grain heavy in the blacks, his black t-shirt merging with the darkness so only the rim separates him from it. Lighting: single podium spot plus neon accents. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c16",
    title: "O preço nos óculos",
    description:
      "Ato 3 — Macro nos óculos âmbar: o Marea inteiro refletido minúsculo em cada lente, o preço a um fôlego de ser dito.",
    prompt: `Extreme close-up of RAFAEL's amber-tinted glasses filling the frame: the midnight-blue Marea reflected complete but tiny in each lens, his lips parted on the verge of naming the price, beard texture and skin pores honest under a single hard practical from above, the thin gold frames catching a specular point, everything outside the lenses swallowed in black, one lens slightly brighter than the other because the key is off-axis, a subtle chromatic fringe on the lens edge, halation kissing the temple arm, the moment suspended one breath before the word. Lighting: one hard top practical, nothing else. Location: ${SHW}. ${RAF}. ${CAR} (as reflection only). ${S}.`,
  },
  {
    id: "c17",
    title: "A assinatura trêmula",
    description:
      "Ato 3 — A mão da herdeira assina um cheque de número obsceno; a mão de Rafael sustenta o canto do papel com cuidado quase paternal.",
    prompt: `Close-up on a cream leather desk: the HEIRESS's hand signing a check with a trembling fountain pen, an enormous handwritten number dominating the paper, RAFAEL's black-sleeved hand steadying the corner of the check with almost paternal care, a warm desk-lamp pool carving the signature out of steel-blue room shadow, a pearl on her finger catching a spark, the nib mid-stroke with a bead of ink forming, shallow focus that keeps the number legible while the faces stay absent, a faint reflection of the lamp on the leather, one small ink smudge near the margin. Lighting: single warm desk lamp. Location: ${SHW} (office corner implied). ${RAF} (hand only). ${HER} (hand only). ${S}.`,
  },
  {
    id: "c18",
    title: "Aurora da venda",
    description:
      "Ato 3 — Amanhecer: raios de sol atravessam as vigas, faixa VENDIDA desfraldada, Rafael reverencia o carro de mão no peito.",
    prompt: `Extreme wide shot at dawn: the showroom's floor-to-ceiling glass wall catching the first gold light of day, the Marea on its podium glowing amber against deep steel-blue interior shadow, a SOLD banner unrolled above the podium with honest wrinkles in the fabric, RAFAEL small in the frame bowing from the waist toward the car with one hand rising to his chest, long sun rays cutting through the black steel beams and striping the floor, night-city bokeh dissolving into morning haze beyond the glass, dust ignited inside the shafts, framing low and reverent with the horizon held high, halation on the sun edge, the podium pushed off-center. Lighting: hard golden dawn through glass plus cool interior fill. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c19",
    title: "Só os dignos",
    description:
      "Ato 3 — Rafael caminha para a parede de luz dourada, mão erguida em bênção preguiçosa, sem voltar.",
    prompt: `Medium wide shot: RAFAEL walking away from the podium into a wall of warm golden backlight that eats his silhouette from the legs up, one hand raised in a lazy blessing wave without turning back, the Marea's headlight star sparkling once over his shoulder, oval anamorphic flares swimming across the frame, dust and exhaust shimmer inside the beam, his pompadour rim-lit gold, the showroom floor reflecting the light source as one long distorted bar, framing slightly low with him pushed off the center axis, the car soft-focus at frame left. Lighting: hard warm backlight, interior unlit. Location: ${SHW}. ${RAF}. ${CAR}. ${S}.`,
  },
  {
    id: "c20",
    title: "Sem preço",
    description:
      "Ato 3 — Encerramento: o Marea sozinho no pódio, a frase SEM PREÇO projetada tremendo na parede de vidro, ninguém mais no quadro.",
    prompt: `Broken-symmetry extreme wide closing shot: the Marea alone on its podium under the amber neon strip, the floor-to-ceiling glass wall carrying a giant flickering gobo projection spelling SEM PREÇO out over the night city beyond, the projection imperfect and wavering like a real lamp through haze, floor reflections doubling the car into a blurred twin, everything outside the podium light dense black, one pod light pulsing faintly, no people anywhere, the final frame of a film that refuses to admit the joke, faint haze thinning above the roofline, the neon amber dying half a stop darker at the frame edges. Lighting: neon strip and podium light only. Location: ${SHW}. ${CAR}. ${S}.`,
  },
];
