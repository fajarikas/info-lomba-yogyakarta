import ClassChampion from "../../../public/assets/images/skuy-lomba-images/Class-Champions-1.png";
import "../../assets/css/styles-home.css";
import Trophy from "../../../public/assets/images/skuy-lomba-images/piala.png";
import HomeButton from "../../Components/Button/HomeButton";
import Subtitle from "../../Components/Text/Subtitle";
import RecomendedCompetitions from "../../Components/Competitions/RecomendedCompetitions";
import React, { useState } from "react";
import Faq from "../../Components/Faq/Faq";
import Partnership from "../../Components/Partnership/Partnership";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Lomba
            <br />
            Informasi
            <br />
            Perlombaan
            <br />
            Yogyakarta
          </h1>
          <p>
            "Inspirasi, Kompetisi, dan Kemenangan - Temukan semuanya di Skuy
            Lomba!"
          </p>
          <HomeButton text="Ayo Jelajahi" link="/compe" />
        </div>
        <div className="hero-image">
          <img src={ClassChampion} alt="Trophy and Competition Icons" />
        </div>
      </div>

      <div className="new-hero-section">
        <div className="new-hero-image">
          <img src={Trophy} alt="New Image" />
        </div>
        <div className="new-hero-content">
          <p>About Us</p>
          <h2 className="text-blue">
            Berbagi Semangat Kompetisi untuk Membentuk Generasi Pemenang
          </h2>
          <p>
            Skuylomba adalah website informasi perlombaan yang berfokus didaerah
            Yogyakarta. Kami percaya bahwa kompetisi adalah kunci untuk
            membentuk generasi pemenang. Kami berkomitmen untuk menyediakan
            platform yang memotivasi dan menginspirasi individu untuk mengejar
            ambisi mereka, \
          </p>
          <HomeButton text="Lanjutkan" link={"/about"} />
        </div>
      </div>

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
