import React, { useState, useEffect } from 'react';
import {
    Title,
    ContainerMain,
    ContainerTitle,
    ContainerDoBotao,
    ContainerFlat
} from './styles';
import HeaderHome from '../../../components/HeaderHome';
import ListCards from './flatList'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native'
import { collection, where, query, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../../services/connectionFirebase';

function MeusCards() {
    const navigation = useNavigation();
    const auth = getAuth();
    const user = auth.currentUser;
    const userLogado = user["email"]

    useEffect(() => {
        retornaCards()
    },[])

    const [cardsRetornados, setCardsRetornados] = useState([])
    const cards = query(collection(db, "cards"), where("cadastradoPor", "==", userLogado))

    async function retornaCards() {
        const querySnapshot = await getDocs(cards);
        let array = []
        querySnapshot.forEach((doc) => {
            const card = {
                id: doc.id,
                nomeGame: doc.data().nomeGame,
                valorGame: doc.data().valorGame,
                ps4: doc.data().ps4,
                ps3: doc.data().ps3,
                xboxOne: doc.data().xboxOne,
                cadastradoPor: doc.data().cadastradoPor,
                aceitaTroca: doc.data().aceitaTroca,
                aceitaVenda: doc.data().aceitaVenda
            };
            array.push(card)
        });
        setCardsRetornados(array)
    }

    return (
        <View style={styles.container}>
            <HeaderHome style={styles.header} />
            <ContainerTitle>
                <Title>Meus Anúncios</Title>
            </ContainerTitle>
            <ContainerMain>
                <ContainerFlat>
                    <FlatList
                        data={cardsRetornados}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListCards data={item} />}
                    />
                </ContainerFlat>
            </ContainerMain>
            <ContainerDoBotao style={styles.containerBotao}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Icon name='home' size={40} color='white' />
                    <Text style={{ color: 'white' }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 60 }} onPress={() => { navigation.navigate('MeusCards'), retornaCards() }}>
                    <Icon style={{ marginLeft: 30 }} name='documents' size={40} color='white' />
                    <Text style={{ color: 'white' }}>Meus Anúncios</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CadastroCard')}>
                    <Icon2 style={styles.icone} name='post-add' size={40} color='white' />
                    <Text style={{ color: 'white' }}>Cadastrar Anúncio</Text>
                </TouchableOpacity>
            </ContainerDoBotao>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBotao: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '6%',
    },
    container: {
        backgroundColor: '#000',
        height: '100%',
    },
    botao: {
        marginLeft: 40,

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },
    icone: {
        marginLeft: 45,

    }
});


export default MeusCards;