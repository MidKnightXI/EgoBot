import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { ProvideAuth } from './auth/useAuth';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import TwitchCallback from './routes/TwitchCallback';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ProvideAuth>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              {/* add layout later for customisation etc ... */}
            </Route>
            <Route path='/twitch/callback' element={TwitchCallback}/>
          </Routes>
        </BrowserRouter>
      </ProvideAuth>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
)
