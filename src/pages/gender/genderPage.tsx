import { UserContext } from '@/layout/rootLayout';
import { PageProps } from '@/routes';
import { Box, Button, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GenderPage: FC<PageProps> = ({ windowH, windowW }) => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [isShowInput, setIsShowInput] = useState(false);
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isGoingToNextPage, setIsGoingToNextPage] = useState(false);
	const [gender, setGender] = useState<string>('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowInput(true);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [isShowComponent]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsShowComponent(true);
		}, 100);
		return () => clearTimeout(timeout);
	});

	const handleNextPage = () => {
		if (gender === '') return;

		setUser((prev) => {
			return { ...prev, gender };
		});
		setIsGoingToNextPage(true);
		setTimeout(() => {
			navigate('/age');
		}, 2000);
	};

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			pos={'fixed'}
			w={'100dvw'}
			h={'100dvh'}
			transition={'opacity 2s ease'}
			opacity={isShowComponent && !isGoingToNextPage ? 1 : 0}
		>
			<Box
				transition='opacity 2s ease'
				opacity={isShowInput && gender === '' ? 1 : 0}
				pos='absolute'
				bg={'radial-gradient(circle, #7A4E6A 0%, #00000000 40%)'}
				left='2.5dvw'
				top={`${windowH / 2 - windowW * 0.475}px`}
				w='95dvw'
				h='95dvw'
				borderRadius='full'
			/>
			<Box
				transition='opacity 2s ease'
				opacity={isShowInput ? 0 : 1}
				pos='absolute'
				bg={'radial-gradient(circle, #5A3F76 0%, #00000000 40%)'}
				left='2.5dvw'
				top={`${windowH / 2 - windowW * 0.475}px`}
				w='95dvw'
				h='95dvw'
				borderRadius='full'
			/>
			<Box
				transition='opacity 2s ease'
				opacity={gender === '' ? 0 : 1}
				pos='absolute'
				bg={'radial-gradient(circle, #953E95 0%, #00000000 40%)'}
				left='2.5dvw'
				top={`${windowH / 2 - windowW * 0.475}px`}
				w='95dvw'
				h='95dvw'
				borderRadius='full'
			/>

			<Text
				pos={'absolute'}
				top={
					isShowInput
						? windowH / 2 - windowH * 0.2
						: windowH / 2 - windowH * 0.06
				}
				fontFamily={'atoms_hwEN'}
				color={'white'}
				w={'100dvw'}
				h={'50dvh'}
				fontSize={'2rem'}
				textAlign={'center'}
				transition={'top 1s ease'}
			>
				What is <br />
				your gender ?
			</Text>
			<Box
				pos={'absolute'}
				display={'flex'}
				flexDir={'column'}
				alignItems={'center'}
				top={windowH * 0.45}
				w={'100dvw'}
				opacity={isShowInput ? 1 : 0}
				transition={'opacity 1s ease'}
			>
				{isShowInput && (
					<Button
						w={'50%'}
						borderRadius={'full'}
						backgroundColor={
							gender === 'Male'
								? '#FFFFFF00 !important'
								: '#FFFFFF80 !important'
						}
						border={
							gender === 'Male'
								? '2px solid #612D90'
								: '2px solid #FFFFFF90'
						}
						color={gender === 'Male' ? '#612D90' : 'white'}
						fontFamily={'atoms_hwEN'}
						fontSize={'1.2rem'}
						onClick={() => {
							setGender('Male');
						}}
						transition={
							'background-color 0.5s ease, border 0.5s ease, color 0.5s ease'
						}
					>
						Male
					</Button>
				)}
				<Button
					mt={'1.6dvh'}
					w={'50%'}
					borderRadius={'full'}
					backgroundColor={
						gender === 'Female'
							? '#FFFFFF00 !important'
							: '#FFFFFF80 !important'
					}
					border={
						gender === 'Female'
							? '2px solid #612D90'
							: '2px solid #FFFFFF90'
					}
					color={gender === 'Female' ? '#612D90' : 'white'}
					fontFamily={'atoms_hwEN'}
					fontSize={'1.2rem'}
					onClick={() => {
						setGender('Female');
					}}
					transition={
						'background-color 0.5s ease, border 0.5s ease, color 0.5s ease'
					}
				>
					Female
				</Button>
				<Button
					mt={'1.6dvh'}
					w={'50%'}
					borderRadius={'full'}
					backgroundColor={
						gender === 'Others'
							? '#FFFFFF00 !important'
							: '#FFFFFF80 !important'
					}
					border={
						gender === 'Others'
							? '2px solid #612D90'
							: '2px solid #FFFFFF90'
					}
					color={gender === 'Others' ? '#612D90' : 'white'}
					fontFamily={'atoms_hwEN'}
					fontSize={'1.2rem'}
					onClick={() => {
						setGender('Others');
					}}
					transition={
						'background-color 0.5s ease, border 0.5s ease, color 0.5s ease'
					}
				>
					Others
				</Button>
				<Button
					mt={'1.6dvh'}
					w={'50%'}
					borderRadius={'full'}
					backgroundColor={
						gender === 'None'
							? '#FFFFFF00 !important'
							: '#FFFFFF80 !important'
					}
					border={
						gender === 'None'
							? '2px solid #612D90'
							: '2px solid #FFFFFF90'
					}
					color={gender === 'None' ? '#612D90' : 'white'}
					fontFamily={'atoms_hwEN'}
					fontSize={'1.2rem'}
					onClick={() => {
						setGender('None');
					}}
					transition={
						'background-color 0.5s ease, border 0.5s ease, color 0.5s ease'
					}
				>
					Prefer not to say
				</Button>
			</Box>
			<Box
				h={'5dvh'}
				pos={'absolute'}
				top={windowH * 0.8}
				opacity={gender === '' ? 0 : 1}
				transition={'opacity 1s ease'}
				color='#FFFFFF90'
				onClick={handleNextPage}
			>
				<FaCheckCircle size={'100%'} />
			</Box>
		</Box>
	);
};

export default GenderPage;
