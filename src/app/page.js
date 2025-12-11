import { Banner } from "@/components/Banner";
import { AboutMe } from "@/components/AboutMe";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Navbar } from "@/components/Navbar";

import { Box, Container } from "@mui/material";
import "@/app/globals.css";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#EFF1EF" }}>
      <Navbar />
      <Container>
        <Banner />
        <AboutMe />
        <Technologies />
        <Projects />
      </Container>
    </Box>
  );
}
