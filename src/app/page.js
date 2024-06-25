import { Box, Container, Typography } from "@mui/material";
import { Banner } from "@/components/Banner";
import { AboutMe } from "@/components/AboutMe";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <Container>
      <Banner />
      <AboutMe />
      <Technologies />
      <Projects />
    </Container>
  );
}
