import { UserContext } from '@/layout/rootLayout';
import { PageProps } from '@/routes';
import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NamePage: FC<PageProps> = ({ windowH, windowW }) => {
	const navigate = useNavigate();
	const [isShowInput, setIsShowInput] = useState(false);
	const [name, setName] = useState<string>('');
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isGoingToNextPage, setIsGoingToNextPage] = useState(false);
	const { setUser } = useContext(UserContext);

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
		if (name === '') {
			return;
		}
		setUser((prev) => {
			return { ...prev, name };
		});
		setIsGoingToNextPage(true);
		setTimeout(() => {
			navigate('/gender');
		}, 2000);
	};

	return (
		<Box
			display={'flex'}
			justifyContent={'center'}
			pos={'fixed'}
			w={windowW}
			h={windowH}
			transition={'opacity 2s ease'}
			opacity={isShowComponent && !isGoingToNextPage ? 1 : 0}
		>
			<Box
				transition='opacity 2s ease'
				opacity={isShowInput ? 1 : 0}
				pos='absolute'
				bg={'radial-gradient(circle, #C88FDA 0%, #00000000 40%)'}
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
				bg={'radial-gradient(circle, #7A4E6A 0%, #00000000 40%)'}
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
						? windowH / 2 - windowH * 0.17
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
				your name ?
			</Text>
			<Box pos={'absolute'} top={windowH * 0.51} w={'60dvw'} h={'4dvh'}>
				<Input
					border={'2px solid #FFFFFF90'}
					bg={'#FFFFFF50'}
					color={'#612D90'}
					h={'4dvh'}
					borderRadius={'full'}
					placeholder='How can we call you ?'
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
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Box
					pos={'absolute'}
					top={0}
					h={'100%'}
					w={'10%'}
					display={'flex'}
					justifyContent={'flex-end'}
					alignItems={'center'}
					right={'1dvh'}
					opacity={name !== '' ? 1 : 0}
					transition={'opacity 2s ease'}
					zIndex={1}
					onClick={handleNextPage}
				>
					<FaCheckCircle size={'2dvh'} color='white' />
				</Box>
			</Box>
		</Box>
	);
};

export default NamePage;
