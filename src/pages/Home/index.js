import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'
import Actions from '../../components/Actions'

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '100,00',
    date: '10/04/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente Fábio',
    value: '4.500,00',
    date: '05/04/2023',
    type: 1 // entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.800,00',
    date: '02/04/2023',
    type: 1 // entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Pane Dev"/>

        <Balance balanceValue="30.621,60" expenses="-1.453,87" />

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Movements data={item} />}
        />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
})