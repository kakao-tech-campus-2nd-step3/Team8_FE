import { Routes } from './app/routes';
import { queryClient } from './shared/api/instance';
import { globalStyle } from './shared/theme/global';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Global styles={globalStyle} />
        <Routes />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
