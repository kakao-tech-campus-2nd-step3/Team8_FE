import { Routes } from '@/app/routes';
import {
  AllSeniorInfoProvider,
  queryClient,
  AuthProvider,
  globalStyle,
} from '@/shared';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <AllSeniorInfoProvider>
          <AuthProvider>
            <Global styles={globalStyle} />
            <Routes />
          </AuthProvider>
        </AllSeniorInfoProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
