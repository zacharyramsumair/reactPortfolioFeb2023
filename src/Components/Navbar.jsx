

export default function Navbar(props) {
	let styles = ""
	if(props.introShown){
		styles ="clearNav"
	}else{
		styles="coloredNav"
	}


	return (
		<nav  className={styles} >
		{/* <nav  className={styles} > */}
			<div className="brand">
				<span className="purple-highlight">Z</span>achary
				<span className="purple-highlight"> R</span>amsumair
			</div>

			<div>
				<ul>
					<li>
						<a href="/#intro">Intro</a>
					</li>
					<li>
						<a href="/#featured">Featured</a>
					</li>
					<li>
						<a href="/#recent">Recent</a>
					</li>
					<li>
						<a href="/#skills">Skills</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
