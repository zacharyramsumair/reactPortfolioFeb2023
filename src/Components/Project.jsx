import Technology from "./Technology";
export default function Project(props) {
	let technologies = props.technologies.map((technology) => {
		return <Technology key={technology} technology={technology} />;
	});

	return (
		<div className="project" onClick={() => window.open(props.link, '_blank')}>
		{/* <div className="project" onClick={() => window.location.href= props.link}> */}
			<img src={props.image} alt="" className="projectImage" />
            <div className="technologies">
			{technologies}
            </div>
            <div className="text">
            <h3 className="projectTitle">{props.title}</h3>
            <p className="projectDescription">{props.description}</p>
            </div>
           
		</div>
	);
}
