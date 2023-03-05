import Skill from "./Skill"

import html from "../assets/html.png"
import bootstrap from "../assets/bootstrap.png"
import flask from "../assets/flask.png"
import git from "../assets/git.png"
import javascript from "../assets/javascript.png"
import jquery from "../assets/jquery.png"
import mongodb from "../assets/mongodb.png"
import node from "../assets/node.png"
import python from "../assets/python.png"
import react from "../assets/react.png"
import sass from "../assets/sass.svg"
import sqllite from "../assets/sqllite.png"
import tailwind from "../assets/tailwind.png"
import responsive from "../assets/responsive.png"
import devTools from "../assets/devTools.png"
import gsap from "../assets/gsap.png"


export default function Skills() {
    return (
      <section className="skillsSection">
    
      <h2 className="section-header">Skills Acquired</h2>
      <div className="skillsGrid">
     <Skill image={html} name="HTML5"/>
     <Skill image={bootstrap} name="Bootstrap"/>
     <Skill image={flask} name="Flask"/>
     <Skill image={git} name="Git"/>
     <Skill image={javascript} name="Javascript"/>
     <Skill image={jquery} name="jQuery"/>
     <Skill image={mongodb} name="MongoDB"/>
     <Skill image={node} name="Node JS"/>
     <Skill image={responsive} name="Responsive Design"/>
     <Skill image={devTools} name="Developer Tools"/>
     <Skill image={python} name="Python"/>
     <Skill image={react} name="React"/>
     <Skill image={sass} name="SASS/SCSS"/>
     <Skill image={sqllite} name="SQL lite"/>
     <Skill image={tailwind} name="Tailwind CSS"/>
     <Skill image={gsap} name="GSAP"/>
 


     {/* bootstrap, tailwind, react css, havascript, python,jquery sass, scss, git, express, node, mongo, flask, sql , mysql, sqlite*/}

      </div>
      </section>
    );
  }
  
  