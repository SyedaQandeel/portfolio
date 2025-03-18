import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"; // Import from free-solid-svg-icons

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <header className="head">
        <div className="intro">
          <h1>Syeda Qandeel Fakhar</h1>
          <p>
            I am a computer science student with a love for responsive web
            applications and a passionate web developer with a focus on frontend
            technologies.
          </p>
        </div>
        <div className="pic">
          <FontAwesomeIcon icon={faUser} size="10x" /> {/* Correct usage */}
        </div>
      </header>
    </>
  );
};

export default Header;
