import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const theme = createTheme({
  palette: {
    primary: {
      main: '#37474f', // Primary color from the image
    },
    secondary: {
      main: '#8eacbb', // Secondary color from the image
    },
    background: {
      default: '#eceff1', // Background color from the image
    },
  },
  typography: {
    h4: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: '#37474f', // Title color
    },
    body1: {
      fontFamily: 'Arial',
      color: '#37474f', // Text color
    },
  },
});

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            To-Do App
          </Typography>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
