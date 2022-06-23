import { Box, Grid, Text, Heading, VStack, Container } from "@chakra-ui/react"
import { ChakraBox } from "../../components/ChakraBox"
import useCustomColorMode from "../../hooks/useCustomColorMode"
const UK = () => {
  const { bg, brand } = useCustomColorMode()
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading marginTop={20}>United Kingdom</Heading>
        <Heading color={brand}>ONLY</Heading>
        <Container
          fontSize="medium"
          marginTop={5}
          marginBottom={20}
          backgroundColor="#8080804f"
          padding={5}
          borderRadius={15}
        >
          <Text>
            Please use this medium{" "}
            <Text as="b" color={brand}>
              ONLY
            </Text>{" "}
            if you are paying from a UK account.
          </Text>
          <Text>
            Make sure to include the reference{" "}
            <Text as="b" color={brand}>
              Flow
            </Text>
          </Text>
        </Container>

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
