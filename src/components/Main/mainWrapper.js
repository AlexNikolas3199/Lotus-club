import { LinearGradient } from 'expo-linear-gradient'
import StyleSheet from 'react-native-media-query'

const MainWrapper = ({ children }) => {
  return (
    <LinearGradient colors={['#202766', '#441763', '#560E62']} style={styles.box} dataSet={{ media: ids.box }}>
      {children}
    </LinearGradient>
  )
}

const { ids, styles } = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 15,
    '@media (min-width: 800px)': {
      paddingTop: 0,
    },
  },
})

export default MainWrapper
