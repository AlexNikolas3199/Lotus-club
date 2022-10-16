import { Image, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Loader = ({ navigation }) => {
  let token
  const getToken = async () => {
    token = await AsyncStorage.getItem('token')
  }
  getToken()
  const checkIsFirstStart = () => {
    console.log(token)
    if (!token) navigation.replace('Home')
    else {
      navigation.replace('Profile')
    }
  }
  setTimeout(checkIsFirstStart, 1000)
  return (
    <View style={styles.wrapper}>
      <Image style={styles.imageBack} source={require('../img/lotus.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  imageBack: {
    width: '70%',
    resizeMode: 'contain',
  },
})

export default Loader
