import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "3em", textTransform: "uppercase", }}>
        About Me
      </Typography>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: "1.1em",
        //   margin: "auto",
          padding: "1em",
        }}
      >
        My name is María Delfina Cañas, and I am a software developer. Although
        I have the capability to work on both the backend and the frontend, my
        true passion lies in frontend development. I enjoy finding creative
        solutions to the problems I encounter, and I practice this skill both
        inside and outside of coding.
      </Typography>
    </Box>
  );
};
