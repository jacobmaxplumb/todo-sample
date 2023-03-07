import logo from './logo.svg';
import './App.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  const getAndSetTodos = () => {
    axios.get('http://localhost:8080/todos').then(response => {
      setTodos(response.data);
    })
  }

  const addTodo = (description) => {
    const todoItem = {description: description, isDone: false};
    axios.post('http://localhost:8080/todos', todoItem).then(res => {
      getAndSetTodos();
    })
  }

  useEffect(() => {
    getAndSetTodos();
  }, [])

  return (
    <div>
      <TodoInput letsAddTodoItem={addTodo} />
      <TodoList myTodoItems={todos} />
    </div>
  );
}

export default App;
