import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login  from '../pages/Login'
import CadastroCard  from '../pages/CadastroCard'
import Home from '../pages/Home'
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
        initialRouteName='Login'
        >
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false}}
            />
             <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />
             <Stack.Screen
                name='CadastroCard'
                component={CadastroCard}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>       
    )
}