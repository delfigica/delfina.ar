"use client";
import React, { useState } from "react";

//TRANSLATE
import "@/app/i18n";
import { useTranslation } from "next-i18next";

import { ProjectCard } from "./ProjectCard";
import { MainProjectCard } from "./MainProjectCard";

//STYLE
import {
  Box,
  Button,
  Card,
  Chip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

//IMAGES
import crosstime from "@/assets/projects/crosstime.png";
import bentogrid from "@/assets/projects/bento-grid.png";
import talkright from "@/assets/projects/talk-right.png";
import agecalculator from "@/assets/projects/age-calculator-react-app.png";
import rockpaperscissors from "@/assets/projects/rock-paper-scissors.png";
import blogr from "@/assets/projects/blogr-landing-page.png";
import loopstudios from "@/assets/projects/loopstudios-landing-page.png";
import multisteps from "@/assets/projects/multi-step-form.png";
import clearsky from "@/assets/projects/clear-sky.png";
import advicegenerator from "@/assets/projects/adivice-generator-app.png";
import tipcalculator from "@/assets/projects/tip-calculator-app.png";
export const Projects = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: "crosstime",
      title: "Crosstime",
      description:
        "CrossFit and functional training timers built with Next.js + Material UI. Includes CAP, OTM, 1:1, Round+Rest, AMRAP, and TABATA timers with customizable settings, 10-second starters, automatic round progression, and clean UI components.",
      url: "https://delfigica.github.io/crosstime/",
      github: "https://github.com/delfigica/crosstime",
      tags: ["nextjs", "material-ui", "router"],
      image: crosstime,
    },
    {
      id: "bento-grid",
      title: "Bento Grid",
      description:
        "Responsive implementation of a Frontend Mentor challenge using semantic HTML and Tailwind CSS. Built mobile-first with CSS Grid/Flexbox, accessible markup, and pixel-accurate layout.",
      url: "https://delfigica.github.io/brento-grid/",
      github: "https://github.com/delfigica/bento-grid",
      tags: ["html5", "responsive-design", "tailwindcss"],
      image: bentogrid,
    },
    {
      id: "talk-right",
      title: "Talk Right",
      description:
        "A simple app to practice the pronunciation of English words, It contains an interactive card which shows different words, which are stored in a JSON, shows their pronunciation and translation. In addition, the application makes requests to the 'dictionaryapi' API, if it gives a response, the application allows you to listen to the pronunciation.",
      url: "https://delfigica.github.io/talk-right/",
      github: "https://github.com/delfigica/talk-right",
      tags: ["react", "material-ui", "api-rest"],
      image: talkright,
    },
    {
      id: "age-calculator",
      title: "Age calculator",
      description:
        "This application, developed with Next.js, allows you to calculate the number of days, months, and years that have passed since a specific date. The design of the application is based on a template provided by Frontend Mentor and is adapted for mobile viewing.",
      url: "https://delfigica.github.io/age-calculator-react-app/",
      github: "https://github.com/delfigica/age-calculator-react-app",
      tags: ["react", "next-js", "css"],
      image: agecalculator,
    },
    {
      id: "rock-paper-scissors",
      title: "Rock Paper Scissors",
      description:
        "This is a classic game of rock, paper, and scissors, where the user must choose from the three available options while the computer chooses randomly from the remaining two options. The graphical interface was designed by Frontend Mentor, and the game was developed using ReactJS",
      url: "https://delfigica.github.io/rock-paper-scissors/",
      github: "https://github.com/delfigica/rock-paper-scissors",
      tags: ["reactjs", "game"],
      image: rockpaperscissors,
    },
    {
      id: "blogr-landing-page",
      title: "Blogr",
      description:
        "This project is a landing page created with NextJs and CSS, and the design is based on a page from Frontend Mentor. The landing page is designed to showcase a product or service, and it has been developed to be fully responsive on all devices.",
      url: "https://delfigica.github.io/blogr-landing-page/",
      github: "https://github.com/delfigica/blogr-landing-page",
      tags: ["landing-page", "next-js", "css"],
      image: blogr,
    },
    {
      id: "loopstudios-landing-page",
      title: "Loopstudios",
      description:
        "This project is a landing page created with HTML and CSS, and the design is based on a page from Frontend Mentor. The landing page is designed to showcase a product or service, and it has been developed to be fully responsive on all devices.",
      url: "https://delfigica.github.io/loopstudios-landing-page",
      github: "https://github.com/delfigica/loopstudios-landing-page",
      tags: ["landing-page", "html", "css"],
      image: loopstudios,
    },
    {
      id: "multi-step-form",
      title: "Multi Step Form",
      description:
        "Multi-Step Form is a React application featuring a 4-step form with dynamic view changes. Built with Material UI and based on a Frontend Mentor design, it provides a smooth and modern user experience.",
      url: "https://delfigica.github.io/multi-step-form",
      github: "https://github.com/delfigica/multi-step-form",
      tags: ["reactJs", "material-ui"],
      image: multisteps,
    },
    {
      id: "Clear-sky",
      title: "Clear Sky",
      description:
        "Clear Sky is an Angular app that provides weather information for multiple cities using the OpenWeatherMap API. With a custom design, it offers an intuitive interface for checking current weather conditions and forecasts.",
      url: "https://delfigica.github.io/Clear-Sky",
      github: "https://github.com/delfigica/Clear-Sky",
      tags: ["angular", "rest-api"],
      image: clearsky,
    },
    {
      id: "advice-generator-app",
      title: "Advice Generator App",
      description:
        "Advice Generator App is a React application that fetches and displays random quotes from the (https://api.adviceslip.com/). With a Frontend Mentor design, it features a simple and interactive interface for generating new advice quotes.",
      url: "https://delfigica.github.io/advice-generator-app",
      github: "https://github.com/delfigica/advice-generator-app",
      tags: ["react", "rest-api"],
      image: advicegenerator,
    },
    {
      id: "tip-calculator-app",
      title: "Tip Calculator App",
      description:
        "Tip Calculator App is a React application that calculates the tip and total amount per person based on user input. With a Frontend Mentor design, it allows users to select from predefined percentages or enter a custom percentage for tip calculation.",
      url: "https://delfigica.github.io/tip-calculator-app",
      github: "https://github.com/delfigica/tip-calculator-app",
      tags: ["react", "css"],
      image: tipcalculator,
    },
  ];

  const [mainProject, setMainProject] = useState(projectsData[0]);
  const [otherProjects, setOtherProjects] = useState(projectsData.slice(1, 3));

  const handleNextProject = () => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === mainProject.id
    );

    const nextMainIndex = (currentIndex + 1) % projectsData.length;
    const other1Index = (nextMainIndex + 1) % projectsData.length;
    const other2Index = (nextMainIndex + 2) % projectsData.length;

    setMainProject(projectsData[nextMainIndex]);
    setOtherProjects([projectsData[other1Index], projectsData[other2Index]]);
  };

  const handlePrevProject = () => {
    const currentIndex = projectsData.findIndex(
      (project) => project.id === mainProject.id
    );

    const prevMainIndex =
      (currentIndex - 1 + projectsData.length) % projectsData.length;
    const other1Index = (prevMainIndex + 1) % projectsData.length;
    const other2Index = (prevMainIndex + 2) % projectsData.length;

    setMainProject(projectsData[prevMainIndex]);
    setOtherProjects([projectsData[other1Index], projectsData[other2Index]]);
  };

  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        margin: "20px 0px 0px 0px",
        padding: "2em 0",
      }}
    >
      <Typography
        sx={{ fontSize: "3em", textTransform: "uppercase", margin: "10px 0px" }}
      >
        {t("project.title")}
      </Typography>
      <Box sx={laptop ? { display: "flex" } : {display: 'flex', flexWrap: 'wrap'}}>
        <MainProjectCard project={mainProject} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            marginTop: "-20px",
            height: "100%",
          }}
        >
          {otherProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
          <Box>
            <Button sx={{ margin: "0px 5px" }} onClick={handlePrevProject}>
              Back
            </Button>
            <Button sx={{ margin: "0px 5px" }} onClick={handleNextProject}>
              See More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
