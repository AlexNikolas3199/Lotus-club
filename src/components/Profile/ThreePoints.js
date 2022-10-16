import { StyleSheet, View } from 'react-native'

const ThreePoints = () => {
  return (
    <View>
      <View style={styles.dot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#D9D9D9',
    width: 5,
    height: 5,
    borderRadius: 10,
    marginVertical: 1,
    marginRight: 15,
  },
})
export default ThreePoints
