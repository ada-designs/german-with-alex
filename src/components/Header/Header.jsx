import Logo from "../ui/Logo";

import Navbar from "./Navbar";

export default function Header({ isDesktop }) {
  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          marginBottom: "-5%",
        }}
      >
        <Logo isDesktop={isDesktop} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "60px",
            width: "100%",
          }}
        >
          {isDesktop && <Navbar />}
          <a
            href="#form"
            className="btn orange-btn"
            style={{
              width: isDesktop ? "200px" : "100px",
              height: "auto",
              padding: "15px 30px",
              fontSize: isDesktop ? "18px" : "14px",
            }}
          >
            Запиши се!
          </a>
        </div>
      </div>
    </header>
  );
}
