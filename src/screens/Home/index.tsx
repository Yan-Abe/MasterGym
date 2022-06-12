<<<<<<< HEAD
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
      guild: { id: '1', name: 'Peito de aço', icon: null, owner: true },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '8x',
      trainninglist: 3
    },
    {
      id: '2',
      guild: { id: '1', name: 'Perna torneada', icon: null, owner: false },
      category: '2',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 2
    },
    {
      id: '3',
      guild: { id: '1', name: 'Abdômen Trinca...', icon: null, owner: false },
      category: '3',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 2
    },
    {
      id: '4',
      guild: { id: '1', name: 'GigaBíceps', icon: null, owner: false },
      category: '6',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '',
      trainninglist: 4
    },
    {
      id: '5',
      guild: { id: '1', name: 'Fórmula Trapézi...', icon: null, owner: false },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'No pain, no gain',
      series: '6x',
      trainninglist: 3
    },
  ]
  // Essencial para linkar as telas
  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
    //se o ID atual tá marcado (treino de superior, por ex) seta string vazia
=======
import React, { useState, useCallback } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { CategorySelect } from '../../components/CategorySelect'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { Load } from '../../components/Load'

import { styles } from './styles'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const navigation = useNavigation()

  function handleCategorySelect(categoryId: string) {
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
<<<<<<< HEAD
    navigation.navigate('AppointmentDetails', { guildSelected })
    // navigation.navigate('AppointmentDetails' as never, { guildSelected })
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
=======
    // navigation.navigate('AppointmentDetails', { guildSelected })
  }

  function handleAppointmentCreate() {
    // navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [category])
  )

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            // style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
>>>>>>> 35b340016fbd0982d47a5f65f4db9daf954b1c0c
    </Background>
  )
}
