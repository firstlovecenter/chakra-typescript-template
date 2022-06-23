import { Box, Grid, Text, Heading, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
const UK = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20}>
          Give in UK
        </Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack align={"stretch"}>
          <Box dropShadow={"2xl"} bg="#2d2e3e" padding={6} borderRadius={20}>
            <Text fontWeight="bold">Bank Account Details </Text>
            <Text fontWeight="bold">MTN</Text>

            <Text marginBottom={5}>024 444 444 </Text>
            <Text fontWeight="bold">Vodafone</Text>
            <Text marginBottom={5}>024 444 444 </Text>
            <Text fontWeight="bold">AirtelTigo</Text>
            <Text marginBottom={5}>024 444 444 </Text>
          </Box>
        </VStack>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  );
};

export default UK;
