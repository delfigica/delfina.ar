import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ThemeProvider } from "@mui/material";
import {darkTheme} from '@/Style.js'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delfina",
  description: "A web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <Box sx={{ }}>{children}</Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
