import { ApolloProvider } from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'react-native'
import Header from './src/components/Header/header'
import MainWrapper from './src/components/Main/mainWrapper'
import Home from './src/pages/Begin/Home'
import Loader from './src/pages/Begin/Loader'
import Profile from './src/pages/Profile/Profile'
import Auth from './src/pages/sign/auth'
import CompleteSignUp from './src/pages/sign/CompleteSignUp'
import Confirmation from './src/pages/sign/confirmation'
import client from './src/utils/apollo'
import AboutLektor from './src/pages/AboutLektor'
import History from './src/pages/Profile/History'
import MyEvent from './src/pages/Profile/MyEvent'
import SendEmail from './src/pages/Profile/SendEmail'
import Events from './src/pages/Events'

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
            <Stack.Screen name='History' component={History} />
            <Stack.Screen name='MyEvent' component={MyEvent} />
            <Stack.Screen name='SendEmail' component={SendEmail} />
            <Stack.Screen name='Training' component={Events} initialParams={{ type: 'TRAINING' }} />
            <Stack.Screen name='Services' component={Events} initialParams={{ type: 'SERVICE' }} />
            <Stack.Screen name='AboutLektor' component={AboutLektor} />
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
