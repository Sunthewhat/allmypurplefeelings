import { PageProps } from '@/routes';
import { Box, Image, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import puppet from '@/assets/puppet.svg';
import ghosts from '@/assets/ghost.svg';
import { useNavigate } from 'react-router-dom';

const ShadePage: FC<PageProps> = ({ windowH, windowW }) => {
	const navigate = useNavigate();
	const [isShowLandokmai, setIsShowLandokmai] = useState(true);
	const [isShowQuestion, setIsShowQuestion] = useState(false);
	const [isShowToNextPage, setIsShowToNextPage] = useState(false);
	const [isGoingToNextPage, setIsGoingToNextPage] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsGoingToNextPage(false);
		}, 100);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowLandokmai(false);
		}, 1500);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowQuestion(true);
		}, 3500);
		return () => clearTimeout(timeout);
	}, [isShowLandokmai]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowToNextPage(true);
		}, 5500);
		return () => clearTimeout(timeout);
	}, [isShowLandokmai]);

	const handleNextPage = () => {
		if (!isShowToNextPage) {
			return;
		}
		setIsGoingToNextPage(true);
		setTimeout(() => {
			navigate('/question');
		}, 2000);
	};

	return (
		<Box
			onClick={handleNextPage}
			opacity={isGoingToNextPage ? 0 : 1}
			transition={'opacity 2s ease'}
			w={windowW}
			h={windowH}
			top={0}
			pos={'absolute'}
			display={'flex'}
			justifyContent={'center'}
		>
			<Text
				color={'white'}
				fontFamily={'Gilda display'}
				textAlign={'center'}
				pos={'absolute'}
				top={'10%'}
				w={windowW}
				fontWeight={'semibold'}
				opacity={isShowLandokmai ? 1 : 0}
				transition={'opacity 2s ease'}
			>
				LANDOKMAI
			</Text>
			<Text
				color={'white'}
				fontFamily={'Gilda display'}
				textAlign={'center'}
				pos={'absolute'}
				bottom={'5%'}
				w={windowW}
				fontWeight={'regular'}
				opacity={isShowLandokmai ? 1 : 0}
				transition={'opacity 2s ease'}
			>
				'All my purple feelings'
			</Text>
			<Image
				top={windowH * 0.35}
				src={puppet}
				pos={'absolute'}
				alt='puppet'
				w={windowW * 0.3}
				h={windowH * 0.3}
				right={!isShowLandokmai ? '48%' : '35%'}
				transition={'right 2s ease'}
			/>
			<Box
				pos={'absolute'}
				top={'30%'}
				w={windowW * 0.4}
				h={windowH * 0.4}
				display={'flex'}
				justifyContent={'center'}
				flexDir={'column'}
				left={'43%'}
				bg={'radial-gradient(circle, white -10%, #FFFFFF00 45%)'}
				opacity={!isShowLandokmai && !isShowQuestion ? 1 : 0}
				transition={'opacity 2s ease'}
			>
				<Text
					color={'#5A3F76'}
					fontFamily={'jaifu'}
					textAlign={'center'}
					fontSize={'1.5rem'}
					lineHeight={'1.6rem'}
				>
					"welcome
					<br /> to my <br /> purple <br />
					story"
				</Text>
			</Box>
			<Box
				pos={'absolute'}
				top={'30%'}
				w={windowW * 0.4}
				h={windowH * 0.4}
				display={'flex'}
				justifyContent={'center'}
				flexDir={'column'}
				left={'43%'}
				bg={'radial-gradient(circle, white -10%, #FFFFFF00 45%)'}
				opacity={isShowQuestion ? 1 : 0}
				transition={'opacity 4s ease'}
			>
				<Text
					color={'#5A3F76'}
					fontFamily={'jaifu'}
					textAlign={'center'}
					fontSize={'1.5rem'}
					lineHeight={'1.6rem'}
				>
					"what shade
					<br /> of purple <br /> are you?"
				</Text>
			</Box>
			<Image
				left={'4%'}
				top={'58%'}
				src={ghosts}
				pos={'absolute'}
				opacity={1}
				w={'22%'}
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
				top={'62%'}
				src={ghosts}
				pos={'absolute'}
				opacity={1}
				w={'25%'}
				transition={'opacity 2s ease'}
				alt='ghosts'
				css={{
					animation: 'wobble2 7s infinite alternate',
					'@keyframes wobble2': {
						'0%': {
							transform: 'translateY(-10%) scaleX(-1)',
						},
						'50%': {
							transform: 'translateY(0) scaleX(-1)',
						},
						'100%': {
							transform: 'translateY(-10%) scaleX(-1)',
						},
					},
				}}
			/>
			<Box
				w={'100%'}
				display={'flex'}
				justifyContent={'center'}
				opacity={isShowToNextPage ? 0.5 : 0}
				transition={'opacity 1s ease'}
				pos={'absolute'}
				bottom={'8%'}
			>
				<Text
					color={'white'}
					fontFamily={'Alata'}
					fontSize={'1.3rem'}
					textAlign={'center'}
					// css={{
					// 	animation: 'breathing 1.5s infinite alternate',
					// 	'@keyframes breathing': {
					// 		'0%': {
					// 			opacity: '0.8',
					// 		},
					// 		'100%': {
					// 			opacity: '0.4',
					// 		},
					// 	},
					// }}
				>
					Let's find
					<br /> your shade!
				</Text>
			</Box>
		</Box>
	);
};

export default ShadePage;
