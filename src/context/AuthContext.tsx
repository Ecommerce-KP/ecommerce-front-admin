import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  clearLocalStorge,
  deleteLocalStorage,
  getLocalStorage,
} from "../lib/helpers/localStorageHelper";
import axios from "axios";
import { User } from "../types/user";
import { ChidlrenWithProps } from "../types/common";

interface AuthContextType {
  token: string;
  setToken: (newToken: string) => void;
  user: User;
  setUser: (user: User) => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  token: "",
  setToken: () => {},
  user: {},
  setUser: () => {},
});

const AuthProvider = ({ children }: ChidlrenWithProps) => {
  const accessTokenSRKey = "access_token";
  const [token, setToken_] = useState<string>(
    getLocalStorage(accessTokenSRKey) || ""
  );
  const [user, setUser] = useState<User>({});

  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer" + token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
      deleteLocalStorage(accessTokenSRKey);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
export default AuthProvider;
