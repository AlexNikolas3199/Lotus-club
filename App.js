import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import Header from './src/components/Header/header'
import MainWrapper from './src/components/Main/mainWrapper'
import Trening from './src/components/Event'
import Home from './src/pages/Home'
import Loader from './src/pages/Loader'
import Profile from './src/pages/Profile'
import Services from './src/pages/Services'
import Auth from './src/pages/sign/auth'
import CompleteSignUp from './src/pages/sign/CompleteSignUp'
import Confirmation from './src/pages/sign/confirmation'
import Specialists from './src/pages/Specialists'
import Training from './src/pages/Training'
import client from './src/utils/apollo'
import AboutLektor from './src/pages/AboutLektor'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={{ colors: { background: 'transparent' } }}>
        <MainWrapper>
          <Header />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Loader' component={Loader} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Training' component={Training} />
            <Stack.Screen name='AboutLektor' component={AboutLektor} />
            <Stack.Screen name='Services' component={Services} />
            <Stack.Screen name='Specialists' component={Specialists} />
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='Сonfirmation' component={Confirmation} />
            <Stack.Screen name='CompleteSignUp' component={CompleteSignUp} />
          </Stack.Navigator>
        </MainWrapper>
      </NavigationContainer>
      <StatusBar barStyle='light-content' />
    </ApolloProvider>
  )
}
