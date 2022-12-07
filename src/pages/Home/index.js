import React from 'react';
import {
    Title,
    ContainerMain,
    ContainerTitle,
    ContainerDoBotao
} from './styles';
import HeaderHome from '../../../components/HeaderHome';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <HeaderHome style={styles.header} />
            <ContainerTitle>
                <Title>Home</Title>
            </ContainerTitle>
            <ContainerMain>
                <ContainerDoBotao style={styles.containerBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                        <Icon name='home' size={40} color='black'/>
                        <Text>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('CadastroCard')}>
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },
    icone:{
        marginLeft: 45,
        
    }
});


export default Home;