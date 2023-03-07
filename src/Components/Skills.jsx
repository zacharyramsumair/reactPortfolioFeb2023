import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";


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

  const { ref, inView } = useInView({
    threshold: 0.2, // adjust this value as needed
  });

  let [rendered , setRendered] = useState(false)

  const animation = useAnimation();

    useEffect(() => {
    if (inView) {
      setRendered(true)
      animation.start(() => ({
        opacity: 1,
        transition: { duration: 0.4 },
      }));
    } else if(!inView && rendered===false) {
      animation.start(() => ({ opacity: 0 }));
    }
  }, [inView,animation,rendered]);

  


  const skills = [
    {image:html,  name:"HTML5"},
     {image:bootstrap,  name:"Bootstrap"},
     {image:flask,  name:"Flask"},
     {image:git,  name:"Git"},
     {image:javascript,  name:"Javascript"},
     {image:jquery,  name:"jQuery"},
     {image:mongodb,  name:"MongoDB"},
     {image:node,  name:"Node JS"},
     {image:responsive,  name:"Responsive Design"},
     {image:devTools,  name:"Developer Tools"},
     {image:python,  name:"Python"},
     {image:react,  name:"React"},
     {image:sass,  name:"SASS/SCSS"},
     {image:sqllite,  name:"SQL lite"},
     {image:tailwind,  name:"Tailwind CSS"},
     {image:gsap , name:"GSAP"},
  ];


  
  
  return (
    <section className="skillsSection">
      <h2 className="section-header">Skills Acquired</h2>
      <div className="skillsGrid" ref={ref}>
        {skills.map((skill, index) => (
          <Skill
            key={skill.name}
            image={skill.image}
            name={skill.name}
            custom={index}
            
            animate={{
              opacity: 1,
              transition: { duration: 0.4 },
            }}
            inView={inView}
            initial={{ opacity: 0 }}

            index={index}
          />
        ))}
      </div>
    </section>
  );
}