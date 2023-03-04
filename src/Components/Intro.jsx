
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import jquery from "../assets/jquery.png"
import react from "../assets/react.png"

export default function Intro() {
    return (
      <section className="intro">
    <h1>Hi, I'm Zachary.</h1>
    <br />
    <p>A Frontend Developer based in Trinidad & Tobago</p>
    <p>Let's build your future together</p>
    <div className="mainSkills">
      <ul>
        <li className="mainSkill">
          <img src={html} alt="html logo"  className="mainSkill-img"/>
        </li>

        <li className="mainSkill">
          <img src={javascript} alt="javascript logo"  className="mainSkill-img"/>
        </li>

        <li className="mainSkill">
          <img src={jquery} alt="jquery logo"  className="mainSkill-img"/>
        </li>
        
        <li className="mainSkill">
          <img src={react} alt="react logo"  className="mainSkill-img"/>
        </li>
       
       
      </ul>
    </div>
      </section>
    );
  }
  
  