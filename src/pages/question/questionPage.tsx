import { PageProps } from '@/routes';
import { Box, Button, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect, useState } from 'react';
import { calculateResult, questions, sendResult } from './data/question';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '@/layout/rootLayout';

const QuestionPage: FC<PageProps> = ({ windowH, windowW }) => {
	const [isShowComponent, setIsShowComponent] = useState(false);
	const [isShowForm, setIsShowForm] = useState(false);
	const [qIndex, setQIndex] = useState(1);
	const navigate = useNavigate();
	const { user, setUser } = useContext(UserContext);

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

	const handleButtonClik = (index: number, question: number) => {
		setUser((prev) => {
			return { ...prev, [`q${question}`]: index + '' };
		});
		handleNextQuestion();
	};

	const handleNextQuestion = () => {
		if (qIndex === 7) {
			const result = calculateResult(user);
			sendResult(user, result);
			navigate(`/result/${result.colorcode}`);
		}
		setQIndex(qIndex + 1);
	};

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
				h={'60%'}
				bg={'#ffffff40'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				flexDir={'column'}
				fontFamily={'jaifu'}
			>
				{questions.map((question, index) => {
					return (
						<Box
							w={'100%'}
							key={index}
							opacity={qIndex === index + 1 ? 1 : 0}
							transition={'opacity 1s ease'}
							display={'flex'}
							flexDir={'column'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Text
								pos={'absolute'}
								top={'5%'}
								key={index}
								mb={5}
								w={'80%'}
								textAlign={'center'}
								fontSize={'1.2rem'}
								color={'#5A3F76'}
								fontWeight={'semibold'}
							>
								{question.question}
							</Text>
							<Box
								display={'flex'}
								flexDir={'column'}
								gap={5}
								justifyContent={'center'}
								w={'100%'}
								alignItems={'center'}
								pos={'absolute'}
								mt={'12dvh'}
							>
								{qIndex === index + 1 &&
									question.displayAnswer.map(
										(answer, index) => {
											return (
												<Button
													onClick={() =>
														handleButtonClik(
															index,
															qIndex
														)
													}
													key={index}
													bgColor={'#5A3F7680'}
													color={'white'}
													fontWeight={'regular'}
													w={'80%'}
													h={'6dvh'}
													display={'flex'}
													justifyContent={'center'}
													flexDir={'column'}
												>
													{answer.map(
														(ans, index) => {
															return (
																<Text
																	key={index}
																	mt={2}
																>
																	{ans}
																</Text>
															);
														}
													)}
												</Button>
											);
										}
									)}
							</Box>
						</Box>
					);
				})}
			</Box>
			<Box
				w={'90%'}
				bottom={'15%'}
				bg={'#ffffff30'}
				pos={'absolute'}
				h={windowH * 0.033}
				borderRadius={'full'}
				opacity={isShowForm ? 1 : 0}
				transition={'opacity 4s ease'}
			>
				<Box
					h={'100%'}
					bg={'#ffffff30'}
					borderRadius={'full'}
					w={`${(qIndex / 7) * 100}%`}
				/>
			</Box>
		</Box>
	);
};

export default QuestionPage;
