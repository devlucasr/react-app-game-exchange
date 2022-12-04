import React from 'react';
import { Image, StyleSheet  } from 'react-native';
import { Container } from './styles';

const styles = StyleSheet.create({
  Logo: {
    width: 210,
    height: 100
  }
});

function HeaderCadastroCard() {
  return(
    <Container>
      <Image
      style={styles.Logo}
      source={require('../../assets/imagens/Logo.png')}
      />
    </Container>
  )
}

export default HeaderCadastroCard;