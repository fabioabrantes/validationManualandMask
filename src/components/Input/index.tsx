import {useState} from 'react';
import {TextInputProps} from 'react-native';

import { 
  Container,
  IconContainer,
  InputText,
  Icon,
  Button
} from './styles';

export interface Props extends TextInputProps{
  iconName:"mail" | "lock" | "edit";
  value?:string;
}

export function Input({iconName,value, ...rest}:Props){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
 
  function handleInputFocus(){
    setIsFocused(true);
  }
  function handleInputBlur(){
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState =>!prevState);
  }

  return (
    <Container >
      <IconContainer>
        <Icon 
          name={iconName}
          size={24}
          isFocused={isFocused}
          isFilled={isFilled}
        />
      </IconContainer>

      {
        iconName === 'lock'?
          (
            <>
              <InputText
                isFocused={isFocused}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry = {isPasswordVisible}
                {...rest}
              />

              <Button
                activeOpacity={0.6}
                onPress={handlePasswordVisibilityChange}
                isFocused={isFocused}
              >
                <IconContainer>
                  <Icon 
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    isFocused={isFocused}
                  />
                </IconContainer>
              </Button>
            </>
          )
        : 
          (
            <InputText
              isFocused={isFocused}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              {...rest}
            />
          )
      }
    </Container>
  );
}
