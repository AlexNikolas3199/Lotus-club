import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import MainButton from './Main/mainButton'
import StyleSheet from 'react-native-media-query'
import { useNavigation } from '@react-navigation/native'
import TodayDate from './TodayDate'

const Service = ({ item, onPress }) => {
  const nav = useNavigation()
  const [isClick, setIsClick] = useState(false)
  const lektor = item.specialist[0]

  return (
    <View dataSet={{ media: ids.box }} style={styles.box}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setIsClick(!isClick)}>
        <ImageBackground source={{ uri: item.image }} resizeMode='cover' borderRadius={12} style={styles.image}>
          <Text dataSet={{ media: ids.head }} style={styles.head}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ height: isClick ? 'auto' : 0, margin: 0, paddingHorizontal: 15 }}>
        <Text style={{ paddingTop: 15 }}>{'Дата: ' + TodayDate(new Date(item.date)) + '\n\n' + item.description}</Text>
        <View style={{ flexDirection: 'row', paddingVertical: 7.5, alignItems: 'center' }}>
          <Text>Лектор: </Text>
          <TouchableOpacity onPress={() => nav.navigate('AboutLektor', { lektor })} style={styles.lektor}>
            <Text>{lektor.name + ' ' + lektor.surname}</Text>
          </TouchableOpacity>
        </View>
        <MainButton onPress={onPress} myStyle={{ marginBottom: 15 }} title='Записаться' />
      </View>
    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  box: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    '@media (min-width: 800px)': {
      maxWidth: '23%',
    },
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.86,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lektor: {
    backgroundColor: '#fff',
    marginVertical: 7.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#313131',
    borderWidth: 2,
    borderRadius: 10,
  },
  head: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    '@media (min-width: 800px)': {
      fontSize: 25,
    },
  },
})

export default Service
