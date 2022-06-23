import { Spinner, Text, VStack } from "@chakra-ui/react"
import useCustomColorMode from "../../hooks/useCustomColorMode"

const Other = () => {
  const { brand } = useCustomColorMode()
  const openPayLink = () => {
    window.location.href = "https://paylink.today/flctownch/"
    return null
  }

  return (
    <VStack height="75vh" alignItems={"center"} justifyContent="center">
      {openPayLink()}
      <Spinner size="xl" color={brand} />
      <Text>Please wait while we redirect you for payment</Text>
    </VStack>
  )
}

export default Other
