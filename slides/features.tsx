function Frame({ kick, title, lead, children }: any) {
  return (
    <div
      style={{
        position: "absolute",
        top: 96,
        left: 64,
        right: 64,
        bottom: 76,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        className="an up"
        style={{
          font: "600 13px var(--fm)",
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--acc)",
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <i
          className="idle-pulse"
          style={{
            width: 9,
            height: 9,
            borderRadius: 2,
            background: "var(--acc)",
            display: "block",
          }}
        />
        {kick}
      </p>
      <h2
        className="an up d1"
        style={{
          font: "700 42px/1.08 var(--fd)",
          letterSpacing: "-.03em",
          color: "var(--ink)",
          margin: "10px 0 0",
        }}
      >
        {title}
      </h2>
      <div
        className="an bar d2"
        style={{ width: 64, height: 4, borderRadius: 2, marginTop: 14, overflow: "hidden" }}
      >
        <div
          className="idle-sheen"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 2,
            background: "linear-gradient(90deg,var(--acc),var(--acc2),var(--acc))",
          }}
        />
      </div>
      {lead && (
        <p
          className="an up d3"
          style={{
            font: "400 19px/1.5 var(--fb)",
            color: "var(--mut)",
            margin: "14px 0 0",
            maxWidth: 1000,
          }}
        >
          {lead}
        </p>
      )}
      <div
        style={{ flex: 1, minHeight: 0, marginTop: 22, display: "flex", flexDirection: "column" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame
      kick={"What's New — 13+"}
      title={"A new generation of features."}
      lead={"Next.js 13+ brought faster, smarter defaults for building modern applications."}
    >
      <div
        className="stag sb"
        style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }}
      >
        <div
          style={{
            padding: "20px 18px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
            borderTop: "3px solid var(--acc)",
          }}
        >
          <span
            style={{ font: "700 28px var(--fm)", color: "var(--acc)", letterSpacing: "-.04em" }}
          >
            01
          </span>
          <h4 style={{ font: "600 20px/1.2 var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>
            {"App Router"}
          </h4>
          <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>
            {"A new routing system built on React conventions — intuitive and nested by design."}
          </p>
        </div>
        <div
          style={{
            padding: "20px 18px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
            borderTop: "3px solid var(--acc)",
          }}
        >
          <span
            style={{ font: "700 28px var(--fm)", color: "var(--acc)", letterSpacing: "-.04em" }}
          >
            02
          </span>
          <h4 style={{ font: "600 20px/1.2 var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>
            {"Server Components"}
          </h4>
          <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>
            {"Components render on the server, by default."}
          </p>
        </div>
        <div
          style={{
            padding: "20px 18px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
            borderTop: "3px solid var(--acc)",
          }}
        >
          <span
            style={{ font: "700 28px var(--fm)", color: "var(--acc)", letterSpacing: "-.04em" }}
          >
            03
          </span>
          <h4 style={{ font: "600 20px/1.2 var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>
            {"Server Actions"}
          </h4>
          <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>
            {"Run server-side code directly from your components."}
          </p>
        </div>
        <div
          style={{
            padding: "20px 18px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
            borderTop: "3px solid var(--acc)",
          }}
        >
          <span
            style={{ font: "700 28px var(--fm)", color: "var(--acc)", letterSpacing: "-.04em" }}
          >
            04
          </span>
          <h4 style={{ font: "600 20px/1.2 var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>
            {"Streaming & Suspense"}
          </h4>
          <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>
            {"Progressive page loading with instant fallback UI."}
          </p>
        </div>
        <div
          style={{
            padding: "20px 18px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
            borderTop: "3px solid var(--acc)",
          }}
        >
          <span
            style={{ font: "700 28px var(--fm)", color: "var(--acc)", letterSpacing: "-.04em" }}
          >
            05
          </span>
          <h4 style={{ font: "600 20px/1.2 var(--fd)", color: "var(--ink)", margin: "12px 0 0" }}>
            {"Built-in Optimizations"}
          </h4>
          <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "8px 0 0" }}>
            {"Automatic image, font, and script optimization — no extra tooling."}
          </p>
        </div>
      </div>
    </Frame>
  );
}
