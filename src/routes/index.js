import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login  from '../pages/Login'
import CadastroCard  from '../pages/CadastroCard'
import CadastroUser from '../pages/CadastroUser'
import Home from '../pages/Home'
import MeusCards from '../pages/MeusAnuncios'
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
                name='CadastroUser'
                component={CadastroUser}
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
            <Stack.Screen
                name='MeusCards'
                component={MeusCards}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>       
    )
}