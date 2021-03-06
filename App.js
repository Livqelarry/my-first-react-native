import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  // "name" adalah nama variabel yang bisa dipanggil
  // dan "setName" adalah nama yang dipanggil untuk mengganti isi variable "name"
  const [name, setName] = useState('Praditya');
  const [age, setAge] = useState('30')

  // ini adalah fungsi untuk menjalankan button
  // untuk memberi fungsi di button dengan cara onPress={namaFungsi}
  const clickHandler = () => {
    setName('chun-li');
    setPerson({name:'Livqelarry', age:17})
  }

  const [people,setPeople]=useState([
    {name:'shaun', id:'1'},
    {name:'yoshi', id:'2'},
    {name:'mario', id:'3'},
    {name:'luigi', id:'4'},
    {name:'peach', id:'5'},
    {name:'toad', id:'6'},
    {name:'bower', id:'7'},

  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor = { (item) => item.id }
        data={people}
        renderItem = {({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
      
      {/* <ScrollView>
        { people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}> {item.name} </Text>
            </View>
          ))}
      </ScrollView> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 35,
    marginHorizontal: 10,
    padding: 30,
    backgroundColor: 'lightgray',
    fontSize: 24
  }
});
