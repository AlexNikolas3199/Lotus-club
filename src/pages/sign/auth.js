import { useEffect, useRef, useState } from 'react'
import { Alert, Text, TextInput, View } from 'react-native'
import MainButton from '../../components/Main/mainButton'
import StyleSheet from 'react-native-media-query'
import { AUTH } from '../../gql/sign/mutation'
import { useMutation } from '@apollo/client'
import DarkLoadingIndicator from '../../components/DarkLoadingIndicator'

const Auth = ({ navigation }) => {
  const [sign, { loading }] = useMutation(AUTH)
  const [tel, setTel] = useState('')
  const input = useRef(null)

  const onClick = () => {
    if (tel.length > 10) {
      sign({
        variables: { data: { tel } },
        onCompleted: () => navigation.navigate('Сonfirmation', { tel }),
        onError: (e) => console.log(e.message),
      })
    } else Alert.alert('Неправильный номер', 'Введите номер правильно.')
  }

  useEffect(() => {
    input.current.focus()
  }, [])

  return (
    <View style={styles.main}>
      <DarkLoadingIndicator isVisible={loading} />
      <View style={styles.codeWrap}>
        <TextInput ref={input} style={styles.input} onChangeText={setTel} keyboardType='numeric' />
        <Text style={styles.text}>Введите свой телефон</Text>
      </View>
      <MainButton myStyle={{ marginBottom: 15 }} title='Войти' onPress={onClick} />
    </View>
  )
}

const { ids, styles } = StyleSheet.create({
  main: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
    '@media (min-width: 800px)': {
      backgroundColor: 'transparent',
      margin: 0,
    },
  },
  codeWrap: { flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 15, color: 'gray' },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
})
export default Auth
