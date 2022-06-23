import { Box, Grid, Text, Heading, VStack } from "@chakra-ui/react"
import { ChakraBox } from "../../components/ChakraBox"
import useCustomColorMode from "../../hooks/useCustomColorMode"
const USA = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20}>
          Give in the USA
        </Heading>

        <VStack align={"stretch"}>
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow={"2xl"} bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold" marginBottom={5}>
                Text to Give
              </Text>
              <Text fontWeight="bold">Offering</Text>
              <Text marginBottom={5}>
                Text{" "}
                <Text as="b" color={brand}>
                  LCI 10{" "}
                </Text>
                to{" "}
                <Text as="b" color={brand}>
                  45777
                </Text>
              </Text>

              <Text fontWeight="bold">Tithe</Text>
              <Text marginBottom={5}>
                Text{" "}
                <Text as="b" color={brand}>
                  LCI 200
                </Text>{" "}
                to{" "}
                <Text as="b" color={brand}>
                  45777
                </Text>
              </Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default USA
