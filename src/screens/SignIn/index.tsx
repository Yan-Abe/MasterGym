import React from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon'
// import IllustrationImg from '../../assets/illustration.png'
// import IllustrationImg from '../../assets/testing/fitness_PNG113.png'
// import IllustrationImg from '../../assets/testing/couple001.png'
// import IllustrationImg from '../../assets/testing/strongWoman.png'
import IllustrationImg from '../../assets/testing/fitness_PNG196.png'
import { styles } from './styles'
import { Home } from '../Home'
import { Background } from '../../components/Background'

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
  }
  return (
    <Background>
      <View style={styles.container}>
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

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se{`\n`}e organize seus{`\n`}
            treinos
          </Text>

          <Text style={styles.subtitle}>
            Entre com sua conta para {`\n`}
            ter acesso aos treinos!
          </Text>

          <ButtonIcon
            title="Entrar com o Gmail"
            // activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}
