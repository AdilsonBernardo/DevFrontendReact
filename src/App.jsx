import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Feedbacks from "./Components/Feedbacks/Feedbacks";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import "/main.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects/>
      <Feedbacks/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
