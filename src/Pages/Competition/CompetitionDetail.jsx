import React from "react";
import { competitions } from "../../data/competitions";
import { useNavigate, useParams } from "react-router-dom";
import "../../assets/css/styles-lihat-lomba.css";
import { category } from "../../data/category";

const CompetitionDetail = () => {
  const formatRupiah = (price) => {
    if (price == "free") {
      return "Gratis";
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    })
      .format(price)
      .replace("IDR", "Rp.");
  };
  const navigate = useNavigate();

  const { id } = useParams();

  const competition = competitions.find((comp) => comp.id === parseInt(id));

  if (!competition) {
    return <div>Kompetisi tidak ditemukan</div>;
  }

  return (
    <>
      <div class="page-container">
        <div class="container mt-5">
          <div class="upload-container">
            <a href="upload.html">
              <button class="upload-button">Upload Lomba</button>
            </a>
          </div>
        </div>
        <div class="gambar">
          <img src={competition.image} alt="" />
        </div>
        <div class="content">
          <h1 class="title">{competition.name}</h1>
          <p class="subtitle">{competition.organizer}</p>
          <div class="action-buttons">
            <a
              href={`https://api.whatsapp.com/send/?phone=${competition.contact}&text&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">Kontak</button>
            </a>
            <button class="register-button">Daftar</button>
          </div>
          <div class="details">
            <div class="detail-item">
              <span class="detail-title">Batas Pendaftaran</span>
              <span class="detail-value">{competition.date}</span>
            </div>
            <div class="detail-item">
              <span class="detail-title">Venue</span>
              <span class="detail-value">{competition.venue}</span>
            </div>
            <div class="detail-item">
              <span class="detail-title">Pendaftaran</span>
              <span class="detail-value">
                {formatRupiah(competition.payment)}
              </span>
            </div>
            <div class="detail-item">
              <span class="detail-title">Lomba Tingkat</span>
              <span class="detail-value">{competition.level}</span>
            </div>
            <div class="detail-item">
              <span class="detail-title">Kategori</span>
              <span class="detail-value">{competition.category}</span>
            </div>
          </div>
          <div class="statistics">
            <span class="statistic-item">
              <i class="icon-eye"></i> {competition.views} Dilihat oleh orang
            </span>
            <span class="statistic-item">
              <i class="icon-click"></i> {competition.registered} Orang klik
              mendaftar
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompetitionDetail;
