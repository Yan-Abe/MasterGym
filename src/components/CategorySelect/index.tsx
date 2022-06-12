import React from 'react'
<<<<<<< HEAD

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
=======
import { ScrollView } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'
import { categories } from '../../utils/categories'

import { Category } from '../Category'

type Props = {
  categorySelected: string
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
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
<<<<<<< HEAD
      {/* lista de categorias-> percorrer cada uma delas */}
      {categories.map(categoryy => (
        <Category
          key={categoryy.id}
          title={categoryy.title}
          icon={categoryy.icon}
          checked={categoryy.id === categorySelected}
          onPress={() => setCategory(categoryy.id)}
=======
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  )
}
