import './App.css'
import { Box, Flex, Heading, Spacer, Button, Text } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { FaTwitch } from 'react-icons/fa'
import { useState } from 'react'

function SignUpButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)

  const onButtonPressed = async () => {
    setIsLoading(true)
    setIsLoading(false)
  }

  return (
    <>
      <Button mr='4' bg='#00524E' color='white' variant='outline' onClick={onOpen}>
        Sign Up
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text align='left'>
              We are only stocking your channel name in our database.
            </Text>
            <Spacer/>
            <Text align='left'>
              It'll allow us to let you add custom commands to your channel.
            </Text>
          </ModalBody>
            <Center>
              <Button leftIcon={<FaTwitch/>} isLoading={isLoading} bg='#9146FF' color='white' onClick={onButtonPressed}>
                  Connect with Twitch
              </Button>
            </Center>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function SignInButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)

  const onButtonPressed = async () => {
    setIsLoading(true)
    setIsLoading(false)
  }

  return (
    <>
      <Button colorScheme='teal' mr='4' onClick={onOpen}>
          Sign in
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Button leftIcon={<FaTwitch/>} isLoading={isLoading} bg='#9146FF' color='white' onClick={onButtonPressed}>
                  Connect with Twitch
              </Button>
            </Center>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function App() {
  const isLoading = false

  return (
    <Flex direction='column'>
      <Flex bg='#00524E' direction='row' justify='space-between' padding='2' align='center'>
        <Box p='2'>
          <Heading className='logo'>EgoBot</Heading>
        </Box>
        <Spacer />
        <Box>
          <SignUpButton/>
          <SignInButton/>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App