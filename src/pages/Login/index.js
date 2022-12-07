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
import { Text, StyleSheet, ActivityIndicator, TouchableOpacity} from 'react-native'
import CheckBox from 'expo-checkbox';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/connectionFirebase'

function Login() {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  //Armazenamento dinamico dos dados inseridos
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
   
  //Função valida os dados e comparar com as credencias corretas
  function ValidaFormLogin(){
    setLoading(true)
    if(email === ''&& senha === ''){
      alert('Preencha o campo Email e Senha')
      setLoading(false)
    }
    else if(email === ''){
      alert('Preencha o campo Email')
      setLoading(false)
    }else if(senha === ''){
      alert('Preencha o campo senha')
      setLoading(false)
    }else if(!isChecked){
      alert('Aceite os termos')
      setLoading(false)
    }else{
      Logar(); 
    }
  }

   //Função que valida as credenciais do Usuário no Firebase
   async function Logar(){
    await signInWithEmailAndPassword(auth, email, senha)
    .then(value =>{
      navigation.reset({
        index: 0,
        routes: [{name: "Home"}]
      })
    })
    .catch(error => {
      console.log(error)
      if(error.code ==='auth/invalid-email'){
        alert('Email inválido')
      }else if(error.code === 'auth/wrong-password'){
        alert('Senha inválida')
      }else if(error.code == 'auth/user-not-found'){
        alert('Email não cadastrado')
      }
    })
    .finally(() => setLoading(false))
  }

  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title style={styles.title}>Login</Title>
        <Input
          placeholderTextColor="black"
          placeholder="Email"
          onChangeText={setEmail}
          keyboardType="email-address"
          maxLength={30}    
        />
        <Input
          placeholderTextColor="black"
          placeholder="Senha"
          secureTextEntry
          onChangeText={setSenha}
          maxLength={6}
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
        <ButtonSubmit style={styles.botoes} onPress={ValidaFormLogin} disabled={loading}
        >
        { loading 
          ? <ActivityIndicator size={30} color='#FFFFFF'/>
          : <TextButton>Entrar</TextButton>
        }  
        </ButtonSubmit>
        <ButtonSubmit onPress={() => navigation.navigate('CadastroUser')}>
          <TextButton>
            Cadastre-se
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  )
}

//Styles de alguns elementos do index.js
const styles = StyleSheet.create({
  Containercheck: {
    marginBottom: 15,
     
    display: 'flex',
    flexDirection: 'row',
  },
  check: {
    marginLeft: 10,
  },
  botoes:{
    marginBottom: 25,
  },
  title:{
    marginTop: 25,
  }
});


export default Login;