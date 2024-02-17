import { UserContext } from '@/layout/rootLayout';
import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AgePage: FC = () => {
	const windowH = window.innerHeight;
	const windowW = window.innerWidth;
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [isShowInput, setIsShowInput] = useState(false);
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isGoingToNextPage, setIsGoingToNextPage] = useState(false);
	const [age, setAge] = useState<string>('');

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
		if (age === '') return;

		setUser((prev) => {
			return { ...prev, age: parseInt(age) };
		});
		setIsGoingToNextPage(true);
		setTimeout(() => {
			navigate('/shades');
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
				opacity={isShowInput && age === '' ? 1 : 0}
				pos='absolute'
				bg={'radial-gradient(circle, #A55078 0%, #00000000 40%)'}
				left='2.5dvw'
				top={`${windowH / 2 - windowW * 0.475}px`}
				w='95dvw'
				h='95dvw'
				borderRadius='full'
			/>
			<Box
				transition='opacity 2s ease'
				opacity={age !== '' ? 1 : 0}
				pos='absolute'
				bg={'radial-gradient(circle, #C88FDA 0%, #00000000 40%)'}
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
						? windowH / 2 - windowH * 0.1
						: windowH / 2 - windowH * 0.05
				}
				fontFamily={'atoms_hwEN'}
				color={'white'}
				w={'100dvw'}
				h={'50dvh'}
				fontSize={'2rem'}
				textAlign={'center'}
				transition={'top 1s ease'}
			>
				How old are you ?
			</Text>
			<Input
				pos={'absolute'}
				top={windowH * 0.51}
				w={'60dvw'}
				h={'4dvh'}
				border={'2px solid #FFFFFF90'}
				bg={'#FFFFFF50'}
				color={'#612D90'}
				borderRadius={'full'}
				placeholder='Type your age'
				fontFamily={'atoms_hwEN'}
				textAlign={'center'}
				fontSize={'1rem'}
				opacity={isShowInput ? 1 : 0}
				transition={'opacity 2s ease'}
				css={{
					'&::placeholder': {
						color: 'white',
						opacity: 1,
					},
				}}
				value={age}
				type='number'
				onChange={(e) => setAge(e.target.value)}
			/>
			<Box
				h={'5dvh'}
				pos={'absolute'}
				top={windowH * 0.8}
				opacity={age === '' ? 0 : 1}
				transition={'opacity 1s ease'}
				color='#FFFFFF90'
				onClick={handleNextPage}
			>
				<FaCheckCircle size={'100%'} />
			</Box>
		</Box>
	);
};

export default AgePage;
