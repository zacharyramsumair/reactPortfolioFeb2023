import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import react from "../assets/react.png";
import { motion } from "framer-motion";

export default function Intro() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delay: 2,
				staggerChildren: 0.5,
        duration:0.3
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<section className="intro">
			<motion.h1
				initial={{ y: "2em", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3 }}
			>
				Hi, I'm Zachary.
			</motion.h1>
			<br />
			<motion.p
				initial={{ y: "2em", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				A Frontend Developer based in Trinidad & Tobago
			</motion.p>
			<motion.p
				initial={{ y: "2em", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.3, delay: 1 }}
			>
				Let's build the future together
			</motion.p>
			<br />
			<motion.p
				initial={{ x: "100vw", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, delay: 1.3 }}
			>
				ramsumairzachary@gmail.com
			</motion.p>

			<div className="mainSkills">
				<motion.ul variants={container} initial="hidden" animate="show">

					<motion.li variants={item} className="mainSkill">
						<img src={html} alt="html logo" className="mainSkill-img" />
					</motion.li>

					<motion.li variants={item} className="mainSkill">
						<img
							src={javascript}
							alt="javascript logo"
							className="mainSkill-img"
						/>
					</motion.li>

					<motion.li variants={item} className="mainSkill">
						<img
							src={jquery}
							alt="jquery logo"
							className="mainSkill-img"
						/>
					</motion.li>

					<motion.li variants={item} className="mainSkill">
						<img src={react} alt="react logo" className="mainSkill-img" />
					</motion.li>

				</motion.ul>
			</div>
		</section>
	);
}
