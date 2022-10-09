import { Text, TouchableOpacity, View } from 'react-native'
import StyleSheet from 'react-native-media-query'

const MainButton = ({ title, onPress, myStyle, myTextStyle }) => {
  return (
    <View dataSet={{ media: ids.buttonWrapper }} style={styles.buttonWrapper}>
      <TouchableOpacity
        dataSet={{ media: ids.button }}
        activeOpacity={0.4}
        style={[styles.button, myStyle]}
        onPress={onPress}
      >
        <Text style={{ ...styles.buttonText, ...myTextStyle }} dataSet={{ media: ids.buttonText }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    '@media (min-width: 800px)': {
      alignItems: 'center',
    },
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
  buttonText: {
    color: '#313131',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default MainButton
