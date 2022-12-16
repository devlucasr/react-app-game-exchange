import React, { cloneElement } from "react";
import {View, TouchableOpacity, StyleSheet, Text, Button, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/connectionFirebase";

function ListCards({data}){
    const imagens = {
       imagemPs4: require('../../../assets/imagens/ps4.png'),
       imagemPs3: require('../../../assets/imagens/ps3.png'),
       imagemXboxOne:require('../../../assets/imagens/xbox-one.png'),
    }

    async function deletaCard(){
        await deleteDoc(doc(db, "cards", data.id))
        .then(alert('Anúncio excluido com sucesso'))
        .catch((error) => {
            if(data.id === ''){
                alert('Cadastro já excuido')
            }
        })
    }
    
    return(
        <View style={styles.containerScroll}>
            <View style={styles.listItem}>
                <View style={styles.imagem}>
                    {data.ps3 ? <Image source={imagens['imagemPs3']}/> : "" 
                    
                    }
                    {data.ps4 ? <Image source={imagens['imagemPs4']}/> : "" 
                    
                    }
                    {data.xboxOne ? <Image source={imagens['imagemXboxOne']}/> : "" 
                    
                    } 
                    <Text style={styles.itemText}>{data.nomeGame}</Text>
                    <View style={styles.itemDesc}>
                    {data.valorGame ? <Text style={{color: 'white', fontSize: 25, marginTop: '10%', fontWeight: "bold"}}>R$ {data.valorGame}</Text>: ""}
                </View>
            </View>
                <View style={styles.tags}>
                    {data.valorGame ? <TouchableOpacity style={styles.botao}><Text style={styles.textBotao}>Venda</Text></TouchableOpacity> : ""}
                    { data.aceitaTroca ? <TouchableOpacity style={styles.botao2}><Text style={styles.textBotao2}>Troca</Text></TouchableOpacity> : ""}  
                </View> 
                <View style={styles.delete}>
                    <TouchableOpacity onPress={() => {deletaCard()}}><Icon name="delete" size={40} color='#bdcdd0'></Icon></TouchableOpacity>
                </View>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerScroll:{
        backgroundColor: '#30323D',
        padding: 20,
        borderRadius: 20,
        margin: 10,
        width: '90%',
        height: 200,
        marginLeft: '5%',
    },
    listItem:{
        flexDirection: 'row',
    },
    itemText:{
        color: 'white',
        fontSize: 20,
        marginTop: 30,
        textAlign: 'center',
        width: '80%'
    },
    botao:{
        borderRadius: 30,
        padding: 10,
        width: '100%',
        margin: 5,
        backgroundColor: '#2d9b23',
    },
    botao2:{
        borderRadius: 30,
        width: '100%',
        margin: 5,
        padding: 10,
        backgroundColor: '#a50501',
    },
    tags:{
        marginLeft: '8%',
        marginTop: '5%',
    },
    textBotao:{
        fontSize: 20, 
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
    },
    textBotao2:{
        fontSize: 20, 
        textAlign: "center",
        color: 'white',
        fontWeight: 'bold',
    },
    imagem:{
        width: '50%',
        height: '100%',
        alignItems: 'center',
        marginBottom: 4,
    },
    delete:{    
        marginTop: 55,
        marginLeft: '3%',
    }
})

export default ListCards;