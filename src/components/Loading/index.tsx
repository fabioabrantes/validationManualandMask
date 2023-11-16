import { ActivityIndicator } from 'react-native';

import {THEME} from '../../global/styles/themes';

import { Container } from './styles';

export function Loading(){
  
  return (
    <Container>
      <ActivityIndicator 
        color={THEME.colors.secondary}
        size="large"
      />
    </Container>
  );
}
