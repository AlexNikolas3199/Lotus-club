import { ScrollView, View } from 'react-native'
import HeaderButton from './headerButton'
import { useNavigation, useNavigationState } from '@react-navigation/native'
import StyleSheet from 'react-native-media-query'

const Header = () => {
  const state = useNavigationState((state) => state)
  const name = state?.routes[state?.routes?.length - 1]?.name
  if (name == undefined || name == 'Home' || name == 'Auth' || name == 'Сonfirmation' || name == 'CompleteSignUp' || name == 'Loader') return null
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      style={styles.header}
      dataSet={{ media: ids.header }}
    >
      <View style={{ width: 12 }} />
      <HeaderButton name={name} title='Личный кабинет' screen='Profile' />
      <HeaderButton name={name} title='Трениги' screen='Training' />
      <HeaderButton name={name} title='Услуги' screen='Services' />
      <HeaderButton name={name} title='Специалисты' screen='Specialists' />
      <View style={{ width: 12 }} />
    </ScrollView>
  )
}

const { ids, styles } = StyleSheet.create({
  header: {
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
