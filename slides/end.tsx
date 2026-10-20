function Frame({ kick, title, lead, children }: any) {
  return (
    <div style={{ position: "absolute", top: 96, left: 64, right: 64, bottom: 76, display: "flex", flexDirection: "column" }}>
      <p style={{ font: "600 13px var(--fm)", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--acc)", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
        <i style={{ width: 9, height: 9, borderRadius: 2, background: "var(--acc)", display: "block" }} />
        {kick}
      </p>
      <h2 style={{ font: "700 42px/1.08 var(--fd)", letterSpacing: "-.03em", color: "var(--ink)", margin: "10px 0 0" }}>{title}</h2>
      <div style={{ width: 64, height: 4, borderRadius: 2, marginTop: 14, background: "linear-gradient(90deg,var(--acc),var(--acc2))" }} />
      {lead && <p style={{ font: "400 19px/1.5 var(--fb)", color: "var(--mut)", margin: "14px 0 0", maxWidth: 1000 }}>{lead}</p>}
      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

export default function Slide() {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 20 }}>
      <svg viewBox="0 0 23 23" width={64} height={64} style={{ display: "block" }}>
        <rect x="1" y="1" width="10" height="10" rx="1.2" fill="#F25022" />
        <rect x="12" y="1" width="10" height="10" rx="1.2" fill="#7FBA00" />
        <rect x="1" y="12" width="10" height="10" rx="1.2" fill="#00A4EF" />
        <rect x="12" y="12" width="10" height="10" rx="1.2" fill="#FFB900" />
      </svg>
      <p style={{ font: "600 13px var(--fm)", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--acc)", margin: "22px 0 0" }}>Part 1 of 3 — Concepts · Complete</p>
      <h1 style={{ font: "700 108px/1 var(--fd)", letterSpacing: "-.045em", color: "var(--ink)", margin: "14px 0 0" }}>Questions?</h1>
      <p style={{ font: "400 26px var(--fb)", color: "var(--mut)", margin: "14px 0 0" }}>
        <span style={{ background: "linear-gradient(120deg,var(--acc) 20%,var(--acc2) 90%)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontWeight: 600 }}>Thank you</span> for your time.
      </p>
      <div style={{ display: "flex", gap: 36, justifyContent: "center", marginTop: 34 }}><span style={{ display: "inline-flex", gap: 8, alignItems: "center", font: "600 14px var(--fb)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)" }}>
            <i style={{ width: 11, height: 11, borderRadius: 2, background: "#F25022", display: "block" }} />Learn</span><span style={{ display: "inline-flex", gap: 8, alignItems: "center", font: "600 14px var(--fb)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)" }}>
            <i style={{ width: 11, height: 11, borderRadius: 2, background: "#7FBA00", display: "block" }} />Build</span><span style={{ display: "inline-flex", gap: 8, alignItems: "center", font: "600 14px var(--fb)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)" }}>
            <i style={{ width: 11, height: 11, borderRadius: 2, background: "#00A4EF", display: "block" }} />Create</span><span style={{ display: "inline-flex", gap: 8, alignItems: "center", font: "600 14px var(--fb)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--ink)" }}>
            <i style={{ width: 11, height: 11, borderRadius: 2, background: "#FFB900", display: "block" }} />Make an Impact</span></div>
      <p style={{ font: "400 13.5px var(--fb)", color: "var(--mut)", margin: "34px 0 0", maxWidth: 760 }}>Adapted from "Next.js Unlocked" &amp; "Introduction to Next.js — Part 1: Concepts" · Microsoft Learn Student Ambassadors</p>
    </div>
  );
}
