import React from 'react'
//o tipo de botão "rectButton" lida melhor com UX na plataforma, pois respeita a interação do user
//da mesma forma, independemente da plataforma
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
  Text,
  Image,
  View
  //   TouchableOpacity,
  //   TouchableOpacityProps
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

//A TYPAGEM TB É SUBSTITUÍDA
type Props = RectButtonProps & {
  title: string
}
// type Props = TouchableOpacityProps & {
//   title: string
// }

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
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
}
