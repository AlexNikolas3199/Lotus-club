import { StyleSheet, Text, View } from 'react-native'

const Trening = () => {
  return (
    <View style={styles.trening}>
      <Text style={styles.h}>Тренинг 1 - я и мое отражение</Text>
      <Text style={styles.text}>Прокачать свою самооценку проработать пробелы.</Text>
      <Text style={styles.date}>Будет 20.10.2022</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  trening: {
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
export default Trening
