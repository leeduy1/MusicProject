// Trong tệp AuthProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AuthInfo {
  id: string
  username: string
  fullName: string
  email: string
}
interface AuthContextType {
  authInfo: AuthInfo | null
  updateAuthInfo: (info: AuthInfo | null) => void
}

const AuthContext = createContext<AuthContextType>({
  authInfo: null,
  updateAuthInfo: () => {}
})

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authInfo, setAuthInfo] = useState<AuthInfo | null>(null)

  const updateAuthInfo = (info: AuthInfo | null) => {
    setAuthInfo(info)
  };

  return <AuthContext.Provider value={{ authInfo, updateAuthInfo }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
