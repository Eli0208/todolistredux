
import { Button, Checkbox, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Todos =() => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    console.log(todos);
    const handleClick = id => dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
    if (!todos || !todos.length){
      return <p> Nothing </p>
    }
    return(
        <>
        {Object.keys(todos).map((i) => 
                <div>
                    <Grid container spacing={12} className="body">
                        <Grid item xs = {4} className="body">
                            <Checkbox/>
                        </Grid>
                        <Grid item xs = {4} className="body">
                            {todos[i].label}
                        </Grid>
                        <Grid item xs = {4} className="body">
                            <Button variant="contained" onClick={() => handleClick(todos[i].id)} color='error'>Delete</Button>
                    </Grid>
                    </Grid>
                </div>
                )}
                </>
    )
  };

  export default Todos;