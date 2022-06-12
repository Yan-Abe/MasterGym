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
    start={{ x: 0.3, y: 0.7 }}
    end={{ x: 0, y: 0 }}
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