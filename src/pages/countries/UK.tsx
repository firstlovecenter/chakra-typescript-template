import { Box, Grid, Text, Heading, VStack } from "@chakra-ui/react"
import { ChakraBox } from "../../components/ChakraBox"
import useCustomColorMode from "../../hooks/useCustomColorMode"
const UK = () => {
  const { bg, brand } = useCustomColorMode()
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginY={20}>
          Give in the UK
        </Heading>

        <VStack align={"stretch"}>
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow={"2xl"} bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold" marginBottom={5}>
                Bank Account Details{" "}
              </Text>
              <Text>
                <Text as="b">Account Name: </Text>First Love Church
              </Text>
              <Text>
                <Text as="b">Sort Code: </Text>20-90-74
              </Text>
              <Text>
                <Text as="b">Account Number: </Text>03793559
              </Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default UK
