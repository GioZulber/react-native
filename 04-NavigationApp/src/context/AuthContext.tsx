//definir como luce, que información tendré aquí

import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}
// estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// lo usaremos para decirle a react como luce y que expone el contexto
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeName: (name: string) => void;
}

//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// export const useAuthContext = () => useContext(AuthContext);

// Creamos el provider del contexto
export const AuthProvider = ({children}: ProviderProps) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };
  const changeName = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeName,
        changeFavoriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
