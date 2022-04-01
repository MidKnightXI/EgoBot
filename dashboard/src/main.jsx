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
import Commands from './routes/Commands';
import NotFound from './routes/404';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <ProvideAuth>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route path='commands' element={<Commands />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path='/callback/' element={<TwitchCallback/>}/>
          </Routes>
        </BrowserRouter>
      </ProvideAuth>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root'),
)
