import Technology from "./Technology";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Project(props) {
	let technologies = props.technologies.map((technology) => {
		return <Technology key={technology} technology={technology} />;
	});

	// const { ref, inView } = useInView({
	// 	/* Optional options */
	// 	threshold: 0.2,
	// });

	const { ref, inView } = useInView({
		threshold: 0.2,
	  });
	  
	  let [rendered , setRendered] = useState(false)


	const animation = useAnimation();

	useEffect(() => {
		console.log("use effect hook, inView = ", inView);
		if (inView) {
			setRendered(true)
			animation.start({
				x: 0,
				opacity:1,
				transition: {
					type: "spring",
					duration: 0.8,
					bounce: 0.25,
					ease: "easeOut",
					delay:0.1
				},
			});
		}
		if (!inView && rendered===false) {
			animation.start({ x: "-100vw" , opacity:0 });
		}
	}, [inView , animation, rendered]);



	return (
		<motion.div ref={ref} className="project" onClick={() => window.open(props.link, '_blank')} >
		{/* <div className="project" onClick={() => window.location.href= props.link}> */}

		<motion.div animate={animation}>
		<img src={props.image} alt="" className="projectImage" />
            <div className="technologies">
			{technologies}
            </div>
            <div className="text">
            <h3 className="projectTitle">{props.title}</h3>
            <p className="projectDescription">{props.description}</p>
            </div>
		</motion.div>
			
           
		</motion.div>
	);
}
