import "./navbar.scss";
import eric from "../../assets/eric.png";
import eric2 from "../../assets/eric2.png";
import eric3 from "../../assets/eric3.png";
import eric4 from "../../assets/eric4.png";
import message_blue from "../../assets/message_blue.svg";
import message_pink from "../../assets/message_pink.svg";
import ring_orange from "../../assets/ring_orange.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="hero-text">
          <h1 className="main-header"> WElCOME TO ERIC’S PORTFOLIO</h1>
          <span className="sub-header">
            Eric is the Front end developer. and also he has a skills to design
            the website. he has lots of skills.
          </span>
        </div>
      </div>
      <div className="right">
        <img src={eric} className="user1" alt="user1" />
        <img src={eric2} className="user2" alt="user2" />
        <img src={eric3} className="user3" alt="user3" />
        <img src={eric4} className="user4" alt="user4" />
        <img src={message_blue} alt="message1" className="message1" />
        <img src={message_pink} alt="message2" className="message2" />
        <img src={ring_orange} alt="ring" className="ring" />
      </div>
    </div>
  );
};

export default Hero;
