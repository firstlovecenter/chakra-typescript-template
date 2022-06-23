import { Box, Grid, Text, Heading, VStack } from "@chakra-ui/react"
import { ChakraBox } from "../../components/ChakraBox"
import useCustomColorMode from "../../hooks/useCustomColorMode"
const Ghana = () => {
  const { bg, brand } = useCustomColorMode()

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20} marginBottom={10}>
          Ghana
        </Heading>

        <VStack align={"stretch"}>
          <ChakraBox animate={{ x: [-40, 0] }}>
            <Box dropShadow={"2xl"} bg={bg} padding={6} borderRadius={20}>
              <Text color={brand} fontWeight="bold">
                Mobile Money{" "}
              </Text>
              <Text fontWeight="bold" color={"#fcb900"}>
                MTN
              </Text>

              <Text marginBottom={5}>024 631 8494</Text>
              <Text fontWeight="bold">Bank Account</Text>
              <Text fontWeight="bold" color="red.500">
                Zenith Bank
              </Text>
              <Text>First Love Church</Text>
              <Text fontWeight="bold" color="red.500" fontSize="2xl">
                6010922100
              </Text>
              <Text marginBottom={5}>North Industrial Area Branch</Text>
            </Box>
          </ChakraBox>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  )
}

export default Ghana
