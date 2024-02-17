import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';
import foundations from './foundations';
import fonts from './typography/fonts';

const theme = extendTheme({
	...defaultTheme,
	...fonts,
	...foundations,
	styles: {
		global: {
			body: {
				color: 'black',
				fontFamily: '"Noto sans thai", sans-serif;',
			},
		},
	},
});
export default theme;
