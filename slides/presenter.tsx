const P: any = {
  at: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </>
  ),
  code: (
    <>
      <path d="m15.5 18 6-6-6-6m-7 0-6 6 6 6" />
    </>
  ),
  grad: (
    <>
      <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M21.5 9v5" />
    </>
  ),
  link: (
    <>
      <path d="M10 14a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 10a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 17 6-5-6-5M12 19h8" />
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
    <Frame kick={"Your Host"} title={"Nice to meet you."}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "230px 1fr",
          gap: 44,
          alignItems: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            width: 210,
            height: 210,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            border: "2px solid var(--acc)",
            background: "var(--acc-soft)",
            boxShadow: "0 0 0 10px var(--acc-soft)",
            justifySelf: "center",
          }}
        >
          <span
            style={{ font: "600 78px var(--fm)", letterSpacing: "-.05em", color: "var(--acc)" }}
          >
            YN
          </span>
        </div>
        <div>
          <h3
            style={{
              font: "700 38px var(--fd)",
              letterSpacing: "-.03em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            Your Name
          </h3>
          <p style={{ font: "400 18px var(--fb)", color: "var(--mut)", margin: "4px 0 14px" }}>
            Microsoft Learn Student Ambassador ·{" "}
            <b style={{ color: "var(--ink)" }}>Web &amp; Cloud enthusiast</b>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <Row pad="11px 16px" ic="grad" h="Studying Computer Science">
              Your University, Year 3 — focused on web engineering and developer communities.
            </Row>
            <Row pad="11px 16px" ic="code" h="Building with React & Next.js">
              Side projects, hackathon wins, and shipping full-stack apps to real users.
            </Row>
            <Row pad="11px 16px" ic="pin" h="Based in Your City">
              Hosting workshops like this one — and always up for a chat about the web.
            </Row>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
            <Chip icon={<Ic n="at" s={14} />}>github.com/yourhandle</Chip>
            <Chip icon={<Ic n="link" s={14} />}>linkedin.com/in/yourhandle</Chip>
            <Chip icon={<Ic n="mail" s={14} />}>your@email.dev</Chip>
          </div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              font: "400 15px var(--fm)",
              color: "var(--mut)",
              margin: "14px 0 0",
            }}
          >
            <Ic n="terminal" s={17} c="var(--acc)" />$ echo "Ask me anything — before, during, or
            after the talk."
          </p>
        </div>
      </div>
    </Frame>
  );
}
