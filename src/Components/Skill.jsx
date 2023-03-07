import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { InView } from "react-intersection-observer";

export default function Skill(props) {
	let [end, setEnd] = useState({});
    let [rendered , setRendered] = useState(false)

	// console.log(props.inView);

	useEffect(() => {
		if (props.inView && rendered ===false) {

            setRendered(true)
			setEnd({
				...props.animate,
				transition: { delay: props.index * 0.15, duration: 0.2 },
			});
		} else if (!props.inView && rendered === false) {
			setEnd(props.initial);
		}
	}, [props.inView, props.animate, props.index, props.initial, rendered]);

	return (
		<motion.div
			className="skill"
			initial={props.initial}
			animate={end}
		>
			<img className="skillImage" src={props.image} alt={props.name} />
			<p>{props.name}</p>
		</motion.div>
	);
}
