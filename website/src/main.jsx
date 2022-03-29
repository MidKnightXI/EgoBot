import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { ProvideAuth } from './auth/useAuth';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
)
