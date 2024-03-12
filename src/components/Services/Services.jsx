import "./skilss.scss";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import logo from "../../assets/logo.png";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const content = [
    {
      title: "HTML, CSS, JS",
      description:
        "Proficient HTML, CSS skills and good foundation of Javascript. and profecianal Media query",
    },
    {
      title: "Front-End-side",
      description:
        "React,Redux, Redux-saga, Redux-Thunk,Material-Ui, styled-Components,Next JS, Graph Ql",
    },
    {
      title: "Back-End-side",
      description:
        "MongoDB,MySQL,Firebase, ETC. proficient skills to manage the data and with authuntification",
    },
    {
      title: "Education",
      description:
        "Electronics Enginnering technician, Electronics Engineering Technology In Centennial college",
    },
    {
      title: "Work Experience",
      description:
        "Electronics Technician,Failure analisist(FA) in Siemens Proficient ability and Manage skills",
    },
    {
      title: "Future Education",
      description:
        "Software Engineer Program in Mcmaster University will start from Jan, 2022",
    },
  ];
  return (
    <section className="skills-section">
      <section className="section-2">
        <div className="contents">
          <h1 className="main-header" data-aos="fade-right">
            Services that connect you to your users
          </h1>
          <div className="card-container" data-aos="zoom-out">
            {content.map((item, i) => (
              <div className="card" key={i}>
                <img src={logo} alt="logo" className="logo" />
                <div className="container">
                  <h1 className="header">{item.title}</h1>
                  <span className="paragraph">{item.description}</span>
                </div>
                <a href="#Projects">
                  <span className="explore">
                    <h3>Explore</h3>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
            ))}
            ;
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
