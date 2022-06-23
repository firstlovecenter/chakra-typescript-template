import {
  Box,
  Grid,
  GridItem,
  Center,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { ChakraBox } from "../components/ChakraBox"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import GhanaFlag from "../assets/flags/GhanaFlag"
import Globe from "../assets/flags/Globe"
import UKFlag from "../assets/flags/UKFlag"
import USAFLag from "../assets/flags/USAFlag"
import useCustomColorMode from "../hooks/useCustomColorMode"
const LandingPage = () => {
  const navigate = useNavigate()
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20}>
          Flow Giving
        </Heading>
        <Text color={brand}>Give a flow offering today!</Text>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%">
              <ChakraBox animate={{ x: [-20, 0] }}>
                <Box
                  onClick={() => {
                    navigate("/ghana")
                  }}
                  dropShadow={"2xl"}
                  bg={bg}
                  paddingY={6}
                  paddingX={12}
                  borderRadius={20}
                >
                  <Box opacity="75%">
                    <GhanaFlag />
                  </Box>
                  <Text marginTop={5} fontWeight="bold">
                    Ghana
                  </Text>
                </Box>
              </ChakraBox>
            </GridItem>
            <GridItem w="100%">
              <ChakraBox animate={{ x: [-30, 0] }}>
                <Box
                  onClick={() => navigate("/uk")}
                  bg={bg}
                  paddingY={6}
                  paddingX={12}
                  borderRadius={20}
                >
                  <Box opacity="75%">
                    <UKFlag />
                  </Box>
                  <Text marginTop={5} fontWeight="bold">
                    UK
                  </Text>
                </Box>
              </ChakraBox>
            </GridItem>
            <GridItem w="100%">
              <ChakraBox animate={{ x: [-40, 0] }}>
                <Box
                  onClick={() => navigate("/usa")}
                  bg={bg}
                  paddingY={6}
                  paddingX={12}
                  borderRadius={20}
                >
                  <Box opacity="75%">
                    <USAFLag />
                  </Box>
                  <Text marginTop={5} fontWeight="bold">
                    USA
                  </Text>
                </Box>
              </ChakraBox>
            </GridItem>{" "}
            <GridItem w="100%">
              <ChakraBox animate={{ x: [-50, 0] }}>
                <Link href="https://paylink.today/firstlovechurch/">
                  <Box bg={bg} paddingY={6} paddingX={12} borderRadius={20}>
                    <Box opacity="75%">
                      <Globe />
                    </Box>
                    <Text marginTop={5} fontSize="small" fontWeight="bold">
                      Other
                    </Text>
                  </Box>
                </Link>
              </ChakraBox>
            </GridItem>
          </Grid>
        </Center>
      </Grid>
      <Text color={brand} marginTop={150}>
        God Bless You As You Give!
      </Text>
    </Box>
  )
}

export default LandingPage
