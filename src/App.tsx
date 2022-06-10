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

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SimpleGrid columns={2} spacing={10}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={""}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Welcome Back</Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
              marginTop={5}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
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
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={""}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          Image here
        </Flex>
      </SimpleGrid>
    </ChakraProvider>
  );
};
