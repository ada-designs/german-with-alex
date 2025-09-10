import { useEffect, useRef } from "react";
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
          Моята най-голяма награда е доверието на клиентите ми. Вярвам, че
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
          {!isDesktop && (
            <Video
              video="./Video/video5.mp4"
              text="Алекс имаше напълно индивидуален подход и ми обясняваше нещата много подробно и интересно!"
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Video({ video, text }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleLoadedData = () => {
      if (!vid.videoWidth || !vid.videoHeight) return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = vid.videoWidth;
      canvas.height = vid.videoHeight;

      ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);

      // set snapshot as poster
      vid.setAttribute("poster", canvas.toDataURL("image/png"));

      // reset video to start
      vid.currentTime = 0;
    };

    vid.addEventListener("loadeddata", handleLoadedData);
    return () => vid.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  return (
    <div className={styles.box}>
      <video
        ref={videoRef}
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
