import "./Footer.css";

import { Link } from "react-scroll";
import SocialMidia from "../SocialHandles/SocialMidia";
import Logo from "../Logo/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const footerTabs = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "About",
    id: "about",
  },

  {
    name: "Skills",
    id: "skills",
  },

  {
    name: "Services",
    id: "services",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Feedbacks",
    id: "feedbacks",
  },
  {
    name: "Contact",
    id: "contact",
  },
];
export default function Footer() {
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
            "footer , .logo",
            "footer-tabs",
            "footer .handles-container",
            "footer .copyright",
          ],

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
    <footer>
      <div className="container" ref={container}>
        <Logo />
        <div className="flex-center footer-tabs">
          {footerTabs.map((tab, index) => {
            return (
              <Link
                className="flex-center tab"
                activeClass="active"
                to={tab.id}
                spy={true}
                smooth={true}
                offset={-70}
                onClick={() => setOpen(false)}
                key={index}
              >
                <h4>{tab.name}</h4>
              </Link>
            );
          })}
        </div>
        <SocialMidia />
      </div>
      <div className="flex-center copyright">
        <p className="muted"> Build with love by Adilson Bernardo</p>
      </div>
    </footer>
  );
}
