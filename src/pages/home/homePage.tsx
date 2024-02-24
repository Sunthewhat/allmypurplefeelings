import { Box, Image, Text } from '@chakra-ui/react';
import { FC, useState, useEffect } from 'react';
import landokmai from '@/assets/landokmai.svg';
import puppet from '@/assets/puppet.svg';
import ghosts from '@/assets/ghost.svg';
import { useNavigate } from 'react-router-dom';
import { PageProps } from '@/routes';
import { playAudio } from '@/layout/playAudio';

const HomePage: FC<PageProps> = ({ windowH, windowW }) => {
	const navigate = useNavigate();
	const [moveUp, setMoveUp] = useState(false);
	const [isShowPuppet, setIsShowPuppet] = useState(false);
	const [isShowGhosts, setIsShowGhosts] = useState(false);
	const [isCanGoToNextPage, setIsCanGoToNextPage] = useState(false);
	const [isGoingToNextPage, setIsGoingToNextPage] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setMoveUp(true);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowPuppet(true);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [moveUp]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowGhosts(true);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [moveUp]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsCanGoToNextPage(true);
		}, 4000);
		return () => clearTimeout(timeout);
	}, [isShowGhosts]);

	const handleNextPage = () => {
		playAudio(0);
		if (!isCanGoToNextPage) {
			return;
		}
		setIsGoingToNextPage(true);
		setTimeout(() => {
			navigate('/name');
		}, 2000);
	};

	return (
		<Box
			onClick={handleNextPage}
			display={'flex'}
			justifyContent={'center'}
			alignItems={'center'}
			height={windowH}
			w={windowW}
			position={'fixed'}
			top={0}
			opacity={isGoingToNextPage ? 0 : 1}
			transition={'opacity 2s ease'}
		>
			<Image
				objectFit={'contain'}
				w={'70%'}
				h={'20%'}
				src={landokmai}
				pos={'absolute'}
				top={moveUp ? '23%' : windowH / 2 - windowH * 0.11}
				transition={'top 2s ease'}
				alt='text'
			/>
			{isShowPuppet && (
				<Image
					objectFit={'contain'}
					w={'80%'}
					h={'35%'}
					src={puppet}
					pos={'absolute'}
					top={windowH / 2 - windowH * 0.16}
					transition={'transform 3s ease'}
					transform={moveUp ? 'scale(1)' : 'scale(0)'}
					alt='puppet'
				/>
			)}

			<Image
				left={'5%'}
				top={'52%'}
				src={ghosts}
				pos={'absolute'}
				opacity={isShowGhosts ? 1 : 0}
				transition={'opacity 2s ease'}
				alt='ghosts'
				css={{
					animation: 'wobble1 5s infinite alternate',
					'@keyframes wobble1': {
						'0%': {
							transform: 'translateY(-10%)',
						},
						'50%': {
							transform: 'translateY(0)',
						},
						'100%': {
							transform: 'translateY(-10%)',
						},
					},
				}}
			/>
			<Image
				right={'5%'}
				top={'60%'}
				src={ghosts}
				pos={'absolute'}
				opacity={isShowGhosts ? 1 : 0}
				transition={'opacity 2s ease'}
				alt='ghosts'
				css={{
					animation: 'wobble2 6s infinite alternate',
					'@keyframes wobble2': {
						'0%': {
							transform: 'translateY(0) scaleX(-1)',
						},
						'50%': {
							transform: 'translateY(-10%) scaleX(-1)',
						},
						'100%': {
							transform: 'translateY(0) scaleX(-1)',
						},
					},
				}}
			/>
			<Text
				pos={'absolute'}
				bottom={'8%'}
				color={'white'}
				fontWeight={'regular'}
				opacity={isCanGoToNextPage ? 0.3 : 0}
				fontFamily={'alata'}
				fontSize={'1.5rem'}
				transition={'opacity 1s ease'}
			>
				tap to continue
			</Text>
		</Box>
	);
};

export default HomePage;
