import HomeButton from "../Button/HomeButton";

const HeroRight = ({ image, head, content, link, buttonText }) => {
  return (
    <>
      <div class="new-hero-section">
        <div class="new-hero-content">
          <h2 className="text-blue">{head}</h2>
          <p>{content}</p>
          <HomeButton link={link} text={buttonText} />
        </div>
        <div class="new-hero-image">
          <img src={image} alt="New Image" />
        </div>
      </div>
    </>
  );
};
export default HeroRight;
