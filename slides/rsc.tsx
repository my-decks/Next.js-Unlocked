const P: any = {
  "database": <><ellipse cx="12" cy="5.5" rx="8.5" ry="3"/><path d="M3.5 5.5v13c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3v-13M3.5 12c0 1.7 3.8 3 8.5 3s8.5-1.3 8.5-3"/></>,
  "pointer": <><path d="m3 3 7.1 17 2.5-7.4L20 10.1 3 3Z"/></>,
  "server": <><rect x="3" y="3.5" width="18" height="7" rx="1.5"/><rect x="3" y="13.5" width="18" height="7" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></>,
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

function Row({ ic, h, pad = "15px 18px", children }: any) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: pad, borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}>
      <span style={{ width: 40, height: 40, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--acc-soft)", color: "var(--acc)", flex: "none" }}>
        <Ic n={ic} s={21} />
      </span>
      <div>
        <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>{h}</h4>
        <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "4px 0 0" }}>{children}</p>
      </div>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Deep Dive — 02"} title={"Server Components — the new default."} lead={"Every component in the App Router is a Server Component — unless you explicitly say otherwise."}><div style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 44, alignItems: "start" }}><div className="stag" style={{ display: "flex", flexDirection: "column", gap: 12 }}><Row ic="server" h={"Zero Client Bundle"}>{"Server Components never ship to the browser — no impact on your JavaScript bundle size."}</Row><Row ic="database" h={"Direct Backend Access"}>{"Query databases and read secrets safely, right inside the component."}</Row><Row ic="pointer" h={"Opt-in Interactivity"}>{"Add the \"use client\" directive only where you need state and events."}</Row></div><div className="stag sb" style={{ display: "flex", flexDirection: "column", gap: 14 }}><div style={{ padding: "16px 20px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}><h5 style={{ font: "600 12px var(--fm)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--acc)", margin: 0 }}>Server — the default</h5><div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"page.tsx"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"layout.tsx"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"fetch data"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"db access"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"secrets"}</span></div></div><div style={{ padding: "16px 20px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}><h5 style={{ font: "600 12px var(--fm)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--acc)", margin: 0 }}>Client — the island</h5><div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--acc)", color: "#fff" }}>{"\"use client\""}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"state"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"events"}</span><span style={{ font: "500 14.5px var(--fm)", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--line)", background: "var(--code)", color: "var(--ink)" }}>{"browser APIs"}</span></div></div></div></div></Frame>
  );
}
