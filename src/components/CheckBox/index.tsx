import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme'
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';


type Props = RectButtonProps & {
  title?: string;
  color?: string;
  secondaryColor?: string;
  avoidStyle?:boolean
}

export function CheckBox({ title, color, secondaryColor, avoidStyle=false,...rest } : Props){
  const { secondary85 } = theme.colors
  const pickColor = color? color:  secondary85
  const color1 = color? color : pickColor
  const color2 = secondaryColor? secondaryColor : pickColor
  const auxAvoidStyle = avoidStyle?null:styles.container;

  return(
    <RectButton 
    style={styles.container}

    // style={[styles.container, {backgroundColor: pickColor}]} 
    {...rest }
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
);}