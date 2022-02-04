import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Caneo</Text>
        <Text color="gray.300" fontSize="small">
          brunocaneo3@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Bruno Caneo"
        src="https://github.com/Brunoocn.png"
      />
    </Flex>
  );
}
