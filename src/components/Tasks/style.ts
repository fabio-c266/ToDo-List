import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    marginTop: 45,
    paddingRight: 30,
    paddingLeft: 30,
  },
  infos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderBottomColor: theme.colors.base.gray300,
  },
  infosTexts: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: theme.colors.brand.blue,
    fontSize: 14,
    fontFamily: theme.font_family.bold,
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    width: 25,
    height: 19,
    borderRadius: 999,
    backgroundColor: theme.colors.base.gray400,
  },
  amount: {
    fontSize: 12,
    fontFamily: theme.font_family.bold,
    color: theme.colors.base.gray200,
  },
  emptyContainer: {
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingRight: 20,
    paddingLeft: 20,
  },
  emptyIcon: {},
  emptyTextBold: {
    fontSize: 14,
    fontFamily: theme.font_family.bold,
    color: theme.colors.base.gray300,
  },
  emptyText: {
    fontSize: 14,
    color: theme.colors.base.gray200,
  },
  tasksCreatedContainer: {
    marginTop: 20,
  },
})
