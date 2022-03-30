
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';


function App() {
  const isLoading = false

  return (
    <Flex direction='column'>
      <Navbar/>
      <Outlet/>
    </Flex>
  )
}

export default App