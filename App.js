import React,{ useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
      <StatusBar backgroundColor='white' barStyle='light-content'/>
    </NavigationContainer>
  );
}
