import { queryClient } from './api/instance';
import { Routes } from './routes';
import GlobalTheme from './styles/global';
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
