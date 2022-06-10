import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  SimpleGrid,
  Stack,
  theme,
  useColorModeValue,
} from "@chakra-ui/react";

import Frame from "./assets/Frame.svg";
import Md from "./assets/MD.svg";

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
          <Stack spacing={16} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <img src={Frame} alt="" />
              <img src={Md} alt="" />
              <Heading fontSize={"3xl"}>Welcome Back</Heading>
            </Stack>
            <Box p={8}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember for 30 days</Checkbox>
                    <Link color={"blue.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    bg={"#7F56D9"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg="teal">
          Image here
        </Flex>
      </SimpleGrid>
    </ChakraProvider>
  );
};
