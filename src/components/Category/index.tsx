import React from 'react'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
//ScrollView ativa a rollagem
import { View, Text } from 'react-native'
import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>, //diz que é preciso receber (lá do React) um componente funcional do SvgProps
  hasCheckBox?: boolean;
  checked?: boolean //o check box
}

export function Category({
  title,
  icon: Icon,
  checked = true,
  hasCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        // colors={['red', 'black']}
        colors={[secondary50, secondary70]}
      >
        {/*
        //-> se o botão estiver marcado, a opacidade será 1, caso constrário, ficará mais desbotado 
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}></View>
    
        */}
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          // colors={[secondary50, secondary70]}>
          colors={[checked ? secondary85: secondary70, secondary40]}>
          {
            //o check box fica invisível quando a validação do hasCheckBox for false
            hasCheckBox &&            
            <View style={checked ? styles.checked : styles.check} />
          }
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}
