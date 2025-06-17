import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ isDesktop, isMobile }) {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-10%",
        zIndex: "0",
      }}
    >
      <div
        className="white-container"
        style={{
          flexDirection: isDesktop ? "row" : "column",
          width: "80%",
          justifyContent: "space-around",
          padding: "10% 5% 5%",
          gap: "50px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "20px",
              width: "100%",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                alignSelf: isDesktop ? "flex-start" : "center",
              }}
            >
              <img
                src="/Images/small_avatar.png"
                alt="small_avatar"
                width="100px"
                height="100px"
              />
              <img src="/Images/logo.png" alt="logo" width="150px" />
            </span>
            <p
              style={{
                textAlign: isDesktop ? "" : "center",
                marginBottom: "20px",
              }}
            >
              ул. „Ангел Георгиев“ 18, 9002,<br></br> Варна, България
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "20px" : "100px",
                textAlign: isMobile ? "center" : "",
              }}
            >
              <span>
                <p>
                  <b>Телефон</b>
                </p>
                <p>+359 887 096 966</p>
              </span>
              <span>
                <p>
                  <b>Имейл</b>
                </p>
                <p>nemskisalex@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isDesktop ? "center" : "space-around",
            gap: "40px",
            width: isDesktop ? "40%" : "70%",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              fontFamily: "var(--cool-font)",
              fontSize: "var(--fs-big-standard)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "0",
            }}
          >
            <li>
              <a href="#about">За мен</a>
            </li>
            <li>
              <a href="#why-me">Защо да избереш мен?</a>
            </li>
            <li>
              <a href="#how-to-apply">Как да се запиша?</a>
            </li>
            <li>
              <a href="#reviews">Отзиви</a>
            </li>
            <li>
              <a href="#form">Формуляр</a>
            </li>
          </ul>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <li className="footer-icon">
              <a
                href="https://www.facebook.com/share/1ANawMDgtm/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="footer-icon">
              <a
                href="https://www.instagram.com/nemski_s_alex/?hl=bg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="footer-icon">
              <a
                href="https://uchiteli.bg/profile/aleksandyr/68546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
