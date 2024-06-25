import { Inter } from "next/font/google";
import "./globals.css";
import { Box } from "@mui/material";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delfina",
  description: "A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          <Navbar />
          {children}
        </Box>
      </body>
    </html>
  );
}
