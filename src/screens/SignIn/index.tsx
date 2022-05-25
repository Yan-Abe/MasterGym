import React from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native'
import { Home } from '../Home'

import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'
import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background'

import { styles } from './styles'

export function SignIn() {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert('Test Error')
    }
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}e organize seus{`\n`}
            treinos
          </Text>

          <Text style={styles.subtitle}>
            Entre com sua conta para {`\n`}
            ter acesso aos treinos!
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Gmail" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  )
}

export function returnHome() {
  return <Home></Home>
}
