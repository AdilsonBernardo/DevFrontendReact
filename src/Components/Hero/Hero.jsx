import "./Hero.css";
import hero_image from "../../assets/Adilson.png";
import Facts from "../Facts/Facts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  useGSAP(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        "#hero .hero-image",

        {
          scale: 0,
        },
        {
          scale: 1,
          delay: 0.5,
        }
      )

      .fromTo(
        ["#hero .heading-1", "#hero .description"],

        {
          x: -20,
          opacity: 0,
        },

        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      )

      .fromTo(
        "#hero .facts-container .fact",
        {
          x: 50,
          opacity: 0,
        },

        {
          x: 0,
          opacity: 1,
          stagger: 0.5,
        }
      );
  });
  return (
    <section id="hero" className="flex blur-effect">
      <div className="container">
        <div className="column hero-image">
          <img src={hero_image} alt="" />
        </div>
        <div className="column">
          <h1 className="heading-1">
            React
            <span className="gradient-text">Dev</span>
          </h1>
          <p className="muted description">
            I develop the best quality website that serves for the long-term.
            Well-documented, clean, easy and elegant interface helps any
            non-technical clients.
          </p>
          <Facts />
        </div>
      </div>
    </section>
  );
}
