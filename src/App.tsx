import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";

import Frame from "./assets/Frame.svg";
import LoginIMG from "./assets/login-image.jpeg";
import Md from "./assets/MD.svg";
import GICON from "./assets/social-icon.svg";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid columns={2}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={16} py={12} px={6}>
            <Stack align={"center"}>
              <Box display="table">
                <Image src={Frame} alt="" float="left" />
                <Image
                  src={Md}
                  alt=""
                  float="right"
                  marginTop={1}
                  marginLeft={3}
                />
              </Box>

              <Heading fontSize={"3xl"}>Welcome Back</Heading>
            </Stack>
            <Box p={8} minW="400px  ">
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify="space-between"
                  >
                    <Checkbox>
                      <small>Remember for 30 days </small>{" "}
                    </Checkbox>
                    <Link color={"#6941C6"}>
                      {" "}
                      <small>Forgot password?</small>
                    </Link>
                  </Stack>

                  <Stack spacing={5}>
                    <Button
                      bg={"#7F56D9"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Sign in
                    </Button>

                    <Button variant="outline">
                      <Image src={GICON} paddingRight="12px" width={8} />
                      Sign in with Google
                    </Button>

                    <Link
                      color={"#6941C6"}
                      textAlign="right"
                      paddingRight={10}
                      paddingTop={2}
                    >
                      <small>Sign Up</small>
                    </Link>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg="teal">
          <Image
            src={LoginIMG}
            alt=""
            style={{
              display: "block",
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </Flex>
      </SimpleGrid>
    </ChakraProvider>
  );
};
