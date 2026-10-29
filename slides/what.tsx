const P: any = {
  "circle-check": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5L16 9.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2.5 9.5 5L12 12.5l-9.5-5 9.5-5Z" />
      <path d="m2.5 12.5 9.5 5 9.5-5M2.5 17l9.5 5 9.5-5" />
    </>
  ),
  tri: (
    <>
      <path d="M12 3 22 20H2Z" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.5 6.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 7.9l-6.9 7a2.1 2.1 0 0 1-3-3l7-6.9a6 6 0 0 1 7.9-8l-3.8 3.8Z" />
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

function Chip({ children, ghost, icon }: any) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 14px",
        borderRadius: 999,
        font: "500 13.5px var(--fm)",
        border: ghost ? "1px dashed var(--line)" : "1px solid var(--chip-bd)",
        color: ghost ? "var(--mut)" : "var(--chip-fg)",
        background: ghost ? "transparent" : "var(--acc-soft)",
      }}
    >
      {icon}
      {children}
    </span>
  );
}

export default function Slide() {
  return (
    <Frame kick={"Foundation — 01"} title={"The React framework for the web."}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 44, alignItems: "start" }}
      >
        <div>
          <p
            className="an up d4"
            style={{ font: "400 21px/1.55 var(--fb)", color: "var(--mut)", margin: 0 }}
          >
            A full-stack React framework, built and maintained by Vercel — everything you need ships
            in the box. And every bit of your existing React knowledge still applies.
          </p>
          <div
            className="stag sc"
            style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}
          >
            <Chip icon={<Ic n="tri" s={13} fill />}>Built on React</Chip>
            <Chip ghost>Maintained by Vercel</Chip>
          </div>
          <div
            className="an up d8"
            style={{ marginTop: 30, paddingTop: 18, borderTop: "1px solid var(--line)" }}
          >
            <span
              style={{
                display: "block",
                font: "500 12px var(--fm)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--mut)",
              }}
            >
              Powering production at
            </span>
            <span
              style={{
                display: "block",
                font: "600 24px var(--fd)",
                color: "var(--ink)",
                marginTop: 8,
              }}
            >
              Netflix · TikTok · Twitch
            </span>
          </div>
        </div>
        <div className="stag sb" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Row ic="circle-check" h={"Production-Ready"}>
            {"Battle-tested at scale — the default choice for shipping React to the real world."}
          </Row>
          <Row ic="layers" h={"Full-Stack"}>
            {"Routing, rendering, and API routes — front-end and back-end living in one project."}
          </Row>
          <Row ic="wrench" h={"Opinionated"}>
            {"Sensible conventions decided for you — less time configuring, more time building."}
          </Row>
        </div>
      </div>
    </Frame>
  );
}
