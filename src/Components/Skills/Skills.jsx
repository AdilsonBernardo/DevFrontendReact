import "./Skills.css";
import reactLogo from "../../assets/react.png";
import javascriptLogo from "../../assets/javascript.png";
import html5Logo from "../../assets/html5.png";
import css3Logo from "../../assets/css3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
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
          [
            " #skills .section-header .heading-1 ",
            "#skills .section-header .muted",
          ],

          {
            opacity: 0,
            y: 60,
          },

          {
            opacity:1,
            y: 0,
            stagger: 0.5,
          }
        )

        .fromTo(
          "#skills .skills-container .skill",
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
    <section id="skills" className="blur-effect" ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="muted">
          I develop simple, intuitive and responsive user interface that helps users get things done with less effort
            and time
            with those technologies.
          </h1>
        </div>
        <div className="skills-container">
          {/* skill start */}
          <div className="flex skill">
            <div className=" image">
              <img src={reactLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="">React</h3>
              <h2 className="progress"></h2>
            </div>
          </div>
          {/* skill */}
          {/* skill start */}
          <div className="flex skill">
            <div className="image">
              <img src={javascriptLogo} alt="" />
            </div>
            <div className="details">
              <h3 className="">Javascript</h3>
              <h2 className="progress"></h2>
            </div>
          </div>
          {/* skill */}
          {/* skill start */}
          <div className="flex skill">
            <div className=" image">
              <img src={html5Logo} alt="" />
            </div>
            <div className="details">
              <h3 className="">Html</h3>
              <h2 className="progress"></h2>
            </div>
          </div>
          {/* skill */}
          {/* skill start */}
          <div className="flex skill">
            <div className=" image">
              <img src={css3Logo} alt="" />
            </div>
            <div className="details">
              <h3 className="">Css</h3>
              <h2 className="progress"></h2>
            </div>
          </div>
          {/* skill */}
        </div>
      </div>
    </section>
  );
}

