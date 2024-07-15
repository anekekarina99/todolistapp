// src/components/TodoItem.js
import React from 'react';
import { Checkbox, ListItem, ListItemText } from '@mui/material';

const TodoItem = ({ todo, toggleComplete }) => {
  return (
    <ListItem>
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onChange={() => toggleComplete(todo.id)}
      />
      <ListItemText primary={todo.task} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} />
    </ListItem>
  );
};

export default TodoItem;
