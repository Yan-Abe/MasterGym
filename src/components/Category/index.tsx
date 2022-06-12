<<<<<<< HEAD
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
=======
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
}

export function Category({
  title,
  icon: Icon,
<<<<<<< HEAD
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
=======
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props){
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return(
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[ checked ? secondary85 : secondary50, secondary40 ]}
        >
          {
            hasCheckBox &&
            <View style={
              checked ? styles.checked : styles.check
            }/>
          }

          <Icon 
              width={48} 
              height={48}
          />

          <Text style={styles.title}>
            { title }
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
