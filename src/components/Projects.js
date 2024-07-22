import React from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projectsData = [
    {
      id: "talk-right",
      title: "Talk Right",
      description:
        "A simple app to practice the pronunciation of English words, It contains an interactive card which shows different words, which are stored in a JSON, shows their pronunciation and translation. In addition, the application makes requests to the 'dictionaryapi' API, if it gives a response, the application allows you to listen to the pronunciation.",
      url: "https://delfigica.github.io/talk-right/",
      github: "https://github.com/delfigica/talk-right",
      tags: ["react", "material-ui", "api-rest"],
    },
    {
      id: "age-calculator",
      title: "Age calculator",
      description:
        "This application, developed with Next.js, allows you to calculate the number of days, months, and years that have passed since a specific date. The design of the application is based on a template provided by Frontend Mentor and is adapted for mobile viewing.",
      url: "https://delfigica.github.io/age-calculator-react-app/",
      github: "https://github.com/delfigica/age-calculator-react-app",
      tags: ["react", "next-js", "css"],
    },
    ,
    {
      id: "rock-paper-scissors",
      title: "Rock Paper Scissors",
      description:
        "This is a classic game of rock, paper, and scissors, where the user must choose from the three available options while the computer chooses randomly from the remaining two options. The graphical interface was designed by Frontend Mentor, and the game was developed using ReactJS",
      url: "https://delfigica.github.io/rock-paper-scissors/",
      github: "https://github.com/delfigica/rock-paper-scissors",
      tags: ["reactjs", "game"],
    },
    {
      id: "blogr-landing-page",
      title: "Blogr",
      description:
        "This project is a landing page created with NextJs and CSS, and the design is based on a page from Frontend Mentor. The landing page is designed to showcase a product or service, and it has been developed to be fully responsive on all devices.",
      url: "https://delfigica.github.io/blogr-landing-page/",
      github: "https://github.com/delfigica/blogr-landing-page",
      tags: ["landing-page", "next-js", "css"],
    },
    {
      id: "loopstudios-landing-page",
      title: "Loopstudios",
      description:
        "This project is a landing page created with HTML and CSS, and the design is based on a page from Frontend Mentor. The landing page is designed to showcase a product or service, and it has been developed to be fully responsive on all devices.",
      url: "https://delfigica.github.io/loopstudios-landing-page",
      github: "https://github.com/delfigica/loopstudios-landing-page",
      tags: ["landing-page", "html", "css"],
    },
    {
      id: "multi-step-form",
      title: "Multi Step Form",
      description:
        "Multi-Step Form is a React application featuring a 4-step form with dynamic view changes. Built with Material UI and based on a Frontend Mentor design, it provides a smooth and modern user experience.",
      url: "https://delfigica.github.io/multi-step-form",
      github: "https://github.com/delfigica/multi-step-form",
      tags: ["reactJs", "material-ui"],
    },
    {
      id: "Clear-sky",
      title: "Clear Sky",
      description:
        "Clear Sky is an Angular app that provides weather information for multiple cities using the OpenWeatherMap API. With a custom design, it offers an intuitive interface for checking current weather conditions and forecasts.",
      url: "https://delfigica.github.io/Clear-sky",
      github: "https://github.com/delfigica/Clear-sky",
      tags: ["angular", "rest-api"],
    },
    {
      id: "advice-generator-app",
      title: "Advice Generator App",
      description:
        "Advice Generator App is a React application that fetches and displays random quotes from the (https://api.adviceslip.com/). With a Frontend Mentor design, it features a simple and interactive interface for generating new advice quotes.",
      url: "https://delfigica.github.io/advice-generator-app",
      github: "https://github.com/delfigica/advice-generator-app",
      tags: ["react", "rest-api"],
    },
    {
      id: "tip-calculator-app",
      title: "Tip Calculator App",
      description:
        "Tip Calculator App is a React application that calculates the tip and total amount per person based on user input. With a Frontend Mentor design, it allows users to select from predefined percentages or enter a custom percentage for tip calculation.",
      url: "https://delfigica.github.io/tip-calculator-app",
      github: "https://github.com/delfigica/tip-calculator-app",
      tags: ["react", "css"],
    },
  ];
  return (
    <Box
      sx={{
        margin: "20px 0px",
      }}
    >
      <Typography sx={{ fontSize: "3em", textTransform: "uppercase" }}>
        Projects
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
};
