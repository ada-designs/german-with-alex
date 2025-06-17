import Logo from "./ui/Logo";
import Flag from "./ui/Flag/Flag";

export default function Popup({ showPopup, closePopup, isDesktop }) {
  return (
    <div
      className="wrapper"
      style={{ display: showPopup ? "flex" : "none", zIndex: "99" }}
    >
      <div className="popup">
        <Flag
          style={{
            position: "absolute",
            top: "10%",
            left: isDesktop ? "10%" : "5%",
            rotate: "-20deg",
          }}
        />
        <Flag
          style={{
            position: "absolute",
            bottom: "10%",
            right: isDesktop ? "10%" : "5%",
            rotate: "20deg",
          }}
        />
        <Logo style={{ marginTop: "-10%" }} />
        <h3 className="popup-message">
          Благодаря за съобщението! <br /> Скоро ще се свържа с вас.
        </h3>
        <button className="btn orange-btn" onClick={closePopup}>
          Обратно към сайта
        </button>
      </div>
    </div>
  );
}
