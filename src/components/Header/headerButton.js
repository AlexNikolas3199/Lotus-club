import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import StyleSheet from 'react-native-media-query'

const HeaderButton = ({ title, screen, name }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      dataSet={{ media: ids.button }}
      style={[styles.button, { backgroundColor: name == screen ? '#fff' : 'transparent' }]}
      onPress={() => navigation.navigate(screen)}
    >
      <Text style={[styles.text, { color: name == screen ? '#441763' : '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const { ids, styles } = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 3,
    '@media (min-width: 800px)': {
      borderWidth: 0,
    },
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})
export default HeaderButton
