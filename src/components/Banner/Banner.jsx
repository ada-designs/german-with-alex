import styles from "./Banner.module.css";

export default function Banner({ isDesktop }) {
  return (
    <section>
      <div className={styles.yellowCont}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: isDesktop ? "50%" : "100%",
          }}
        >
          <h3
            style={{
              fontSize: "var(--fs-xl)",
              textAlign: !isDesktop ? "center" : "",
            }}
          >
            Впусни се в твоето ново езиково приключение сега!
          </h3>
          <p style={{ textAlign: isDesktop ? "" : "center" }}>
            Над 40+ доволни клиенти
          </p>
          <a href="#form" className="btn white-btn">
            Започни сега!
          </a>
        </div>
        <div className={styles.imageBox}>
          <img src="/Images/banner.png" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
