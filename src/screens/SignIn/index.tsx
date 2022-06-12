import React from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native'
<<<<<<< HEAD

import { ButtonIcon } from '../../components/ButtonIcon'
// import IllustrationImg from '../../assets/illustration.png'
// import IllustrationImg from '../../assets/testing/fitness_PNG113.png'
// import IllustrationImg from '../../assets/testing/couple001.png'
// import IllustrationImg from '../../assets/testing/strongWoman.png'
import IllustrationImg from '../../assets/testing/fitness_PNG196.png'
=======
import { Home } from '../Home'

import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'
import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background'

>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
import { styles } from './styles'
import { Home } from '../Home'
import { Background } from '../../components/Background'

<<<<<<< HEAD
//var navigation vem dessa dll abaixo
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  /**
   //funções chamadas "handle" -> disparadas por interação do usuário
   * A NAVEGAÇÃO ENTRE AS SCREENS PASSA A SER VIA ROUTES, USANDO O NAVIGATE
   */
  function handleSignIn() {
    //segundo a doc da lib, o parâmetro é uma string mesmo
    navigation.navigate('Home')
=======
export function SignIn() {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert('Test Error')
    }
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  }
  return (
    <Background>
      <View style={styles.container}>
<<<<<<< HEAD
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Image
          source={IllustrationImg}
          style={styles.image}
          // resizeMode="stretch"
          resizeMode="cover"
        />
=======
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}e organize seus{`\n`}
            treinos
          </Text>

          <Text style={styles.subtitle}>
            Entre com sua conta para {`\n`}
            ter acesso aos treinos!
          </Text>

<<<<<<< HEAD
          <ButtonIcon
            title="Entrar com o Gmail"
            // activeOpacity={0.7}
            onPress={handleSignIn}
          />
=======
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Gmail" onPress={handleSignIn} />
          )}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
        </View>
      </View>
    </Background>
  )
<<<<<<< HEAD
=======
}

export function returnHome() {
  return <Home></Home>
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
}
