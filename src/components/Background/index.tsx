import React, { ReactNode } from 'react' //"ReactNode" = anything like a React children
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors
  return (
    <LinearGradient
      style={styles.container}
      // colors={['red', 'black']}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}
