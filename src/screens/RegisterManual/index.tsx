import {useState} from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';
import { InputMask } from '../../components/InputMask';
import { InputMaskLib1 } from '../../components/InputMaskLib1';


import {
  validateEmail,
  validaCpf,
  validatePassword, 
  validateName,
  validaCnpj
} from '../../utils/validations';

import { 
  Container,
  Header,
  SubTitle,
  Form,
  Footer,
  Title,
} from './styles';


export function RegisterManual() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');


  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCpf, setErrorCpf] = useState('');
  const [errorCnpj, setErrorCnpj] = useState('');


  function handleName(text:string){
    setName(text);
    setErrorName('');
  }
  function handleEmail(text:string){
    setEmail(text);
    setErrorEmail('');
  }
  function handlePassword(text:string){
    setPassword(text);
    setErrorPassword('');
  }
  function handleCpf(text:string){
    setCpf(text);
    setErrorCpf('');
  }
  function handleCnpj(text:string){
    setCnpj(text);
    setErrorCnpj('');
  }

  function validaCampos(){
    let error = false;
    if(!validateEmail(email)){
      setErrorEmail("Preencha seu email corretamente")
      error=true;
    }
    if(!validaCpf(cpf)){
      setErrorCpf("Preencha seu cpf corretamente");
      error=true;
    }
    if(!validaCnpj(cnpj)){
      setErrorCnpj("Preencha seu cnpj corretamente");
      error=true;
    }
    if(!validatePassword(password)){
      setErrorPassword("Preencha seu password corretamente");
      error=true;
    }
    if(!validateName(name)){
      setErrorName("O nome tem que ter no mínimo 3 caracteres");
      error=true;
    }

    return !error;
  }

  function register(){
    if(validaCampos()){
      let data ={
        email,
        cpf,
        password,
        name,
        cnpj
      }

      Alert.alert(
        'cadastro realizado com sucesso', 
        `${data.email} ${data.name} ${data.cpf} ${data.cnpj}`,
        [
          {text:'ok',}
        ]
      );
    }
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Header>
            <Title>Bem vindo ao App - IFPB</Title>

            <SubTitle>Faça seu cadastro!</SubTitle>
          </Header>

          <Form>
            <Input 
              iconName="edit"
              placeholder="Digite seu nome"
              autoCorrect={false}/* não fica corrigindo palavras */
              autoCapitalize="words" /* não fica induzindo a colocar a primeira letra maiúscula */
              onChangeText={(text)=>handleName(text)}
              value={name}
            />
                {
                  errorName.length > 0 && <ErrorMessage description={errorName}/>
                }

            <Input 
              iconName="mail"
              placeholder="Digite seu E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none" 
              onChangeText={handleEmail}
              value={email}
            />
                {
                  errorEmail.length > 0 && <ErrorMessage description={errorEmail}/>
                }

            <Input 
              iconName="lock"
              placeholder="Digite sua Senha"
              onChangeText={handlePassword}
              value={password}
            />
                {
                  errorPassword.length > 0 && <ErrorMessage description={errorPassword}/>
                }

            <InputMask
              mask='cpf' 
              iconName="edit"
              placeholder="Digite seu CPF"
              inputMaskChange={handleCpf}
              value={cpf}
              keyboardType="numeric"

            />
                {
                  errorCpf.length > 0 && <ErrorMessage description={errorCpf}/>
                }

            <InputMaskLib1
              mask='cnpj' 
              iconName="edit"
              placeholder="Digite seu CNPJ"
              inputMaskChange={handleCnpj}
              value={cnpj}
              keyboardType="numeric"
            />
                {
                  errorCnpj.length > 0 && <ErrorMessage description={errorCnpj}/>
                }
          </Form>

          <Footer>
            <Button title="Cadastrar" onPress={register}/>
          </Footer>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}