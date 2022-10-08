import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/header'
import MainWrapper from '../components/Main/mainWrapper'
import Service from '../components/Service'

const Services = ({ navigation }) => {
  return (
    <MainWrapper>
      <Header navigation={navigation} />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <Service title='Знакомства' img={require('../img/service1.png')} />
        <Service title='Психолг/Коуч' img={require('../img/service2.png')} />
        <Service title='Бизнес-клуб' img={require('../img/service3.png')} />
        <Service title='Имеджмейкер' img={require('../img/service4.png')} />
        <View style={{ height: 27.5 }} />
      </ScrollView>
    </MainWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
  },
})
export default Services
