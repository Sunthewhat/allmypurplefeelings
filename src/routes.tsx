import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layout/rootLayout';
import HomePage from './pages/home/homePage';
import NamePage from './pages/name/namePage';
import GenderPage from './pages/gender/genderPage';
import AgePage from './pages/age/agePage';
import ShadePage from './pages/shades/shadePage';

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/name', element: <NamePage /> },
			{ path: '/gender', element: <GenderPage /> },
			{ path: '/age', element: <AgePage /> },
			{path: '/shades', element: <ShadePage />},
		],
	},
]);
