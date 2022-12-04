import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
`

export const Container = styled.View`
  flex: 1.6;
  justify-content: center;
  align-items: center;
  width: 90%;
  border-radius: 50px;
  background-color: white;
`

export const Title = styled.Text`
  color: black;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
`

export const Input = styled.TextInput`
  border: 1px solid black;
  margin-bottom: 14px;
  padding: 15px 20px;
  color: black;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: black;
  border-radius: 20px;
  width: 90%;
  padding: 20px;
  align-items: center;
`

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`
export const ContainerCheck = styled.View`

`