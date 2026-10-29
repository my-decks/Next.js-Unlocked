const P: any = {
  "arrow-r": (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 5 5L20 7" />
    </>
  ),
  drop: (
    <>
      <path d="M12 3a7 7 0 0 1 7 7c0 2-1 3.8-2.9 5.4-1.6 1.3-3.2 3.6-4.1 5.6-.9-2-2.5-4.3-4.1-5.6C6 13.8 5 12 5 10a7 7 0 0 1 7-7Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5a14.5 14.5 0 0 1 0 19 14.5 14.5 0 0 1 0-19Z" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M8 21h8m-4-4.5V21" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3.5" width="18" height="7" rx="1.5" />
      <rect x="3" y="13.5" width="18" height="7" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
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

function Note({ children }: any) {
  return (
    <p
      className="an up d7"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "20px 0 0",
        font: "500 17px/1.4 var(--fb)",
        color: "var(--ink)",
      }}
    >
      <span style={{ color: "var(--acc)" }}>
        <Ic n="arrow-r" s={20} />
      </span>
      {children}
    </p>
  );
}

export default function Slide() {
  return (
    <Frame
      kick={"Rendering — 02"}
      title={"What is SSR?"}
      lead={
        "Server-Side Rendering — HTML is generated on the server, per request. The browser receives fully populated HTML, immediately."
      }
    >
      <div className="stag" style={{ display: "flex", alignItems: "stretch", gap: 10 }}>
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "20px 20px 22px",
            borderRadius: 12,
            border: "2px solid var(--acc)",
            background: "var(--acc)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              font: "500 13px var(--fm)",
              color: "rgba(255,255,255,.88)",
            }}
          >
            01
          </span>
          <Ic n="globe" s={28} c="#fff" />
          <h4 style={{ font: "600 21px var(--fd)", color: "#fff", margin: "12px 0 0" }}>Request</h4>
          <p
            style={{
              font: "400 15.5px/1.4 var(--fb)",
              color: "rgba(255,255,255,.88)",
              margin: "6px 0 0",
            }}
          >
            The browser asks the server for the page.
          </p>
        </div>
        <div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}>
          <span className="idle-nudge" style={{ display: "grid" }}>
            <Ic n="arrow-r" s={22} />
          </span>
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "20px 20px 22px",
            borderRadius: 12,
            border: "2px solid var(--acc)",
            background: "var(--acc)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              font: "500 13px var(--fm)",
              color: "rgba(255,255,255,.88)",
            }}
          >
            02
          </span>
          <Ic n="server" s={28} c="#fff" />
          <h4 style={{ font: "600 21px var(--fd)", color: "#fff", margin: "12px 0 0" }}>
            Server Renders
          </h4>
          <p
            style={{
              font: "400 15.5px/1.4 var(--fb)",
              color: "rgba(255,255,255,.88)",
              margin: "6px 0 0",
            }}
          >
            HTML is generated on the server, per request.
          </p>
        </div>
        <div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}>
          <span className="idle-nudge" style={{ display: "grid" }}>
            <Ic n="arrow-r" s={22} />
          </span>
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "20px 20px 22px",
            borderRadius: 12,
            border: "2px solid var(--acc)",
            background: "var(--acc)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              font: "500 13px var(--fm)",
              color: "rgba(255,255,255,.88)",
            }}
          >
            03
          </span>
          <Ic n="monitor" s={28} c="#fff" />
          <h4 style={{ font: "600 21px var(--fd)", color: "#fff", margin: "12px 0 0" }}>
            Immediate Paint
          </h4>
          <p
            style={{
              font: "400 15.5px/1.4 var(--fb)",
              color: "rgba(255,255,255,.88)",
              margin: "6px 0 0",
            }}
          >
            Content is visible right away — no blank screen.
          </p>
        </div>
        <div style={{ display: "grid", placeItems: "center", color: "var(--mut)" }}>
          <span className="idle-nudge" style={{ display: "grid" }}>
            <Ic n="arrow-r" s={22} />
          </span>
        </div>
        <div
          style={{
            flex: 1,
            position: "relative",
            padding: "20px 20px 22px",
            borderRadius: 12,
            border: "2px solid var(--acc)",
            background: "var(--acc)",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              font: "500 13px var(--fm)",
              color: "rgba(255,255,255,.88)",
            }}
          >
            04
          </span>
          <Ic n="drop" s={28} c="#fff" />
          <h4 style={{ font: "600 21px var(--fd)", color: "#fff", margin: "12px 0 0" }}>
            Hydration
          </h4>
          <p
            style={{
              font: "400 15.5px/1.4 var(--fb)",
              color: "rgba(255,255,255,.88)",
              margin: "6px 0 0",
            }}
          >
            React attaches interactivity to the HTML.
          </p>
        </div>
      </div>
      <div
        className="stag sb"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          marginTop: 20,
          border: "1px solid var(--line)",
          borderRadius: 12,
          background: "var(--card)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 14,
            padding: "16px 22px",
            borderRight: "1px solid var(--line)",
          }}
        >
          <Ic n="check" s={24} c="var(--ok)" />
          <div>
            <span
              style={{
                font: "600 12px var(--fm)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--ok)",
              }}
            >
              Pros
            </span>
            <p style={{ font: "400 16.5px/1.4 var(--fb)", color: "var(--ink)", margin: "4px 0 0" }}>
              Fast first paint · better SEO · accessible content.
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, padding: "16px 22px" }}>
          <Ic n="x" s={24} c="var(--err)" />
          <div>
            <span
              style={{
                font: "600 12px var(--fm)",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--err)",
              }}
            >
              Cons
            </span>
            <p style={{ font: "400 16.5px/1.4 var(--fb)", color: "var(--ink)", margin: "4px 0 0" }}>
              More server load · interactions wait for hydration.
            </p>
          </div>
        </div>
      </div>
      <Note>Net result: better SEO and initial-load performance.</Note>
    </Frame>
  );
}
