import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
<<<<<<< HEAD
    // backgroundColor: theme.colors.primary,
=======
    backgroundColor: theme.colors.primary,
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center'
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
})
