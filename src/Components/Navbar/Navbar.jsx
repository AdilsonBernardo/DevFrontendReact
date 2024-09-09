import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import SocialMidia from "../SocialHandles/SocialMidia";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useGSAP(() => {
    gsap
      .timeline({ delay: 0.5 })
      .fromTo(
        ["nav .logo .name", "nav .logo .logo-icon"],

        {
          opacity: 0,
          x: -100,
        },

        {
          opacity: 1,
          x: 0,
          stagger: 0.5,
        }
      )

      .fromTo(
        "nav .tabs-container .tab",
        {
          opacity: 0,
          x: 0,
        },

        {
          opacity: 1,
          x: 0,
          stagger: 0.5,
        }
      )
      .fromTo(
        "nav .handles-container .icon-wrapper",
        {
          opacity: 0,
          y: -50,
        },

        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
        }
      );
  });
  const navTabs = [
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
  return (
    <nav className="flex">
      {open ? (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      ) : (
        ""
      )}
      <div className="column flex-center">
        <Logo />
      </div>  
      <div
        className={`column flex-center tabs-container ${open ? "active" : ""}`}
        id="sidebar"
      >
        <div
          className="flex-center icon-wrapper"
          id="close-sidebar-btn"
          onClick={() => setOpen(!open)}
        >
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => {
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
      <div className="column flex-center buttons-wrapper">
        <SocialMidia />
        <div
          className="flex-center icon-wrapper"
          id="menu-btn"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </div>
      </div>
    </nav>
  );
}
