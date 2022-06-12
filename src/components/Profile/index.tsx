import React from 'react'
import { View, Text } from 'react-native'

import { Avatar } from '../Avatar'
import { styles } from './styles'

export function Profile() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Avatar urlImage="https://avatars.githubusercontent.com/u/70850413?v=4" />
      {/* <Avatar urlImage="https://avatars.githubusercontent.com/u/70301673?v=4" /> */}
=======
      <Avatar urlImage="https://avatars.githubusercontent.com/u/70301673?v=4" />
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

<<<<<<< HEAD
          <Text style={styles.username}>Jow Traera</Text>
=======
          <Text style={styles.username}>Lucas Zocca Perera</Text>
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
        </View>

        <Text style={styles.message}>Hoje é dia de treino</Text>
      </View>
    </View>
  )
}
