// src/components/TodoList.js
import React, { useState } from 'react';
import { List, ButtonGroup, Button } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <>
      <ButtonGroup variant="text" sx={{ mb: 2 }}>
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button onClick={() => setFilter('active')}>Active</Button>
        <Button onClick={() => setFilter('completed')}>Completed</Button>
      </ButtonGroup>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
