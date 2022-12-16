import React, { useState, useEffect } from 'react';
import {
    ContainerDoBotao,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View, TouchableOpacity, Text, FlatList } from 'react-native'
import atualiza from '../../src/pages/Home'

function Footer() {
const navigation = useNavigation();

    return (
        <ContainerDoBotao style={styles.containerBotao}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                <Icon name='home' size={40} color='white' />
                <Text style={{ color: 'white' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 60 }} onPress={() => navigation.navigate('MeusCards')}>
                <Icon style={{ marginLeft: 30 }} name='documents' size={40} color='white' />
                <Text style={{ color: 'white' }}>Meus Anúncios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CadastroCard')}>
                <Icon2 style={styles.icone} name='post-add' size={40} color='white' />
                <Text style={{ color: 'white' }}>Cadastrar Anúncio</Text>
            </TouchableOpacity>
        </ContainerDoBotao>
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


export default Footer;