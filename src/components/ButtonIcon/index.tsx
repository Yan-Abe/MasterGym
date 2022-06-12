import React from 'react'
<<<<<<< HEAD
//o tipo de botão "rectButton" lida melhor com UX na plataforma, pois respeita a interação do user
//da mesma forma, independemente da plataforma
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
  Text,
  Image,
  View
  //   TouchableOpacity,
  //   TouchableOpacityProps
=======
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

<<<<<<< HEAD
//A TYPAGEM TB É SUBSTITUÍDA
=======
// type Props = TouchableOpacityProps & {
//   title: string
// }
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
type Props = RectButtonProps & {
  title: string
}
// type Props = TouchableOpacityProps & {
//   title: string
// }

export function ButtonIcon({ title, ...rest }: Props) {
  return (
<<<<<<< HEAD
=======
    // <TouchableOpacity style={styles.container} {...rest}>
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
<<<<<<< HEAD
  /**
   * TouchableOpacity é um wrapper para fazer com que uma View responda apropriadamente a toques.
   * Ao ser clicado, a opacidade da View é diminuída, mas de maneira gradual, diminuindo assim a sua
   * intensidade.
   */
  //   return (
  //     <TouchableOpacity style={styles.container} {...rest}>
  //       <View style={styles.iconWrapper}>
  //         <Image source={DiscordImg} style={styles.icon} />
  //       </View>

  //       <Text style={styles.title}>{title}</Text>
  //     </TouchableOpacity>
  //   )
=======
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
}
