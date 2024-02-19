import { PageProps } from '@/routes';
import { Box, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { questions } from './data/question';

const QuestionPage: FC<PageProps> = ({ windowH, windowW }) => {
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isShowForm, setIsShowForm] = useState(false);
	const [qIndex, setQIndex] = useState(1);

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
			opacity={isShowComponent ? 1 : 0}
			transition={'opacity 2s ease'}
			w={windowW}
			h={windowH}
			display={'flex'}
			pos={'absolute'}
			flexDir={'column'}
			justifyContent={'center'}
			alignItems={'center'}
		>
			<Text
				top={!isShowForm ? '45%' : '10%'}
				transition={'top 2s ease'}
				pos={'absolute'}
				fontFamily={'Gilda display'}
				color={'white'}
			>
				LANDOKMAI
			</Text>
			<Text
				bottom={!isShowForm ? '45%' : '5%'}
				transition={'bottom 2s ease'}
				pos={'absolute'}
				fontFamily={'Gilda display'}
				color={'white'}
			>
				"All my purple feelings"
			</Text>
			<Box
				opacity={isShowForm ? 1 : 0}
				transition={'opacity 4s ease'}
				pos={'absolute'}
				w={'80%'}
				borderRadius={'10'}
				h={'50%'}
				bg={'#ffffff40'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				flexDir={'column'}
			>
				<Text fontFamily={'Atoms_HWTH'}>
					{questions[qIndex - 1].question}
				</Text>
			</Box>
			<Box
				opacity={isShowForm ? 1 : 0}
				transition={'opacity 4s ease'}
				pos={'absolute'}
				w={'90%'}
				h={windowH * 0.033}
				borderRadius={'full'}
				bottom={'15%'}
				bg={'#ffffff30'}
			>
				<Box
					w={`${(qIndex / 7) * 100}%`}
					h={'100%'}
					borderRadius={'full'}
					bg={'#ffffff30'}
				/>
			</Box>
		</Box>
	);
};

export default QuestionPage;
