import { useState, useContext, createContext } from 'react';
import axios from 'axios'

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
}


function useProvideAuth() {

  const connectWithTwitch = async () => {
    const url = 'http://localhost:8080/auth/twitch'

    window.location = url
  }

  return {
    connectWithTwitch
  };
}

