import React from 'react'
import { Alert, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MainButton from '../Main/mainButton'
import StyleSheet from 'react-native-media-query'
import TodayDate from '../TodayDate'
import { useMutation } from '@apollo/client'
import DarkLoadingIndicator from '../Loaders/DarkLoadingIndicator'
import client from '../../utils/apollo'
import { DELETE_ONE_BUSY } from '../../gql/events/mutation'

const MyEvent = ({ navigation, route }) => {
  const event = route.params.busy.event
  const lektor = route.params.busy.lektor

  const [deleteOneBusy, { loading }] = useMutation(DELETE_ONE_BUSY)
  const refreshQueries = async () => await client.refetchQueries({ include: 'active' })

  const exit = () => {
    Alert.alert('Выйти', 'Вы уверены, что хотите отменить запись?', [
      { text: 'Отмена', style: 'cancel' },
      {
        text: 'Ок',
        onPress: async () => {
          deleteOneBusy({
            variables: { where: { id: route.params.busy.id } },
            onCompleted: () => {
              refreshQueries()
              navigation.reset({
                index: 1,
                routes: [{ name: 'Profile' }],
              })
            },
            onError: (e) => console.log(e.message),
          })
          nav.reset({ index: 0, routes: [{ name: 'Profile' }] })
        },
      },
    ])
  }

  return (
    <ScrollView dataSet={{ media: ids.box }} style={styles.box}>
      <DarkLoadingIndicator isVisible={loading} />
      <ImageBackground source={{ uri: event.image }} resizeMode='cover' borderRadius={12} style={styles.image}>
        <Text dataSet={{ media: ids.head }} style={styles.head}>
          {event.title}
        </Text>
      </ImageBackground>
      <View style={styles.white}>
        <Text style={{ paddingVertical: 15 }}>{'Дата: ' + TodayDate(new Date(event.date))}</Text>
        <Text>{event.description}</Text>
        <View style={styles.wrap}>
          <Text>Лектор: </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AboutLektor', { lektor })} style={styles.lektor}>
            <Text>{lektor.name + ' ' + lektor.surname}</Text>
          </TouchableOpacity>
        </View>
        <MainButton onPress={() => navigation.goBack()} title='Назад' />
        {!route.params.isPass && <MainButton title='Отменить запись' myStyle={styles.exit} myTextStyle={{ color: 'red' }} onPress={exit} />}
        <View style={{ height: 7.5 }} />
      </View>
    </ScrollView>
  )
}

const { ids, styles } = StyleSheet.create({
  box: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    '@media (min-width: 800px)': {
      maxWidth: '23%',
    },
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.86,
    justifyContent: 'center',
    alignItems: 'center',
  },
  white: {
    margin: 0,
    paddingHorizontal: 15,
  },
  wrap: {
    flexDirection: 'row',
    paddingVertical: 7.5,
    alignItems: 'center',
  },
  lektor: {
    backgroundColor: '#fff',
    marginVertical: 7.5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#313131',
    borderWidth: 2,
    borderRadius: 10,
  },
  head: {
    color: '#fff',
    fontSize: 48,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    '@media (min-width: 800px)': {
      fontSize: 25,
    },
  },
  exit: {
    borderColor: 'red',
  },
})

export default MyEvent
