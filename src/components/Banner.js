"use client";
import React, { useEffect, useState } from "react";

//TRANSLATE
import "@/app/i18n"
import { useTranslation } from "next-i18next";

// STYLE
import "@/app/globals.css";
import {
  Box,
  Chip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const Banner = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  const { t } = useTranslation();

  const words = ["website", "software", "agent"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box
        sx={ laptop ? {
          width: "65%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        } : {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h1" sx={laptop ? { fontSize: "5.8em", margin: "10px 0px" } : { fontSize: '3.5em', margin: '10px 0px'}}>
          {t("banner.title", {thing: words[index] })}
        </Typography>
        <hr />
        <Typography sx={{ fontSize: "1.4em", margin: "5px 0px" }}>
          {t("banner.text")}
        </Typography>
        <Box>
          <a href="contact">
            <Chip label={t("banner.btns.contact")} sx={{ cursor: "pointer" }} />
          </a>
          <a href="https://github.com/delfigica">
            <Chip
              label={t("banner.btns.github")}
              sx={{ cursor: "pointer", margin: "0px 10px" }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
