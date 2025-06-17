import { Rating } from "./Rating";

export default function Ratings() {
  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyItems: "space-around",
          width: "90%",
        }}
      >
        <Rating number="9.3" text="Оценка в Uchiteli.bg" />
        <Rating number="500+" text="Проведени занятия " />
        <Rating number="80%+" text="Дългосрочни курсисти" />
      </div>
    </section>
  );
}
