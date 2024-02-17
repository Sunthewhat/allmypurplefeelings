import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes';
import '@/theme/typography/font.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<RouterProvider router={Routes} />
	</ChakraProvider>
);
