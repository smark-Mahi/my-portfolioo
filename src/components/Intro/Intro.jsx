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
            <h1 data-aos="fade-left">Abdul Rehman Khan</h1>
            <div data-aos="fade-left">
              Eric.shin I have passion to build the code on the backend-end
              side. I have a 2 years of experience in developing roboust and
              scalable application. I was recently worked in Iarmours as
              fullstack developer. So I had a lot of chances to get Experiences
              about software
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
