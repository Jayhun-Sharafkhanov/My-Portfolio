import React from "react";
import IMG1 from "../../assets/bakupack.png";
import IMG2 from "../../assets/FastFoodWebsite.png";
import IMG3 from "../../assets/JS-multiGame.png";
import IMG4 from "../../assets/3d-solar-system.png";
import IMG5 from "../../assets/Quiz-app.png";
import IMG6 from "../../assets/netflix-clone.png";

import "./portfolio.css";
//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Baku Pack Project",
      img: IMG1,
      description:
      "A website of a company that has the capacity to manufacture all types of carton and packaging products.",
      technologies: "React.js | Typescript",
      link: "https://baku-pack-react.vercel.app/",
      github: "https://github.com/Jayhun-Sharafkhanov/baku-pack-react",
    },
    {
      id: 2,
      title: "3D Solar System",
      img: IMG4,
      description:
        "A planetary project. In this project, 2D and 3D views of how far each planet is from the Sun. And of course the dimensions..",
      technologies: "HTML| CSS",
      link: "https://3-d-solar-system-jayhun-sharafkhanov.vercel.app/",
      github: "https://github.com/Jayhun-Sharafkhanov/3D-SolarSystem",
    },
    {
      id: 3,
      title: "GRILL Steak House",
      img: IMG2,
      description: "Grill House Restoran Website",
      technologies: "HTML | SCSS",
      link: "https://fastfood-website.vercel.app/#",
      github: "https://github.com/Jayhun-Sharafkhanov/GRILL-House-Restoran",
    },
    {
      id: 4,
      title: "Multiplication Game",
      img: IMG3,
      description:
        "A simple math game.",
      technologies: "Html | CSS | JavaScript ",
      link: "https://jayhun-sharafkhanov.github.io/Multiplication-Game_JS/",
      github: "https://github.com/Jayhun-Sharafkhanov/Multiplication-Game_JS",
    },
    {
      id: 5,
      title: "Quiz APP",
      img: IMG5,
      description:
        "A simple Quiz APP",
      technologies: "Html | CSS | Javascript",
      link: "https://quiz-app-eight-black.vercel.app/",
      github: "https://github.com/Jayhun-Sharafkhanov/Quiz-app",
    },
    {
      id: 6,
      title: "Netflix Clone Website",
      img: IMG6,
      description:
        "Netflix Clone Landing Page",
      technologies: "Html | CSS | Javascript",
      link: "https://netflix-clone-git-main-jayhun-sharafkhanov.vercel.app/",
      github: "https://github.com/Jayhun-Sharafkhanov/Netflix_clone",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
