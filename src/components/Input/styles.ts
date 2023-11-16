import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

interface Props{
  isFocused?:boolean;
  isFilled?:boolean;
}

export const Container = styled.View`
  flex-direction:row;
  margin-bottom:8px;
`;

export const IconContainer = styled.View`
  height: 56px;
  width:55px;
  justify-content: center;
  align-items: center;
  margin-right:2px;
  background-color: ${({theme})=>theme.colors.background_secondary};
`;

export const Icon= styled(Feather)<Props>`
  font-size:24px;
  color: ${({theme,isFocused,isFilled})=>
    (isFocused) ? theme.colors.main : theme.colors.text_detail};
`;

export const InputText = styled(TextInput)<Props>`
  flex:1;

  background-color: ${({theme})=>theme.colors.background_secondary};
  color:${({theme})=>theme.colors.text};
  font-family: ${({theme})=>theme.fonts.body};
  font-size: 15px;
  padding: 0px 23px;
  border-bottom-width:1px;
  border-color:${({theme,isFocused,isFilled})=>
    (isFocused ||isFilled) ? theme.colors.main : theme.colors.text_detail};
`;

export const Button = styled.TouchableOpacity<Props>`
  border-bottom-width:1px;
  border-color:${({theme,isFocused})=>
    (isFocused) ? theme.colors.main : theme.colors.text_detail};
`;