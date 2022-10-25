import { View, ActivityIndicator, StyleSheet } from 'react-native'

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#4C1865' />
    </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
