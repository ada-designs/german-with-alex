import UnderlinedHeading from "../ui/UnderlinedHeading";
import PhoneImage from "./PhoneImage";
import Flag from "../ui/Flag/Flag";

import styles from "./Phone.module.css";

export default function Phone({ isDesktop, isTablet }) {
  return (
    <section>
      <UnderlinedHeading heading="h2" color="orange" marginLeft="250px">
        Как да се запишеш?
      </UnderlinedHeading>
      <div
        className="white-container"
        style={{
          marginTop: "15%",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Mobile menu flags */}

        {isTablet && (
          <Flag
            style={{
              position: "absolute",
              transform: "rotate(20deg)",
              bottom: "50%",
              right: "0%",
            }}
          />
        )}
        {isTablet && (
          <Flag
            style={{
              position: "absolute",
              transform: "rotate(-20deg)",
              top: "0%",
              left: "0%",
            }}
          />
        )}

        {isDesktop && (
          <div className={styles.box}>
            <UnderlinedHeading
              heading="h4"
              color="yellow"
              imageSize="175px"
              marginLeft="-20px"
              marginTop="-20px"
              rotate="rotate(-20deg)"
            >
              Бързо!
            </UnderlinedHeading>
            <UnderlinedHeading
              heading="h4"
              color="yellow"
              imageSize="175px"
              marginLeft="20px"
              marginTop="-20px"
              rotate="rotate(-20deg)"
            >
              Удобно!
            </UnderlinedHeading>
          </div>
        )}
        <div className={styles.box}>
          <PhoneImage />
        </div>
        {!isDesktop && (
          <img src="./Images/form_image.png" className={styles.teacherImg} />
        )}
        {isDesktop && (
          <div className={styles.box}>
            <UnderlinedHeading
              heading="h4"
              color="orange"
              imageSize="175px"
              marginLeft="20px"
              marginTop="-20px"
              rotate="rotate(20deg)"
            >
              Лесно!
            </UnderlinedHeading>
          </div>
        )}
      </div>
    </section>
  );
}
