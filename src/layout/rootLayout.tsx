import { Box, Image } from '@chakra-ui/react';
import background from '@/assets/background1.png';
import resultBackground from '@/assets/background2_1.png';
import { Outlet, useLocation } from 'react-router-dom';
import {
	Dispatch,
	SetStateAction,
	createContext,
	useEffect,
	useState,
} from 'react';

export type UserType = {
	name?: string;
	gender?: string;
	age?: number;
	q1?: string;
	q2?: string;
	q3?: string;
	q4?: string;
	q5?: string;
	q6?: string;
	q7?: string;
};

export const UserContext = createContext<{
	user: UserType;
	setUser: Dispatch<SetStateAction<UserType>> | (() => void);
}>({ user: {}, setUser: () => {} });

export const RootLayout = () => {
	const [user, setUser] = useState<UserType>({});
	const [path, setPath] = useState<string>('');
	const location = useLocation();

	useEffect(() => {
		setPath(location.pathname);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Box>
				<Image
					src={background}
					pos={'fixed'}
					zIndex={-1}
					loading='eager'
					h={'100dvh'}
					w={'100dvw'}
					objectFit={'cover'}
					alt='background'
					opacity={path.includes('/result') ? 0 : 1}
					transition={'opacity 1s ease'}
				/>
				<Image
					src={resultBackground}
					pos={'fixed'}
					zIndex={-1}
					loading='eager'
					h={'100dvh'}
					w={'100dvw'}
					objectFit={'cover'}
					alt='background'
					opacity={path.includes('/result') ? 1 : 0}
					transition={'opacity 1s ease'}
				/>
				<Outlet />
			</Box>
		</UserContext.Provider>
	);
};
