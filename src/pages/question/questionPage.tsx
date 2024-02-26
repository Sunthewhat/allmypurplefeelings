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
		if (qIndex === 7) return;
		setQIndex(qIndex + 1);
	};

	useEffect(() => {
		if (qIndex === 7) {
			const result = calculateResult(user);
			setUser((dat) => {
				sendResult(dat, result);
				return dat;
			});
			navigate(`/result/${result.colorcode}`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user.q7]);

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
				top={!isShowForm ? '45%' : '7%'}
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
				'All my purple feelings'
			</Text>
			{/* <Button
				pos={'absolute'}
				left={'5%'}
				bottom={'5%'}
				onClick={() =>
					setQIndex((prev) => {
						if (prev === 1) return prev;
						return prev - 1;
					})
				}
			>
				Back
			</Button> */}
			<Box
				opacity={isShowForm ? 1 : 0}
				transition={'opacity 4s ease'}
				pos={'absolute'}
				top={'15%'}
				w={'80%'}
				borderRadius={'10'}
				h={'65%'}
				bg={'#ffffff70'}
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
							<Box
								pos={'absolute'}
								top={'5%'}
								w={'100%'}
								textAlign={'center'}
								display={'flex'}
								flexDir={'column'}
							>
								{index === 5 &&
									question.question.map((eachQ, index) => (
										<Text
											key={index}
											mb={2}
											w={'100%'}
											textAlign={'center'}
											fontSize={['0.9rem', '1.2rem']}
											color={'#5A3F76'}
											fontWeight={'semibold'}
											display={'flex'}
											justifyContent={'center'}
											alignItems={'center'}
										>
											{eachQ}
										</Text>
									))}
								{index !== 5 &&
									question.question.map((eachQ, index) => (
										<Text
											key={index}
											mb={2}
											w={'100%'}
											textAlign={'center'}
											fontSize={['0.9rem', '1.5rem']}
											color={'#5A3F76'}
											fontWeight={'semibold'}
											display={'flex'}
											justifyContent={'center'}
											alignItems={'center'}
										>
											{eachQ}
										</Text>
									))}
							</Box>
							<Box
								zIndex={1}
								display={'flex'}
								flexDir={'column'}
								justifyContent={'center'}
								gap={3}
								w={'100%'}
								alignItems={'center'}
								pos={'absolute'}
								top={'16dvh'}
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
													bgColor={
														'#5A3F7680 !important'
													}
													color={'white'}
													fontWeight={'regular'}
													fontSize={[
														'0.8rem',
														'1.3rem',
													]}
													w={'80%'}
													h={'7.5dvh'}
													display={'flex'}
													justifyContent={'center'}
													flexDir={
														window.innerHeight >
														window.innerWidth
															? 'column'
															: 'row'
													}
													lineHeight={1}
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
				w={'80%'}
				bottom={'13%'}
				bg={'#ffffff30'}
				pos={'absolute'}
				h={windowH * 0.033}
				borderRadius={'full'}
				opacity={isShowForm ? 1 : 0}
				transition={'opacity 4s ease'}
			>
				<Box
					h={'100%'}
					bg={'#ffffff60'}
					borderRadius={'full'}
					w={`${(qIndex / 7) * 100}%`}
				/>
			</Box>
		</Box>
	);
};

export default QuestionPage;
