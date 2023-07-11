import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  formContainer: {
    position: 'absolute',
    top: 145,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    width: '100%',
    backgroundColor: theme.colors.base.gray500,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    color: theme.colors.base.gray100,
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: theme.colors.brand.blue_dark,
  },
})
