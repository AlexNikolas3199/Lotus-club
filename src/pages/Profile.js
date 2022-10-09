import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MainButton from '../components/Main/mainButton'
import Trening from '../components/Trening'

const Profile = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.main}>
      <View style={styles.profilewrapper}>
        <View style={styles.icon} />
        <Text style={styles.fio}>Алеша Николаев</Text>
      </View>
      <MainButton title='Повысть рейтинг' onPress={() => navigation.navigate('Home')} />
      <View style={styles.trenings}>
        <Trening />
        <Trening />
      </View>
      <MainButton title='Задать вопрос' onPress={() => navigation.navigate('Home')} />
      <View style={styles.appointment}>
        <Text style={styles.h}>Ближайшее свидание</Text>
        <Text style={styles.date}>Будет 11.08.2022</Text>
      </View>
      <MainButton title='Услуги' onPress={() => navigation.navigate('Home')} />
      <View style={{ height: 7.5 }} />
    </ScrollView>
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
  profilewrapper: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 7.5,
  },
  icon: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#D9D9D9' },
  fio: { fontSize: 20, marginLeft: 16 },
  trenings: {
    width: '100%',
  },
  appointment: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 18,
    marginVertical: 7.5,
  },
  h: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  date: {
    fontSize: 16,
    letterSpacing: 1.2,
  },
})

export default Profile
