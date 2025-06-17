import UnderlinedHeading from "../ui/UnderlinedHeading";
// import { useState } from "react";

import styles from "./Form.module.css";

export default function Form({ openPopup, isDesktop }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // 👉 Добави задължителните полета за formsubmit.co
    formData.append("_captcha", "false"); // вече го имаш
    formData.append("_subject", "Ново съобщение от сайта!");
    formData.append("_template", "table"); // по-добре изглежда
    formData.append("_replyto", form.email.value); // да може да отговориш директно от мейла

    try {
      const response = await fetch(
        "https://formsubmit.co/a.aleksandrov2021@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json", // ⚠️ важно
          },
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Грешка при изпращане");

      form.reset(); // ✅ нулира формата
      openPopup(); // ✅ показва попъп
    } catch (error) {
      console.error("Form submit error:", error);
      alert("Oops! Нещо се обърка. Опитай пак.");
    }
  };
  return (
    <section>
      <div
        className="white-container"
        id="form"
        style={{
          padding: "5%",
          position: "relative",
          justifyContent: "flex-end",
          backgroundColor: isDesktop ? "white" : "transparent",
        }}
      >
        {isDesktop && (
          <img
            src="/Images/form_image.png"
            alt="form_image"
            style={{
              width: "800px",
              position: "absolute",
              left: "-5%",
              bottom: "0",
              scale: "1",
            }}
          />
        )}
        <div className={styles.formBox}>
          <UnderlinedHeading
            heading="h3"
            color="yellow"
            marginLeft={isDesktop ? "70px" : "150px"}
          >
            Да започнеш да говориш немски, е много по-лесно от колкото изглежда!
          </UnderlinedHeading>
          <br />
          <form
            // action="https://formsubmit.co/a.aleksandrov2021@gmail.com"
            // method="POST"
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Име"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Име")}
            />
            <br />
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Номер"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Номер")}
            />
            <br />
            <br />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "E-mail")}
            />

            <br />

            <br />

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Попитай каквото поискаш"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Попитай каквото поискаш")}
            ></textarea>
            <br />
            <br />

            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <input
                type="checkbox"
                id="terms"
                name="agree"
                required
                style={{
                  width: "20px",
                }}
              />
              <label
                htmlFor="terms"
                style={{
                  fontFamily: "var(--normal-font)",
                  fontSize: "var(--fs-small)",
                }}
              >
                Съгласен/а съм с обработката на{" "}
                <b>
                  <u>личните ми данни</u>
                </b>
              </label>
            </span>
            <br />

            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn orange-btn">
              Изпрати сега
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
