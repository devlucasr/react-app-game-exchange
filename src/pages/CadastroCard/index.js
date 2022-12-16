import React, { useState } from 'react';
import { Title, ContainerMain, Input, ButtonSubmit, TextButton, ContainerTitle, Check, ContainerCheck, ContainerForm, ContainerDoBotao
} from './styles';
import Header from '../../../components/HeaderCadastroCard';
import Footer from '../../../components/Footer'
import CheckBox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity,Text, ActivityIndicator, Image } from 'react-native'
import { db } from '../../services/connectionFirebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

function CadastroCard() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [checkedPS4, setCheckedPS4] = useState(false);
  const [checkedPS3, setCheckedPS3] = useState(false);
  const [checkedXone, setCheckedXone] = useState(false);
  const [checkedValor, setCheckedValor] = useState(false);
  const [checkedTroca, setCheckedTroca] = useState(false);
  
  const [nomeGame, setNomeGame] = useState('');
  const [valorGame, setValorGame] = useState('');
  
  //Busca email logado no momento
  const auth = getAuth();
  const user = auth.currentUser;
  const cadastradoPor = user.email


  //Função valida se os campos do form forão preenchidos
  function validaForm(){
    setLoading(true)
    if(nomeGame === ''){
      alert('Preencha o nome do Game')
      setLoading(false)
    }else if(!checkedPS3 && !checkedPS4 && !checkedXone){
      alert('Selecione 1 console')
      setLoading(false)
    }else if(checkedPS4 && checkedPS3 && checkedXone){
      alert('Selecione 1 console')
      setLoading(false)
    }else if(checkedPS4 && checkedPS3){
      alert('Selecione 1 console')
      setLoading(false)
    }else if(checkedPS4 && checkedXone){
      alert('Selecione 1 console')
      setLoading(false)
    }else if(checkedPS3 && checkedXone){
      alert('Selecione 1 console')
      setLoading(false)
    }

    else if(!checkedTroca && !checkedValor){
      alert('Selecione ao menos um tipo de negociação')
      setLoading(false)
    }
    else if(checkedValor && valorGame === ''){
      alert('Preencha o valor do Game')
      setLoading(false)
    }else{
      cadastro()
    }
  }

 function cadastro (){
  addDoc(collection(db, "cards"), {
    cadastradoPor: cadastradoPor,
    nomeGame: nomeGame.toUpperCase(),
    aceitaVenda: checkedValor,
    aceitaTroca: checkedTroca,
    ps4: checkedPS4,
    ps3: checkedPS3,
    xboxOne : checkedXone,
    valorGame: valorGame,
    data_criacao: serverTimestamp()
  })
  .then(() => setLoading(false))
  .then(() => alert('Cadastrado com sucesso'))
  .then(() => {navigation.reset({routes: [{name: "MeusCards"}]})})
  .then(() => setNomeGame(''), setValorGame(''))
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
          <Input placeholderTextColor="black" placeholder="Nome do Game" value={nomeGame} onChangeText={setNomeGame} maxLength={20}></Input>
          <View style={styles.containerCheckGames}>
            <CheckBox
              style={styles.checkGames}
              value={checkedPS4}
              onValueChange={setCheckedPS4}
              color={checkedPS4 ? '#007EC1' : '#000'}
            />
            <CheckBox
              style={styles.checkGames}
              value={checkedPS3}
              onValueChange={setCheckedPS3}
              color={checkedPS3 ? '#2F2F2F' : '#000'}
            /> 
            <CheckBox
              style={styles.checkGames}
              value={checkedXone} 
              onValueChange={setCheckedXone}
              color={checkedXone ? '#007F44' : '#000'}
            />
          </View>
          <View style={styles.imagem}>
            <Image
              style={{marginRight: '3%'}}
              source={require('../../../assets/imagens/ps4.png')}
            />

            <Image
              style={{marginRight: '3%'}}
              source={require('../../../assets/imagens/ps3.png')}
              />
            <Image
              source={require('../../../assets/imagens/xbox-one.png')}
            />
          </View>
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
            <Input placeholderTextColor="black" placeholder="Valor" value={valorGame} onChangeText={setValorGame} keyboardType= 'numeric' maxLength={3}></Input>
            )
          }
           <ButtonSubmit onPress={validaForm} disabled={loading}>
            { loading 
              ? <ActivityIndicator size={30} color='#FFFFFF'/>
              : <TextButton>Cadastrar</TextButton>
            }  
          </ButtonSubmit>
        </ContainerForm>
      </ContainerMain>
      <Footer/>
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
    height: '100%',
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
  containerCheckGames:{
    flexDirection: 'row',
    marginLeft: '25%',
  },
  checkGames:{
    marginRight: '33%',
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
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  imagem:{
    justifyContent: 'center',
    height: 80,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
  }
});


export default CadastroCard;