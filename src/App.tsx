import { ChakraProvider } from "@chakra-ui/react"
import theme from "./utils/theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Ghana from "./pages/countries/Ghana"
import "./App.css"
import UK from "./pages/countries/UK"
import USA from "./pages/countries/USA"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ghana" element={<Ghana />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/usa" element={<USA />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
