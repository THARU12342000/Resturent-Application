import { FaUtensils, FaLeaf, FaSmile } from "react-icons/fa";
import "./../Styles/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">
              <span>ABOUT</span> US
            </h1>
            <p>
              Your one-stop destination for irresistible flavors and unforgettable dining experiences.
            </p>
          </div>
          <p className="mid">
            At our restaurant, we believe in crafting moments that bring joy to every bite. From classic dishes
            to innovative specials, every meal is made with passion and precision. Let us take you on a
            culinary journey where taste knows no bounds!
          </p>
          <div className="cards">
            <div className="card">
              <FaUtensils className="icon" />
              <h3>Delicious Food</h3>
              <p>Discover a variety of dishes made with fresh ingredients and authentic recipes.</p>
            </div>
            <div className="card">
              <FaLeaf className="icon" />
              <h3>Eco-Friendly</h3>
              <p>We care for the planet and ensure sustainable practices in our kitchen.</p>
            </div>
            <div className="card">
              <FaSmile className="icon" />
              <h3>Exceptional Service</h3>
              <p>Our team is dedicated to providing you with a delightful dining experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
