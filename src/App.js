import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import app components
import Header from "./components/Header";
import Home from "./components/Home";
import theme from "./theme/mui";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Banner />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
