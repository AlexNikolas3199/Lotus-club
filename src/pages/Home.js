import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/header'
import MainButton from '../components/Main/mainButton'
import MainWrapper from '../components/Main/mainWrapper'

const Home = ({ navigation }) => {
  return (
    <MainWrapper>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.main}>
        <Image style={styles.img} source={require('../img/lotus.png')} />
        <Text style={styles.text}>
          Площадка для новых знакомств и выстраивания гармоничных и серьезных отношений между людьми, которым важен
          индивидуальный подход и профессионализм.{'\n\n'}Место качественной организации мероприятий командой
          профессионалов, которая возьмёт на себя все технические моменты.{'\n\n'}Сообщество близких по духу деловых
          людей, которые ориентированы на личностное развитие и ценят важность открытого общения друг с другом.{'\n\n'}
          Пространство для получения новой информации и изменения себя, своего образа, мышления и восприятия.
        </Text>
        <View style={styles.buttonWrapper}>
          <MainButton title='Зарегистрироваться' onPress={() => navigation.navigate('Profile')} />
        </View>
      </ScrollView>
    </MainWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  img: { width: '100%', height: undefined, aspectRatio: 2, marginTop: 20, resizeMode: 'contain' },
  text: { textAlign: 'center', fontSize: 16, paddingBottom: 7.5 },
  buttonWrapper: { flexGrow: 1, justifyContent: 'flex-end', width: '100%', paddingBottom: 7.5 },
})
export default Home
