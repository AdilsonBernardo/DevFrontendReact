import "./Logo.css";
import { FaCode } from "react-icons/fa6";

export default function Logo() {
  return (
    <div className="flex-center logo">
      <div className="flex-center logo-icon">
        <FaCode />
      </div>
      <h1 className="name">ReactDev</h1>
    </div>
  );
}
