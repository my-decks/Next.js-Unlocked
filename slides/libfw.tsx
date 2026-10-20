const P: any = {
  "arrow-r": <><path d="M4 12h16m-6-6 6 6-6 6"/></>,
  "box": <><path d="M21 8.2a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4a2 2 0 0 0-1 1.7v7.6a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></>,
  "repeat": <><path d="m17 2 4 4-4 4M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v1a4 4 0 0 1-4 4H3"/></>,
  "wrench": <><path d="M14.5 6.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 7.9l-6.9 7a2.1 2.1 0 0 1-3-3l7-6.9a6 6 0 0 1 7.9-8l-3.8 3.8Z"/></>,
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

function Note({ children }: any) {
  return (
    <p style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 0", font: "500 17px/1.4 var(--fb)", color: "var(--ink)" }}>
      <span style={{ color: "var(--acc)" }}><Ic n="arrow-r" s={20} /></span>{children}
    </p>
  );
}

export default function Slide() {
  return (
    <Frame kick={"The Key Insight"} title={"Library vs. Framework"}>
      <blockquote style={{ margin: 0, padding: "6px 0 6px 26px", borderLeft: "4px solid var(--acc)", font: "600 31px/1.35 var(--fd)", letterSpacing: "-.02em", color: "var(--ink)", maxWidth: 1040 }}>“With a library, you're the architect. With a framework, the structure is already designed — you fill in the details.”</blockquote>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 28 }}><div style={{ padding: "20px 22px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}><span style={{ width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--acc-soft)", color: "var(--acc)" }}><Ic n="box" s={22} /></span><h4 style={{ font: "600 20px var(--fd)", color: "var(--ink)", margin: "14px 0 0" }}>The Foundation</h4><p style={{ font: "400 16px/1.45 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>Provides a predefined structure for your application.</p></div><div style={{ padding: "20px 22px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}><span style={{ width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--acc-soft)", color: "var(--acc)" }}><Ic n="wrench" s={22} /></span><h4 style={{ font: "600 20px var(--fd)", color: "var(--ink)", margin: "14px 0 0" }}>Built-in Tools</h4><p style={{ font: "400 16px/1.45 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>Routing and bundling are included, out of the box.</p></div><div style={{ padding: "20px 22px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)" }}><span style={{ width: 42, height: 42, borderRadius: 10, display: "grid", placeItems: "center", background: "var(--acc-soft)", color: "var(--acc)" }}><Ic n="repeat" s={22} /></span><h4 style={{ font: "600 20px var(--fd)", color: "var(--ink)", margin: "14px 0 0" }}>Inversion of Control</h4><p style={{ font: "400 16px/1.45 var(--fb)", color: "var(--mut)", margin: "6px 0 0" }}>The framework calls your code — not the other way around.</p></div></div>
      <Note>Next.js adds conventions on top of React — so your team spends less time on setup and more time on shipping.</Note>
    </Frame>
  );
}
