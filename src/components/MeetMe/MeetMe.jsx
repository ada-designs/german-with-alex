import styles from "./MeetMe.module.css";
import UnderlinedHeading from "../ui/UnderlinedHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function MeetMe() {
  return (
    <section>
      <div className="white-container" id="about">
        <div className={styles.content}>
          <UnderlinedHeading heading="h2" color="orange">
            Запознай се с мен
          </UnderlinedHeading>
          <p style={{ fontSize: "18px", width: "90%" }}>
            Здравейте! Казвам се Александър и немският език е не просто част от
            професионалния ми път – той е моя страст. През годините съм натрупал
            опит както в академичната, така и в професионалната среда/j,
            включително работа с едни от най-големите немски туристически
            агенции. Предлагам частни уроци по немски език за деца и възрастни,
            както начинаещи, така и напреднали – онлайн или на място.{" "}
          </p>
          <img src="/Images/Alex.png" alt="Alex" />
        </div>
        <div className={styles.info}>
          <div className={styles.box}>
            <div className={styles.label}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
              </span>
              <h4>Професионален Опит</h4>
            </div>
            <ul style={{ padding: "0", color: "var(--orange-color)" }}>
              <li style={{ margin: "20px 0" }}>
                <p style={{ color: "black" }}>
                  Притежавам сертификати от Goethe-Institut, които удостоверяват
                  високо ниво на владеене на езика и методическа подготовка за
                  преподаване.
                </p>
              </li>
              <li style={{ margin: "20px 0" }}>
                <p style={{ color: "black" }}>
                  Работя с едни от най-големите немски туристически агенции,
                  където ежедневно използвам немския език в професионален
                  контекст.
                </p>
              </li>
              <li style={{ margin: "20px 0" }}>
                <p style={{ color: "black" }}>
                  Имам дългогодишен опит в провеждането на индивидуални уроци по
                  немски език за деца и възрастни – както начинаещи, така и
                  напреднали.
                </p>
              </li>
              <li style={{ margin: "20px 0" }}>
                <p style={{ color: "black" }}>
                  Подготвям ученици и студенти за изпити, матури, университетски
                  тестове, както и хора, които желаят да подобрят езика за
                  работа, пътуване или личностно развитие.
                </p>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", gap: "2%" }}>
            <a className="btn yellow-btn" style={{ width: "40%" }}>
              Научи как
            </a>
            <a href="#form" className="btn orange-btn" style={{ width: "50%" }}>
              Към формуляра
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
