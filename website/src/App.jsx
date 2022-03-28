import './App.css'
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react'

function App() {

  return (
    <Flex direction='column'>
      <Flex bg='#00524E' direction='row' justify='space-between' padding='2' align='center'>
        <Box p='2'>
          <Heading className='logo'>EgoBot</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='teal' mr='4'>
            Sign Up
          </Button>
          <Button colorScheme='teal' mr='4'>Log in</Button>
        </Box>
      </Flex>
    </Flex>
  )
}

export default App