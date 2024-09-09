import "./About.css";
import { useRef } from "react";
import css3Logo from "../../assets/css3.png";
import firebaseLogo from "../../assets/firebase.png";
import html5Logo from "../../assets/html5.png";
import javascriptLogo from "../../assets/javascript.png";
import bootstrapLogo from "../../assets/bootstrap.png";
import gitLogo from "../../assets/git.png";
import reactLogo from "../../assets/react.png";
import figmaLogo from "../../assets/figma.png";
import vcscodeLogo from "../../assets/vs-code.png";
import typescriptLogo from "../../assets/typescript.png";
import npmLogo from "../../assets/npm.png";
import commandLogo from "../../assets/command.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef()
  useGSAP(() => {
    gsap.timeline({
       delay:0.5,
       scrollTrigger:{
        trigger:container.current,
        start:'20% bottom',
        end:'bottom top',
       }
    })

    .fromTo(
      [' #about .eduction-experience-container .contents'],

      {
        opacity:0,
        x:300,
      },

      {
        opacity:1,
        x:0,
        stagger:0.5,
       
      },
    )
  }, {scope:container})
  return (
    <section id="about" ref={container}>
      <div className="container">
        {/* end section-header*/}
        <div className="eduction-experience-container">
          <div className="column">
            <div className="contents">
              <div className="box">
                <h4 className="gradient-text">2019 - 2024</h4>
                <h3>About me as frontend developer</h3>
                <p>
                Hi! I’m Adilson Bernardo, and I’m a developer who has passion for
            building clean web applications with intuitive functionalities. I
            enjoy the process of turning ideas into reality using creative
            solutions. I’m always curious about learning new skills, tools, and
            concepts. In addition to working on various solo frontend projects,
            I have worked with creative teams, which involves daily stand-ups
            and communications, source control, and project management.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="contents">
              <div className="box">
                <h4 className="gradient-text">2019 - 2024</h4>
                <h3>About my experiences</h3>
                <p>
                I have been working as a frontend developer for 5 years, and the technologies I work most as a frontend developer are react, javascript, html and css. With these technologies I have participated in large frontend projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="brands-container">
          <div className="logos-slide ">
            <img src={reactLogo} alt="" />
            <img src={javascriptLogo} alt="" />
            <img src={typescriptLogo} alt="" />
            <img src={html5Logo} alt="" />
            <img src={css3Logo} alt="" />
            <img src={bootstrapLogo} alt="" />
            <img src={figmaLogo} alt="" />
            <img src={firebaseLogo} alt="" />
            <img src={gitLogo} alt="" />
            <img src={vcscodeLogo} alt="" />
            <img src={npmLogo} alt="" />
            <img src={commandLogo} alt="" />
          </div>
          <div className="logos-slide ">
            <img src={reactLogo} alt="" />
            <img src={javascriptLogo} alt="" />
            <img src={typescriptLogo} alt="" />
            <img src={html5Logo} alt="" />
            <img src={css3Logo} alt="" />
            <img src={bootstrapLogo} alt="" />
            <img src={figmaLogo} alt="" />
            <img src={firebaseLogo} alt="" />
            <img src={gitLogo} alt="" />
            <img src={vcscodeLogo} alt="" />
            <img src={npmLogo} alt="" />
            <img src={commandLogo} alt="" />
          </div>
        </div>
      </div>
      {/* end container */}
    </section>
  );
}
