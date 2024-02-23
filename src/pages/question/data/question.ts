import { UserType } from '@/layout/rootLayout';
import { Result, results } from '@/pages/result/data/result';

type Question = {
	question: string[];
	displayAnswer: string[][];
	answer: string[];
};

export const calculateResult = (user: UserType) => {
	const answers: number[] = [];

	switch (user.q1) {
		case '0':
			answers.push(1, 9);
			break;
		case '1':
			answers.push(6, 7);
			break;
		case '2':
			answers.push(3, 8);
			break;
		case '3':
			answers.push(2, 4);
			break;
		case '4':
			answers.push(5, 10);
			break;
	}
	switch (user.q2) {
		case '0':
			answers.push(8, 9);
			break;
		case '1':
			answers.push(3, 6);
			break;
		case '2':
			answers.push(2, 4);
			break;
		case '3':
			answers.push(5, 10);
			break;
		case '4':
			answers.push(1, 7);
			break;
	}

	switch (user.q3) {
		case '0':
			answers.push(2, 3);
			break;
		case '1':
			answers.push(8, 10);
			break;
		case '2':
			answers.push(1, 4);
			break;
		case '3':
			answers.push(5, 7);
			break;
		case '4':
			answers.push(6, 9);
			break;
	}

	switch (user.q4) {
		case '0':
			answers.push(3, 5);
			break;
		case '1':
			answers.push(6, 9);
			break;
		case '2':
			answers.push(1, 10);
			break;
		case '3':
			answers.push(2, 7);
			break;
		case '4':
			answers.push(4, 8);
			break;
	}

	switch (user.q5) {
		case '0':
			answers.push(1, 4);
			break;
		case '1':
			answers.push(6, 8);
			break;
		case '2':
			answers.push(2, 10);
			break;
		case '3':
			answers.push(3, 7);
			break;
		case '4':
			answers.push(5, 9);
			break;
	}

	switch (user.q6) {
		case '0':
			answers.push(3, 6);
			break;
		case '1':
			answers.push(2, 10);
			break;
		case '2':
			answers.push(4, 5);
			break;
		case '3':
			answers.push(1, 8);
			break;
		case '4':
			answers.push(7, 9);
			break;
	}

	switch (user.q7) {
		case '0':
			answers.push(3, 6);
			break;
		case '1':
			answers.push(9, 10);
			break;
		case '2':
			answers.push(2, 8);
			break;
		case '3':
			answers.push(1, 7);
			break;
		case '4':
			answers.push(4, 5);
			break;
	}
	answers.sort((r1, r2) => {
		return r1 - r2;
	});
	let max = 0;
	let cur: number = 0;
	let cnt = 0;
	let mxcnt = 0;
	answers.map((answer: number) => {
		if (answer !== cur) {
			if (cnt > mxcnt) {
				mxcnt = cnt;
				max = cur;
			}
			cnt = 0;
			cur = answer;
		}
		cnt++;
	});
	// sendResult(user, results[max - 1]);
	return results[max - 1];
};

export const sendResult = async (user: UserType, result: Result) => {
	if (
		user.name === undefined ||
		user.age === undefined ||
		user.gender === undefined ||
		user.q7 === undefined
	) {
		console.log('Incomplete Data');
		return;
	}
	const urlEnd = '&submit=Submit';
	const header =
		'https://docs.google.com/forms/d/e/1FAIpQLSd184nOmTloKgwk9BcODfggfO5XmChhGObbLgO3XudgO3VqHA/formResponse?usp=pp_url';
	const nameEntry = 585862135;
	const ageEntry = 1123252973;
	const genderEntry = 1192171345;
	const resultEntry = 1686108082;
	const url =
		header +
		'&entry.' +
		nameEntry +
		`=${user.name}` +
		'&entry.' +
		ageEntry +
		`=${user.age}` +
		'&entry.' +
		genderEntry +
		`=${user.gender}` +
		'&entry.' +
		resultEntry +
		`=${result.engname}` +
		urlEnd;
	await fetch(url);
};

