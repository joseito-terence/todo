import React, { useState } from 'react';
import { View } from 'react-native';
import { WhiteSpace,Button, InputItem } from '@ant-design/react-native';
import axios from '../axios.js';
import { useDispatch } from 'react-redux';

export default function AddTask() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    axios.post('/todos', { task })
      .then(res => {
        setTask('');
        dispatch({ 
          type: 'ADD_TODO', 
          payload: { task: res.data }
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <View style={{ margin: 10 }}>
      <WhiteSpace size='xl' />
      <WhiteSpace size='xl' />
      <WhiteSpace size='xl' />
      <InputItem
        clear
        value={task}
        onChange={value => setTask(value)}
        placeholder="Enter task here..."
      />
      <WhiteSpace size='xl' />

      <Button onPress={addTodo}  type="primary">ADD TODO</Button>      
      <WhiteSpace size='xl' />
    </View>
  )
}
