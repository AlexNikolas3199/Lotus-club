import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { Alert, Dimensions, RefreshControl, ScrollView, StyleSheet } from 'react-native'
import DarkLoadingIndicator from '../components/Loaders/DarkLoadingIndicator'
import LoadingIndicator from '../components/Loaders/LoadingIndicator'
import Service from '../components/Service'
import { CREATE_ONE_BUSY } from '../gql/events/mutation'
import { FIND_MANY_EVENT } from '../gql/events/query'
import { MEID } from '../gql/sign/query'
import client from '../utils/apollo'
const { width } = Dimensions.get('window')

const Training = ({ navigation }) => {
  const { data, loading, refetch } = useQuery(FIND_MANY_EVENT, {
    fetchPolicy: 'network-only',
    variables: { where: { type: { equals: 'TRAINING' } } },
  })

  const [getMe] = useLazyQuery(MEID, { fetchPolicy: 'network-only' })
  const [createOneBusy, { loading: loadBusy }] = useMutation(CREATE_ONE_BUSY)
  const refreshQueries = async () => await client.refetchQueries({ include: 'active' })

  const onClick = (eventId, leckorId) => {
    getMe({
      onCompleted: (me) => {
        if (!me.me.busy.find((item) => item.event.id == eventId)) {
          createOneBusy({
            variables: {
              data: {
                event: { connect: { id: eventId } },
                lektor: { connect: { id: leckorId } },
                user: { connect: { id: me.me.id } },
              },
            },
            onCompleted: () => {
              refreshQueries()
              navigation.reset({
                index: 1,
                routes: [{ name: 'Profile' }],
              })
            },
            onError: (e) => console.log(e.message),
          })
        } else {
          Alert.alert('Вы уже записаны.', 'Вы можете посмотреть список ваших записей в личном кабинете.')
        }
      },
    })
  }

  let flexstyle
  if (width > 800)
    flexstyle = {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, ...flexstyle }}
      style={styles.main}
    >
      <DarkLoadingIndicator isVisible={loadBusy} />
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {data?.findManyEvent.map((item) => (
            <Service key={item.id} onPress={() => onClick(item.id, item.specialist[0].id)} item={item} />
          ))}
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 15,
  },
})
export default Training
