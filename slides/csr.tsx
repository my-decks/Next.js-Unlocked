const P: any = {
  "arrow-r": <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
  "check": <><path d="m5 12 5 5L20 7"/></>,
  "cpu": <><rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3M19 9h3m-3 6h3"/></>,
  "download": <><path d="M12 3v12m-5-5 5 5 5-5M4 19h16"/></>,
  "file": <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6"/></>,
  "globe": <><circle cx="12" cy="12" r="9.5"/><path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z"/></>,
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
    <Frame kick={"Rendering — 01"} title={"How React works — CSR"} lead={"Client-Side Rendering — the server sends a bare shell, and React builds the whole UI in the browser."}><div style={{ display: "flex", alignItems: "stretch", gap: 10 }}><div style={{ flex: 1, position: "relative", padding: "20px 20px 22px", borderRadius: 12, border: "2px dashed var(--line)", background: "var(--card)" }}><span style={{ position: "absolute", top: 12, right: 16, font: "500 13px var(--fm)", color: "var(--mut)" }}>01</span><Ic n="globe" s={28} c="var(--acc)" /><h4 style={{ font: "600 21px var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>Request</h4><p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>The browser asks the server for the page.</p></div><div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}><Ic n="arrow-r" s={22} /></div><div style={{ flex: 1, position: "relative", padding: "20px 20px 22px", borderRadius: 12, border: "2px dashed var(--line)", background: "var(--card)" }}><span style={{ position: "absolute", top: 12, right: 16, font: "500 13px var(--fm)", color: "var(--mut)" }}>02</span><Ic n="file" s={28} c="var(--acc)" /><h4 style={{ font: "600 21px var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>Empty HTML</h4><p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>The server responds with a bare shell.</p></div><div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}><Ic n="arrow-r" s={22} /></div><div style={{ flex: 1, position: "relative", padding: "20px 20px 22px", borderRadius: 12, border: "2px dashed var(--line)", background: "var(--card)" }}><span style={{ position: "absolute", top: 12, right: 16, font: "500 13px var(--fm)", color: "var(--mut)" }}>03</span><Ic n="download" s={28} c="var(--acc)" /><h4 style={{ font: "600 21px var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>JS Download</h4><p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>The browser fetches the React bundle.</p></div><div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}><Ic n="arrow-r" s={22} /></div><div style={{ flex: 1, position: "relative", padding: "20px 20px 22px", borderRadius: 12, border: "2px dashed var(--line)", background: "var(--card)" }}><span style={{ position: "absolute", top: 12, right: 16, font: "500 13px var(--fm)", color: "var(--mut)" }}>04</span><Ic n="cpu" s={28} c="var(--acc)" /><h4 style={{ font: "600 21px var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>Render</h4><p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>React builds the UI on the client.</p></div></div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: 20, border: "1px solid var(--line)", borderRadius: 12, background: "var(--card)", overflow: "hidden" }}><div style={{ display: "flex", gap: 14, padding: "16px 22px", borderRight: "1px solid var(--line)" }}><Ic n="check" s={24} c="var(--ok)" /><div><span style={{ font: "600 12px var(--fm)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ok)" }}>Pros</span><p style={{ font: "400 16.5px/1.4 var(--fb)", color: "var(--ink)", margin: "4px 0 0" }}>Rich, dynamic interactivity once the app has loaded.</p></div></div><div style={{ display: "flex", gap: 14, padding: "16px 22px" }}><Ic n="x" s={24} c="var(--err)" /><div><span style={{ font: "600 12px var(--fm)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--err)" }}>Cons</span><p style={{ font: "400 16.5px/1.4 var(--fb)", color: "var(--ink)", margin: "4px 0 0" }}>Slow first load · weak SEO · JavaScript required.</p></div></div></div></Frame>
  );
}
