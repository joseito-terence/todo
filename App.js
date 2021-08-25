import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TodoList from './components/TodoList.js';
import AddTask from './components/AddTask.js';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.header}>My TODO</Text>
        
        <AddTask />
        <TodoList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    paddingTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});
