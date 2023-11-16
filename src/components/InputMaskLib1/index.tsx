import {useState} from 'react';
import {TextInputProps} from 'react-native';
import MaskInput from 'react-native-mask-input';

import { 
  Container,
  IconContainer,
  InputText,
  Icon
} from './styles';

const CPF_MASK = [/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/];
const CNPJ_MASK = [/\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "/", /\d/, /\d/, /\d/,/\d/, "-", /\d/, /\d/];
const PHONE_MASK = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
const CEP_MASK = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

interface Props extends TextInputProps{
  iconName:"mail" | "lock" | "edit";
  mask: 'cep' |'phone' | 'cpf' | 'cnpj';
  inputMaskChange: (valor:string) => void;
}
export function InputMaskLib1({iconName, mask,inputMaskChange, ...rest}:Props){
  const [isFocused, setIsFocused] = useState(false);
   
  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
    
  }


  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Icon 
          name={iconName}
          size={24}
          isFocused={isFocused}
        />
      </IconContainer>
     
      <InputText
        onChangeText={(masked, unmasked) => {
          inputMaskChange(masked); 
        }}
        mask={()=>{
          if(mask === 'cpf'){
            return CPF_MASK;
          }else if (mask === 'cnpj'){
            return CNPJ_MASK;
          }else if (mask === 'phone'){
            return PHONE_MASK;
          }else{
            return CEP_MASK;
          }
        }}
        {...rest}     
      />   
    </Container>
  );
}
