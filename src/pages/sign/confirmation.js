import { useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import CodeFieldWrap from '../../components/CodeFieldWrap'
import DarkLoadingIndicator from '../../components/Loaders/DarkLoadingIndicator'
import MainButton from '../../components/Main/mainButton'
import { VERIFY } from '../../gql/sign/mutation'
import { FIND_USER_ISFULLPROFILE } from '../../gql/sign/query'

const Confirmation = ({ navigation, route }) => {
  const tel = route.params.tel
  const [verify, { loading: load }] = useMutation(VERIFY)
  const [find_user_isFullProfile, { loading }] = useLazyQuery(FIND_USER_ISFULLPROFILE)
  const [value, setValue] = useState('')

  const onClick = () => {
    verify({
      variables: { data: { tel, code: value } },
      onCompleted: async (data) => {
        await AsyncStorage.setItem('token', data?.verify?.token)
        find_user_isFullProfile({
          variables: { where: { tel } },
          onCompleted: (data) => {
            if (data?.findUniqueUser?.isFullProfile) {
              navigation.reset({ index: 0, routes: [{ name: 'Profile' }] })
            } else {
              navigation.reset({ index: 0, routes: [{ name: 'CompleteSignUp' }] })
            }
          },
        })
      },
      onError: (e) => {
        console.log(e.message)
        Alert.alert('Неправильный код', 'Введите корректный код из смс.')
      },
    })
  }

  return (
    <View style={styles.main}>
      <DarkLoadingIndicator isVisible={loading || load} />
      <Text style={styles.title}>Подтверждение</Text>
      <View style={styles.codeWrap}>
        <CodeFieldWrap value={value} setValue={setValue} />
        <Text style={styles.text}>Введите код из смс</Text>
      </View>
      <MainButton myStyle={{ marginBottom: 15 }} title='Завершить' onPress={onClick} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  title: { textAlign: 'center', fontSize: 30, marginTop: 15 },
  text: { marginTop: 15, color: 'gray' },
  codeWrap: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
})

export default Confirmation
