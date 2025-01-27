import "../Styles/HeroSection.css"; // CSS import
import videoFile from "../assets/1.mp4"; // Video import

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      {/* Background Video */}
      <div className="videoBackground">
        <video className="backgroundVideo" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navbar */}
      <nav>
        <div className="logo">
          <i className="fas fa-utensils"></i> TARRA
        </div>
        <div className="navLinks">
          <div className="links">
            <a href="#about">About Us</a>
            <a href="#menu">Menu</a>
            <a href="#contact">Contact</a>
            <a href="#team">Team</a>
          </div>
          <button className="menuBtn">Reserve Now</button>
        </div>
      </nav>

      {/* Welcome Description Overlay */}
      <div className="welcomeDescription">
        <p>Welcome to TARRA, where every meal is a journey</p>
      </div>

      {/* Centered Content */}
      <div className="container">
        <div className="largeBox">
          <h1 className="title">Welcome to TARRA Restaurants</h1>
          <p className="subtitle">
            Experience the rich flavors of Sri Lanka, from traditional rice and curry to exquisite seafood and street food delights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
