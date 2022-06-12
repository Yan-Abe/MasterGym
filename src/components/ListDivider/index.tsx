import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  isCentered?: boolean;
}

export function ListDivider({ isCentered }: Props){
  return (
    <View 
      style={[
        styles.container,
        isCentered ? {
          marginVertical: 12,
        } : {
<<<<<<< HEAD
          marginTop: 8,
=======
          marginTop: 2,
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
          marginBottom: 31,
        }
      ]}
    />
  );
}