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
  ];
  return (
    <Box
      sx={{
        margin: '20px 0px'
      }}
    >
      <Typography sx={{ fontSize: "3em", textTransform: "uppercase" }}>
        Projects
      </Typography>
      <Box>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
        {/* <Card elevation={3} sx={{ maxWidth: "420px" }}>
          <Box></Box>
          <Box sx={{ padding: "1em" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{ fontSize: "1.6em", textTransform: "uppercase" }}
              >
                Talk right
              </Typography>
              <Box>
                <a >
                  <LanguageIcon sx={{ cursor: "pointer", fontSize: '1.8em', margin: '0px 10px' }} />
                </a>
                <a>
                  <GitHubIcon sx={{ cursor: "pointer", fontSize: '1.8em'  }} />
                </a>
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginLeft: "-3px" }}>
              <Chip label="React" sx={{ margin: "3px" }} />
              <Chip label="Material UI" sx={{ margin: "3px" }} />
              <Chip label="API rest" sx={{ margin: "3px" }} />
            </Box>
            <Typography sx={{ margin: "10px 0px" }}>
              A simple app to practice the pronunciation of English words, It
              contains an interactive card which shows different words, which
              are stored in a JSON, shows their pronunciation and translation.
              In addition, the application makes requests to the "dictionaryapi"
              API, if it gives a response, the application allows you to listen
              to the pronunciation.
            </Typography>
          </Box>
        </Card> */}
      </Box>
    </Box>
  );
};
