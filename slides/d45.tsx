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

const K = (p: any) => <span style={{ color: "var(--tk-k)" }}>{p.children}</span>;
const Str = (p: any) => <span style={{ color: "var(--tk-str)" }}>{p.children}</span>;
const D = (p: any) => <span style={{ color: "var(--tk-d)" }}>{p.children}</span>;
const F = (p: any) => <span style={{ color: "var(--tk-f)" }}>{p.children}</span>;
const Cm = (p: any) => <span style={{ color: "var(--tk-cm)" }}>{p.children}</span>;
const Tg = (p: any) => <span style={{ color: "var(--tk-tag)" }}>{p.children}</span>;
function Code({ title, tag, hi, size = 17, children }: any) {
  return (
    <div style={{ border: hi ? "1px solid var(--acc)" : "1px solid var(--line)", borderRadius: 12, background: "var(--code)", overflow: "hidden", boxShadow: hi ? "0 0 0 3px var(--acc-soft)" : "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "11px 18px", borderBottom: "1px solid var(--line)", font: "500 12px var(--fm)", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink)" }}>
        <span>{title}</span><span style={{ color: "var(--mut)" }}>{tag}</span>
      </div>
      <pre style={{ margin: 0, padding: "16px 20px", font: `400 ${size}px/1.65 var(--fm)`, color: "var(--mut)", whiteSpace: "pre" }}>{children}</pre>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Demo · Phases 4–5"} title={"Backend and fetch."} lead={"One route handler, one Server Component — full-stack."}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}><Code title={"app/api/hello/route.ts"} size={16}><K>{"export"}</K>{" "}<K>{"async"}</K>{" "}<K>{"function"}</K>{" "}<D>{"GET"}</D>{"() {\n  "}<K>{"return"}</K>{" Response."}<D>{"json"}</D>{"({ msg: "}<Str>{"\"Hello\""}</Str>{" });\n}"}</Code><Code title={"app/data/page.tsx"} size={16}><K>{"export"}</K>{" "}<K>{"default"}</K>{" "}<K>{"async"}</K>{" "}<K>{"function"}</K>{" "}<D>{"Data"}</D>{"() {\n  "}<K>{"const"}</K>{" res = "}<K>{"await"}</K>{" "}<D>{"fetch"}</D>{"(\n    "}<Str>{"\"http://localhost:3000/api/hello\""}</Str>{",\n    { cache: "}<Str>{"\"no-store\""}</Str>{" });\n  "}<K>{"const"}</K>{" { msg } = "}<K>{"await"}</K>{" res."}<D>{"json"}</D>{"();\n  "}<K>{"return"}</K>{" "}<Tg>{"<p>"}</Tg>{"{msg}"}<Tg>{"</p>"}</Tg>{";\n}"}</Code></div></Frame>
  );
}
