import "./Feedbacks.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import user1 from "../../assets/logos/confident-diverse-business-colleagues-consulting-internet.jpg"
import user2 from "../../assets/logos/business-women-talking-near-desk-during-coffee-break-hallway-big-corporation.jpg"
import user4 from "../../assets/logos/banker-with-papers.jpg"
import user5 from "../../assets/logos/smiling-african-businessman-wearing-suit-headshot-vertical-portrait-with-team.jpg"
import user6 from "../../assets/logos/smiling-elegant-businessman.jpg"
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Feedbacks() {
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
            "#feedbacks .section-container .project","#feedbacks .section-container .muted",
            
         
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
          "#feedbacks .feebacks-container .feed-block",
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

  const settings = {
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="feedbacks" ref={container}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading-1">
            Clients <span className="gradient-text">Feedbacks</span>
          </h1>
          <p className="muted">
          Here you can see the comments and evaluations that each of my clients made as freelancer, for the services I provided to them.
          </p>
        </div>
        <Slider {...settings} className="feedbacks-container">
          {/* feedbacks start*/}
          <div className="feed-block">
            <div className="profile">
              <img src={user1} alt="" /> 
            </div>
            <div className="details">
                <p className="muted">
                Thank you very much for your wonderful service, we will contact you again if necessary!
                </p>
            </div>
            <div className="bottom">
                <div className="flex-center stars-container">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/> 
                   <FaStar/> 
                </div>
                <h2 className="name">Company</h2>
                <p className="muted"> Company</p>
            </div>
          </div>
          {/* feedbacks end*/}

           {/* feedbacks start*/}
           <div className="feed-block">
            <div className="profile">
              <img src={user2} alt="" /> 
            </div>
            <div className="details">
                <p className="muted">
                We are grateful for your wonderful and easy-to-use application for our company
                </p>
            </div>
            <div className="bottom">
                <div className="flex-center stars-container">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/> 
                   <FaStar/> 
                </div>
                <h2 className="name">Company</h2>
                <p className="muted"> company</p>
            </div>
          </div>
          {/* feedbacks end*/}

           {/* feedbacks start*/}
           <div className="feed-block">
            <div className="profile">
              <img src={user6} alt="" /> 
            </div>
            <div className="details">
                <p className="muted">
                I liked your service, with this application it will be possible for people to have access im my  products.
                </p>
            </div>
            <div className="bottom">
                <div className="flex-center stars-container">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/> 
                   <FaStar/> 
                </div>
                <h2 className="name">Fernando Mateus</h2>
                <p className="muted">businessperson</p>
            </div>
          </div>
          {/* feedbacks end*/}

           {/* feedbacks start*/}
           <div className="feed-block">
            <div className="profile">
              <img src={user4} alt="" /> 
            </div>
            <div className="details">
                <p className="muted">
                We will always count on you for applications with wonderful, interactive and easy-to-use interfaces
                </p>
            </div>
            <div className="bottom">
                <div className="flex-center stars-container">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/> 
                   <FaStar/> 
                </div>
                <h2 className="name">Francisco Silva</h2>
                <p className="muted">businessperson</p>
            </div>
          </div>
          {/* feedbacks end*/}

           {/* feedbacks start*/}
           <div className="feed-block">
            <div className="profile">
              <img src={user5} alt="" /> 
            </div>
            <div className="details">
                <p className="muted">
                I feel happy to get in touch with you, you did a good job, I loved the application you provided for me
                </p>
            </div>
            <div className="bottom">
                <div className="flex-center stars-container">
                   <FaStar/>
                   <FaStar/>
                   <FaStar/>
                   <FaStar/> 
                   <FaStar/> 
                </div>
                <h2 className="name">Roberto Costa</h2>
                <p className="muted"> businessperson</p>
            </div>
          </div>
          {/* feedbacks end*/}
        </Slider>
      </div>
    </section>
  );
}
