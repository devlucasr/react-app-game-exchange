import React, { useState } from 'react';
import {
  Title,
  ContainerMain,
  Input,
  ButtonSubmit,
  TextButton,
  ContainerTitle,
  Check,
  ContainerCheck,
  ContainerForm,
  ContainerDoBotao
} from './styles';
import Header from '../../../components/HeaderCadastroCard';
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native'
import { db } from '../../services/connectionFirebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from '../../services/connectionFirebase'

function CadastroCard() {
  const navigation = useNavigation();
  const [checkedValor, setCheckedValor] = useState(false);
  const [checkedTroca, setCheckedTroca] = useState(false);

  const [nomeGame, setNomeGame] = useState('');
  const [nomeConsole, setNomeConsole] = useState('');
  const [valorGame, setValorGame] = useState(30);
  
  //Busca email logado no momento
  const auth = getAuth();
  const user = auth.currentUser;
  const cadastradoPor = user.email


 function cadastro (){
  addDoc(collection(db, "cards"), {
    cadastradoPor: cadastradoPor,
    nomeGame: nomeGame,
    nomeConsole: nomeConsole,
    aceitaVenda: checkedValor,
    aceeitaTroca: checkedTroca,
    valorGame: valorGame,
    data_criacao: serverTimestamp()
  })
  .then(() => alert('Cadastrado com sucesso'))
 }

  return (
    <View style={styles.container}>
      <Header/>
      <ContainerTitle>
        <Title>Cadastro do Anuncio</Title>
      </ContainerTitle>
      <ContainerMain>
        <ContainerForm>
          <Title style={styles.title}>Preencha as informações do Anúncio</Title>
          <Input placeholderTextColor="black" placeholder="Nome do Game" onChangeText={setNomeGame} maxLength={30}></Input>
          <Input placeholderTextColor="black" placeholder="Console" onChangeText={setNomeConsole} maxLength={10}></Input>
          <ContainerCheck style={styles.containercheck}>
            <Check style={styles.check}>
              <Text style={styles.checkText}>Aceita troca?</Text>
                <CheckBox
                  title="Eu aceito os termos de uso do aplicativo"
                  value={checkedTroca}
                  onValueChange={setCheckedTroca}
                  size='10'
                  color={checkedTroca ? '#008000' : '#FF0000'}
                  style={styles.buttonCheck}
                /> 
            </Check>
            <Check style={styles.check}>
              <Text style={styles.checkText}>Aceita Venda?</Text>
                <CheckBox
                  title="Eu aceito os termos de uso do aplicativo"
                  value={checkedValor}
                  onValueChange={setCheckedValor}
                  color={checkedValor ? '#008000' : '#FF0000'}
                  style={styles.buttonCheck}
                /> 
            </Check>
          </ContainerCheck>
          { checkedValor && (
            <Input placeholderTextColor="black" placeholder="Valor" onChangeText={setValorGame} keyboardType= 'numeric' maxLength={6}></Input>
            )
          }
           <ButtonSubmit onPress={cadastro} >
              <TextButton>Cadastrar</TextButton>
          </ButtonSubmit>
        </ContainerForm>
        <ContainerDoBotao style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao}>
            <Icon name='home' size={40} color='black' onPress={() => navigation.navigate('Home')}/>
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CadastroCard')}>
            <Icon style={styles.icone} name='pluscircleo' size={40} color='black'/>
            <Text>Cadastrar Anúncio</Text>
          </TouchableOpacity>
        </ContainerDoBotao>
      </ContainerMain>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBotao: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    position: 'absolute',
    top: '37%',
  },
  container: {
    backgroundColor: '#000',
  },
  botao: {
    marginRight: 180,
    marginLeft: 10,
  },
  icone:{
    marginLeft: 45,
  },
  check:{
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '5%',
  },
  containercheck:{
    display: 'flex',
    flexDirection: 'row',
  },
  buttonCheck:{
    marginTop: '1%',
  },
  checkText:{
    fontSize: 17,
    paddingBottom: 20,
  },
  title:{
    color: '#000',
    fontSize: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  }
});


export default CadastroCard;