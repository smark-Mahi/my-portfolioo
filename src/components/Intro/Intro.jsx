import "./intro.scss";
import Aos from "aos";
import darkcircle from "../../assets/darkcircle.png";
import lightCircle from "../../assets/lightCircle.png";
import myimage from "../../assets/myimage.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <section className="main-area">
      <section className="intro">
        <div className="intro-content">
          <div className="leftt" data-aos="fade-right">
            <img src={myimage} alt="myimage" />
          </div>
          <div className="rightt">
            <h1 data-aos="fade-left">Sumeria Begum</h1>
            <div data-aos="fade-left">
              Sumeria.Mahi I have passion to build the code on the backend-end
              side. I have a 1 years of experience in developing roboust and
              scalable application. I was recently worked on Iarmours as
              frontend developer and I was only responsible for making the whole
              frontend part. So I had a lot of chances to get Experiences about
              software
            </div>
          </div>
        </div>
        <img src={darkcircle} alt="darkcircle" className="circle1" />
        <img src={lightCircle} alt="lightCircle" className="circle2" />
      </section>
    </section>
  );
};

export default Intro;
