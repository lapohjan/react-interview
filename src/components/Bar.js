import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = {
  Paper: {
    margin: 'auto',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
};

const Bar = ({ onSubmit, newTodoName, onInputChange }) => {
  return (
    <Grid xs={12}>
    <Paper elevation={2} style={styles.Paper}>
    {/* Form for adding a new todo */}
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      {/* Input field */}
      <Input
        required
        placeholder="Add new todo"
        value={newTodoName}
        onChange={onInputChange}
        inputProps={{ maxLength: 45 }}
        style={{ width:'400px' }}
      />
      {/* Submit button */}
      <Button
        type="submit"
        value="Submit"
        variant="contained"
        color="primary"
        style={{ width: '10%' }}
      >
        Add
      </Button>
    </form>
    </Paper>
    </Grid>
  );
};

export default Bar