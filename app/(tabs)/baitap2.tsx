import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import List from '@/components/baitapComponent/listbox';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
const Index = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const data1 = [
    { id: 1, title: 'Chest' },
    { id: 2, title: 'Triceps' },
    { id: 3, title: 'Biceps' },
  ];

  const data2 = [
    { id: 4, title: 'Whey Protein' },
    { id: 5, title: 'Creatine' },
    { id: 6, title: 'Mass Gainer' },
  ];

  const handleSelect = (id: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  return (
    <ScrollView style={styles.container}>
       <ThemedText style={styles.listTitle}><Ionicons name="barbell-outline" color={"black"} size={20} /> Muscle</ThemedText>
      <List data={data1} selectedItems={selectedItems} onSelect={handleSelect} />
      <ThemedText style={styles.listTitle}><Ionicons name="restaurant-outline" color={"black"} size={20} /> Food</ThemedText>
      <List data={data2} selectedItems={selectedItems} onSelect={handleSelect} />
      <ThemedText style={styles.listTitle}><Ionicons name="trophy-outline" color={"black"} size={20} /> Result</ThemedText>
      <View style={styles.listResult}>
        {selectedItems.map((id) => {
          const item = [...data1, ...data2].find((dataItem) => dataItem.id === id);
          return <Text key={id} style={styles.textResult}>{` ${item?.title} `}</Text>;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
   // marginBottom: 30,
    borderWidth: 1,
    borderBlockColor: 'black',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
   // paddingBottom: 10,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    borderWidth: 1,
    borderBlockColor: 'black',
    borderRadius: 10,
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 2,
    paddingBottom: 2,
  },
  listResult: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  textResult: {
    fontSize: 24,
  }
});

export default Index;