import React from 'react';
import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const projects = [
  { name: 'Song Player', image: '/song-player.jpeg', github: 'https://github.com/Atharv-2004/song-player' },
  { name: 'TicTacToe', image: '/ticTacToe.jpeg', github: 'https://github.com/Atharv-2004/tictactoe' },
  { name: 'Portfolio', image: '/portfolio.jpeg', github: 'https://github.com/Atharv-2004/Portfolio' },
  { name: 'Quiz', image: '/quiz.jpeg', github: 'https://github.com/Atharv-2004/QuizSubmission' },
  { name: 'ParkingLot', image: '/parkingLot.jpeg', github: 'https://github.com/Atharv-2004/ParkingLotSST' },
  { name: 'Room-mate', image: '/chatBot.png', github: 'https://github.com/Atharv-2004/room-mate' }
];

function Projects() {
  return (
    <div id="projects" className="Projects-Container">
      <h2 className="Projects-Heading">Projects</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        transitionTime={500}
        centerMode
        centerSlidePercentage={33.33}
        className="Projects-Carousel"
      >
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
