import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
<<<<<<< HEAD
    // backgroundColor: theme.colors.background2
  },
  image: {
    width: '80%',
    height: '45%'
    // height: 360
=======
    // backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: 360
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64
  }
})
