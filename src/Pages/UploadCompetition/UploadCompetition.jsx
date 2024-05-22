import React from "react";
import "../../assets/css/styles-upload.css";
import Gallery from "../../../public/assets/images/image-icon/gallery 2.png";

const UploadCompetition = () => {
  return (
    <>
      <div class="uplomba">
        <h1>
          <u>Upload Lomba</u>
        </h1>
        <button class="upload-button">Kirim</button>
      </div>

      <div class="container">
        <div class="form-container">
          <div class="upload-section">
            <h2 class="subjudul text-center">1. Unggah Poster Kompetisi mu</h2>
            <div
              class="upload-box"
              // onclick="document.getElementById('fileInput').click();"
            >
              <img src={Gallery} alt="Upload Poster" />
            </div>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onchange="previewImage(event)"
            />
          </div>
          <div class="data-section">
            <h2 class="subjudul text-center">2. Isi Data Kompetisi</h2>
            <form>
              <label for="nama-kompetisi">Nama Kompetisi</label>
              <input
                type="text"
                id="nama-kompetisi"
                name="nama-kompetisi"
                placeholder="Masukan nama kompetisimu"
              />

              <label for="penyelenggara">Penyelenggara Kompetisi</label>
              <input
                type="text"
                id="penyelenggara"
                name="penyelenggara"
                placeholder="Masukan nama penyelenggara"
              />

              <label for="deadline">Deadline Kompetisi</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                placeholder="Masukan Tanggal"
              />

              <label for="link-pendaftaran">Link pendaftaran Kompetisi</label>
              <input
                type="url"
                id="link-pendaftaran"
                name="link-pendaftaran"
                placeholder="Masukan Link"
              />

              <label for="link-narahubung">Link narahubung</label>
              <input
                type="url"
                id="link-narahubung"
                name="link-narahubung"
                placeholder="Masukan kontak"
              />

              <label>Tingkat Perlombaan</label>
              <div class="radio-group">
                <input
                  type="radio"
                  id="nasional"
                  name="tingkat"
                  value="nasional"
                />
                <label for="nasional">Nasional</label>
                <input type="radio" id="umum" name="tingkat" value="umum" />
                <label for="umum">Umum</label>
              </div>

              <label>Biaya pendaftaran kompetisi</label>
              <div class="radio-group">
                <input type="radio" id="bayar" name="biaya" value="bayar" />
                <label for="bayar">Bayar</label>
                <input type="radio" id="gratis" name="biaya" value="gratis" />
                <label for="gratis">Gratis</label>
              </div>
            </form>
          </div>
          <div class="survey-section">
            <h2 class="subjudul text-center">3. Skuy SURVEY</h2>
            <form class="survey-form">
              <label for="survey">
                Dari manakah kalian mendapatkan informasi tentang kami?
              </label>
              <textarea
                id="survey"
                className="border border-black h-[550px] rounded-md mt-2"
                name="survey"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCompetition;
