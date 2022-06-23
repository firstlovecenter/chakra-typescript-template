import {
  Box,
  Grid,
  GridItem,
  Center,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import GhanaFlag from "./flags/GhanaFlag";
import Globe from "./flags/Globe";
import UKFlag from "./flags/UKFlag";
import USAFLag from "./flags/USAFlag";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="50vh" p={3}>
        <Heading fontSize="2xl" marginTop={20}>
          Flow Offering
        </Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Center>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem w="100%">
              <Box
                onClick={() => {
                  navigate("/ghana");
                }}
                dropShadow={"2xl"}
                bg="#2d2e3e"
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
            </GridItem>
            <GridItem w="100%">
              <Box
                onClick={() => navigate("/uk")}
                bg="#2d2e3e"
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
            </GridItem>
            <GridItem w="100%">
              <Box bg="#2d2e3e" paddingY={6} paddingX={12} borderRadius={20}>
                <Box opacity="75%">
                  <USAFLag />
                </Box>
                <Text marginTop={5} fontWeight="bold">
                  USA
                </Text>
              </Box>
            </GridItem>{" "}
            <GridItem w="100%">
              <Link href="https://paylink.today/firstlovechurch/">
                <Box bg="#2d2e3e" paddingY={6} paddingX={12} borderRadius={20}>
                  <Box opacity="75%">
                    <Globe />
                  </Box>
                  <Text marginTop={5} fontSize="small" fontWeight="bold">
                    Other
                  </Text>
                </Box>
              </Link>
            </GridItem>
          </Grid>
        </Center>
      </Grid>
      <Text marginTop={150}>God Bless You As You Give!</Text>
    </Box>
  );
};

export default LandingPage;
