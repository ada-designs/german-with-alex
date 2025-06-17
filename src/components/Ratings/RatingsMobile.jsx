import { MobileRating } from "./Rating";
import Flag from "../ui/Flag/Flag";

export default function RatingsMobile() {
  return (
    <section style={{ display: "flex", position: "relative" }}>
      <Flag
        style={{
          position: "absolute",
          transform: "rotate(-20deg)",
          top: "0%",
          left: "0%",
        }}
      />
      <Flag
        style={{
          position: "absolute",
          transform: "rotate(-20deg)",
          bottom: "0%",
          right: "0%",
        }}
      />
      <div style={{ width: "80%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <MobileRating
            number="9.3"
            text="Оценка в Uchiteli.bg"
            borderRadius="50px 0 50px 50px "
          />
          <MobileRating
            number="500+"
            text="Проведени занятия "
            borderRadius="50px  50px 50px 0"
          />
          <MobileRating
            number="80%+"
            text="Дългосрочни курсисти"
            borderRadius="50px  50px 0 50px "
          />
        </div>
      </div>
    </section>
  );
}
