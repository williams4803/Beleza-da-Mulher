import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/550000000000"
      className="whatsapp"
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default Whatsapp;
