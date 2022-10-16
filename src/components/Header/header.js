import { ScrollView, View } from 'react-native'
import HeaderButton from './headerButton'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import StyleSheet from 'react-native-media-query'

const Header = () => {
  const navigation = useNavigation()
  const state = useNavigationState((state) => state)
  console.log(state)
  const name = state?.routes[state?.routes?.length - 1]?.name
  if (
    name == undefined ||
    name == 'Home' ||
    name == 'Auth' ||
    name == 'Сonfirmation' ||
    name == 'CompleteSignUp' ||
    name == 'Loader'
  )
    return null
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      style={styles.header}
      dataSet={{ media: ids.header }}
    >
      <View style={{ width: 12 }} />
      <HeaderButton title='Личный кабинет' onPress={() => navigation.navigate('Profile')} />
      <HeaderButton title='Услуги' onPress={() => navigation.navigate('Services')} />
      <HeaderButton title='Специалисты' onPress={() => navigation.navigate('Specialists')} />
      <View style={{ width: 12 }} />
    </ScrollView>
  )
}

const { ids, styles } = StyleSheet.create({
  header: {
    // paddingTop: 5,
    marginBottom: 15,
    flexGrow: 0,
    flexShrink: 0,
    '@media (min-width: 800px)': {
      justifyContent: 'center',
      marginBottom: 15,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderColor: '#fff',
    },
  },
})

export default Header
