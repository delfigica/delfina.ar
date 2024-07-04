"use client";
import React from "react";
import { Box, Chip, useMediaQuery, useTheme } from "@mui/material";
import "../app/globals.css";

export const Navbar = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        padding: "1em 3em",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
      }}
      className="navbar-responsive"
    >
      <Box>
        <a href="/">
          <Chip
            label="delfina.ar"
            sx={{
              padding: "1em",
              fontWeight: "600",
              backgroundColor: "#000",
              color: "white",
              transition: "1s",
              "&:hover": {
                color: "rgba(0, 0, 0, 0.87)",
              },
            }}
            clickable
          />
        </a>
      </Box>
      <Box
        sx={
          laptop
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1em 2em",
                borderRadius: "25px",
                width: "300px",
                border: "1px solid rgba(0, 0, 0, 0.87)",
              }
            : {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1em 1em",
                borderRadius: "25px",
                width: "250px",
                border: "1px solid rgba(0, 0, 0, 0.87)",
              }
        }
      >
        <a href="https://github.com/delfigica" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/delfina-ca%C3%B1as-459b6320b/"
          target="_blank"
        >
          Linkedin
        </a>
        <a href="/contact">Contact</a>
      </Box>
    </Box>
  );
};
