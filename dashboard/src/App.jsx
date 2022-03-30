
import { Flex } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';


function App() {
  const isLoading = false

  return (
    <Flex direction='column'>
      <Navbar/>
    </Flex>
  )
}

export default App