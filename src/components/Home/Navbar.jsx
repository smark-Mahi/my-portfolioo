import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import name from "../../assets/name.png";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  const [windowHeight, setWindoHeight] = useState(false);

  const handleWindowHeight = () => {
    if (window.scrollY >= 90) {
      setWindoHeight(true);
    } else {
      setWindoHeight(false);
    }
  };

  window.addEventListener("scroll", handleWindowHeight);

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div
      className={windowHeight ? "navbar navbar-bg" : "navbar"}
      data-aos="fade-right"
    >
      {/* Sidebar */}
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <img src={name} alt="my_name" className="img" />
            </div>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
