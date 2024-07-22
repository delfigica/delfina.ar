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
      tags: ["landing-page", "next-js", "css"],
    }
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
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
};
