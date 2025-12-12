import React, { createContext, type ReactNode, useState } from 'react';

type UserContextType = {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const AuthContext = createContext<UserContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const result = document.cookie || undefined;
  const [token, setToken] = useState<string | undefined>(result);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
