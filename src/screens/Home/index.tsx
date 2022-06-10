import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Profile } from '../../components/Profile'
import { CategorySelect } from '../../components/CategorySelect'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ListHeader } from '../../components/ListHeader'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

export function Home() {
  const [category, setCategory] = useState('')

  //appointmenst guarda o array com os itens que serão renderizados na tela
  const appointments = [
    {
      id: '1',
      guild: { id: '1', name: 'Buchinho de lum...', icon: null, owner: true },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '8x',
      trainninglist: 3
    },
    {
      id: '2',
      guild: { id: '1', name: 'Perna torneada..', icon: null, owner: false },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 2
    },
    {
      id: '2',
      guild: { id: '1', name: 'GigaBíceps...', icon: null, owner: false },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 4
    },
    {
      id: '2',
      guild: { id: '1', name: 'Buchinho de lum...', icon: null, owner: false },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 3
    },
    {
      id: '2',
      guild: { id: '1', name: 'Buchinho de lum...', icon: null, owner: false },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 2
    }
  ]
  // Essencial para linkar as telas
  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    //se o ID atual tá marcado (treino de superior, por ex) seta string vazia
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected })
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      {/* <View> */}
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>
      </View>

      <View>
        {/* LISTA -> OPÇÕES NA HORIZONTAL */}
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
          // hasCheckBox={true}
        />
        {/* CABEÇALHO DA FLATLIST */}
        <View style={styles.content}>
          <ListHeader title="Treinos Agendados" subtitle="total: 6" />
        </View>
        {/* ScrollView -> muito usada quando são poucos os elementos a serem listados -> 
                portanto, todos podem ser vistos de uma única vez no código
                FlatList -> É mais performática e pode ser usada quando são ou podem ser muitos os elementos a 
                serem listados e, portanto, ela só mostra os elementos que cabem na tela
                ----> ela renderiza os elementos em foco
              */}
        <FlatList
          data={appointments}
          // o keyExtractor nos permite pegar info do item em destaque
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            // (<Text>{item.guild.name}</Text>)
            <Appointment
              data={item}
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
          //Propriedades nativas do Flatlist
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
        {/* </View> */}
      </View>

      {/* </View> */}
    </Background>
  )
}
