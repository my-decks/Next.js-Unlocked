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
        style={{
          width: 64,
          height: 4,
          borderRadius: 2,
          marginTop: 14,
          background: "linear-gradient(90deg,var(--acc),var(--acc2))",
        }}
      />
      {lead && (
        <p
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
    <Frame kick={"What We'll Cover"} title={"Today's agenda."}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            01
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"The Baseline"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"React refresher — library, view layer, tooling gaps."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            02
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Library vs. Framework"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"Who calls whose code — and why it matters."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            03
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Rendering"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"CSR and SSR, step by step — the blank screen problem."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            04
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"React vs. Next.js"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"Head-to-head — routing, SEO, backend, setup."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            05
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Next.js 13+"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"App Router, Server Components, Actions, streaming."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            06
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Deep Dives"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"Routing patterns, Server Components, data fetching."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            07
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Getting Started"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"One CLI command — project anatomy."}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: 12,
            border: "1px solid var(--line)",
            background: "var(--card)",
          }}
        >
          <span
            style={{
              font: "700 30px var(--fm)",
              color: "var(--acc)",
              letterSpacing: "-.04em",
              minWidth: 44,
            }}
          >
            08
          </span>
          <div>
            <h4 style={{ font: "600 19px var(--fd)", color: "var(--ink)", margin: 0 }}>
              {"Live Demo"}
            </h4>
            <p style={{ font: "400 15.5px/1.4 var(--fb)", color: "var(--mut)", margin: "3px 0 0" }}>
              {"Five phases — from dev server to full-stack."}
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}
