import { PageProps } from '@/routes';
import { Box, Button, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect, useState } from 'react';
import { UserContext } from '@/layout/rootLayout';
import { calculateResult } from '../question/data/question';
import { FaSpotify, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ResultPage: FC<PageProps> = ({ windowH, windowW }) => {
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isShowForm, setIsShowForm] = useState(false);
	const { user } = useContext(UserContext);
	const result = calculateResult(user);
	const navigate = useNavigate();

	if (user.name === '' || user.gender === '' || user.age === 0) {
		navigate('/');
	}

	if (
		!user.q1 ||
		!user.q2 ||
		!user.q3 ||
		!user.q4 ||
		!user.q5 ||
		!user.q6 ||
		!user.q7
	) {
		navigate('/question');
	}
	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowComponent(true);
		}, 100);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowForm(true);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [isShowComponent]);

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			pos={'fixed'}
			w={'100dvw'}
			h={'100dvh'}
			transition={'opacity 2s ease'}
		>
			<Box
				mt={'12dvh'}
				h={'70dvh'}
				w={'100dvw'}
				flexDir={'column'}
				display={'flex'}
				color={'#7A4E6A'}
			>
				{result.colorcode === 'A18CC6' && (
					<Box
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						w={'100%'}
						alignItems={'center'}
						gap={2}
					>
						{result.thainame && (
							<Text
								fontFamily={'SarabunLight'}
								fontSize={'2.6dvh'}
							>
								{result.thainame}
							</Text>
						)}
						<Text
							fontFamily={'Gilda'}
							fontSize={'3dvh'}
							mt={'-0.2dvh'}
						>
							{result.engname}
						</Text>
					</Box>
				)}
				{result.colorcode !== 'A18CC6' && (
					<Box display={'flex'} gap={2} alignSelf={'center'}>
						{result.thainame && (
							<Text
								fontFamily={'SarabunLight'}
								fontSize={'2.6dvh'}
							>
								{result.thainame}
							</Text>
						)}
						<Text
							fontFamily={'Gilda'}
							fontSize={'3dvh'}
							mt={'-0.2dvh'}
						>
							{result.engname}
						</Text>
					</Box>
				)}
				<Box
					mt={-3}
					fontFamily={'Gilda'}
					fontSize={'3dvh'}
					alignSelf={'center'}
				>
					{result.colorcode}
				</Box>
				<Box
					display={'flex'}
					justifyContent={'center'}
					transition='opacity 2s ease'
					bg={`radial-gradient(circle, #${result.colorcode} -10%, #00000000 55%)`}
					w='100dvw'
					h='100dvw'
					alignContent={'center'}
				>
					<img src={result.img} width={'80%'} />
				</Box>
				<Box mt={'3dvh'} w={'90dvw'} h={'55%'} alignSelf={'center'}>
					{result.desc.map((des, index) => {
						return (
							<Box
								w={'100%'}
								key={index}
								transition={'opacity 1s ease'}
								display={'flex'}
								flexDir={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								fontFamily={'Sarabun'}
							>
								<Text
									top={'5%'}
									key={index}
									mb={5}
									w={'100%'}
									textAlign={'center'}
									fontSize={'0.9rem'}
									fontWeight={''}
									lineHeight={0.07}
								>
									{des}
								</Text>
							</Box>
						);
					})}
				</Box>

				<Box
					gap={2}
					alignSelf={'center'}
					bottom={'1dvh'}
					pos={'absolute'}
				>
					<Box
						w='100dvw'
						h='20dvh'
						display={'flex'}
						flexDir={'column'}
					>
						<Text
							fontFamily={'Gilda'}
							fontSize={'2.2dvh'}
							mt={'4dvh'}
							alignSelf={'center'}
						>
							LANDOKMAI
						</Text>
						<Box
							w='100dvw'
							h='20dvh'
							display={'flex'}
							flexDir={'row'}
							justifyContent={'center'}
							gap={8}
						>
							<Button
								w={'40%'}
								alignSelf={'center'}
								borderRadius={'full'}
								bgColor={'#7A4E6A40 !important'}
								color={'#7A4E6A'}
								leftIcon={<FaInstagram size={'2.5dvh'} />}
								onClick={() =>
									window.open(
										'https://www.instagram.com/landokmaiband?igsh=MWZuMGZjank1Z2o2Zw=='
									)
								}
							>
								landokmaiband
							</Button>
							<Button
								w={'40%'}
								alignSelf={'center'}
								borderRadius={'full'}
								bgColor={'#7A4E6A40 !important'}
								color={'#7A4E6A'}
								leftIcon={<FaSpotify size={'2.5dvh'} />}
								onClick={() =>
									window.open(
										'https://open.spotify.com/artist/4k22J4XE3nfRlv4IH7D5Vt?si=NiT1ZtmlR--TeMaP25vL-A'
									)
								}
							>
								listen here
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ResultPage;
