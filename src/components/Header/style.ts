<<<<<<< HEAD
import { StyleSheet } from 'react-native'
// getStatusBarHeight-> a barrinha que pega o status
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'
=======
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c

export const styles = StyleSheet.create({
  container: {
    width: '100%',
<<<<<<< HEAD
    height: 102,
=======
    height: 104,
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
<<<<<<< HEAD
    alignItems: 'center'
  },
  title: {
    // ocupa o que estiver disponível
=======
    alignItems: 'center',
  },
  title: {
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
<<<<<<< HEAD
    color: theme.colors.heading
  }
})
=======
    color: theme.colors.heading,
  }
});
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
