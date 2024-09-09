import "./Facts.css";
import { useState , useEffect} from "react";
import Odometer from "react-odometerjs";

export default function Facts() {
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
            setCustomers(20);
            setExperience(5);
            setProjects(35);
    }, 3500)
    return () => {
        clearTimeout(timeoutId);
    };
}, []);
  return (
    <div className="facts-container">
        {/* fact start */}
      <div className="fact">
        <div className="flex-center top">
          <Odometer value={customers} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted">Happy Customers</p>
      </div>
      {/* fact end */}

       {/* fact start */}
       <div className="fact">
        <div className="flex-center top">
          <Odometer value={experience} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted">Years Experience</p>
      </div>
      {/* fact end */}

       {/* fact start */}
       <div className="fact">
        <div className="flex-center top">
          <Odometer value={projects} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted">Completed Project</p>
      </div>
      {/* fact end */}
    </div>
  );
}
