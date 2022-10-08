import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const HeaderButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})
export default HeaderButton
