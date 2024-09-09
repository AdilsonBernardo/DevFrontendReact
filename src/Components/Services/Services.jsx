import "./Services.css";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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
            " #services .section-header  heading-1 ",
            "#services .section-header .muted",
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
          "#services .services-container .service",
          {
            opacity: 0,
            y: 60,
          },

          {
            opacity: 1,
            y: 0,
          }
        );
    },
    { scope: container }
  );
  return (
    <section id="services" ref={container}>
      <div className="container">
        <div className="services-container">
          {/* service start*/}
          <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.1</h1>
              <h2 className="title">Developing User Interfaces</h2>
            </div>
            <div className="middle">
              <p className="muted">
              I  building and maintaining the user interfaces of web applications. This includes creating reusable components, managing the component state, and ensuring that the UI is responsive and user-friendly.I often work closely with UX/UI designers to implement design mockups and improve the overall user experience.
              </p>
            </div>
            <div className="bottom">
              <Link
                to="contact"
                smooth={true}
                className=" flex-center btn gradient-2"
              >
                Hire me
              </Link>
            </div>
          </div>
          {/* service and*/}

          {/* service start*/}
          <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.2</h1>
              <h2 className="title">Integrating APIs</h2>
            </div>
            <div className="middle">
              <p className="muted">
              I integrate various APIs (Application Programming Interfaces) to fetch and manipulate data from backend services. This involves setting up HTTP requests using libraries like Axios or the Fetch API, handling asynchronous operations with Promises or async/await, and managing the application state using tools like Redux or the Context API.
              </p>
            </div>
            <div className="bottom">
              <Link
                to="contact"
                smooth={true}
                className=" flex-center btn gradient-2"
              >
                Hire me
              </Link>
            </div>
          </div>
          {/* service and*/}

          {/* service start*/}
          <div className="flex service">
            <div className="flex top">
              <h1 className="muted">0.3</h1>
              <h2 className="title">Optimizing Performance</h2>
            </div>
            <div className="middle">
              <p className="muted">
              I  work on improving the application's loading speed and responsiveness by employing techniques such as code splitting, lazy loading, and memoization. They also monitor and optimize rendering performance to ensure that the application runs smoothly across different devices and browsers.
              </p>
            </div>
            <div className="bottom">
              <Link
                to="contact"
                smooth={true}
                className=" flex-center btn gradient-2"
              >
                Hire me
              </Link>
            </div>
          </div>
          {/* service and*/}
        </div>
      </div>
    </section>
  );
}
