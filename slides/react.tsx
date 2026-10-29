const P: any = {
  code: (
    <>
      <path d="m15.5 18 6-6-6-6m-7 0-6 6 6 6" />
    </>
  ),
  plug: (
    <>
      <path d="M9 7V2m6 5V2M7.5 7h9v5a4.5 4.5 0 0 1-9 0V7ZM12 16.5V22" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.5-4.5" />
    </>
  ),
  swap: (
    <>
      <path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4" />
    </>
  ),
};

function Ic({ n, s = 22, c = "currentColor", fill = false }: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={s}
      height={s}
      fill={fill ? c : "none"}
      stroke={fill ? "none" : c}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: "none", display: "block" }}
    >
      {P[n]}
    </svg>
  );
}

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

function Row({ ic, h, pad = "15px 18px", children }: any) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        padding: pad,
        borderRadius: 12,
        border: "1px solid var(--line)",
        background: "var(--card)",
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          background: "var(--acc-soft)",
          color: "var(--acc)",
          flex: "none",
        }}
      >
        <Ic n={ic} s={21} />
      </span>
      <div>
        <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>{h}</h4>
        <p style={{ font: "400 15.5px/1.45 var(--fb)", color: "var(--mut)", margin: "4px 0 0" }}>
          {children}
        </p>
      </div>
    </div>
  );
}

export default function Slide() {
  return (
    <Frame
      kick={"The Baseline"}
      title={"Did you know about React?"}
      lead={
        "React is a UI library — not a full framework. It's powerful, but intentionally minimal."
      }
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.8fr 1.2fr",
          gap: 44,
          alignItems: "start",
        }}
      >
        <div
          className="an pop d4"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: "10px 0",
          }}
        >
          <svg viewBox="0 0 220 220" width={230} height={230} aria-hidden="true">
            <g className="idle-spin" fill="none" stroke="var(--react)" strokeWidth="6">
              <ellipse cx="110" cy="110" rx="92" ry="34" />
              <ellipse cx="110" cy="110" rx="92" ry="34" transform="rotate(60 110 110)" />
              <ellipse cx="110" cy="110" rx="92" ry="34" transform="rotate(120 110 110)" />
            </g>
            <circle cx="110" cy="110" r="9" fill="var(--react)" />
          </svg>
          <div className="an up d5" style={{ textAlign: "center" }}>
            <span style={{ display: "block", font: "700 30px var(--fd)", color: "var(--ink)" }}>
              React
            </span>
            <span
              style={{
                display: "block",
                font: "400 16px var(--fb)",
                color: "var(--mut)",
                marginTop: 2,
              }}
            >
              A library for the View layer
            </span>
          </div>
        </div>
        <div className="stag sb" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Row ic="code" h={"Component-Based"}>
            {"Build UIs from small, reusable, declarative pieces."}
          </Row>
          <Row ic="swap" h={"No Built-in Routing"}>
            {"You pick and install your own router — React Router, TanStack, and friends."}
          </Row>
          <Row ic="search" h={"SEO Challenges"}>
            {"Client-side rendering makes search indexing harder."}
          </Row>
          <Row ic="plug" h={"External Tools Required"}>
            {"Routing and data fetching must be wired up by you."}
          </Row>
        </div>
      </div>
    </Frame>
  );
}
