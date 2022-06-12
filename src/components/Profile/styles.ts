import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flexDirection: 'row',
    alignItems: 'center'
=======
    flexDirection: 'row'
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  }
})
