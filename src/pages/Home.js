import { useState } from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import StyleSheet from 'react-native-media-query'
import MainButton from '../components/Main/mainButton'

const Home = ({ navigation }) => {
  const [width, setwidth] = useState(Dimensions.get('window').width)
  Dimensions.addEventListener('change', (e) => setwidth(e.window.width))

  return (
    <ScrollView
      showsVerticalScrollIndicator={width > 800 ? true : false}
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
      dataSet={{ media: ids.main }}
      style={styles.main}
    >
      {width > 800 ? (
        <>
          <Text style={styles.hello}>ДОБРО ПОЖАЛОВАТЬ В LOTUS CLUB!</Text>
          <Image style={[styles.img, { height: undefined, maxWidth: 640 }]} source={require('../img/lotusweb.png')} />
        </>
      ) : (
        <Image style={[styles.img, { height: undefined }]} source={require('../img/lotus.png')} />
      )}
      <Text style={styles.text} dataSet={{ media: ids.text }}>
        Площадка для новых знакомств и выстраивания гармоничных и серьезных отношений между людьми, которым важен
        индивидуальный подход и профессионализм.{'\n\n'}Место качественной организации мероприятий командой
        профессионалов, которая возьмёт на себя все технические моменты.{'\n\n'}Сообщество близких по духу деловых
        людей, которые ориентированы на личностное развитие и ценят важность открытого общения друг с другом.{'\n\n'}
        Пространство для получения новой информации и изменения себя, своего образа, мышления и восприятия.
      </Text>
      <View style={styles.buttonWrapper}>
        <MainButton
          title='Зарегистрироваться'
          myStyle={width > 800 && { backgroundColor: 'transparent', borderColor: '#fff', borderRadius: 50 }}
          myTextStyle={width > 800 && { color: '#fff' }}
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    </ScrollView>
  )
}

const { ids, styles } = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
    '@media (min-width: 800px)': {
      backgroundColor: 'transparent',
      margin: 0,
    },
  },
  img: { width: '100%', aspectRatio: 2, marginTop: 20, resizeMode: 'contain' },
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 7.5,
    '@media (min-width: 800px)': {
      color: '#fff',
      textAlign: 'left',
      maxWidth: 800,
    },
  },
  buttonWrapper: { flexGrow: 1, justifyContent: 'flex-end', width: '100%', paddingBottom: 7.5 },
  hello: { textAlign: 'center', color: '#fff', fontSize: 40, marginVertical: 40 },
})
export default Home
