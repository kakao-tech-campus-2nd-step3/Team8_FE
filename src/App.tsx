import { Routes } from './app/routes';
import { queryClient } from './shared/api/instance';
import GlobalTheme from './shared/theme/global';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <>
      <ChakraProvider theme={GlobalTheme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Routes />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
