import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'red',
    // marginTop: 26
    marginTop: getStatusBarHeight() + 26,
    //getStatusBarHeight() = iphone X status bar height
    marginBottom: 42
<<<<<<< HEAD
  },
  content: {
    marginTop: 42
  },
  matches: {
    marginTop: 24,
    marginLeft: 24
=======
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  }
})
