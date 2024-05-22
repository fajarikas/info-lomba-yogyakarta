import ClassChampion from "../../../public/assets/images/skuy-lomba-images/Class-Champions-1.png";
import "../../assets/css/styles-home.css";
import Trophy from "../../../public/assets/images/skuy-lomba-images/piala.png";
import HomeButton from "../../Components/Button/HomeButton";
import Subtitle from "../../Components/Text/Subtitle";
import RecomendedCompetitions from "../../Components/Competitions/RecomendedCompetitions";
import React, { useState } from "react";
import Faq from "../../Components/Faq/Faq";
import Partnership from "../../Components/Partnership/Partnership";
import Hero from "../../Components/Hero/Hero";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <p className="text-center mt-5">SKUY LOMBA!</p>
        <Subtitle text="Rekomendasi Lomba" />
      </div>

      <RecomendedCompetitions />
      <div className="flex justify-center w-full mt-12">
        <HomeButton text="Lanjutkan" link={"/competition"} />
      </div>

      <div className="mt-20">
        <Subtitle text="FAQ" />
        <Faq />

        <Partnership />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
