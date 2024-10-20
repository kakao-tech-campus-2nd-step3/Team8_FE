import { Routes } from './app/routes';
import { AllSeniorInfoProvider } from './shared';
import { queryClient } from './shared/api/instance';
import { globalStyle } from './shared/theme/global';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <AllSeniorInfoProvider>
          <Global styles={globalStyle} />
          <Routes />
        </AllSeniorInfoProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
