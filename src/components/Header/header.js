import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderButton from './headerButton'

const Header = ({ navigation }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'flex-start' }}
      style={styles.header}
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

const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    marginBottom: 23,
    flexGrow: 0,
    flexShrink: 0,
  },
})

export default Header
