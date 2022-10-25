import { useQuery } from '@apollo/client'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import MainButton from '../../components/Main/mainButton'
import { ME } from '../../gql/sign/query'
import LoadingIndicator from '../../components/Loaders/LoadingIndicator'
import ProfileInfo from '../../components/Profile/ProfileInfo'
import Event from '../../components/Event'

const Profile = ({ navigation }) => {
  const { data, loading, refetch } = useQuery(ME, { fetchPolicy: 'network-only' })

  const Events = () => {
    let events = data?.me?.busy.filter((a) => new Date(a.event.date) > Date.now())
    events.sort((a, b) => new Date(a.event.date) - new Date(b.event.date))
    return events.map((item) => <Event key={item.id} busy={item} />)
  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.main}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <ProfileInfo nav={navigation} me={data?.me} />
          <Text style={styles.h}>Мероприятия</Text>
          {data?.me?.busy.length ? (
            <View style={styles.trenings}>
              <Events />
            </View>
          ) : (
            <View style={styles.else}>
              <Text style={{ marginBottom: 7.5 }}>Запишитесь на первые мероприятия!</Text>
              <MainButton title='Тренинги' onPress={() => navigation.navigate('Training')} />
              <MainButton title='Услуги' onPress={() => navigation.navigate('Services')} />
            </View>
          )}
        </>
      )}
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
    fontSize: 18,
    textAlign: 'center',
    margin: 15,
    marginBottom: 7.5,
  },
  else: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 100 },
  trenings: {
    width: '100%',
    paddingBottom: 7.5,
  },
})

export default Profile
