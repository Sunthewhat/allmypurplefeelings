import { PageProps } from '@/routes';
import { Box, Button, Grid, Image, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { FaSpotify, FaInstagram } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { results } from './data/result';
import { playAudio } from '@/layout/playAudio';

const ResultPage: FC<PageProps> = () => {
	const { colorcode } = useParams();
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isPlayed, setIsplayed] = useState(false);
	const result = results.find((dat) => {
		return dat.colorcode === colorcode;
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowComponent(true);
		}, 100);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			pos={'fixed'}
			w={'100dvw'}
			h={'100dvh'}
			opacity={isShowComponent ? 1 : 0}
			transition={'opacity 2s ease'}
			onClick={() => {
				if (isPlayed) return;
				setIsplayed(true);
				results.find((dat, index) => {
					if (dat.colorcode === colorcode) playAudio(index + 1);
				});
			}}
		>
			<Box
				mt={[
					'2dvh',
					window.innerWidth > window.innerHeight ? '5dvh' : '0dvh',
				]}
				h={'80dvh'}
				w={'100dvw'}
				flexDir={'column'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				color={'#7A4E6A'}
			>
				{result.colorcode === 'A18CC6' && (
					<Box
						pos={['relative', 'absolute']}
						top={['0', '5dvh']}
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						w={'100%'}
						alignItems={'center'}
						gap={2}
						mb={'3dvh'}
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
							mt={'-0.5dvh'}
						>
							{result.engname}
						</Text>
					</Box>
				)}
				{result.colorcode !== 'A18CC6' && (
					<Box
						pos={['static', 'absolute']}
						top={['0', '5dvh']}
						w={'100%'}
						display={'flex'}
						h={'10dvh'}
						gap={2}
						alignItems={'center'}
						justifyContent={'center'}
					>
						{result.thainame && (
							<Text
								fontFamily={'SarabunLight'}
								fontSize={'1.5rem'}
								mb={'0.5dvh'}
							>
								{result.thainame}
							</Text>
						)}
						<Text fontFamily={'Gilda'} fontSize={'1.5rem'}>
							{result.engname}
						</Text>
					</Box>
				)}
				<Box
					pos={['relative', 'absolute']}
					top={['-5dvh', '11dvh']}
					fontFamily={'Gilda'}
					fontSize={'3dvh'}
					alignSelf={'center'}
					mt={['2dvh', '0.5dvh']}
				>
					{result.colorcode}
				</Box>
				<Grid
					templateColumns={
						window.innerWidth > window.innerHeight
							? 'repeat(2, 1fr)'
							: 'repeat(1, 1fr)'
					}
					justifyContent={'center'}
					alignSelf={'center'}
					alignContent={'center'}
				>
					<Box
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						mt={[
							'-12dvh',
							window.innerWidth > window.innerHeight
								? '-5dvh'
								: '-7dvh',
						]}
						transition='opacity 2s ease'
						bg={[
							`radial-gradient(circle, #${result.colorcode} -10%, #00000000 50%)`,
							window.innerWidth > window.innerHeight
								? `radial-gradient(circle, #${result.colorcode} -10%, #00000000 60%)`
								: `radial-gradient(circle, #${result.colorcode} -10%, #00000000 40%)`,
						]}
						w={[
							'100dvw',
							window.innerWidth > window.innerHeight
								? '50dvw'
								: '80dvw',
						]}
						h={[
							'100dvw',
							window.innerWidth > window.innerHeight
								? '50dvw'
								: '80dvw',
						]}
						alignContent={'center'}
						alignSelf={'center'}
					>
						<Image
							pos={'absolute'}
							left={[
								'10%',
								window.innerWidth > window.innerHeight
									? '7.5%'
									: '25%',
							]}
							src={result.img}
							width={['80%', '35%']}
						/>
					</Box>
					<Box
						mt={[
							'-4dvh',
							window.innerWidth > window.innerHeight
								? '2dvh'
								: '-4dvh',
						]}
						w={[
							'100dvw',
							window.innerWidth > window.innerHeight
								? '50dvw'
								: '80dvw',
						]}
						h={[
							'55%',
							window.innerWidth > window.innerHeight
								? '50dvw'
								: '55%',
						]}
						alignSelf={'center'}
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						alignContent={'center'}
					>
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
										fontSize={[
											'0.9rem',
											'1rem',
											'1rem',
											'1rem',
											'1.5rem',
										]}
										fontWeight={''}
										lineHeight={[
											0.07,
											window.innerWidth >
											window.innerHeight
												? 0.7
												: 0.07,
										]}
									>
										{des}
									</Text>
								</Box>
							);
						})}
					</Box>
				</Grid>

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
								fontSize={'0.8rem'}
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
								fontSize={'0.8rem'}
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
