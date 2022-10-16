import { useQuery } from '@apollo/client'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import MainButton from '../components/Main/mainButton'
import Trening from '../components/Trening'
import { ME } from '../gql/sign/query'
import LoadingIndicator from '../components/LoadingIndicator'
import ProfileInfo from '../components/Profile/ProfileInfo'

const Profile = ({ navigation }) => {
  const { data, loading, refetch } = useQuery(ME, { fetchPolicy: 'network-only' })
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
          <MainButton title='Повысть рейтинг' onPress={() => navigation.navigate('Services')} />
          <View style={styles.trenings}>
            <Trening />
            <Trening />
          </View>
          <MainButton title='Задать вопрос' onPress={() => navigation.navigate('Services')} />
          <View style={styles.appointment}>
            <Text style={styles.h}>Ближайшее свидание</Text>
            <Text style={styles.date}>Будет 11.08.2022</Text>
          </View>
          <MainButton title='Услуги' onPress={() => navigation.navigate('Services')} />
          <View style={{ height: 7.5 }} />
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
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  trenings: {
    width: '100%',
  },
  appointment: {
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 18,
    marginVertical: 7.5,
  },
  h: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  date: {
    fontSize: 16,
    letterSpacing: 1.2,
  },
})

export default Profile
