import { useQuery } from '@apollo/client'
import { Dimensions, RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import LoadingIndicator from '../components/LoadingIndicator'
import Service from '../components/Service'
import { FIND_MANY_EVENT } from '../gql/services/query'
const { width } = Dimensions.get('window')

const Services = () => {
  const { data, loading, refetch } = useQuery(FIND_MANY_EVENT, { fetchPolicy: 'network-only' })
  let flexstyle
  if (width > 800)
    flexstyle = {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
    }
  console.log(data)
  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, ...flexstyle }}
      style={styles.main}
    >
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          {data?.findManyEvent.map((item) => (
            <Service key={item.id} item={item} img={require('../img/service1.png')} />
          ))}
          {width <= 800 && <View style={{ height: 27.5 }} />}
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
export default Services
