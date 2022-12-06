import React from 'react';
import { Image, StyleSheet,TouchableOpacity, Text  } from 'react-native';
import { Container } from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


function HeaderHome() {
  const navigation = useNavigation();
  return(
    <Container style={styles.container}>
      <TouchableOpacity>
        <Icon name='logout' size={35} color='white' onPress={() => navigation.navigate('Login')} style={styles.icone}/>
        <Text style={styles.texto}>Sair</Text>
      </TouchableOpacity>
      <Image
      style={styles.logo}
      source={require('../../assets/imagens/Logo.png')}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 210,
    height: 100,
    marginRight: 67,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  icone:{
    paddingTop: 10,
    marginRight: 37,
  },
  texto:{
    color: 'white',
    marginLeft: 3,
  }
});

export default HeaderHome;