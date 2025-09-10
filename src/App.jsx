import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MeetMe from "./components/MeetMe/MeetMe";
import WhyMe from "./components/WhyMe/WhyMe.jsx";
import Phone from "./components/Phone/Phone";
import Clients from "./components/Clients/Clients";
import Ratings from "./components/Ratings/Ratings.jsx";
import RatingsMobile from "./components/Ratings/RatingsMobile.jsx";
import Form from "./components/Form/Form";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer";

import Popup from "./components/Popup";

import { useState } from "react";
import useWindowWidth from "./hooks/useWindowsWidth.js";

import "./global.css";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const width = useWindowWidth();

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024;

  console.log("width", width, "isDesktop", isDesktop);

  function openPopup() {
    setShowPopup(true);
  }

  function closePopup() {
    setShowPopup(false);
  }
  return (
    <>
      <Header isDesktop={isDesktop} />

      <Hero isDesktop={isDesktop} />
      {!isMobile ? <Ratings /> : <RatingsMobile />}
      <MeetMe isDesktop={isDesktop} isMobile={isMobile} />
      <WhyMe isMobile={isMobile} />
      <Phone isDesktop={isDesktop} isTablet={isTablet} />
      <Clients isDesktop={isDesktop} />
      <Form
        isDesktop={isDesktop}
        showPopup={showPopup}
        openPopup={openPopup}
        closePopup={closePopup}
      />
      <Banner isDesktop={isDesktop} />

      <Popup
        showPopup={showPopup}
        closePopup={closePopup}
        isDesktop={isDesktop}
      />

      <Footer isDesktop={isDesktop} isMobile={isMobile} />
    </>
  );
}
