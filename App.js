import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from './src/components/Header/header'
import MainWrapper from './src/components/Main/mainWrapper'
import Home from './src/pages/Home'
import Profile from './src/pages/Profile'
import Services from './src/pages/Services'
import Specialists from './src/pages/Specialists'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer theme={{ colors: { background: 'transparent' } }}>
      <MainWrapper>
        <Header />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Services' component={Services} />
          <Stack.Screen name='Specialists' component={Specialists} />
        </Stack.Navigator>
      </MainWrapper>
    </NavigationContainer>
  )
}
