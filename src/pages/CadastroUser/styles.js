import styled from 'styled-components/native';


export const ContainerMain = styled.View`
  height: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
  align-items: center;
`
export const ContainerForm = styled.View`
  flex: 1;
  margin-bottom: 400;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50px;
`

export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const Input = styled.TextInput`
  border: 1px solid black;
  margin-bottom: 10px;
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
export const ButtonSubmitFooter = styled.View`
  width: 50%;
  background-color: blue;
  align-items: center;
`