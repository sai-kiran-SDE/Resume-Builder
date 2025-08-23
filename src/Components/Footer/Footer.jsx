import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "./../../Assets/logo.png";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        textAlign={"center"}
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image style={{ height: "44px" }} src={logo} alt="logo" />
        <Text>© 2025 Resume Builder</Text>
        <Text>Made by : Sai Kiran</Text>
      </Container>
    </Box>
  );
}
