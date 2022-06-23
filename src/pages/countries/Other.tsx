import { Spinner, VStack } from "@chakra-ui/react"
import useCustomColorMode from "../../hooks/useCustomColorMode"

const Other = () => {
  const { brand } = useCustomColorMode()
  const openPayLink = () => {
    window.location.href = "https://paylink.today/firstlovechurch/"
    return null
  }

  return (
    <VStack height="75vh" alignItems={"center"} justifyContent="center">
      {openPayLink()}
      <Spinner size="xl" color={brand} />
    </VStack>
  )
}

export default Other
