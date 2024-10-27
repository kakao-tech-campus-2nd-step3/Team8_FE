import { createContext, ReactNode, useContext, useState } from 'react';

type UserEmailInfo = {
  email: string | null;
  setEmail: (email: string) => void;
};

export const UserEmailContext = createContext<UserEmailInfo | undefined>(
  undefined
);

export const UserEmailProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <UserEmailContext.Provider value={{ email, setEmail }}>
      {children}
    </UserEmailContext.Provider>
  );
};

export const useUserEmail = () => {
  const context = useContext(UserEmailContext);
  if (!context) {
    throw new Error(
      'useUserEmail는 UserEmailProvider 내부에서 사용되어야 합니다.'
    );
  }
  return context;
};
