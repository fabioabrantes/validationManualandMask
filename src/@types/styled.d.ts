import 'styled-components/native';

import {THEME} from '../global/styles/themes';

/* crio meu ThemeType a partir do theme.ts */
type ThemeType = typeof THEME; 

declare module 'styled-components/native'{
/* DefaultTheme pertence ao styled-components */
  export interface DefaultTheme extends ThemeType {} 
}