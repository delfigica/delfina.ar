"use client";
import React from "react";
import "../app/globals.css";
import { Box, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";

export const Banner = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={
            laptop
              ? {
                  fontSize: "5em",
                  textTransform: "uppercase",
                  display: "inline",
                }
              : {
                  textAlign: "center",
                  fontSize: "5em",
                  textTransform: "uppercase",
                  display: "inline",
                }
          }
        >
          Hey, I&apos;m Delfina
        </Typography>
        <Typography sx={{ fontSize: "2.4em" }} className="banner-subtitle">
          Software developer
        </Typography>
        <Box sx={{ margin: "10px 0" }}>
          <a href="https://delfigica.github.io/CV/" target="_blank">
            <Chip
              label="Resume"
              sx={{
                margin: "0 10px",
                fontWeight: "600",
                padding: "10px",
                fontSize: "1em",
              }}
              clickable
            />
          </a>
          <a href="/contact">
            <Chip
              label="Contact me"
              variant="outlined"
              sx={{
                margin: "0 10px",
                fontWeight: "600",
                padding: "10px",
                fontSize: "1em",
              }}
              clickable
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
