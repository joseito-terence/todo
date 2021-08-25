import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native';
import { List } from '@ant-design/react-native';
import axios from '../axios.js';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  // const [tasks, setTasks] = useState([]);
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/todos')
      .then(res => dispatch({ 
        type: 'LOAD_TODOS', 
        payload: { tasks: res.data.rows } 
      }))
      .catch(err => console.log(err));
  }, []);

  const deleteTask = id => {

    axios.delete(`/todos/${id}`)
      .then(() => {
        dispatch({
          type: 'DELTE_TODO',
          payload: { id },
        })
      })
      .catch(err => console.log(err));
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
      <List renderHeader={'Tasks Todo'}>
        {tasks.map(task => 
          <List.Item wrap key={task.id} extra='X' onPress={() => deleteTask(task.id)} >
            {task.task}
          </List.Item>
        )}
      </List>
    </ScrollView>
  ) 
}

export default TodoList;
