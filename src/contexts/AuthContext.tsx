import React, { useState } from "react";
import { ACCESS_TOKEN } from "../constants";
import { getCurrentUser } from "./../services/AccountServices";
interface IAuthContext {
  user: IUser | null;
  login: Function;
  logout: Function;
}

interface IUser {
  name: string;
  role: string;
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: Function) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: Function) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const AuthContext = React.createContext<IAuthContext>(null!);

export const AuthProvider = ({ children }: any) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

type UserType = {
  name: string;
};

function useProvideAuth(): IAuthContext {
  const [user, setUser] = useState<IUser | null>(null);

  const login = async (callback: Function) => {
    await getCurrentUser().then((res) => {
    
    });
  };

  const logout = (callback: Function) => {
    localStorage.removeItem(ACCESS_TOKEN);
    setUser(null);
  };

  return { user, login, logout };
}

export default AuthContext;
