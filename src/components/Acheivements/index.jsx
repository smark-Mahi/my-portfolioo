import { useEffect } from "react";
import Aos from "aos";
import "./acheivements.scss";
import "aos/dist/aos.css";
const Acheivements = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const acheive = [
    {
      count: "2+",
      text: "Processing Project",
    },
    {
      count: "11+",
      text: "Project Completed",
    },
    {
      count: "2+",
      text: "Dedicated Members",
    },
  ];
  return (
    <div className="acheive-area">
      <div className="background">
        <section className="acheive-container">
          <div className="acheive-content" data-aos="fade-right">
            <h2 className="acheive-header">Some count that matters</h2>
            <span className="acheive-para">
              My achievement in the journey depicted
            </span>
          </div>
          <div className="shapes-container" data-aos="fade-left">
            {acheive.map((item, i) => (
              <div className="backside" key={i}>
                <div className="box">
                  <h2 className="count">{item.count}</h2>
                  <span className="text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acheivements;
