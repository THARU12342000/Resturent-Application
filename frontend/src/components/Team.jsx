import teamImage1 from '../assets/11.jpg';
import teamImage2 from '../assets/12.jpg';
import teamImage3 from '../assets/13.jpg';
import teamImage4 from '../assets/14.jpg';
import '../styles/Team.css';

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit dicta, ipsum impedit quam laboriosam quas doloremque quia
            perferendis laborum.
          </p>
        </div>
        <div className="team_container">
          <div className="card">
            <img className="team-img" src={teamImage1} alt="SUSITHA PERERA" />
            <h3>SUSITHA PERERA</h3>
            <p>Founder & Head Chef</p>
          </div>
          <div className="card">
            <img className="team-img" src={teamImage2} alt="KAVINDI KUMARI" />
            <h3>KAVINDI KUMARI</h3>
            <p>Sous Chef</p>
          </div>
          <div className="card">
            <img className="team-img" src={teamImage3} alt="RAMIYA JAYASINGHE" />
            <h3>RAVAN JAYASINGHE</h3>
            <p>Fast Food Chef</p>
          </div>
          <div className="card">
            <img className="team-img" src={teamImage4} alt="CHAMILA GUNAWARDENA" />
            <h3>CHAMARA GUNAWARDENA</h3>
            <p>Senior Chef</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
