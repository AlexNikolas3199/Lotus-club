import { LinearGradient } from 'expo-linear-gradient'

const MainWrapper = ({ children }) => {
  return (
    <LinearGradient colors={['#202766', '#441763', '#560E62']} style={{ flex: 1, paddingTop: 48 }}>
      {children}
    </LinearGradient>
  )
}

export default MainWrapper
