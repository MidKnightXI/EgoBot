import { Text, CircularProgress, Center } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { useAuth } from '../auth/useAuth'

export default function TwitchCallback() {
  // const cliContext = useAuth()
  // const {  } = useParams()

  // useEffect(
  //   async function fetchInfos() {
  //     await cliContext.fetchChannelInfos()
  //   }
  // , [])

  return (
    <Center>
      <Text>Loading ...</Text>
      <CircularProgress isIndeterminate color='teal'/>
    </Center>
  )
}