export const questions: Question[] = [
	{
		question: ['ถ้าเปรียบความรักของคุณตอนนี้', 'เป็นสีคุณนึกถึงสีอะไร'],
		displayAnswer: [
			['สีเหลือง'],
			['สีน้ำตาล'],
			['สีม่วง'],
			['สีฟ้า'],
			['สีชมพู'],
		],
		answer: ['สีเหลือง', 'สีน้ำตาล', 'สีม่วง', 'สีฟ้า', 'สีชมพู'],
	},
	{
		question: ['ในวันสำคัญของคุณ คุณอยากได้', 'ช่อดอกไม้แบบไหนมากที่สุด'],
		displayAnswer: [
			['กุหลาบช่อใหญ่ดูหรูหรา'],
			['ช่อลาเวนเดอร์แซมด้วยสี', 'เขียวของใบสน'],
			['ดอกเดซี่ช่อเล็กๆน่ารัก', 'และเรียบง่าย'],
			['ดอกทานตะวันสี', 'เหลืองอร่าม'],
			['ดอกลิลลีสีขาว', 'มัดเชือกแบบน่ารัก'],
		],
		answer: [
			'กุหลาบช่อใหญ่ดูหรูหรา',
			'ช่อลาเวนเดอร์แซมด้วยสีเขียวของใบสน',
			'ดอกเดซี่ช่อเล็กๆน่ารักและเรียบง่าย',
			'ดอกทานตะวันสีเหลืองอร่าม',
			'ดอกลิลลีสีขาวมัดเชือกแบบน่ารัก',
		],
	},
	{
		question: [
			'ถ้าจะต้องอธิบายชีวิตของคุณด้วยฤดูต่างๆ',
			'ชีวิตของคุณเปรียบเสมือนฤดูอะไร',
		],
		displayAnswer: [
			['ฤดูร้อน'],
			['ฤดูหนาว'],
			['ฤดูฝน'],
			['ฤดูใบไม้ผลิ'],
			['ฤดูใบไม้ร่วง'],
		],
		answer: ['ฤดูร้อน', 'ฤดูหนาว', 'ฤดูฝน', 'ฤดูใบไม้ผลิ', 'ฤดูใบไม้ร่วง'],
	},
	{
		question: ['เวลาหลับตาลงก่อนนอน', 'คุณมักนึกถึงอะไร'],
		displayAnswer: [
			['เรื่องราวที่เกิดขึ้นในวันนี้'],
			['เรื่องที่จะเกิดขึ้นพรุ่งนี้'],
			['คนที่คุณคิดถึง'],
			['ไม่ได้นึกถึงอะไรเลย'],
			['เรื่องราวเก่าๆ ที่เคยเกิดขึ้น'],
		],
		answer: [
			'เรื่องราวที่เกิดขึ้นในวันนี้',
			'เรื่องที่จะเกิดขึ้นพรุ่งนี้',
			'คนที่คุณคิดถึง',
			'ไม่ได้นึกถึงอะไรเลย',
			'เรื่องราวเก่าๆ ที่เคยเกิดขึ้น',
		],
	},
	{
		question: ['“มันคงจะดีถ้า...”', 'เติมประโยคนี้ให้สมบูรณ์'],
		displayAnswer: [
			['มีใครสักคนเคียงข้าง', 'ฉันในวันที่เหนื่อยล้า'],
			['ได้กาแฟซักแก้ว', 'เพื่อทำให้รู้สึกสดชื่นขึ้น'],
			['มีเวลาว่างในวันหยุด', 'มากกว่านี้'],
			['ได้ปั่นจักรยานในสวน', 'กับครอบครัว'],
			['ได้กินอาหารอร่อยๆ', 'อย่างหนำใจ'],
		],
		answer: [
			'มีใครสักคนเคียงข้างฉันในวันที่เหนื่อยล้า',
			'ได้กาแฟซักแก้วเพื่อทำให้รู้สึกสดชื่นขึ้น',
			'มีเวลาว่างในวันหยุดมากกว่านี้',
			'ได้ปั่นจักรยานในสวนกับครอบครัว',
			'ได้กินอาหารอร่อยๆอย่างหนำใจ',
		],
	},
	{
		question: [
			'หากคุณเดินสำรวจเกาะแห่งหนึ่ง',
			'แล้วบังเอิญพบกับบ้านหลังหนึ่ง',
			'คุณคิดว่าบ้านหลังนั้นมีลักษณะแบบไหน',
		],
		displayAnswer: [
			['กระท่อมหลังเล็กๆ', 'พอที่จะหลบฝนได้'],
			['บ้านหนึ่งชั้นทั่วไป', 'ที่ดูอบอุ่นและน่าอยู่'],
			['คฤหาสน์สุดหรู', 'ตกแต่งแบบทันสมัย'],
			['บ้านร้างที่ทำจากไม้', 'ค่อนข้างทรุดโทรม'],
			['บ้านของชาวบ้าน', 'ที่มีต้นไม้อยู่ล้อมรอบ'],
		],
		answer: [
			'กระท่อมหลังเล็กๆพอที่จะหลบฝนได้',
			'บ้านหนึ่งชั้นทั่วไปที่ดูอบอุ่นและน่าอยู่',
			'คฤหาสน์สุดหรูตกแต่งแบบทันสมัย',
			'บ้านร้างที่ทำจากไม้ค่อนข้างทรุดโทรม',
			'บ้านของชาวบ้านที่มีต้นไม้อยู่ล้อมรอบ',
		],
	},
	{
		question: [
			'เมื่อถึงวันเกิดของคุณ ของขวัญ',
			'ที่คุณอยากได้มากที่สุดคืออะไร',
		],
		displayAnswer: [
			['เค้กน่ารักๆ ที่ประดับไป', 'ด้วยดอกไม้ที่คุณชอบ'],
			['ขนมเล็กๆ น้อยๆ', 'ไม่ต้องหวือหวา'],
			['เครื่องประดับ', 'ที่ทำจากหินหลากสี'],
			['ของแฮนด์เมด', 'ที่ทำจากใจ'],
			['ไม่ได้ต้องการอะไร', 'ขอแค่คนรักอยู่ด้วยก็พอ'],
		],
		answer: [
			'เค้กน่ารักๆ ที่ประดับไปด้วยดอกไม้ที่คุณชอบ',
			'ขนมเล็กๆ น้อยๆไม่ต้องหวือหวา',
			'เครื่องประดับที่ทำจากหินหลากสี',
			'ของแฮนด์เมดที่ทำจากใจ',
			'ไม่ได้ต้องการอะไร ขอแค่คนรักอยู่ด้วยก็พอ',
		],
	},
];
