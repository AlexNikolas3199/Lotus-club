import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import MainButton from '../Main/mainButton'
import ThreePoints from './ThreePoints'
import Icon from 'react-native-vector-icons/FontAwesome'

const ProfileInfo = ({ nav, me }) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  const exit = () => {
    Alert.alert('Выйти', 'Вы уверены, что хотите выйти из аккунта?', [
      { text: 'Отмена', style: 'cancel' },
      {
        text: 'Ок',
        onPress: async () => {
          await AsyncStorage.removeItem('token')
          nav.reset({ index: 0, routes: [{ name: 'Loader' }] })
        },
      },
    ])
  }

  const goHistory = () => {
    nav.navigate('History', { busy: me?.busy })
    toggle()
  }

  const goSendEmail = () => {
    nav.navigate('SendEmail', { me })
    toggle()
  }
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.profilewrapper}>
        <Image style={styles.icon} source={require('../../img/user.png')} />
        <Text style={styles.fio}>{me?.name + ' ' + me?.surname}</Text>
        <ThreePoints />
      </TouchableOpacity>
      <Modal onBackdropPress={toggle} onBackButtonPress={toggle} isVisible={isVisible} backdropOpacity={0.5} useNativeDriver={true}>
        <View style={styles.white}>
          <View style={styles.contacts}>
            <Text style={styles.h}>Контакты</Text>
            <View style={styles.contact}>
              <Icon name='phone' size={25} color='#560E62' />
              <Text style={styles.text}>{me?.tel}</Text>
            </View>
            <View style={styles.contact}>
              <Icon name='envelope' size={25} color='#560E62' />
              <Text style={styles.text}>{me?.email}</Text>
            </View>
          </View>
          <MainButton title='История' onPress={goHistory} />
          <MainButton title='Поддержка' onPress={goSendEmail} />
          <MainButton title='Выйти' myStyle={{ borderColor: 'red' }} myTextStyle={{ color: 'red' }} onPress={exit} />
        </View>
      </Modal>
    </>
  )
}
const styles = StyleSheet.create({
  profilewrapper: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    marginTop: 15,
  },
  icon: { width: 60, height: 60, borderRadius: 12 },
  fio: { fontSize: 20, marginLeft: 15, flexGrow: 1 },
  white: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 7.5,
    borderRadius: 12,
  },
  contacts: {
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingBottom: 7.5,
    marginTop: 15,
    marginBottom: 7.5,
  },
  h: {
    textAlign: 'center',
    borderColor: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 7.5,
    borderBottomWidth: 1.5,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7.5,
    paddingLeft: 15,
  },
  text: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
})

export default ProfileInfo
