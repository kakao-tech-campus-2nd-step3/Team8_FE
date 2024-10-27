import { Routes } from '@/app/routes';
import {
  AllSeniorInfoProvider,
  queryClient,
  UserEmailProvider,
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
          <UserEmailProvider>
            <Global styles={globalStyle} />
            <Routes />
          </UserEmailProvider>
        </AllSeniorInfoProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
