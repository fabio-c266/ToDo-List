import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  emptyContainer: {
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyTextBold: {
    color: theme.colors.base.gray300,
    fontFamily: theme.font_family.bold,
    fontSize: 14,
  },
  emptyText: {
    color: theme.colors.base.gray300,
    fontSize: 14,
  },
})
