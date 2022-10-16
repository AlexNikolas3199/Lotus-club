import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import MainButton from '../Main/mainButton'
import ThreePoints from './ThreePoints'

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
          nav.reset({
            index: 0,
            routes: [{ name: 'Loader' }],
          })
        },
      },
    ])
  }
  return (
    <>
      <TouchableOpacity onPress={toggle} style={styles.profilewrapper}>
        <View style={styles.icon} />
        <Text style={styles.fio}>{me?.name + ' ' + me?.surname}</Text>
        <ThreePoints />
      </TouchableOpacity>
      <Modal onBackdropPress={toggle} isVisible={isVisible} backdropOpacity={0.5} useNativeDriver={true}>
        <View style={styles.white}>
          <View style={styles.profilewrapper}>
            <View style={styles.icon} />
            <View>
              <Text style={{ ...styles.fio, flexGrow: 0, borderBottomWidth: 1 }}>{me?.name + ' ' + me?.surname}</Text>
              <Text style={{ ...styles.fio, flexGrow: 0 }}>{me?.email}</Text>
            </View>
          </View>
          <MainButton title='Выйти' myStyle={{ borderColor: 'red' }} myTextStyle={{ color: 'red' }} onPress={exit} />
          <MainButton title='Назад' onPress={toggle} />
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
    marginBottom: 7.5,
  },
  icon: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#D9D9D9' },
  fio: { fontSize: 20, marginLeft: 15, flexGrow: 1 },
  white: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingBottom: 7.5,
    borderRadius: 12,
  },
})

export default ProfileInfo
