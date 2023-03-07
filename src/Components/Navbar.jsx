import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar(props) {
	let styles = "";
	if (props.introShown) {
		styles = "clearNav";
	} else {
		styles = "coloredNav";
	}

	return (
		<nav className={styles}>
			{/* <nav  className={styles} > */}
			<div className="brand">
				<span className="purple-highlight">Z</span>achary
				<span className="purple-highlight"> R</span>amsumair
			</div>
			
			<div className="mainLinks">
			<Navigation />
			<MobileNavigation />
			</div>
		</nav>
	);
}
