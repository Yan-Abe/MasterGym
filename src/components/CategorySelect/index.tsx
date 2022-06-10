import React from 'react'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
//ScrollView ativa a rollagem
import { ScrollView } from 'react-native'
import { styles } from './styles'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

// type Props = {
//   categorySelected: string
// }

type Props = {
  categorySelected: string
  //o método abaixo passa o categoryId ou void
  setCategory: (categoryId: string) => void
  hasCheckBox?: boolean
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {/* lista de categorias-> percorrer cada uma delas */}
      {categories.map(categoryy => (
        <Category
          key={categoryy.id}
          title={categoryy.title}
          icon={categoryy.icon}
          checked={categoryy.id === categorySelected}
          onPress={() => setCategory(categoryy.id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  )
}
