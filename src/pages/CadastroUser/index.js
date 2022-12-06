import React, { useState } from 'react';
import { Title, ContainerMain, Input, ButtonSubmit, TextButton, ContainerTitle, ContainerForm } from './styles';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/connectionFirebase';
import { stringify } from '@firebase/util';

function CadastroUser() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false);

  //Função valida os dados e comparar com as credencias corretas
  function ValidaFormCadastro() {
    setLoading(true)
    if (email === '' && senha === '') {
      alert('Preencha o campo Email e Senha')
      setLoading(false)
    }
    else if (email === '') {
      alert('Preencha o campo Email')
      setLoading(false)
    } else if (senha === '') {
      alert('Preencha o campo senha')
      setLoading(false)
    }else {
      cadastrar();
    }
  }

  //Função que cadastra o usuário no banco de dados
  async function cadastrar() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(value => {
        setLoading(false)
        navigation.reset({
          routes: [{ name: "Login" }]
        })
        const emailCadastrado = value.user.email
        alert(`Usuário ${emailCadastrado}\nCadastrado com sucesso!`)
      })
      .catch(error => {
        console.log(error)
        if (error.code === 'auth/email-already-in-use') {
          alert('Email já cadastrado')
          setLoading(false)
        } else if (error.code === 'auth/invalid-email') {
          alert('Formato incorreto!\n\nEx: Exemple@gmail.com')
          setLoading(false)
        }
        setLoading(false)
      })

  }

  return (
    <View style={styles.container}>
      <Header />
      <ContainerTitle>
        <Title>Cadastro de Usuário</Title>
      </ContainerTitle>
      <ContainerMain>
        <ContainerForm>
          <Title style={styles.title}>Para acesso a plataforma, cadastre seu email e senha.</Title>
          <Input placeholderTextColor="black" placeholder="Email" onChangeText={setEmail} keyboardType="email-address" maxLength={20}></Input>
          <Input placeholderTextColor="black" placeholder="Senha" onChangeText={setSenha} maxLength={6} secureTextEntry></Input>
          <ButtonSubmit onPress={ValidaFormCadastro} disabled={loading}>
          { loading 
          ? <ActivityIndicator size={30} color='#FFFFFF'/>
          : <TextButton>Cadastrar</TextButton>
        }    
          </ButtonSubmit>
        </ContainerForm>
      </ContainerMain>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  botao: {

  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  }
});


export default CadastroUser;