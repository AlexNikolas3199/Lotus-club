import { StyleSheet, Text, View } from 'react-native'
import TodayDate from './TodayDate'

const Event = ({ busy }) => {
  const event = busy.event
  return (
    <View style={styles.event}>
      <Text style={styles.h}>{event.title}</Text>
      <Text numberOfLines={2} style={styles.text}>
        {event.description}
      </Text>
      <Text style={styles.date}>{TodayDate(new Date(event.date))}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  event: {
    backgroundColor: '#EFEFEF',
    padding: 15,
    marginVertical: 7.5,
    borderRadius: 12,
  },
  h: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
    letterSpacing: 0.8,
  },
  text: {
    fontSize: 13,
    marginBottom: 12,
    letterSpacing: 0.4,
  },
  date: {
    fontSize: 16,
    letterSpacing: 1.2,
  },
})
export default Event
