import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('todo.db');

export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

export const createTable = (): void => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, done INT);',
      [],
      () => { console.log('Table created successfully'); },
      (_, error) => { console.log('Error creating table', error); return false; }
    );
  });
};

export const insertTodo = (title: string, done: boolean, successCallback: () => void): void => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO todos (title, done) VALUES (?, ?);',
      [title, done ? 1 : 0],
      (_, result) => successCallback(),
      (_, error) => { console.log('Error inserting todo', error); return false; }
    );
  });
};

export const getTodos = (successCallback: (todos: Todo[]) => void): void => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM todos;',
      [],
      (_, { rows: { _array } }) => successCallback(_array as Todo[]),
      (_, error) => { console.log('Error fetching todos', error); return false; }
    );
  });
};

export const updateTodo = (id: number, done: boolean, successCallback: () => void): void => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE todos SET done = ? WHERE id = ?;',
      [done ? 1 : 0, id],
      (_, result) => successCallback(),
      (_, error) => { console.log('Error updating todo', error); return false; }
    );
  });
};

export const deleteTodo = (id: number, successCallback: () => void): void => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM todos WHERE id = ?;',
      [id],
      (_, result) => successCallback(),
      (_, error) => { console.log('Error deleting todo', error); return false; }
    );
  });
};