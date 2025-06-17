export function Rating({ number, text }) {
  return (
    <span style={{ textAlign: "center" }}>
      <p style={{ fontSize: "var(--fs-xxl)", fontFamily: "var(--cool-font)" }}>
        {number}
      </p>
      <p>{text}</p>
    </span>
  );
}

export function MobileRating({ number, text, borderRadius }) {
  return (
    <span
      style={{
        textAlign: "center",
        backgroundColor: "white",
        padding: "15px",
        borderRadius: borderRadius,
      }}
    >
      <p style={{ fontSize: "var(--fs-xxl)", fontFamily: "var(--cool-font)" }}>
        {number}
      </p>
      <p>{text}</p>
    </span>
  );
}
