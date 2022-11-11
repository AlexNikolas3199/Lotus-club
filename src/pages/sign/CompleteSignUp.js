import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert, ScrollView } from 'react-native'
import DarkLoadingIndicator from '../../components/Loaders/DarkLoadingIndicator'
import MainButton from '../../components/Main/mainButton'
import { COMPLETE_SIGN_UP } from '../../gql/sign/mutation'

const CompleteSignUp = ({ navigation }) => {
  const [completeSignUp, { loading }] = useMutation(COMPLETE_SIGN_UP)
  const [user, setUser] = useState({})

  const onClick = () => {
    if (user.name && user.surname && user.email) {
      completeSignUp({
        variables: { data: { name: user.name.trim(), surname: user.surname.trim(), email: user.email.trim() } },
        onCompleted: () => navigation.reset({ index: 0, routes: [{ name: 'Profile' }] }),
        onError: (e) => {
          console.log(e.message)
          Alert.alert('Упс...', 'Ошибка. Попробуйте еще раз.')
        },
      })
    }
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
    <View style={styles.main}>
      <DarkLoadingIndicator isVisible={loading} />
      <View style={styles.codeWrap}>
        <Text>Имя</Text>
        <TextInput style={styles.input} onChangeText={(e) => setUser({ ...user, name: e })} />
        <Text>Фамилия</Text>
        <TextInput style={styles.input} onChangeText={(e) => setUser({ ...user, surname: e })} />
        <Text>Почта</Text>
        <TextInput style={styles.input} keyboardType='email-address' onChangeText={(e) => setUser({ ...user, email: e })} />
      </View>
      <MainButton myStyle={{ marginBottom: 15 }} onPress={onClick} title='Сохранить' />
    </View>
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
    flexGrow: 1,
  },
  input: {
    width: '100%',
    paddingVertical: 7.5,
    borderWidth: 2,
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 7.5,
    marginBottom: 15,
  },
  codeWrap: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
})

export default CompleteSignUp
