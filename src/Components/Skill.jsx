
export default function Skill(props) {
    return (
<div className="skill">
    <img className="skillImage" src={props.image} alt={props.name}/>
    <p>{props.name}</p>
</div>
    );
  }
  
  