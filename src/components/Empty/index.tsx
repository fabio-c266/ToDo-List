import { Image, Text, View } from 'react-native'
import { styles } from './style'

import clipBoardIcon from '../../assets/clipboard.png'

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image style={styles.emptyIcon} source={clipBoardIcon} alt="" />
      <Text style={styles.emptyTextBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
