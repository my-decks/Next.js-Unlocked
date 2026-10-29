const P: any = {
  "check": <><path d="m5 12 5 5L20 7"/></>,
  "x": <><path d="M6 6l12 12M18 6 6 18"/></>,
};

function Ic({ n, s = 22, c = "currentColor", fill = false }: any) {
  return (
    <svg viewBox="0 0 24 24" width={s} height={s} fill={fill ? c : "none"} stroke={fill ? "none" : c}
      strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", display: "block" }}>
      {P[n]}
    </svg>
  );
}

function Frame({ kick, title, lead, children }: any) {
  return (
    <div style={{ position: "absolute", top: 96, left: 64, right: 64, bottom: 76, display: "flex", flexDirection: "column" }}>
      <p className="an up" style={{ font: "600 13px var(--fm)", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--acc)", margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
        <i className="idle-pulse" style={{ width: 9, height: 9, borderRadius: 2, background: "var(--acc)", display: "block" }} />
        {kick}
      </p>
      <h2 className="an up d1" style={{ font: "700 42px/1.08 var(--fd)", letterSpacing: "-.03em", color: "var(--ink)", margin: "10px 0 0" }}>{title}</h2>
      <div className="an bar d2" style={{ width: 64, height: 4, borderRadius: 2, marginTop: 14, overflow: "hidden" }}><div className="idle-sheen" style={{ width: "100%", height: "100%", borderRadius: 2, background: "linear-gradient(90deg,var(--acc),var(--acc2),var(--acc))" }} /></div>
      {lead && <p className="an up d3" style={{ font: "400 19px/1.5 var(--fb)", color: "var(--mut)", margin: "14px 0 0", maxWidth: 1000 }}>{lead}</p>}
      <div style={{ flex: 1, minHeight: 0, marginTop: 22, display: "flex", flexDirection: "column" }}>{children}</div>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Head to Head"} title={"React vs. Next.js"}><div className="stag" style={{ border: "1px solid var(--line)", borderRadius: 12, background: "var(--card)", overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", font: "600 13px var(--fm)", letterSpacing: ".12em", textTransform: "uppercase" }}>
          <span /><span style={{ padding: "14px 22px", color: "var(--mut)" }}>React — CSR</span><span style={{ padding: "14px 22px", color: "var(--acc)", background: "var(--acc-soft)" }}>Next.js — SSR / Full-Stack</span>
        </div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "none", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>Routing</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />Manual — install a library</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />File-based, built-in</span></div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "1px solid var(--line)", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>Rendering</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />CSR only</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />CSR · SSR · SSG · ISR</span></div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "1px solid var(--line)", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>Backend</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />None — external API needed</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />Built-in API routes</span></div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "1px solid var(--line)", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>SEO</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />Poor by default</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />Excellent out of the box</span></div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "1px solid var(--line)", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>Setup</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />Many tools to configure</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />Zero config to start</span></div><div style={{ display: "grid", gridTemplateColumns: "170px 1fr 1fr", borderTop: "1px solid var(--line)", alignItems: "center" }}><span style={{ padding: "14px 22px", font: "600 17px var(--fd)", color: "var(--ink)" }}>First Load</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "400 17px var(--fb)", color: "var(--mut)" }}><Ic n="x" s={18} c="var(--err)" />Blank screen first</span><span style={{ padding: "14px 22px", display: "flex", gap: 10, alignItems: "center", font: "500 17px var(--fb)", color: "var(--ink)", background: "var(--acc-soft)" }}><Ic n="check" s={18} c="var(--ok)" />Instant page view</span></div></div></Frame>
  );
}
