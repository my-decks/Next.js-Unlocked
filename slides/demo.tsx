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
    <Frame kick={"Live Demo"} title={"Watch it come together."} lead={"Five phases — from an empty folder to a fetching, full-stack app."}><div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}><Phase n="01" h={"Initialization"} chip={"Setup"}><>Run <Cd>npm run dev</Cd> and explore the default setup.</></Phase><Phase n="02" h={"Building Routes"} chip={"Frontend"}><>Create a folder and a <Cd>page.tsx</Cd> — a new view appears.</></Phase><Phase n="03" h={"Interactivity"} chip={"Frontend"}><>Wire up <Cd>onClick</Cd> events with the "use client" directive.</></Phase><Phase n="04" h={"API Route"} chip={"Backend"}><>A <Cd>route.ts</Cd> file handles backend GET requests.</></Phase><Phase n="05" h={"Fetching Data"} chip={"Full-Stack"}>{"A Server Component pulls data from our new API."}</Phase></div></Frame>
  );
}
