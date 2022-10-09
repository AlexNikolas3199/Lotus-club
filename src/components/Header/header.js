import { ScrollView, View } from 'react-native'
import HeaderButton from './headerButton'
import { useNavigation } from '@react-navigation/native'
import StyleSheet from 'react-native-media-query'

const Header = () => {
  const navigation = useNavigation()
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      style={styles.header}
      dataSet={{ media: ids.header }}
    >
      <View style={{ width: 12 }} />
      <HeaderButton title='Главная' onPress={() => navigation.navigate('Home')} />
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
    marginBottom: 23,
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
