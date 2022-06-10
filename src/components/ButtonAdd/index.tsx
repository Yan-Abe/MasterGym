import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
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
