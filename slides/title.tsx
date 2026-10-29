"use client";
import React, { useEffect, useRef, useState } from "react";

function Frame({ kick, title, lead, children }: any) {
  return (
    <div
      style={{
        position: "absolute",
        top: 96,
        left: 64,
        right: 64,
        bottom: 76,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          font: "600 13px var(--fm)",
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--acc)",
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <i
          style={{
            width: 9,
            height: 9,
            borderRadius: 2,
            background: "var(--acc)",
            display: "block",
          }}
        />
        {kick}
      </p>
      <h2
        style={{
          font: "700 42px/1.08 var(--fd)",
          letterSpacing: "-.03em",
          color: "var(--ink)",
          margin: "10px 0 0",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 64,
          height: 4,
          borderRadius: 2,
          marginTop: 14,
          background: "linear-gradient(90deg,var(--acc),var(--acc2))",
        }}
      />
      {lead && (
        <p
          style={{
            font: "400 19px/1.5 var(--fb)",
            color: "var(--mut)",
            margin: "14px 0 0",
            maxWidth: 1000,
          }}
        >
          {lead}
        </p>
      )}
      <div
        style={{ flex: 1, minHeight: 0, marginTop: 22, display: "flex", flexDirection: "column" }}
      >
        {children}
      </div>
    </div>
  );
}

const u = (n: number) => `calc(var(--u) * ${n})`;
const rv = (d: string, extra: React.CSSProperties = {}) =>
  ({ "--d": d, ...extra }) as React.CSSProperties;

const navy = "#0b1230";
const fontStack = "'Segoe UI Variable Display','Segoe UI',system-ui,-apple-system,sans-serif";

const LOOP_MS = 25000; // intro choreography replays on this cadence

/* soft, single-layer depth */
const CHAR_SHADOW = [`0 .035em .06em rgba(11,18,48,.16)`, `0 .12em .3em rgba(11,18,48,.12)`].join(
  ", ",
);

const WORD_SHADOW = `drop-shadow(0 .06em .14em rgba(80,50,220,.22)) drop-shadow(0 .18em .4em rgba(60,80,255,.14))`;

const SUBTITLE: { t: string; b?: boolean; g?: boolean }[] = [
  { t: "From" },
  { t: "React", b: true },
  { t: "library" },
  { t: "to" },
  { t: "full-stack", g: true },
  { t: "framework." },
];

const TAGS = [
  { t: "Learn", c: "#F25022" },
  { t: "Build", c: "#7FBA00" },
  { t: "Create", c: "#00A4EF" },
  { t: "Make an Impact", c: "#FFB900" },
];

const SLIDE_CSS = `
/* persistent root — owns the parallax vars so they survive stage remounts */
.tl-root{ --mx:0; --my:0; }

/* ── loop envelope ── */
.tl-stage{
  --loop: 25s; /* overridden inline from LOOP_MS */
  animation-name: tlStageIn, tlLoopOut;
  animation-duration: 1.1s, 1.25s;
  animation-timing-function: cubic-bezier(.22,1,.36,1), ease-in;
  animation-delay: 0s, calc(var(--loop) - 1.25s);
  animation-fill-mode: both, forwards;
}
@keyframes tlStageIn{ from{ opacity:0; transform:scale(.965); } }
@keyframes tlLoopOut{ from{ opacity:1; } to{ opacity:0; } }

/* entrance reveal */
.tl-rv{ opacity:0; animation:tlRise .95s cubic-bezier(.22,1,.36,1) var(--d,0s) both; }
@keyframes tlRise{
  from{ opacity:0; transform:translateY(26px) scale(.985); filter:blur(8px); }
  to{ opacity:1; transform:none; filter:blur(0); }
}

/* subtle content parallax */
.tl-par{ position:absolute; inset:0; will-change:transform;
  transform:translate3d(calc(var(--mx)*7px),calc(var(--my)*5px),0); }

/* ── headline plane — gentle tilt toward the cursor ── */
.tl-tilt{
  transform: rotateX(calc(var(--my,0) * -1deg)) rotateY(calc(var(--mx,0) * 1.5deg));
  transform-style: preserve-3d;
  will-change: transform;
}

/* flowing gradient text */
.tl-flow{
  background:linear-gradient(100deg,#0a84ff,#6a35f0 30%,#9d6bff 50%,#6a35f0 70%,#0a84ff);
  background-size:220% 100%;
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
  animation:tlFlow 6s ease-in-out infinite; }
@keyframes tlFlow{ 0%,100%{ background-position:0% 50%; } 50%{ background-position:100% 50%; } }

/* deeper gradient for small text (better contrast than .tl-flow) */
.tl-flow-deep{
  background:linear-gradient(100deg,#2563ff,#6a35f0 50%,#2563ff);
  background-size:200% 100%;
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
  animation:tlFlow 6s ease-in-out infinite; }

/* eyebrow — tracking-in + soft depth */
.tl-eyebrow{ opacity:0; animation:tlTrack 1.1s cubic-bezier(.2,.8,.2,1) .55s both; }
@keyframes tlTrack{
  from{ opacity:0; letter-spacing:.5em; transform:translateY(12px); }
  to{ opacity:1; letter-spacing:.22em; transform:none; } }
.tl-eyebrow-glow{ filter: drop-shadow(0 .16em .3em rgba(28,42,150,.25)); }

/* headline chars — solid navy + soft shadow */
.tl-char{ display:inline-block; opacity:0;
  text-shadow: ${CHAR_SHADOW};
  animation:tlChar .8s cubic-bezier(.16,.84,.28,1.12) var(--cd,0s) both; }
@keyframes tlChar{
  from{ opacity:0; transform:translateY(.55em) rotate(4deg) scale(.9); filter:blur(12px); }
  to{ opacity:1; transform:none; filter:blur(0); } }

/* "Unlocked" — three isolated layers so entrance / shadow filter / gradient
   never fight over the same properties:
     .tl-wordin → entrance (opacity/blur/rise)
     .tl-word3d → soft drop-shadow
     .tl-word   → gradient fill + flowing background                */
.tl-wordin{ display:inline-block; opacity:0; filter:blur(10px);
  transform:translateY(.14em) scale(.96);
  animation:tlWordIn .9s cubic-bezier(.2,.8,.2,1) 1.35s both; }
@keyframes tlWordIn{ to{ opacity:1; filter:blur(0); transform:none; } }
.tl-word3d{ display:inline-block; filter: ${WORD_SHADOW}; }
.tl-word{
  display:inline-block;
  background:linear-gradient(100deg,#1a6bff,#4f46f0 35%,#7a3cf0 55%,#4f46f0 75%,#1a6bff);
  background-size:220% 100%;
  -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; color:transparent;
  animation:tlFlow 6.5s ease-in-out 2.4s infinite; }

/* underline — draws itself, then flows */
.tl-line{
  background:linear-gradient(90deg,#16b8ff,#7a35ef 45%,#4d8bff 75%,#16b8ff);
  background-size:200% 100%;
  box-shadow:0 0 22px rgba(106,53,240,.35), 0 2px 10px rgba(22,184,255,.28);
  transform:scaleX(0); transform-origin:left center;
  animation:tlLineGrow .85s cubic-bezier(.7,0,.2,1) 2.1s both,
            tlFlow 4.5s ease-in-out 3s infinite; }
@keyframes tlLineGrow{ to{ transform:scaleX(1); } }

/* glass segmented pills */
.tl-pillwrap{ border-radius:999px; padding:2px;
  background:linear-gradient(120deg,#0a84ff,#6a35f0 35%,#16b8ff 70%,#0a84ff);
  background-size:250% 100%;
  box-shadow:0 12px 32px rgba(59,91,255,.22), 0 2px 8px rgba(59,91,255,.15);
  animation:tlFlow 7s ease-in-out infinite; }
.tl-pillinner{ display:flex; border-radius:999px;
  background:rgba(255,255,255,.72);
  backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); }
.tl-pill-active{ position:relative; overflow:hidden; border-radius:999px;
  background:linear-gradient(120deg,#0a62ff,#6a35f0 55%,#0a62ff);
  background-size:200% 100%;
  animation:tlFlow 5s ease-in-out infinite; }
.tl-pill-active::after{ content:""; position:absolute; inset:0;
  background:linear-gradient(110deg, transparent 32%, rgba(255,255,255,.45) 50%, transparent 68%);
  transform:translateX(-130%) skewX(-14deg);
  animation:tlShine 3.8s cubic-bezier(.45,0,.2,1) 2.6s infinite; }
@keyframes tlShine{
  0%{ transform:translateX(-130%) skewX(-14deg); }
  55%,100%{ transform:translateX(240%) skewX(-14deg); } }

/* MS logo — staggered square pop + breathing glow */
.tl-logo .sq{ transform-box:fill-box; transform-origin:center; transform:scale(0);
  animation:tlSqPop .55s cubic-bezier(.3,1.6,.4,1) both; }
.tl-logo .sq:nth-child(1){ animation-delay:.45s; }
.tl-logo .sq:nth-child(2){ animation-delay:.53s; }
.tl-logo .sq:nth-child(3){ animation-delay:.61s; }
.tl-logo .sq:nth-child(4){ animation-delay:.69s; }
@keyframes tlSqPop{ to{ transform:scale(1); } }
.tl-logo-glow{ position:absolute; inset:-42%; border-radius:50%; pointer-events:none;
  background:radial-gradient(circle, rgba(10,132,255,.20), rgba(10,132,255,0) 68%);
  animation:tlGlowPulse 4.5s ease-in-out infinite; }
@keyframes tlGlowPulse{ 0%,100%{ opacity:.6; transform:scale(.94); } 50%{ opacity:1; transform:scale(1.08); } }

/* subtitle — word-by-word, gently lifted off the page */
.tl-lift{ text-shadow: 0 1px 0 rgba(255,255,255,.6), 0 .14em .3em rgba(11,18,48,.16); }
.tl-wordrv{ display:inline-block; opacity:0;
  animation:tlWordRise .7s cubic-bezier(.2,.9,.3,1.08) var(--cd,0s) both; }
@keyframes tlWordRise{
  from{ opacity:0; transform:translateY(18px); filter:blur(5px); }
  to{ opacity:1; transform:none; filter:blur(0); } }

/* accessibility */
@media (prefers-reduced-motion: reduce){
  .tl-stage, .tl-stage *{ animation:none !important; transition:none !important; }
  .tl-rv,.tl-eyebrow,.tl-wordrv,.tl-char,.tl-wordin{ opacity:1 !important; }
  .tl-eyebrow{ letter-spacing:.22em !important; }
  .tl-wordin{ filter:none !important; transform:none !important; }
  .tl-tilt{ transform:none !important; }
  .tl-line{ transform:none !important; }
  .tl-logo .sq{ transform:none !important; }
}
`;

export default function Slide() {
  const [cycle, setCycle] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const tgt = useRef({ x: 0, y: 0 });
  const cur = useRef({ x: 0, y: 0 });

  /* the loop: remount the stage every LOOP_MS so all animations restart */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCycle((c) => c + 1), LOOP_MS);
    return () => clearInterval(id);
  }, []);

  /* smooth pointer parallax: drives layer drift + headline tilt */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      cur.current.x += (tgt.current.x - cur.current.x) * 0.065;
      cur.current.y += (tgt.current.y - cur.current.y) * 0.065;
      root.style.setProperty("--mx", cur.current.x.toFixed(4));
      root.style.setProperty("--my", cur.current.y.toFixed(4));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={rootRef}
      className="tl-root"
      onMouseMove={(e) => {
        tgt.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        tgt.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      }}
      onMouseLeave={() => {
        tgt.current.x = 0;
        tgt.current.y = 0;
      }}
      style={{ position: "absolute", inset: 0, containerType: "size" }}
    >
      <style dangerouslySetInnerHTML={{ __html: SLIDE_CSS }} />

      {/* --u scales with the slide itself (container units), so it also works in thumbnails */}
      <div
        style={
          {
            "--u": "min(1cqw, 1.7778cqh)",
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          } as React.CSSProperties
        }
      >
        {/* key={cycle} → full remount every loop */}
        <div
          key={cycle}
          className="tl-stage"
          style={
            {
              position: "relative",
              width: u(100),
              height: u(56.25),
              color: navy,
              zIndex: 1,
              fontFamily: fontStack,
              "--loop": `${LOOP_MS}ms`,
            } as React.CSSProperties
          }
        >
          <div className="tl-par">
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                paddingTop: u(1),
              }}
            >
              {/* logo + breathing glow */}
              <div className="tl-rv" style={rv(".18s", { position: "relative" })}>
                <div className="tl-logo-glow" />
                <MsLogo size={3} hero />
              </div>

              {/* eyebrow */}
              <span className="tl-eyebrow" style={{ marginTop: u(0.8), display: "inline-block" }}>
                <span
                  className="tl-flow tl-eyebrow-glow"
                  style={{
                    fontSize: u(0.95),
                    fontWeight: 700,
                    textTransform: "uppercase",
                    paddingLeft: ".22em",
                  }}
                >
                  Microsoft Learn Student Ambassadors
                </span>
              </span>

              {/* glass segmented pills */}
              <div className="tl-rv" style={rv(".78s", { marginTop: u(1.7) })}>
                <div className="tl-pillwrap">
                  <div className="tl-pillinner">
                    <span className="tl-pill-active" style={pillStyle(true)}>
                      Next.js
                    </span>
                    <span style={pillStyle(false)}>Part 1 of 3 — Concepts</span>
                  </div>
                </div>
              </div>

              {/* headline plane: h1 + underline tilt as one card */}
              <div style={{ perspective: u(46), marginTop: u(2.2) }}>
                <div className="tl-tilt">
                  <h1
                    style={{
                      margin: 0,
                      fontSize: u(7.6),
                      fontWeight: 700,
                      letterSpacing: "-.025em",
                      lineHeight: 1.12,
                      color: navy,
                    }}
                  >
                    <Chars text="Next.js" base={0.95} step={0.05} />
                    {"\u00A0"}
                    <span className="tl-wordin">
                      <span className="tl-word3d">
                        <span className="tl-word">Unlocked</span>
                      </span>
                    </span>
                  </h1>

                  <div
                    className="tl-line"
                    style={{
                      marginTop: u(0.9),
                      width: u(10),
                      height: u(0.4),
                      borderRadius: 99,
                      marginInline: "auto",
                    }}
                  />
                </div>
              </div>

              {/* subtitle, word by word */}
              <p
                className="tl-lift"
                style={{
                  margin: `${u(1.8)} 0 0`,
                  fontSize: u(1.85),
                  color: "#2a3558",
                  fontWeight: 500,
                  letterSpacing: ".005em",
                }}
              >
                {SUBTITLE.map((w, i) => (
                  <React.Fragment key={w.t}>
                    {i > 0 && " "}
                    <span
                      className="tl-wordrv"
                      style={{ "--cd": `${(2.3 + i * 0.065).toFixed(2)}s` } as React.CSSProperties}
                    >
                      {w.g ? (
                        <span className="tl-flow-deep" style={{ fontWeight: 700 }}>
                          {w.t}
                        </span>
                      ) : w.b ? (
                        <b
                          style={{
                            fontWeight: 700,
                            color: navy,
                            background: "rgba(58,113,255,.10)",
                            borderRadius: u(0.35),
                            padding: "0 .22em",
                          }}
                        >
                          {w.t}
                        </b>
                      ) : (
                        w.t
                      )}
                    </span>
                  </React.Fragment>
                ))}
              </p>

              {/* Learn / Build / Create / Make an Impact */}
              <div
                style={{ display: "flex", gap: u(3), justifyContent: "center", marginTop: u(2.6) }}
              >
                {TAGS.map((t, i) => (
                  <span
                    key={t.t}
                    className="tl-rv"
                    style={rv(`${(2.8 + i * 0.12).toFixed(2)}s`, {
                      display: "inline-flex",
                      gap: u(0.65),
                      alignItems: "center",
                      fontSize: u(0.95),
                      fontWeight: 600,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: navy,
                    })}
                  >
                    <i
                      style={{
                        width: u(0.9),
                        height: u(0.9),
                        borderRadius: u(0.18),
                        background: t.c,
                        display: "block",
                      }}
                    />
                    {t.t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── pieces ─────────────────────────── */

function pillStyle(active: boolean): React.CSSProperties {
  return {
    minWidth: u(10.2),
    height: u(2.6),
    padding: `0 ${u(1.2)}`,
    display: "grid",
    placeItems: "center",
    whiteSpace: "nowrap",
    fontSize: u(0.8),
    fontWeight: 600,
    letterSpacing: ".3em",
    paddingLeft: ".3em",
    textTransform: "uppercase",
    color: active ? "#fff" : navy,
    background: active ? undefined : "rgba(59,91,255,.06)",
    borderRadius: 999,
  };
}

function Chars({ text, base = 0, step = 0.05 }: { text: string; base?: number; step?: number }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span
          key={i}
          className="tl-char"
          style={{ "--cd": `${(base + i * step).toFixed(2)}s` } as React.CSSProperties}
        >
          {c}
        </span>
      ))}
    </>
  );
}

function MsLogo({ size, hero = false }: { size: number; hero?: boolean }) {
  return (
    <svg
      className={hero ? "tl-logo" : undefined}
      style={{ width: u(size), height: u(size), display: "block" }}
      viewBox="0 0 23 23"
      aria-hidden
    >
      <rect x="1" y="1" width="10" height="10" rx="1.2" fill="#F25022" className="sq" />
      <rect x="12" y="1" width="10" height="10" rx="1.2" fill="#7FBA00" className="sq" />
      <rect x="1" y="12" width="10" height="10" rx="1.2" fill="#00A4EF" className="sq" />
      <rect x="12" y="12" width="10" height="10" rx="1.2" fill="#FFB900" className="sq" />
    </svg>
  );
}
