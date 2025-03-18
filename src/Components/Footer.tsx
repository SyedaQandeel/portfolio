import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer id="contact">
        <p>
          Email:{" "}
          <a href="mailto:sqandeelfakhar@gmail.com">sqandeelfakhar@gmail.com</a>
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/syeda-qandeel-fakhar-a7b062324/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://wa.me/+923060636836"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
