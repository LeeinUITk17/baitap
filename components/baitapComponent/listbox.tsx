import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

interface ListProps {
  data: { id: number; title: string }[];
  selectedItems: number[];
  onSelect: (id: number) => void;
}

const List: React.FC<ListProps> = ({ data, selectedItems, onSelect }) => {
  const renderItem = ({ item }: { item: { id: number; title: string } }) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <TouchableOpacity
          style={[styles.button, isSelected ? styles.deselectButton : styles.selectButton]}
          onPress={() => onSelect(item.id)}
        >
          <Text style={styles.buttonText}>{isSelected ? 'Deselect' : 'Select'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  itemTitle: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  selectButton: {
    backgroundColor: 'green',
  },
  deselectButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
});

export default List;