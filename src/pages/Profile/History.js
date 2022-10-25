import { ScrollView, StyleSheet, Text, View } from 'react-native'
import MainButton from '../../components/Main/mainButton'
import Event from '../../components/Event'

const History = ({ navigation, route }) => {
  let events = route.params.busy.filter((a) => new Date(a.event.date) < Date.now())

  const Events = () => {
    events.sort((a, b) => new Date(a.event.date) - new Date(b.event.date))
    return events.map((item) => <Event key={item.id} busy={item} isPass={true} />)
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.main}>
        <Text style={styles.h}>Прошедшие мероприятия</Text>
        {events.length ? (
          <View style={styles.trenings}>
            <Events />
          </View>
        ) : (
          <View style={styles.else}>
            <Text style={styles.t}>Нет пройденных мероприятий.</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.button}>
        <MainButton title='Назад' onPress={() => navigation.goBack()} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  h: {
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
    marginBottom: 7.5,
  },
  t: { marginBottom: 7.5 },
  else: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  trenings: {
    width: '100%',
    paddingBottom: 7.5,
  },
  button: {
    position: 'absolute',
    paddingBottom: 7.5,
    bottom: 15,
    paddingHorizontal: 30,
    width: '100%',
  },
})

export default History
