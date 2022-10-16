import { useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import MainButton from './Main/mainButton'
import StyleSheet from 'react-native-media-query'

const Service = ({ item, img }) => {
  const [isClick, setIsClick] = useState(false)
  return (
    <View dataSet={{ media: ids.box }} style={styles.box}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setIsClick(!isClick)}>
        <ImageBackground source={img} resizeMode='cover' borderRadius={12} style={styles.image}>
          <Text dataSet={{ media: ids.head }} style={styles.head}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ height: isClick ? 'auto' : 0, margin: 0, paddingHorizontal: 15 }}>
        <Text style={{ paddingTop: 15, paddingBottom: 7.5 }}>
          {'Дата: ' +
            new Date(item.date).toLocaleDateString() +
            '\n\nЛектор: ' +
            item.lektor +
            '\n\n' +
            item.description}
        </Text>
        <MainButton title='Выбрать специалиста' />
        <View style={{ height: 15 }} />
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
