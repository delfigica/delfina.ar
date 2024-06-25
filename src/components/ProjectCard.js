import React from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export const ProjectCard = ({ project }) => {
  return (
    <Card elevation={3} sx={{ maxWidth: "420px" }}>
      <Box></Box>
      <Box sx={{ padding: "1em" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "1.6em", textTransform: "uppercase" }}>
            {project?.title}
          </Typography>
          <Box>
            <a href={project.url} target="_blank">
              <LanguageIcon
                sx={{
                  cursor: "pointer",
                  fontSize: "1.8em",
                  margin: "0px 10px",
                }}
              />
            </a>
            <a href={project.github} target="_blank">
              <GitHubIcon sx={{ cursor: "pointer", fontSize: "1.8em" }} />
            </a>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", marginLeft: "-3px" }}>
          {project.tags.map((tag) => (
            <Chip label={tag} sx={{ margin: "3px", fontWeight: '600' }} key={tag} />
          ))}
        </Box>
        <Typography sx={{ margin: "10px 0px" }}>
          {project.description}
        </Typography>
      </Box>
    </Card>
  );
};
