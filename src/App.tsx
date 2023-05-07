import { ChakraProvider } from "@chakra-ui/react"
import theme from "./utils/theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import "./App.css"
import UK from "./pages/countries/UK"
import Navigation from "./pages/Navigation"
import BackButton from "./pages/BackButton"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <BackButton />
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
    
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
