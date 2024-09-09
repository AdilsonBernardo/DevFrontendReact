import "./Projects.css";
import project1 from "../../assets/project-01.jpg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpg";
import project4 from "../../assets/project-04.jpg";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef();
  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })

        .fromTo(
          [" #projects .section-header .heading-1 "],

          {
            opacity: 0,
            y: 60,
          },

          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        )

        .fromTo(
          "#projects .projects-container .project",
          {
            opacity: 0,
            y: 60,
          },

          {
            opacity: 1,
            y: 0,
            stagger: 0.5,
          }
        );
    },
    { scope: container }
  );

  return (
    <section id="projects" ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text"></span>
          </h1>
        </div>
        <div className="projects-container">
          {/* project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project1} alt="" />
            </div>
            <div className="details">
              <h3 className="name">weather-forecast-main</h3>
              <p className="muted">
                Weather App for Website using HTML CSS and JavaScript. In this
                Web app you can get the current weather data from Fess API fey
                from OpenWeatherMap and display the weather information like
                Temperature, Weather condition, Humidity and Wind Speed
                according to the city on our website or app.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a
                href="https://github.com/AdilsonBernardo/weather-forecast-main"
                target="_blank"
                className="btn"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* project end*/}

          {/* project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project2} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Fiverr-website</h3>
              <p className="muted">
                Fiverr clone using cutting-edge technologies such as Html and
                CSS. you'll have a fully functioning freelance.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a
                href="https://github.com/AdilsonBernardo/Fiverr-Website"
                target="_blank"
                className="btn"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* project end*/}

          {/* project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project3} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Netflix-login</h3>
              <p className="muted">
                Netflix-login-clone is leading page that I create with Html ,
                css
              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a
                href="https://github.com/AdilsonBernardo/Netflix-login"
                target="_blank"
                className="btn"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* project end*/}

          {/* project start */}
          <div className="flex project">
            <div className="picture">
              <img src={project4} alt="" />
            </div>
            <div className="details">
              <h3 className="name">Website escolar</h3>
              <p className="muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione cupiditate excepturi tenetur consequatur itaque
                blanditiis, accusamus dolorem dicta dolor ipsum doloribus nihil
                neque esse explicabo sint iste modi molestiae omnis.
              </p>
            </div>
            <div className="flex buttons-wrapper">
              <a
                href="https://github.com/AdilsonBernardo"
                target="_blank"
                className="btn"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* project end*/}
        </div>
      </div>
    </section>
  );
}
