import { partnership } from "../../data/partnership";
import React from "react";
import Subtitle from "../Text/Subtitle";

const Partnership = () => {
  return (
    <div class="partnership-section" id="kerjasama">
      <div class="partnership-container">
        <Subtitle text="Partnership" />
        <div class="partnership-row">
          {partnership.map((data, key) => {
            return <img key={key} src={data.logo} class="partner-logo" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Partnership;
