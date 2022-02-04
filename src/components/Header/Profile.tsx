import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Caneo</Text>
          <Text color="gray.300" fontSize="small">
            brunocaneo3@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Bruno Caneo"
        src="https://github.com/Brunoocn.png"
      />
    </Flex>
  );
}
