import { Navbar } from "@/components/Navbar";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
    <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            textTransform: "uppercase",
            fontSize: "5em",
            textAlign: "end",
          }}
        >
          Contact Me
        </Typography>
        <form
          action="https://formsubmit.co/delfinamariacanas@gmail.com"
          method="POST"
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              name="name"
              placeholder="Name"
              fullWidth
              sx={{ width: "48%" }}
            />
            <TextField
              name="email"
              placeholder="Mail"
              type="email"
              fullWidth
              sx={{ width: "48%" }}
            />
          </Box>
          <TextField
            multiline
            sx={{ margin: "20px 0px" }}
            fullWidth
            placeholder="Message"
            rows={4}
            name="message"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" sx={{ width: "250px" }} variant="outlined">
              Send
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}
