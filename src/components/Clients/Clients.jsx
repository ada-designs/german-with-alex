import UnderlinedHeading from "../ui/UnderlinedHeading";
import styles from "./Clients.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Clients({ isDesktop }) {
  return (
    <section>
      <div
        id="reviews"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "50px",
          width: "90%",
        }}
      >
        <UnderlinedHeading heading="h2" color="yellow" marginLeft="-20px">
          Доволни клиенти
        </UnderlinedHeading>
        <p style={{ textAlign: "center", width: "80%" }}>
          Моята най-голяма награда е доверието на клиентите ми Вярвам, че
          истинската стойност на работата ми се измерва с удовлетворението на
          хората и техните отлични резултати.
        </p>

        <div className={styles.grid}>
          <Video
            video="./Video/video2.mp4"
            text="Препоръчвам уроците му на всеки един начинаещ или напреднал, защото при него уроците протичат просто прекрасно!"
          />
          <Video
            video="./Video/video1.mp4"
            text="Нивото, което Алекс е постигнал в знанията и уменията си по немски език, е трудно откриваемо дори при мои колеги-филолози!"
          />
          <Video
            video="./Video/video4.mp4"
            text="Александър е много услужлив, мотивиран и мотивиращ. Ако се нуждаете от добър учител по немски, бих ви препоръчал да се свържете с Александър!"
          />
          {!isDesktop && (
            <Video
              video="./Video/video3.mp4"
              text="Той е изключително точен човек, уговорките с него стават много лесно и самият процес върви много гладко. Не се чудете, това е вашият учител!"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Video({ video, text }) {
  return (
    <div className={styles.box}>
      <video
        src={video}
        loop
        controls
        playsInline
        style={{
          width: "100%",
          height: "500px",
          objectFit: "cover",
          borderRadius: "2rem 2rem 0 0",
        }}
      />
      <p>{text}</p>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        color="var(--yellow-color)"
        size="3x"
      />
    </div>
  );
}
