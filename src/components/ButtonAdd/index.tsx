import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
<<<<<<< HEAD
//importando os ícones
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

//Como não haverá texto no botão, então é possível criar a tipagem dessa forma
// type Props = RectButtonProps //Ao invés de declarar, é possível passar a tipagem como parâmetro direto
// type Props = RectButtonProps & {
//   title: string
// }

// export function ButtonAdd({ ...rest }: Props) {
export function ButtonAdd({ ...rest }: RectButtonProps) {
  //o destructuring "rest" serve para pegar todo o restante das propriedades do botão
=======
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function ButtonAdd({ ...rest }: RectButtonProps) {
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}
