// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors = {
  brand: "#2ad5dc",
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme
