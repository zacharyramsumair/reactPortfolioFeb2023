import {motion} from "framer-motion"

export default function NavLinks(props) {

    let animateFrom = {opacity:0, y:"-2em"}
    let animateTo = {opacity:1, y:0}

	return (
		<>
			<motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.05}}
            onClick={() => props.isMobile && props.closeMobileMenu() }>
				<a href="/#intro">Intro</a>
			</motion.li>

			<motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
				<a href="/#featured">Featured</a>
			</motion.li>

			<motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
				<a href="/#recent">Recent</a>
			</motion.li>
			<motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay:0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()} >
				<a href="/#skills">Skills</a>
			</motion.li>
		</>
	);
}
