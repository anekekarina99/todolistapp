import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}
    >
      <Box sx={{ display: 'flex', width: '100%', maxWidth: '500px' }}>
        <TextField
          label="Add a new task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default AddTodo;
