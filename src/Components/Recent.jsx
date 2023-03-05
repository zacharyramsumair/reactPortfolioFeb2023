// import React , {useEffect} from "react"
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export default function Recent() {
//   useEffect(() => {
//     AOS.init({duration:1000});
//   }, [])
//     return (
//       <div className="recent" data-aos="fade-up">
//     Recent
//       </div>
//     );
//   }

import { useState } from "react";

import Project from "./Project";

import tenziesImage from "../assets/tenziesImage.png";
import quizzicalImage from "../assets/quizzicalImage.png";
import artGallery1 from "../assets/artGallery1.jpg";
import interactiveCard from "../assets/interactiveCard.jpg";
import FormDifferentColorMode from "../assets/formDifferentColorMode.png";
import svgMarathon from "../assets/svgMarathon.png";
import etchASketch from "../assets/etchASketch.png";
import house from "../assets/house.png";
import odinLandingPage from "../assets/odinLandingPage.png";
import rockPaperScissors from "../assets/rockPaperScissors.png";
import singlePageDesignPortfolio from "../assets/singlePageDesignPortfolio.png";
import skilledLearningPage from "../assets/skilledLearningPage.png";
import travelJournal from "../assets/travelJournal.png";



export default function Recent() {


	let [recentShown, setRecentShown] = useState(4)

	let showMore = () =>{
		setRecentShown(prevShown => prevShown + 4)
	}

	let allProjects = [
		<Project
			title="Man VS AI (Rock Paper Scissors)"
			key="Man VS AI (Rock Paper Scissors)"
			image={rockPaperScissors}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Save the world from destruction by defeating the  AI Bot in a game of Rock Paper Scissors (first to 5)"
			link="https://zacharyramsumair.github.io/odin-rockPaperScissors/"
		/>,
		<Project
			title="SVG Animations"
			key="SVG Animations"
			image={svgMarathon}
			technologies={["HTML", "CSS", "Javascript", "GSAP"]}
			description="Practising animating SVGs using GSAP"
			link="https://zacharyramsumair.github.io/svgMarathon/emptyHouse.html"
		/>,
		<Project
			title="Etch-a-Sketch"
			key="Etch-a-Sketch"
			image={etchASketch}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Draw on the canvas. Change the canvas size, choose your color."
			link="https://zacharyramsumair.github.io/Odin-Etch-a-Sketch/"
		/>,

		<Project
			title="Design your Dream House"
			key="Design your Dream House"
			image={house}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Design your dream house and calculate it's approximate cost."
			link="https://zacharyramsumair.github.io/build-a-house-svg/"
		/>,

		<Project
			title="Trivia Quiz (Quizzical)"
			key="Trivia Quiz (Quizzical)"
			image={quizzicalImage}
			technologies={["React", "HTML", "CSS", "Javascript", "API"]}
			description="Test your Trivia knowledge. Built using React, useState, useEffect and OTDB API."
			link="https://zachary-quizzical.netlify.app/"
		/>,

		<Project
			title="Tenzies Game"
			key="Tenzies Game"
			image={tenziesImage}
			technologies={["React", "HTML", "CSS", "Javascript"]}
			description="Roll until all dice are the same. Built using React, useState, useEffect and localStorage."
			link="https://zachary-tenzies.netlify.app/"
		/>,
		<Project
			title="Art Galleria Slideshow"
			key="Art Galleria Slideshow"
			image={artGallery1}
			technologies={["NodeJS", "Express", "HTML", "CSS", "Javascript"]}
			description="View famous artpieces individually or for more information watch the SlideShow Presentation."
			link="https://galleriatry3.onrender.com"
		/>,

		<Project
			title="Interactive card details form"
			key="Interactive card details form"
			image={interactiveCard}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Create a fake Credit Card using this form."
			link="https://zacharyramsumair.github.io/Interactive-card-details-form/"
		/>,
		<Project
			title="Travel Journal"
			key="Travel Journal"
			image={travelJournal}
			technologies={["HTML", "CSS", "Javascript", "React"]}
			description="Beginner React App using components. Made from based on the Scrimba Course Design."
			link="https://zachary-react-traveljournal.netlify.app/"
		/>,
		<Project
			title="Different Color Modes (Form)"
			key="Different Color Modes (Form)"
			image={FormDifferentColorMode}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Switch the color mode using the notch on the top of the page"
			link="https://zacharyramsumair.github.io/FormDifferentColorMode/"
		/>,

		<Project
			title="La La Land Movie Site Landing Page"
			key="La La Land Movie Site Landing Page"
			image={odinLandingPage}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Landing page showcasing one of my favourite movies, La La Land, created using Flexbox."
			link="https://zacharyramsumair.github.io/odin-landingPage/"
		/>,

		<Project
			title="Single-page design portfolio"
			key="Single-page design portfolio"
			image={singlePageDesignPortfolio}
			technologies={["HTML", "CSS", "Javascript"]}
			description="Showcasing the use of CSS Grid and absolute positioning. Practising making websites look exactly like the design."
			link="https://zacharyramsumair.github.io/Single-page-design-portfolio/"
		/>,

		<Project
			title="Skilled e-learning landing page"
			key="Skilled e-learning landing page"
			image={skilledLearningPage}
			technologies={["HTML", "CSS"]}
			description="Showcasing the use of CSS Grid and absolute positioning. Practising making websites look exactly like the design."
			link="https://zacharyramsumair.github.io/Skilled-e-learning-landing-page/src/index.html"
		/>,
	];




	return (
		<section className="RecentSection">
			<h2 className="section-header"> Recent Projects</h2>
			<div className="recent">
			{allProjects.slice(0, recentShown)}
			{/* {allProjects} */}
			</div>

      {recentShown < allProjects.length && (
        <button className="showMoreButton" onClick={showMore}>Show More</button>
      )}



			<hr />
		</section>
	);
}
