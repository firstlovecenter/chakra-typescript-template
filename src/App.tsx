import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import Ghana from "./Ghana";
import "./App.css";
import UK from "./UK";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ghana" element={<Ghana />} />
        <Route path="/uk" element={<UK />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
