import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert, ScrollView } from 'react-native'
import DarkLoadingIndicator from '../../components/Loaders/DarkLoadingIndicator'
import MainButton from '../../components/Main/mainButton'
import { EMAIL_SEND } from '../../gql/sign/mutation'

const SendEmail = ({ navigation, route }) => {
  const me = route.params.me
  const [emailSend, { loading }] = useMutation(EMAIL_SEND)
  const [mail, setMail] = useState({ from: me.email })

  const onClick = () => {
    if (mail.from && mail.text) {
      emailSend({
        variables: { data: { email: 'hamuske31@gmail.com', from: mail.from.trim(), text: mail.text.trim() } },
        onCompleted: () => {
          Alert.alert('Письмо отправлено.', 'Письмо успешно направлено в поддержку.', [
            {
              text: 'Ок',
              onPress: () => navigation.reset({ index: 0, routes: [{ name: 'Profile' }] }),
            },
          ])
        },
        onError: (e) => {
          console.log(e.message)
          Alert.alert('Упс...', 'Ошибка. Попробуйте еще раз.')
        },
      })
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={styles.main} contentContainerStyle={{ flexGrow: 1 }}>
      <DarkLoadingIndicator isVisible={loading} />
      <Text style={styles.h}>Поддержка</Text>
      <View style={styles.codeWrap}>
        <Text>Отправитель</Text>
        <TextInput style={styles.input} value={mail.from} keyboardType='email-address' onChangeText={(e) => setMail({ ...mail, from: e })} />
        <Text>Сообщение</Text>
        <TextInput multiline={true} style={[styles.input, styles.textarea]} onChangeText={(e) => setMail({ ...mail, text: e })} />
      </View>
      <MainButton myStyle={{ marginBottom: 15 }} onPress={onClick} title='Сохранить' />
    </ScrollView>
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
  h: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
  },
  input: {
    width: '100%',
    paddingVertical: 7.5,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 7.5,
    marginBottom: 15,
  },
  textarea: {
    textAlignVertical: 'top',
    textAlign: 'left',
    flexGrow: 1,
  },
  codeWrap: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
})

export default SendEmail
