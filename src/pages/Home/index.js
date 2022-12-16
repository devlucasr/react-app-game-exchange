import React, { useState, useEffect } from 'react';
import {
    Title,
    ContainerMain,
    ContainerTitle,
    ContainerDoBotao,
    ContainerFlat
} from './styles';
import HeaderHome from '../../../components/HeaderHome';
import Footer from '../../../components/Footer'
import ListCards from './flatList'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View, TouchableOpacity, Text, FlatList} from 'react-native'
import { collection, getDocs} from "firebase/firestore"; 
import { db } from '../../services/connectionFirebase';

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        retornaTudo()
    },[])

   async function retornaTudo(){
        const querySnapshot = await getDocs(collection(db, "cards"));
        let array = []
        querySnapshot.forEach((doc) => {
            const card = {
                id: doc.data().data_criacao,
                nomeGame: doc.data().nomeGame,
                valorGame: doc.data().valorGame,
                ps4: doc.data().ps4,
                ps3: doc.data().ps3,
                xboxOne: doc.data().xboxOne,
                cadastradoPor: doc.data().cadastradoPor,
                aceitaTroca: doc.data().aceitaTroca,
                aceitaVenda: doc.data().aceitaVenda,
            };
            array.push(card)
        });
        setData(array)
    }

    console.log(data); 

    return (
        <View style={styles.container}>
            <HeaderHome style={styles.header} />
            <ContainerTitle>
                <Title>Anúncios</Title>
            </ContainerTitle>
            <ContainerMain>
                <ContainerFlat>
                    <FlatList 
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <ListCards data={item}/>}
                    />
                </ContainerFlat>
            </ContainerMain>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBotao: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: '5%',
        
    },
    container: {
        backgroundColor: '#000',
        height: '100%',
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