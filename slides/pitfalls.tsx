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

function Phase({ n, h, chip, children }: any) {
  return (
    <div style={{ padding: "20px 20px 22px", borderRadius: 12, border: "1px solid var(--line)", background: "var(--card)", display: "flex", flexDirection: "column" }}>
      <span style={{ font: "700 34px var(--fm)", color: "var(--acc)", opacity: 0.85, letterSpacing: "-.04em" }}>{n}</span>
      <h4 style={{ font: "600 20px var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>{h}</h4>
      <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>{children}</p>
      {chip && <span style={{ marginTop: "auto", paddingTop: 14 }}><Chip>{chip}</Chip></span>}
    </div>
  );
}
const Cd = (p: any) => <code style={{ font: "500 14px var(--fm)", background: "var(--acc-soft)", color: "var(--chip-fg)", padding: "2px 7px", borderRadius: 6 }}>{p.children}</code>;

function Chip({ children, ghost, icon }: any) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 999, font: "500 13.5px var(--fm)",
      border: ghost ? "1px dashed var(--line)" : "1px solid var(--chip-bd)", color: ghost ? "var(--mut)" : "var(--chip-fg)", background: ghost ? "transparent" : "var(--acc-soft)" }}>
      {icon}{children}
    </span>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Troubleshooting"} title={"Common pitfalls."} lead={"What usually goes wrong during the first hour."}><div className="stag sb" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}><Phase n="01" h={"Hooks on the server"}>{"Add \"use client\" when using useState or events."}</Phase><Phase n="02" h={"Wrong file name"}>{"Routes need page.tsx; APIs need route.ts."}</Phase><Phase n="03" h={"Stale data"}>{"Fetch is cached — set cache or revalidate."}</Phase><Phase n="04" h={"Port in use"}>{"Stop the old dev server or run with -p 3001."}</Phase></div></Frame>
  );
}
