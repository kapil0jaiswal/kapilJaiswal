import { Card } from "react-bootstrap";
import './Skill.css';

export default function Skill({ Icon, Title }) {
  return (
    <Card className="skill-card">
      <div className="icon-container">
      <Icon className='iconsSkill' size={60}/>
      </div>
      <h4 style={{color : 'var(--primary-text)'}} className="skill-title"> {Title}</h4>
    </Card>
  );
}
