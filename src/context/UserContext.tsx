import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);

  // ✅ عند تحميل التطبيق اقرأ من localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('cv_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string) => {
    const userData = { email, isLoggedIn: true };
    setUser(userData);
    localStorage.setItem('cv_user', JSON.stringify(userData)); // ✅ حفظ
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cv_user'); // ✅ حذف
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
