import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { RegisterManual } from './src/screens/RegisterManual';

import { Loading } from './src/components/Loading';

import {THEME} from './src/global/styles/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  }); 
  
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? <Loading/> : <RegisterManual/>} 
    </ThemeProvider>
  );
}
