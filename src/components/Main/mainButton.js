import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

const MainButton = ({ title, onPress, isGray, myStyle, myTextStyle, leftIcon }) => {
  let buttonStyle = styles.button
  let textStyle = styles.buttonText
  if (isGray) {
    buttonStyle = [styles.button, styles.buttonGrey]
    textStyle = { ...styles.buttonText, color: 'gray' }
  }
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity activeOpacity={0.4} style={[buttonStyle, myStyle]} onPress={onPress}>
        {leftIcon}
        <Text style={{ ...textStyle, ...myTextStyle }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    marginVertical: 7.5,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#313131',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonGrey: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: '#313131',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default MainButton
