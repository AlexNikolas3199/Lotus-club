import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import MainButton from '../components/Main/mainButton'

const AboutLektor = ({ navigation, route }) => {
  const lektor = route.params.lektor
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.main}>
        <View style={styles.profilewrapper}>
          <Image style={styles.icon} source={{ uri: lektor.avatar }} />
          <Text style={styles.fio}>{lektor.name + ' ' + lektor.surname}</Text>
        </View>
        <Text style={styles.desc}>{lektor.description}</Text>
      </ScrollView>
      <View style={styles.button}>
        <MainButton title='Понятно' onPress={() => navigation.goBack()} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  profilewrapper: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 15,
  },
  desc: {
    paddingBottom: 75,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#D9D9D9',
  },
  fio: { fontSize: 20, marginLeft: 16 },
  button: {
    position: 'absolute',
    paddingBottom: 7.5,
    bottom: 15,
    paddingHorizontal: 30,
    width: '100%',
  },
})

export default AboutLektor
