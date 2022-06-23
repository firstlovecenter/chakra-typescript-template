import { Box, Grid, Heading, Spinner, Text, VStack } from "@chakra-ui/react"
import { ChakraBox } from "../../components/ChakraBox"
import useCustomColorMode from "../../hooks/useCustomColorMode"

const Other = () => {
  const { brand, bg } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          International Giving Methods
        </Heading>

        <VStack align={"stretch"}>
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow={"2xl"} bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold">
                SendWave/TapTap Send
              </Text>
              <Text marginBottom={5}>024 631 8494</Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default Other
