import React from "react";
import Subtitle from "../Text/Subtitle";
import { testimonial } from "../../data/testimonial";

const Testimonial = () => {
  return (
    <div class="testimonial-section">
      <Subtitle text="Bagaimana Pengalaman dari para Sobat Skuy?" />
      <div class="testimonial-container">
        {testimonial.map((data, key) => {
          return (
            <div class="testimonial-item">
              <div class="testimonial-content">
                <p class="testimonial-text">{data.testimonial}</p>
                <img src={data.image} alt="User 1" class="user-photo" />
                <h4 class="user-name">{data.name}</h4>
                <p class="user-university">{data.university}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
