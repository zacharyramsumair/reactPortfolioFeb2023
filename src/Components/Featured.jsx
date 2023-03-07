import Project from "./Project";

import tenziesImage from "../assets/tenziesImage.png";
import quizzicalImage from "../assets/quizzicalImage.png";
import artGallery1 from "../assets/artGallery1.jpg";
import etchASketch from "../assets/etchASketch.png";
import rockPaperScissors from "../assets/rockPaperScissors.png";


export default function Featured() {
	
	return (
		<section className="featuredSection">
			<h2 className="section-header"> Featured Projects</h2>
			<div className="featured" >
				<Project
					title="Trivia Quiz (Quizzical)"
					image={quizzicalImage}
					technologies={["React", "HTML", "CSS", "Javascript", "API"]}
					description="Test your Trivia knowledge. Built using React, useState, useEffect and OTDB API."
					link="https://zachary-quizzical.netlify.app/"
				/>

				<Project
					title="Tenzies Game"
					image={tenziesImage}
					technologies={["React", "HTML", "CSS", "Javascript"]}
					description="Roll until all dice are the same. Built using React, useState, useEffect and localStorage."
					link="https://zachary-tenzies.netlify.app/"
				/>

				<Project
					title="Art Galleria Slideshow"
					image={artGallery1}
					technologies={["NodeJS", "Express", "HTML", "CSS", "Javascript"]}
					description="View famous artpieces individually or for more information watch the SlideShow Presentation."
					link="https://galleriatry3.onrender.com"
				/>

				<Project
					title="Etch-a-Sketch"
					image={etchASketch}
					technologies={["HTML", "CSS", "Javascript"]}
					description="Draw on the canvas. Change the canvas size, choose your color."
					link="https://zacharyramsumair.github.io/Odin-Etch-a-Sketch/"
				/>

				<Project
					title="Man VS AI (Rock Paper Scissors)"
					image={rockPaperScissors}
					technologies={["HTML", "CSS", "Javascript"]}
					description="Save the world from destruction by defeating the  AI Bot in a game of Rock Paper Scissors (first to 5)"
					link="https://zacharyramsumair.github.io/odin-rockPaperScissors/"
				/>
			</div>
			<hr />
		</section>
	);
}
