import { Routes } from '@/app/routes';
import {
  AllSeniorInfoProvider,
  queryClient,
  UserEmailProvider,
  globalStyle,
  SinittoInfoProvider,
} from '@/shared';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <AllSeniorInfoProvider>
          <SinittoInfoProvider>
            <UserEmailProvider>
              <Global styles={globalStyle} />
              <Routes />
            </UserEmailProvider>
          </SinittoInfoProvider>
        </AllSeniorInfoProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
