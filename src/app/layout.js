"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "./components/Footer";

export const metadata = {
   title: "MediCureHub",
   description: "A Great Medical Assistance",
};

const lightTheme = createTheme({
   palette: {
      mode: "light",
   },
});

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

export default function RootLayout({ children }) {
   const [activeTheme, setActiveTheme] = useState(lightTheme);
   const [themeColor, setThemeColor] = useState("light");

   const themeToggle = () => {
      setThemeColor(themeColor === "dark" ? "light" : "dark");
      setActiveTheme(themeColor === "dark" ? lightTheme : darkTheme);
   };

   return (
      <html lang="en">
         <body>
            <ThemeProvider theme={activeTheme}>
               <header>
                  <Navbar themeColor={themeColor} themeToggle={themeToggle}></Navbar>
               </header>
               {children}
               <>
                  <Footer></Footer>
               </>
            </ThemeProvider>
         </body>
      </html>
   );
}
