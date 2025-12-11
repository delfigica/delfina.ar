"use client";
import React, { useState } from "react";

// TRANSLATE
import { useTranslation } from "next-i18next";

// STYLE
import {
  Box,
  Button,
  Chip,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../app/globals.css";

//ICONS
import GTranslateIcon from "@mui/icons-material/GTranslate";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
export const Navbar = () => {
  const theme = useTheme();
  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  const { i18n, t } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const handleChangeLanguage = () => {
    if (i18n.language === "en") {
      setLanguage("es");
      i18n.changeLanguage("es");
    } else if (i18n.language === "es") {
      setLanguage("en");
      i18n.changeLanguage("en");
    }
  };

  const colorText = { color: "#0a0b06" };

  return (
    <Box
      sx={
        laptop
          ? {
              padding: "0.5em 3em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              backgroundColor: "#EFF1EF",
              borderBottom: '1px solid rgba(10, 11, 6, 0.12)'
            }
          : {
              padding: "0.5em 1em",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "sticky",
              top: 0,
              backgroundColor: "#EFF1EF",
            }
      }
      className="navbar-responsive"
    >
      <Box>
        <a href="/">
          <Chip
            label="delfina.ar"
            sx={{
              padding: "1em",
              fontWeight: "600",
              backgroundColor: "#0a0b06",
              color: "#EFF1EF",
              transition: "1s",
              "&:hover": {
                backgroundColor: "#DADDD3",
              },
            }}
            clickable
          />
        </a>
      </Box>
      <Box
        sx={
          laptop
            ? { display: "flex", alignItems: "center" }
            : { display: "flex", alignItems: "center" }
        }
      >
        <Box sx={  { margin: '0px 20px' }}> 
          <IconButton onClick={handleChangeLanguage} sx={colorText}>
            <GTranslateIcon />
          </IconButton>
          <a href="https://github.com/delfigica" target="_blank">
            <IconButton sx={colorText}>
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/delfina-ca%C3%B1as-459b6320b/"
            target="_blank"
          >
            <IconButton>
              <LinkedInIcon sx={colorText} />
            </IconButton>
          </a>
        </Box>
        <Link href={"/contact"}>
          <Typography sx={colorText}>{t("navbar.contact")}</Typography>
        </Link>
      </Box>
    </Box>
  );
};
