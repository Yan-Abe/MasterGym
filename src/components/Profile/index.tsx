import React from 'react'
import { View, Text } from 'react-native'

import { Avatar } from '../Avatar'
import { styles } from './styles'

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://avatars.githubusercontent.com/u/70850413?v=4" />
      {/* <Avatar urlImage="https://avatars.githubusercontent.com/u/70301673?v=4" /> */}

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Jow Traera</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de treino</Text>
      </View>
    </View>
  )
}
