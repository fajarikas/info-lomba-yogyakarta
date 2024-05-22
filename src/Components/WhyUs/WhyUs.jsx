import "../../assets/css/styles-tentang.css";
import { whyUs } from "../../data/whyUs";

const WhyUs = () => {
  return (
    <>
      <div class="container-info">
        {whyUs.map((data, key) => (
          <div key={key}>
            <div class="card-informasi">
              <img src={data.image} alt="Ceklis" class="icon-info" />
              <h3>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyUs;
