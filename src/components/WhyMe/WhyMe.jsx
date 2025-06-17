import UnderlinedHeading from "../ui/UnderlinedHeading";

import styles from "./WhyMe.module.css";

export default function WhyMe({ isMobile }) {
  return (
    <section>
      <div
        id="why-me"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          width: "90%",
        }}
      >
        <UnderlinedHeading
          heading="h2"
          color="yellow"
          marginLeft={!isMobile ? "320px" : "0px"}
        >
          Защо да избереш мен?
        </UnderlinedHeading>
        <div className={styles.grid}>
          <Box
            color="var(--orange-color)"
            title={
              <>
                Индивидуален <br></br>подход
              </>
            }
            text="Всеки ученик е различен – затова уроците ми са съобразени с твоето ниво, цели и стил на учене."
          />
          <Box
            color="var(--yellow-color)"
            title="Говорим немски от първия урок"
            text="Практиката е в основата на успеха – ще тренираме говорене още от самото начало, за да се чувстваш уверен."
          />
          <Box
            color="var(--orange-color)"
            title="Обяснявам ясно и разбираемо"
            text="Няма да се изгубиш в граматиката – ще ти покажа как лесно да я усвоиш с примери от реалния живот."
          />
          <Box
            color="var(--yellow-color)"
            title="Съвременни материали и интерактивни методи"
            text="Използвам актуални ресурси, видеа, диалози и ролеви игри, за да направя ученето интересно и ефективно.
"
          />
          <Box
            color="var(--orange-color)"
            title="Гъвкав график и онлайн уроци"
            text="Учиш, когато и откъдето ти е удобно – независимо дали си студент, работещ или пътешественик.
"
          />
          <Box
            color="var(--yellow-color)"
            title={
              <>
                Подкрепа <br></br>и мотивация
              </>
            }
            text="Ще съм до теб на всяка крачка – с търпение, насърчаване и ясно структурирана програма за напредък."
          />
        </div>
      </div>
    </section>
  );
}

function Box({ color, title, text }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20% 10%",
        textAlign: "center",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: color,
        borderRadius: "50px",
      }}
    >
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}
