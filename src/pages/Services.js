import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import Service from '../components/Service'
const { width } = Dimensions.get('window')

const Services = () => {
  let flexstyle
  if (width > 800)
    flexstyle = {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, ...flexstyle }}
      style={styles.main}
    >
      <Service title='Знакомства' img={require('../img/service1.png')} />
      <Service title='Психолг/Коуч' img={require('../img/service2.png')} />
      <Service title='Бизнес-клуб' img={require('../img/service3.png')} />
      <Service title='Имеджмейкер' img={require('../img/service4.png')} />
      {width <= 800 && <View style={{ height: 27.5 }} />}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
  },
})
export default Services
