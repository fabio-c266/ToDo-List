import { Image, View } from 'react-native'
import { styles } from './styles'

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} alt="ToDo List Logo" />
    </View>
  )
}
