import React from 'react'
import { Delete } from '@material-ui/icons'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox'
import { green } from '@material-ui/core/colors'

const styles = {
  Icon: {
    marginLeft: 'auto',
  },
  Paper: {
    margin: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  Checkbox: {
    color: green[600],
  },
};

const TodoList = ({ todo, onClick, onRemoveClick }) => {
  let text;

  //If todo is complete, checkbox checked
  if (todo.complete === true) {
    text = 'checked';
    //If todo is not complete: checkbox unchecked
  } else {
    text = '';
  }

  return (
    <Grid item xs={12}>
      <Paper elevation={2} style={styles.Paper}>
        <Checkbox
          style={styles.Checkbox}
          checked={text}
          onClick={() => onClick(todo.id)}
        />
        <span className="todo">{todo.name}</span>
        <IconButton
          color="secondary"
          aria-label="Delete"
          style={styles.Icon}
          onClick={() => onRemoveClick(todo.id)}
        >
          <Delete fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default TodoList