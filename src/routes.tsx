import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layout/rootLayout';
import HomePage from './pages/home/homePage';
import NamePage from './pages/name/namePage';
import GenderPage from './pages/gender/genderPage';
import AgePage from './pages/age/agePage';
import ShadePage from './pages/shades/shadePage';
import QuestionPage from './pages/question/questionPage';
import ResultPage from './pages/result/resultPage';

export type PageProps = {
	windowH: number;
	windowW: number;
};

const windowH = window.innerHeight;
const windowW = window.innerWidth;

export const Routes = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <HomePage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/name',
				element: <NamePage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/gender',
				element: <GenderPage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/age',
				element: <AgePage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/shades',
				element: <ShadePage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/question',
				element: <QuestionPage windowH={windowH} windowW={windowW} />,
			},
			{
				path: '/result',
				element: <ResultPage windowH={windowH} windowW={windowW} />,
			},
		],
	},
]);
