const P: any = {
  "copy": <><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
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

const G = (p: any) => <span style={{ color: "#4EC9B0" }}>{p.children}</span>;
const A = (p: any) => <span style={{ color: "#4CC2FF" }}>{p.children}</span>;
const Dim = (p: any) => <span style={{ color: "#8A8886" }}>{p.children}</span>;
function Term({ title, children }: any) {
  return (
    <div style={{ border: "1px solid #3C3C3C", borderRadius: 12, background: "#1E1E1E", overflow: "hidden", maxWidth: 900, color: "#D4D4D4", boxShadow: "0 8px 30px rgba(0,0,0,.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 18px", borderBottom: "1px solid #3C3C3C" }}>
        <span style={{ display: "flex", gap: 7 }}>
          {[0, 1, 2].map((i) => <i key={i} style={{ width: 13, height: 13, borderRadius: "50%", border: "1px solid #5A5A5A", display: "block" }} />)}
        </span>
        <span style={{ marginLeft: "auto", font: "500 12px var(--fm)", letterSpacing: ".14em", textTransform: "uppercase", color: "#9DA0A3" }}>{title}</span>
      </div>
      <div style={{ padding: "18px 24px", font: "400 19px/1.85 var(--fm)" }}>{children}</div>
    </div>
  );
}
const Prompt = () => <span style={{ color: "#4EC9B0" }}>$ </span>;

function CopyPill({ cmd }: any) {
  return (
    <div style={{ marginTop: 22, display: "inline-flex", alignItems: "center", gap: 12, alignSelf: "flex-start", padding: "11px 18px", borderRadius: 10, border: "1px solid var(--chip-bd)", background: "var(--acc-soft)", color: "var(--chip-fg)" }}>
      <Ic n="copy" s={18} />
      <span style={{ font: "500 17px var(--fm)" }}>{cmd}</span>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Hands On — Run"} title={"Now start it."} lead={"With the structure in mind, enter the project and launch the dev server."}><Term title="bash — npm run dev"><div><Prompt />cd my-app</div><div><Prompt />{"npm run dev"}<span style={{ display: "inline-block", width: 10, height: 22, background: "#4CC2FF", marginLeft: 4, verticalAlign: "middle" }} /></div><div><G>▲</G> Next.js <Dim>— ready when you are.</Dim></div><div><Dim>{"- Local:"}</Dim>{" "}<A>{"http://localhost:3000"}</A></div><div><G>√</G> Ready</div></Term><CopyPill cmd="npm run dev" /></Frame>
  );
}
