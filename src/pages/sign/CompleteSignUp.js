import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import DarkLoadingIndicator from '../../components/DarkLoadingIndicator'
import MainButton from '../../components/Main/mainButton'
import { COMPLETE_SIGN_UP } from '../../gql/user/mutation'

const CompleteSignUp = ({ navigation }) => {
  const [completeSignUp, { loading }] = useMutation(COMPLETE_SIGN_UP)
  const [user, setUser] = useState({})

  const onClick = () => {
    if (user.name && user.surname && user.email) {
      completeSignUp({
        variables: { data: user },
        onCompleted: () => navigation.reset({ index: 0, routes: [{ name: 'Profile' }] }),
        onError: (e) => {
          console.log(e.message)
          Alert.alert('Упс...', 'Ошибка. Попробуйте еще раз.')
        },
      })
    }
  }

  return (
    <View style={styles.main}>
      <DarkLoadingIndicator isVisible={loading} />
      <View style={styles.codeWrap}>
        <Text>Имя</Text>
        <TextInput style={styles.input} onChangeText={(e) => setUser({ ...user, name: e })} />
        <Text>Фамилия</Text>
        <TextInput style={styles.input} onChangeText={(e) => setUser({ ...user, surname: e })} />
        <Text>Почта</Text>
        <TextInput
          style={styles.input}
          keyboardType='email-address'
          onChangeText={(e) => setUser({ ...user, email: e })}
        />
      </View>
      <MainButton myStyle={{ marginBottom: 15 }} onPress={onClick} title='Сохранить' />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
    flexGrow: 1,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginBottom: 15,
  },
  codeWrap: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
})

export default CompleteSignUp
