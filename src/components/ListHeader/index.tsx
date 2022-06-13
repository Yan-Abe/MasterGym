import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

type Props = {
  title: string
  subtitle: string
}

//lista de treinos na página home
export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
