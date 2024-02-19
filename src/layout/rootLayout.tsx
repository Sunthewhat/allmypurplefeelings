import { Box, Image } from '@chakra-ui/react';
import background from '@/assets/background1.svg';
import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

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
				/>
				<Outlet />
			</Box>
		</UserContext.Provider>
	);
};
