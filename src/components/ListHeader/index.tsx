<<<<<<< HEAD
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
=======
import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function ListHeader({ 
  title,
  subtitle
 }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>

      <Text style={styles.subtitle}>
        { subtitle }
      </Text>
    </View>
  )
}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
