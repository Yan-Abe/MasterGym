import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
<<<<<<< HEAD
import { theme } from '../../global/styles/theme'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';


type Props = RectButtonProps & {
  title?: string;
  color?: string;
  secondaryColor?: string;
  avoidStyle?:boolean
}

export function Button({ title, color, secondaryColor, avoidStyle=false,...rest } : Props){
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors
  const pickColor = color? color:  secondary85
  const color1 = color? color : pickColor
  const color2 = secondaryColor? secondaryColor : pickColor
  const auxAvoidStyle = avoidStyle?null:styles.container;

  return(
    <LinearGradient
    style={styles.container}
    // colors={['red', 'black']}
    colors={[color1, color2]}
    start={{ x: 0.06, y: 0.4 }}
    end={{ x: 1, y: 0 }}
    >
      <RectButton 
      style={auxAvoidStyle}

      // style={[styles.container, {backgroundColor: pickColor}]} 
      {...rest }
      >
        <Text style={styles.title}>
          { title }
        </Text>
      </RectButton>
    </LinearGradient>
);}
=======

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function Button({ title, ...rest } : Props){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
