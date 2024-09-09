import "./SocialMidia.css";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialMidia() {
  const socialHandles = [
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://www.instagram.com/adilson_bernardo00/",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://free.facebook.com/profile.php?eav=AfaZvufi6kqkMvu1KYKJ_hklMA1jOrASJWVozPmuc3poJIkAb82LnMQaM-3qgNtB6lI&ref_component=mfreebasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=8&paipv=0",
    },
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/AdilsonBernardo",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "#",
    },
  ];
  return (
    <div className="flex handles-container">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          target="_blank"
          className="flex-center icon-wrapper"
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
}
