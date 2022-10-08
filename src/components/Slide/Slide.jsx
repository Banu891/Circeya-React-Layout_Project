import "./Slide.css";
import photo1Slider from "../../assets/page2/photo1-slider.png";
import photo2Slider from "../../assets/page2/photo2-slider.png";
import photo3Slider from "../../assets/page2/photo3-slider.png";
import photo4Slider from "../../assets/page2/photo4-slider.png";
import photo5Slider from "../../assets/page2/photo5-slider.png";
import photo6Slider from "../../assets/page2/photo6-slider.png";
import photo7Slider from "../../assets/page2/photo7-slider.png";
import photo8Slider from "../../assets/page2/photo8-slider.png";
import photo9Slider from "../../assets/page2/photo9-slider.png";
import photo10Slider from "../../assets/page2/photo10-slider.png";
import photo11Slider from "../../assets/page2/photo11-slider.png";
import photo12Slider from "../../assets/page2/photo12-slider.png";

function Slide() {


  return (
      <div className="slider-container">
          <div className="slider-title-div">
          <p className="slider-title">Lorem ipsum dolor sit amet</p>

          </div>
          <div id="#slider" className="slider">
        <div className="slider-photo-div"></div>    
        <img src={photo1Slider} alt="photo1Slider" className="slider-photo" />
        <img src={photo2Slider} alt="photo2Slider" className="slider-photo" />
        <img src={photo3Slider} alt="photo3Slider" className="slider-photo" />
        <img src={photo4Slider} alt="photo4Slider" className="slider-photo" />
        <img src={photo5Slider} alt="photo5Slider" className="slider-photo" />
        <img src={photo6Slider} alt="photo6Slider" className="slider-photo" />
        <img src={photo7Slider} alt="photo7Slider" className="slider-photo" />
        <img src={photo8Slider} alt="photo8Slider" className="slider-photo" />
        <img src={photo9Slider} alt="photo9Slider" className="slider-photo" />
        <img src={photo10Slider} alt="photo10Slider" className="slider-photo" />
        <img src={photo11Slider} alt="photo11Slider" className="slider-photo" />
        <img src={photo12Slider} alt="photo12Slider" className="slider-photo" />
      </div>
    </div>
  );
}

export default Slide;
