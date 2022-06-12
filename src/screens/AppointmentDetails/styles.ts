<<<<<<< HEAD
import { StyleSheet } from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: '100%',
    height: 234
    // opacity: 0.6
    // borderTopColor: '#000'
=======
import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21
  },
  members: {
    marginLeft: 24,
    marginTop: 27
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
<<<<<<< HEAD
    marginBottom: getBottomSpace()
  }
})
=======
    marginBottom: getBottomSpace(),
  }
});
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
