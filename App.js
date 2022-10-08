import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/pages/Home'
import Profile from './src/pages/Profile'
import Services from './src/pages/Services'
import Specialists from './src/pages/Specialists'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Services' component={Services} />
        <Stack.Screen name='Specialists' component={Specialists} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
