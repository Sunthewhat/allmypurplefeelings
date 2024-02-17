import { Box, Image } from '@chakra-ui/react';
import background from '@/assets/background1.svg';
import { Outlet } from 'react-router-dom';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export type UserType = {
	name?: string;
	gender?: string;
	age?: number;
};

export const UserContext = createContext<{
	user: UserType;
	setUser: Dispatch<SetStateAction<UserType>> | (() => void);
}>({ user: {}, setUser: () => {} });

const RootLayout = () => {
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

export default RootLayout;
