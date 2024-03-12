import "./app.scss";
import Acheivements from "./components/Acheivements";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Home/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <>
          <Navbar />
          <Hero />
        </>
        <span className="scrollBtn">
          <a href="#Intro">
            <span className="mouse">
              <h3 className="scrollText">scroll down</h3>
            </span>
          </a>
        </span>
      </section>
      <section id="Intro">
        <Intro />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Acheivements">
        <Acheivements />
      </section>
      <section id="Projects"></section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
