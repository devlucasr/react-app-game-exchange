import React, { useState } from 'react';
import {
  Pagina,
  Title,
  ContainerMain,
  Input,
  ButtonSubmit,
  TextButton,
  ContainerTitle,
  Title2,
  ContainerFooter,
  ContainerForm,
  ContainerDoBotao
} from './styles';
import Header from '../../../components/HeaderCadastroCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity,Text } from 'react-native'

function CadastroCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header/>
      <ContainerTitle>
        <Title>Cadastro do Anuncio</Title>
      </ContainerTitle>
      <ContainerMain>
        <ContainerForm>
          <Input placeholderTextColor="black" placeholder="Nome do Game"></Input>
          <Input placeholderTextColor="black" placeholder="Descrição"></Input>
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
}
});


export default CadastroCard;