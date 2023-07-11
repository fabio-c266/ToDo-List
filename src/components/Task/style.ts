import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    height: 64,
    backgroundColor: theme.colors.base.gray500,
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    color: theme.colors.base.gray100,
    fontSize: 14,
  },
  isDoneText: {
    textDecorationLine: 'line-through',
    color: theme.colors.base.gray300,
    fontSize: 14,
  },
})
