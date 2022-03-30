import { Text, CircularProgress, Center } from "@chakra-ui/react";

export default function TwitchCallback() {
  return (
    <Center>
      <Text>Loading ...</Text>
      <CircularProgress isIndeterminate color='teal'/>
    </Center>
  )
}