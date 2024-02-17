import { Box, Image } from '@chakra-ui/react';
import background from '@/assets/background1.svg';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
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
	);
};

export default RootLayout;
