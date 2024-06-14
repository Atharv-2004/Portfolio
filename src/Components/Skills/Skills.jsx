import React from 'react';
import Rive from '@rive-app/react-canvas';
import './Skills.css';
import CircularProgressBar from './CircularProgressBar/CircularProgressBar';

const skills = [
    { name: 'HTML', percentage: 100, image: '/logos/html.png' },
    { name: 'CSS', percentage: 90, image: '/logos/css.png' },
    { name: 'JavaScript', percentage: 70, image: '/logos/Js.png' },
    { name: 'Java', percentage: 85, image: '/logos/java.png' },
    { name: 'Spring Boot', percentage: 60, image: '/logos/springboot.png' },
    { name: 'React', percentage: 75, image: '/logos/react.png' },
    { name: 'SQL', percentage: 80, image: '/logos/sql.png' },
    { name: 'Python', percentage: 75, image: '/logos/python.png' },
    { name: 'CLI', percentage: 65, image: '/logos/cli.png' },
];

function Skills() {
    return (
        <div id="skills" className="Skills-Container">
            <div className="Rive-container">
                <Rive
                    style={{ width: 600, height: 600 }}
                    src="statue.riv"
                    stateMachines="State Machine 1"
                />
            </div>
            <div className="Skills-List">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="skill-logo"
                        />
                        <CircularProgressBar
                            percentage={skill.percentage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
