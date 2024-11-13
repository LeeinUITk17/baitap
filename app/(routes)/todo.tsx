import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('todos.db');

const TodoApp = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    console.log(db);
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT);',
        [],
        () => console.log('Table created successfully'),
        (_, error) => { console.log('Error creating table:', error); return false; }
      );
    });
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM todos;', [], (_, { rows: { _array } }) => setTodos(_array));
    });
  };

  const addTodo = () => {
    if (!text) return;
    db.transaction(tx => {
      tx.executeSql('INSERT INTO todos (text) VALUES (?);', [text], (_, result) => {
        console.log('Todo added:', result);
        fetchTodos();
        setText('');
      });
    });
  };

  const deleteTodo = (id: number) => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM todos WHERE id = ?;', [id], (_, result) => {
        console.log('Todo deleted:', result);
        fetchTodos();
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a new todo"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text>No todos available. Add one!</Text>}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
  },
});

export default TodoApp;
