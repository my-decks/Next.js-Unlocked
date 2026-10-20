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

const G = (p: any) => <span style={{ color: "#4EC9B0" }}>{p.children}</span>;
const A = (p: any) => <span style={{ color: "#4CC2FF" }}>{p.children}</span>;
const Dim = (p: any) => <span style={{ color: "#8A8886" }}>{p.children}</span>;
function Term({ title, children }: any) {
  return (
    <div className="an up d4" style={{ border: "1px solid #3C3C3C", borderRadius: 12, background: "#1E1E1E", overflow: "hidden", maxWidth: 900, color: "#D4D4D4", boxShadow: "0 8px 30px rgba(0,0,0,.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 18px", borderBottom: "1px solid #3C3C3C" }}>
        <span style={{ display: "flex", gap: 7 }}>
          {[0, 1, 2].map((i) => <i key={i} className="idle-pulse" style={{ width: 13, height: 13, borderRadius: "50%", border: "1px solid #5A5A5A", display: "block", animationDelay: `${i * 0.35}s` }} />)}
        </span>
        <span style={{ marginLeft: "auto", font: "500 12px var(--fm)", letterSpacing: ".14em", textTransform: "uppercase", color: "#9DA0A3" }}>{title}</span>
      </div>
      <div style={{ padding: "18px 24px", font: "400 19px/1.85 var(--fm)", "--tms": "9ms" } as any}>{children}</div>
    </div>
  );
}
const Prompt = () => <span style={{ color: "#4EC9B0" }}>$ </span>;

export default function Slide() {
  return (
    <Frame kick={"Hands On — Result"} title={"Here's what you get."} lead={"Answer the prompts, and a complete project is generated in seconds."}><Term title="bash — create-next-app"><div><span className="tl" style={{ "--n": 28, "--d": ".5s" } as any}><Prompt />{"npx create-next-app@latest"}</span></div><div><span className="tl" style={{ "--n": 38, "--d": ".84s" } as any}><G>{"√"}</G>{" What is your project named? "}<Dim>{"…"}</Dim>{" "}<A>{"my-app"}</A></span></div><div><span className="tl" style={{ "--n": 41, "--d": "1.27s" } as any}><G>{"√"}</G>{" Would you like to use TypeScript? "}<Dim>{"…"}</Dim>{" "}<A>{"Yes"}</A></span></div><div><span className="tl" style={{ "--n": 37, "--d": "1.73s" } as any}><G>{"√"}</G>{" Would you like to use ESLint? "}<Dim>{"…"}</Dim>{" "}<A>{"Yes"}</A></span></div><div><span className="tl" style={{ "--n": 42, "--d": "2.15s" } as any}><G>{"√"}</G>{" Would you like to use Tailwind CSS? "}<Dim>{"…"}</Dim>{" "}<A>{"No"}</A></span></div><div><span className="tl" style={{ "--n": 54, "--d": "2.62s" } as any}><G>{"√"}</G>{" Would you like to use App Router? "}<Dim>{"(recommended) …"}</Dim>{" "}<A>{"Yes"}</A></span></div><div><span className="tl" style={{ "--n": 51, "--d": "3.2s" } as any}>{"Success! Created "}<A>{"my-app"}</A>{" "}<Dim>{"— run"}</Dim>{" npm run dev "}<Dim>{"to start."}</Dim><span className="cur" style={{ display: "inline-block", width: 10, height: 22, background: "#4CC2FF", marginLeft: 4, verticalAlign: "middle" }} /></span></div></Term></Frame>
  );
}
