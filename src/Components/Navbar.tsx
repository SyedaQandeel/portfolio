import "../Styles/myStyle.css";

const Navbar = () => {
  return (
    <>
      {/* Navigation Menu */}
      <nav className="navbar">
        <a href="#education">Educational History</a>
        <a href="#skills">Professional Skills</a>
        <a href="#projects">Professional Projects</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#ambitions">Life Ambitions</a>
        <a href="#efforts">Efforts for Country</a>
        <a className="contact-link" href="#contact">
          Contact Me
        </a>
      </nav>
    </>
  );
};

export default Navbar;
