import React, { cloneElement } from "react";
import {View, TouchableOpacity, StyleSheet, Text, Button, Image} from 'react-native'

function ListCards({data}){
    const imagens = {
       imagemPs4: require('../../../assets/imagens/ps4.png'),
       imagemPs3: require('../../../assets/imagens/ps3.png'),
       imagemXboxOne:require('../../../assets/imagens/xbox-one.png'),
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
                </View>
                <View style={styles.itemDesc}>
                    {data.valorGame ? <Text style={{color: 'white', fontSize: 25, marginTop: 80, fontWeight: "bold", textAlign: "center"}}>R$ {data.valorGame}</Text>: ""}
                </View>
                <View>
                    <View style={styles.tags}>
                        {data.valorGame ? <TouchableOpacity style={styles.botao}><Text style={styles.textBotao}>Venda</Text></TouchableOpacity> : ""}
                        { data.aceitaTroca ? <TouchableOpacity style={styles.botao2}><Text style={styles.textBotao2}>Troca</Text></TouchableOpacity> : ""}  
                    </View>
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
        height: 150,
        marginLeft: '5%',
    },
    listItem:{
        flexDirection: 'row',
    },
    itemText:{
        color: 'white',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        
    },
    itemDesc:{
        width: '32%',
        height: '100%',
        marginLeft: 2,
    },
    botao:{
        borderRadius: 30,
        width: '50%',
        padding: 10,
        width: '100%',
        margin: 5,
        backgroundColor: '#2d9b23',
    },
    botao2:{
        borderRadius: 30,
        width: '50%',
        width: '100%',
        margin: 5,
        padding: 10,
        backgroundColor: '#a50501',
    },
    tags:{
        marginLeft: '5%',
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
        width: '35%',
        height: '100%',
    }
})

export default ListCards;