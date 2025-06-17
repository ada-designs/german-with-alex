import styles from "./Hero.module.css";
import UnderlinedHeading from "../ui/UnderlinedHeading";
import Flag from "../ui/Flag/Flag";

export default function Hero({ isDesktop }) {
  return (
    <section>
      <div
        className="white-container"
        style={{ flexDirection: !isDesktop ? "column" : "row" }}
      >
        <div className={styles.heroContent}>
          <UnderlinedHeading heading="h1" color="yellow">
            Научи <br></br> немски език<br></br> с Алекс
          </UnderlinedHeading>
          <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>
            Индивидуални уроци по немски език<br></br> за начинаещи и напреднали
          </p>
          <div
            style={{
              display: "flex",
              gap: "30px",
              width: "100%",
              justifyContent: !isDesktop ? "center" : "flex-start",
            }}
          >
            <a href="#form" className="btn yellow-btn">
              Запиши се!
            </a>
            <Flag />
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/Images/Hero_img.png"
            alt="avatar"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
