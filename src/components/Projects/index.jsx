import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from "../Carousel/Carousel";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f6 from "../../assets/f6.png";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import v from "../../assets/v.png";
import roc8 from "../../assets/roc8.png";
import roc82 from "../../assets/roc82.png";
import roc83 from "../../assets/roc83.png";

const items = [
  {
    id: 1,
    title: "Flickz",
    img: [f1, f2, f3, f4, f6],
    desc: [
      "Created a personal project, a social media app with chat functionality.",
      "• Engineered the backend using FastAPI, PostgreSQL, SQLAlchemy, and Alembic for seamless database migrations.",
      "• Integrated Socket.IO for real-time chat and event updates such as likes and follows.",
      "• Collaborated with a friend to craft the responsive front end using React.",
      "• The project showcases expertise in full-stack development, real-time communication, and collaborative teamwork",
    ],
    link: "https://flickz.vercel.app/",
  },
  {
    id: 2,
    title: "Notes Management",
    img: [g1, g2, g3, g4, g5],
    desc: [
      "Developed mind castle, a notes application using FastAPI and GraphQL, leveraging SQLAlchemy as an ORM and Alembic for database migrations.",
      "• Implemented oauth2 authentication with JWT access and refresh tokens for secure user authentication.",
      "• Enabled CRUD operations for notes, allowing users to manage their notes efficiently.",
      "• Enhanced note sharing with read-only and edit permissions, facilitating collaboration among users.",
      "• Utilized GraphQL note functionalities and employed REST for authentication.",
    ],
    link: "https://mind-castle-gql.vercel.app/",
  },
  {
    id: 3,
    title: "Stone Paper Scissor Game",
    img: [v, v1, v3],
    desc: ["Developed stone paper scissor game using vanilla Js "],
    link: "http://famous-game.surge.sh",
  },
  {
    id: 4,
    title: "Roc8 assignment",
    img: [roc8, roc82, roc83],
    desc: [
      "Developed an ecommerce website,a simple ecommerce website where user can create account and login and select the items in which they are intrested.",
      "Used json-serer to mock the rest api",
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <div className="projects-imageContainer" ref={ref}>
          <Carousel images={item.img} />
        </div>
        <motion.div className="projects-textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          {item.desc.map((descrip, i) => (
            <p key={i}>{descrip}</p>
          ))}
          <a href={item.link} target="blank">
            <button>see Demo</button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress" data-aos="zoom-in-down">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <section className="projects-section">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
