const P: any = {
  "file": <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Zm0 0v6h6"/></>,
  "folder": <><path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4l2 2.5h8a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 18.5H5A1.5 1.5 0 0 1 3.5 17V6.5Z"/></>,
  "layers": <><path d="m12 2.5 9.5 5L12 12.5l-9.5-5 9.5-5Z"/><path d="m2.5 12.5 9.5 5 9.5-5M2.5 17l9.5 5 9.5-5"/></>,
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

const K = (p: any) => <span style={{ color: "var(--tk-k)" }}>{p.children}</span>;
const Str = (p: any) => <span style={{ color: "var(--tk-str)" }}>{p.children}</span>;
const D = (p: any) => <span style={{ color: "var(--tk-d)" }}>{p.children}</span>;
const F = (p: any) => <span style={{ color: "var(--tk-f)" }}>{p.children}</span>;
const Cm = (p: any) => <span style={{ color: "var(--tk-cm)" }}>{p.children}</span>;
const Tg = (p: any) => <span style={{ color: "var(--tk-tag)" }}>{p.children}</span>;
function Code({ title, tag, hi, size = 17, children }: any) {
  // split children into visual lines on "\n" so every line can type itself in
  const lines: any[][] = [[]];
  const kids: any[] = Array.isArray(children) ? children : [children];
  for (const c of kids) {
    if (typeof c === "string") {
      (c as string).split("\n").forEach((p, i) => {
        if (i > 0) lines.push([]);
        if (p) lines[lines.length - 1].push(p);
      });
    } else {
      lines[lines.length - 1].push(c);
    }
  }
  const clen = (xs: any[]): number =>
    xs.reduce((n, x) => n + (typeof x === "string" ? x.length : clen(Array.isArray(x.props.children) ? x.props.children : [x.props.children])), 0);
  let t = 0.5; // first keystroke lands after the card arrives
  return (
    <div className={hi ? "idle-glow" : undefined} style={{ border: hi ? "1px solid var(--acc)" : "1px solid var(--line)", borderRadius: 12, background: "var(--code)", overflow: "hidden", boxShadow: hi ? "0 0 0 3px var(--acc-soft)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 18px", borderBottom: "1px solid var(--line)", font: "500 12px var(--fm)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)" }}>
        <span>{title}</span><span style={{ color: "var(--mut)" }}>{tag}</span>
      </div>
      <pre style={{ margin: 0, padding: "16px 20px", font: `400 ${size}px/1.65 var(--fm)`, color: "var(--mut)", whiteSpace: "pre" }}>
        {lines.map((ln, i) => {
          const n = Math.max(4, clen(ln));
          const d = t;
          t += n * 0.012 + 0.06;
          return (
            <div className="tlw" key={i}>
              {ln.length === 0 ? "\u00A0" : <span className="tl" style={{ "--n": n, "--d": `${d.toFixed(2)}s` } as any}>{ln}</span>}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Deep Dive — 01"} title={"The App Router"} lead={<>Replaces the old /pages directory with a powerful, nested structure — everything lives in <em>app</em>.</>}><div className="stag" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 44, alignItems: "start" }}><Code title="file tree" tag="app/" size={19}><D>{"app/"}</D>{"\n├── "}<F>{"page.tsx"}</F>{"            "}<Cm>{"# /"}</Cm>{"\n└── "}<D>{"dashboard/"}</D>{"\n    └── "}<F>{"page.tsx"}</F>{"        "}<Cm>{"# /dashboard"}</Cm></Code><div className="stag sb" style={{ display: "flex", flexDirection: "column", gap: 12 }}><Row ic="folder" h={"Routes = Folders"}>{"Every folder under app maps to a URL segment — no manual route configuration."}</Row><Row ic="layers" h={"Nested Layouts"}>{"Layouts persist across their children — no remounting between pages."}</Row><Row ic="file" h={"Special Files"}>{"page · layout · loading · error. A folder only becomes a public route once it holds a page."}</Row></div></div></Frame>
  );
}
