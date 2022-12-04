import React, { useState } from 'react';
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  ContainerCheck
} from './styles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet } from 'react-native'
import CheckBox from 'expo-checkbox';


function Login() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [errorCpf, setErrorCpf] = useState('')
  const [errorSenha, setErrorSenha] = useState('');
  const cpfCorreto = 51950721833;
  const senhaCorreta = 'julialinda';

  function ValidaFormLogin () {
    if(cpf === ''&& senha === ''){
      alert('Preencha o campo CPF e Senha')
    }
    else if(cpf === ''){
      alert('Preencha o campo CPF')
    }else if(senha === ''){
      alert('Preencha o campo senha')
    }else if(!isChecked){
      alert('Aceite os termos')
    }else if(cpf === cpfCorreto || senha === senhaCorreta){
      alert('Logado com sucesso')
      navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
      })
    }else{
      alert('Credenciais inválidas')
    }   
  }
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input
          placeholderTextColor="black"
          placeholder="CPF"
          onChangeText={setCpf}
          value={cpf}
          errorMenssage={errorCpf}
        />
        <Input
          placeholderTextColor="black"
          placeholder="Senha"
          secureTextEntry
          onChangeText={setSenha}
          value={senha}
          errorMenssage={errorSenha}
        />
        <ContainerCheck style={styles.Containercheck}>
          <CheckBox
            title="Eu aceito os termos de uso do aplicativo"
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#008000' : '#FF0000'}
          />
          <Text style={styles.check}>Eu aceito os termos de uso</Text>
        </ContainerCheck>
        <ButtonSubmit onPress={ValidaFormLogin}>
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

const styles = StyleSheet.create({
  Containercheck: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  check: {
    marginLeft: 10,
  }
});


export default Login;