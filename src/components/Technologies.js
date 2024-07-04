"use client";
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { technologiesData } from "@/data/technologiesData";

export const Technologies = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "3em", textTransform: "uppercase" }}>
        Technologies
      </Typography>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", padding: "1em" }}
        className="technologies-container"
      >
        {technologiesData.map((technologie) => (
          <Box
            key={technologie.technologie}
            sx={{ display: "flex", alignItems: "center", margin: "10px" }}
          >
            <Box sx={{ width: "30px" }}>{technologie.icon}</Box>
            <Typography sx={{ margin: " 0 15px" }}>
              {technologie.technologie}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
