import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layout/rootLayout';
import HomePage from './pages/home/homePage';
import NamePage from './pages/name/namePage';
import GenderPage from './pages/gender/genderPage';

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/name', element: <NamePage /> },
			{ path: '/gender', element: <GenderPage /> },
		],
	},
]);
