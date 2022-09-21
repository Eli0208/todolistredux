import { Button, Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const TodoInput = () => {
    const dispatch = useDispatch();
    const [ newTodo, setNewTodo] = useState();
    const handleChange = event => setNewTodo(event.target.value);
    const handleClick =() => dispatch({
      type: 'ADD_TODO',
      payload : {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      }
    })
    return(
      <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}></Grid>
      <Grid item xs={2} sm={4} md={4}>
        <TextField value={newTodo} onChange ={handleChange} type="text" />
      </Grid>
      <Grid item xs={1} sm={4} md={4}>
        <Button variant="contained" onClick = {handleClick}>ADD TODO</Button>
        </Grid>
      </>
    )
  }

  export default TodoInput;