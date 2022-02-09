import { useState, createContext } from "react";

interface AuthUser {
  name: string;
  email: string;
}

interface UserContextType {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}
interface UserContextProviderType {
  children: React.ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
