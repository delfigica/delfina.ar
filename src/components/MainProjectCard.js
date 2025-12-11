"use client";
import React from "react";

import "@/app/globals.css";
import Image from "next/image";
import { Box, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

export const MainProjectCard = ({ project }) => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={laptop ? { minHeight: "70vh", width: "100%" } : { padding: "0 1em" }}
    >
      <Box
        sx={
          laptop
            ? {
                backgroundImage: `url(${project.image})`,
                width: "400px",
                height: "280px",
                borderRadius: "20px",
              }
            : {
                backgroundImage: `url(${project.image})`,
                width: "100%",
                height: "250px",
                borderRadius: "20px",
              }
        }
      >
        <Image
          src={project.image}
          width={laptop ? 400 : 350}
          height={laptop ? 280 : 250}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "15px",
          }}
          alt={project.id}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5em",
              textTransform: "uppercase",
              margin: "5px 0px",
            }}
          >
            {project.title}
          </Typography>
          <Box>
            <a href={project.url} target="_blank">
              <LanguageIcon
                sx={{
                  cursor: "pointer",
                  fontSize: "1.3em",
                  margin: "0px 10px",
                }}
              />
            </a>
            <a href={project.github} target="_blank">
              <GitHubIcon sx={{ cursor: "pointer", fontSize: "1.3em" }} />
            </a>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", marginLeft: "-3px" }}>
          {project.tags.map((tag) => (
            <Chip
              label={tag}
              sx={{ margin: "3px", fontWeight: "600", padding: "1em .5em" }}
              size="small"
              key={tag}
            />
          ))}
        </Box>
        <Typography sx={{ margin: "10px 0px", fontSize: ".9em" }}>
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
};
