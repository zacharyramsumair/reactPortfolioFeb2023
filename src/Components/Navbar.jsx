

export default function Navbar(props) {
	let styles = ""
	if(props.introShown){
		styles ="clearNav"
	}else{
		styles="coloredNav"
	}


	return (
		<nav  className={styles} >
		{/* <nav  className="clearNav" > */}
			<div className="brand">
				<span className="purple-highlight">Z</span>achary
				<span className="purple-highlight"> R</span>amsumair
			</div>
		</nav>
	);
}
