import I_5A3F76 from '../../assets/saved/5A3F76.png';
import I_7A4E6A from '../../assets/saved/7A4E6A.png';
import I_7E55D9 from '../../assets/saved/7E55D9.png';
import I_612D90 from '../../assets/saved/612D90.png';
import I_953E95 from '../../assets/saved/953E95.png';
import I_A18CC6 from '../../assets/saved/A18CC6.png';
import I_A740D9 from '../../assets/saved/A740D9.png';
import I_BE3AC4 from '../../assets/saved/BE3AC4.png';
import I_C88FDA from '../../assets/saved/C88FDA.png';
import I_ECD8F2 from '../../assets/saved/ECD8F2.png';

export const getImage = (colorcode: string) => {
	switch (colorcode) {
		case '5A3F76':
			return I_5A3F76;
		case '7A4E6A':
			return I_7A4E6A;
		case '7E55D9':
			return I_7E55D9;
		case '612D90':
			return I_612D90;
		case '953E95':
			return I_953E95;
		case 'A18CC6':
			return I_A18CC6;
		case 'A740D9':
			return I_A740D9;
		case 'BE3AC4':
			return I_BE3AC4;
		case 'C88FDA':
			return I_C88FDA;
		case 'ECD8F2':
			return I_ECD8F2;
		default:
			return I_5A3F76;
	}
};
