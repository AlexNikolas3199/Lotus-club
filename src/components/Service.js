import { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainButton from './Main/mainButton'

const Service = ({ title, img }) => {
  const [isClick, setIsClick] = useState(false)
  return (
    <View style={styles.box}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => setIsClick(!isClick)}>
        <ImageBackground source={img} resizeMode='cover' borderRadius={12} style={styles.image}>
          <Text style={styles.text}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ height: isClick ? 'auto' : 0, margin: 0, paddingHorizontal: 15 }}>
        <Text style={{ paddingTop: 15, paddingBottom: 7.5 }}>
          Работа над собой, своим сознанием и внутренним миром невозможна без консультаций и тренингов с психологами и
          коучами.{'\n\n'}Наши специалисты обладают высоким уровнем профессионализма, имеют необходимые для работы
          личные качества — эмпатия, эмоциональная устойчивость, тактичность, развитый общий и эмоциональный интеллект и
          желание помочь каждому клиенту.{'\n\n'}Наши психологи:{'\n\n'}• проведут анализ Вашего психологического
          состояния и психологическую диагностику{'\n\n'}• окажут психологическую помощь по разрешению внутриличностных
          проблем{'\n\n'}• помогут Вам обрести гармонию с собой и окружающим миром{'\n\n'}Наши коучи:{'\n\n'}• помогут
          найти решение проблем и направление, в котором Вам необходимо двигаться{'\n\n'}• посодействуют повышению Ваших
          результативности в достижении целей, эффективности и качества жизни клиента в любой её сфере (личностное
          развитие, карьера, финансы, отношения){'\n\n'}• дадут возможность Вам придти к самостоятельным умозаключениям
          {'\n\n'}• помогут Вам раскрыть и реализовать собственный потенциал{'\n\n'}• дадут необходимую мотивацию для
          достижения Вами сформулированных целей в жизни и работе
        </Text>
        <MainButton title='Выбрать специалиста' myStyle={{ marginBottom: 15 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.86,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
})

export default Service
