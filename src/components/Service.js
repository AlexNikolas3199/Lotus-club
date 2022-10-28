import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import MainButton from './Main/mainButton'
import StyleSheet from 'react-native-media-query'
import { useNavigation } from '@react-navigation/native'
import TodayDate from './TodayDate'

const Service = ({ item, onPress }) => {
  const nav = useNavigation()
  const [isClick, setIsClick] = useState(false)
  const lektors = item.specialist

  return (
    <View dataSet={{ media: ids.box }} style={styles.box}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setIsClick(!isClick)}>
        <ImageBackground source={{ uri: item.image }} resizeMode='cover' borderRadius={12} style={styles.image}>
          <Text dataSet={{ media: ids.head }} style={styles.head}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ height: isClick ? 'auto' : 0 }}>
        <Text style={{ paddingTop: 15, paddingHorizontal: 15 }}>{'Дата: ' + TodayDate(new Date(item.date)) + '\n\n' + item.description}</Text>
        <View style={styles.lektors}>
          <Text style={{ marginLeft: 7.5 }}>Лекторы:</Text>
          {lektors.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => nav.navigate('AboutLektor', { lektor: item })} style={styles.lektor}>
              <Text>{`${item.name} ${item.surname}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <MainButton onPress={onPress} myStyle={{ marginBottom: 15, marginHorizontal: 15 }} title='Записаться' />
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
  lektors: { flexDirection: 'row', paddingTop: 7.5, alignItems: 'center', flexWrap: 'wrap', paddingHorizontal: 7.5 },
  lektor: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 7.5,
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
