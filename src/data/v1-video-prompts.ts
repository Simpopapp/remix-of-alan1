// ============ Sessão v1 — "Marea Eterno" ============
// 20 prompts de vídeo (Veo 3.1, áudio nativo). Bloco Audio: obrigatório.
// Durações: 4, 6 ou 8 segundos por cena.

import {
  V1_AUDIO_LOCK,
  V1_CAR_LOCK,
  V1_HEIRESS_LOCK,
  V1_OVERLOOK_LOCK,
  V1_RAF_LOCK,
  V1_SERRA_LOCK,
  V1_SHOWROOM_LOCK,
  V1_STUDIO_LOCK,
  V1_STYLE_LOCK,
  V1_VOICE_LOCK,
  V1_WORKSHOP_LOCK,
} from "./v1";

export interface V1VideoPrompt {
  id: string;
  prompt: string;
  durationSeconds: 4 | 6 | 8;
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
const VOI = V1_VOICE_LOCK;
const AUD = V1_AUDIO_LOCK;

export const v1VideoPrompts: V1VideoPrompt[] = [
  {
    id: "c01",
    durationSeconds: 6,
    prompt: `Static extreme wide held for six seconds from the far end of the dark showroom, no camera movement. Around second 2 the twin headlights ignite with a visible filament warm-up, beams blooming through the dust haze; around second 4 the beams stabilize and the floor reflections lengthen; around second 5 the amber neon strip flickers on once above the podium. Lighting dynamic: from total black to two hard headlight cones. Location: ${SHW}. ${CAR}. ${S}. Audio: ${AUD} At second 2 a distant relay thunk as the headlights fire, then a low electric hum rising with the beams; a vast empty room tone with faint HVAC hiss underneath; floor-level air movement whispering past the glass wall; no dialogue, no music.`,
  },
  {
    id: "c02",
    durationSeconds: 6,
    prompt: `Low-angle medium shot, slow 6-second dolly-in from medium to medium close-up. RAFAEL steps out of the blackness between the headlight beams at second 1, the amber lenses flare at second 3, he raises one hand at second 4 and begins the pitch, mouth articulating clearly, breath fogging faintly in the cool air. Lighting: warm podium key from below-left, shadow half of face. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} He lifts his chin with half a smile and says in Brazilian Portuguese, conspiratorial and warm: "Eu sei o que você veio ver." SFX: one heel step on polished concrete at second 1, a faint podium motor drone. Ambience: empty showroom room tone, distant city traffic muffled through the glass wall.`,
  },
  {
    id: "c03",
    durationSeconds: 4,
    prompt: `Extreme close-up macro, locked off, four seconds, at trunk height. Around second 1 the thumb enters frame and begins the slow dust-wipe across the chrome badge; the cleaned strip brightens progressively through second 3; at second 4 the thumb stops mid-arc holding the reveal. Halation pulses on the chrome specular star. Lighting: one hard amber raking practical. Location: ${SHW}. ${CAR}. ${RAF} (hand and sleeve only). ${S}. Audio: ${AUD} ${VOI} He exhales through his nose, almost reverent, and murmurs in Brazilian Portuguese: "Trinta anos." SFX: skin friction dragging over dusty chrome, a faint squeak as the wipe ends. Ambience: tight quiet room tone, soft podium hum.`,
  },
  {
    id: "c04",
    durationSeconds: 6,
    prompt: `Intimate medium at hood height, slow 6-second push-in from medium to close. Rafael's palm settles flat on the hood at second 1, his eyes half-close around second 3, and from second 4 to 6 his other hand describes the slow reverent arc above the panel without landing. Reflections slide across the clear-coat as he leans in. Lighting: single warm podium key from above-left. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} He whispers in Brazilian Portuguese, slowing into deliberate gravitas: "Toque. Ela responde." SFX: the soft slap of palm contact on painted steel, leather of the t-shirt seam shifting. Ambience: podium motor hum, distant HVAC.`,
  },
  {
    id: "c05",
    durationSeconds: 6,
    prompt: `High wide static shot from the mezzanine, six seconds, camera locked. The heiress strides around the podium from second 1 to 4 with arms crossed, pausing at the rear quarter panel at second 4; Rafael stands opposite, hands folded, and tilts his head one degree toward her at second 5. The spotlight cone stays fixed with dust drifting through it. Lighting: single hard overhead podium spot. Location: ${SHW}. ${CAR}. ${RAF}. ${HER}. ${S}. Audio: ${AUD} No dialogue: the heiress holds her silence on purpose. SFX: two distinct heel clicks on concrete at seconds 1 and 3, a silk blazer rustle. Ambience: cavernous showroom tone, faint neon buzz from the strip above.`,
  },
  {
    id: "c06",
    durationSeconds: 6,
    prompt: `Medium close-up from the front of the car at hood height, gentle 6-second tilt-up as the hood rises. The latch releases at second 1 and the hood lifts slowly on its hydraulics; fully open by second 4; Rafael's hands frame the engine from second 4 to 6 without touching. The warm work-light blooms inside the bay around second 2. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} He lets the latch sound land, then says in Brazilian Portuguese, low and solemn: "O coração." SFX: hydraulic hood release and soft metal settle, the click of the work-light igniting. Ambience: cold garage air tone, dim podium hum.`,
  },
  {
    id: "c07",
    durationSeconds: 6,
    prompt: `High wide static shot in the white studio, six seconds, camera locked. Rafael's both open hands rise in the magician reveal at second 1 and hold; the heiress uncrosses and recrosses her arms around second 3; nothing else moves; the deadpan tableau holds the full six seconds. Lighting: even high-key softbox. Location: ${STD}. ${CAR}. ${RAF}. ${HER}. ${S}. Audio: ${AUD} ${VOI} Rehearsed catalogue cadence, each word landing faster: "Simplicidade. Confiabilidade. Lendário." SFX: silk blazer rustle at second 3, a tire crunch on the studio floor. Ambience: dead-still studio tone, faint softbox ballast hum.`,
  },
  {
    id: "c08",
    durationSeconds: 4,
    prompt: `Extreme close-up inside the cabin, locked off, four seconds. The pale green digital clock glows 23:59 the entire clip; Rafael's index finger rises into frame at second 2 and hovers beside it; at second 3 the last digit blinks once. Dust motes drift through the cluster glow. Lighting: warm instrument-cluster practical only. Location: ${SHW} (interior). ${CAR}. ${RAF} (hand and sleeve only). ${S}. Audio: ${AUD} ${VOI} Near-whisper with an audible intake of breath before, each number savored: "Vinte e três cinquenta e nove." SFX: a faint cluster relay click, the keychain ticking once against the steering column. Ambience: tight cabin tone, distant showroom hum through the glass.`,
  },
  {
    id: "c09",
    durationSeconds: 8,
    prompt: `Wide tracking shot alongside the car for eight seconds through the golden-hour mountain pass, the camera vehicle holding pace on the parallel lane. The Marea leans into the long right-hand sweeper from second 2 to 6, the sun flare sweeps through the windshield at second 5, and Rafael's mouth is visibly mid-sentence between second 1 and 5 while valley mist brightens below. Lighting: hard golden side sun, lens flare dynamic. Location: ${SER}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} Nearly shouting over the engine with pure delight: "Ouve. Cinco cilindros." SFX: the five-cylinder turbo warble rising through the gears, wind buffeting the microphone, tires rolling on coarse asphalt, gravel ticks under the wheel arches. Ambience: valley wind, faint birdsong drowned by speed.`,
  },
  {
    id: "c10",
    durationSeconds: 4,
    prompt: `Extreme close-up on the front wheel at speed, four seconds, camera locked. The alloy spins with soft motion blur, tar seams strobe under the contact patch every half second, one small stone flicks away at second 3, heat shimmer rises off the brake disc. Lighting: hard low golden sidelight raking the rubber. Location: ${SER} (road surface). ${CAR} (wheel detail). ${S}. Audio: ${AUD} No dialogue. SFX: continuous tire roar on asphalt, sharp staccato thumps as the tar seams pass, the loose stone ticking off the fender. Ambience: wind shear past the fender, the engine note buried low behind the tire sound.`,
  },
  {
    id: "c11",
    durationSeconds: 6,
    prompt: `Medium shot through the windshield at night rain, slow 6-second push-in. The wipers sweep one full metronome cycle every two seconds; droplets strobe through the headlight beams; Rafael's hand stays fixed at twelve o'clock; at second 5 he blinks once, unhurried. Sodium streetlight smears slide across the wet glass. Lighting: amber cluster glow inside, headlights and sodium outside. Location: ${SER} (night descent). ${RAF}. ${CAR} (cabin). ${S}. Audio: ${AUD} ${VOI} Calm, almost amused, a smile under the words: "Chuva? Aqui é banho de honra." SFX: metronomic wiper rubber on glass, rain drumming on the roof and hood. Ambience: layered rain foreground on the windshield, mid-distance tire hiss, far thunder rolling flat and low.`,
  },
  {
    id: "c12",
    durationSeconds: 8,
    prompt: `Medium two-shot at the parapet overlook, eight seconds with a slow camera arc to the left. At second 1 the heiress raises her manicured hand mid-question; clouds slide below the railing throughout; Rafael's smile widens from second 4 to 6; at second 6 he answers. Morning mist breathes in the valley. Lighting: soft overcast morning, no hard shadow. Location: ${OVR}. ${RAF}. ${HER}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} He lets the question hang a full beat, then answers, and the second sentence comes slower and softer: "Você quer saber quanto custa." then "Custa tudo." SFX: a mist-damp breeze moving fabric, the telescopic tourist viewer creaking. Ambience: high-altitude wind, a faint kiosk generator hum far behind.`,
  },
  {
    id: "c13",
    durationSeconds: 4,
    prompt: `Extreme close-up on the key fob tumbling mid-air, four seconds with a slow-motion feel, camera locked. The key rotates once across the frame between the releasing fingers and the waiting open palm, backlit flare blooming at second 2, the fob landing out of frame at second 4. Dust hangs in the light shaft. Lighting: hard warm backlight with haze. Location: ${OVR} (foreground). ${RAF} (hands only). ${HER} (hand only). ${S}. Audio: ${AUD} No dialogue. SFX: a soft close whoosh of the key moving through still air, a small metallic tick as the fingers release. Ambience: warm overlook breeze, muffled valley silence beneath.`,
  },
  {
    id: "c14",
    durationSeconds: 6,
    prompt: `Medium shot inside the heritage workshop, six seconds with a slight handheld drift. The fluorescent tube flickers in irregular pulses the whole clip; the old mechanic presses his hand to his chest at second 2 and his head bows by second 4; Rafael's palm stays flat and solemn on the roof. Dust drifts through the broken-roof daylight shaft. Lighting: stuttering fluorescent plus one dusty daylight shaft. Location: ${WKS}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} No dialogue: the mechanic stays silent, moved beyond words. SFX: fluorescent buzz stuttering with each flicker, the mechanic's shaky breath close to the microphone, one drop of oil falling from the bench. Ambience: dusty workshop room tone, a single bird outside the corrugated roof.`,
  },
  {
    id: "c15",
    durationSeconds: 6,
    prompt: `Over-the-shoulder medium close-up from behind Rafael, six seconds, camera holding almost still with one slow inch of push. The neon strip flickers once at second 2; the podium light holds steady; his head tilts toward the off-frame heiress between second 4 and 6 as the pricing moment arrives. Lighting: single podium spot plus neon accents, deep shadow. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} He drops to a near murmur and lets the room hang between the two sentences: "Muitos perguntam." then, after the pause: "Poucos pagam." SFX: neon buzz stuttering at second 2, a soft fabric shift as he settles. Ambience: cavernous dark showroom tone, HVAC hush.`,
  },
  {
    id: "c16",
    durationSeconds: 4,
    prompt: `Extreme close-up of the amber-tinted glasses filling the frame, four seconds, camera locked. The tiny reflected car shivers as he breathes; at second 2 his lips part; the word lands at second 3 and the reflection holds still after. Lighting: one hard top practical, everything else black. Location: ${SHW}. ${RAF}. ${CAR} (as reflection). ${S}. Audio: ${AUD} ${VOI} A whisper with an audible intake of breath before, the words clipped and enormous: "Cinco milhões." SFX: a tiny fabric brush as he leans in. Ambience: near-silence, only the podium hum pushed far below the voice.`,
  },
  {
    id: "c17",
    durationSeconds: 6,
    prompt: `Close-up on the cream leather desk, six seconds with a slow push toward the paper. The fountain nib touches at second 1, the first digit draws out slowly through second 3, the hand trembles visibly at second 4, and the final stroke lands at second 6 just as a bead of ink drops. Rafael's steadying hand never moves. Lighting: single warm desk lamp pool. Location: ${SHW} (office corner). ${RAF} (hand only). ${HER} (hand only). ${S}. Audio: ${AUD} ${VOI} Warm and unhurried, almost kind: "Foi um bom negócio." SFX: the fountain nib scratching paper, a nail ticking the paper's edge, the lamp's faint ballast whine. Ambience: quiet office corner, the distant podium motor under everything.`,
  },
  {
    id: "c18",
    durationSeconds: 8,
    prompt: `Extreme wide at dawn, eight seconds, camera locked low. Sun rays lengthen through the black steel beams and stripe the floor from second 1 to 5; Rafael bows from the waist from second 3 to 6, his hand rising to his chest at second 6; the SOLD banner settles from a small breeze at second 7. Night bokeh dissolves into morning haze beyond the glass. Lighting: hard golden dawn through glass plus cool interior fill. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} No dialogue. SFX: the banner fabric snapping once softly, the podium motor's final slow stop. Ambience: the morning city waking far behind the glass, faint birds, the room's long natural reverb.`,
  },
  {
    id: "c19",
    durationSeconds: 6,
    prompt: `Medium wide, six seconds, camera locked as Rafael walks away from the podium into the wall of golden backlight. Oval flares swim across the lens from second 1, his blessing wave rises at second 4 and holds, and the headlight star sparkles once over his shoulder at second 5. Lighting: hard warm backlight, interior unlit, silhouettes rim-lit. Location: ${SHW}. ${RAF}. ${CAR}. ${S}. Audio: ${AUD} ${VOI} Throwing the line over his shoulder with a grin inside the voice: "Só os dignos." SFX: unhurried footsteps on polished concrete, one heel scuff at the turn. Ambience: warm air hum, the neon buzzing behind him.`,
  },
  {
    id: "c20",
    durationSeconds: 8,
    prompt: `Extreme wide closing shot, eight seconds, camera locked. The gobo projection wavers on the glass wall the whole clip, the letters spelling SEM PREÇO breathing with the haze; the amber neon strip dims half a stop from second 5 to 8; the floor reflection doubles the car and shivers once at second 6. No people in frame. Lighting: neon strip and podium light only, dying slowly. Location: ${SHW}. ${CAR}. ${S}. Audio: ${AUD} No dialogue. SFX: the projection lamp's faint whir, one last relay click as the podium stops forever. Ambience: near-silence, a huge empty room tone, the city's distant wash through the glass.`,
  },
];
