export default function Navbar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "var(--fs-standard)",
        }}
      >
        <li style={{ fontFamily: "var(--cool-font)" }}>
          <a href="#about">За мен</a>
        </li>
        <li style={{ fontFamily: "var(--cool-font)" }}>
          <a>Как?</a>
        </li>
        <li style={{ fontFamily: "var(--cool-font)" }}>
          <a href="#reviews">Отзиви</a>
        </li>
      </ul>
    </nav>
  );
}
