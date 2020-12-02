import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import {createTask, getTasks } from '../../store/task/taskActions';
import TaskItem from '../../components/TaskItem'
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "400px",
    display: "flex",
    justifyContent: 'space-around',
    '& > *': {
      marginRight: '20px'
    }
  },
  btn: {
    padding: '0 20px',
    minWidth: 120,
    backgroundColor: '#00b894',
    '&:hover': {
      background: '#01856b',
    }
  }
}));

const WatchListPage = (props) => {
  const classes = useStyles();
  useEffect(() =>{
    if(localStorage.getItem("todoTasks") === null) {
      localStorage.setItem("todoTasks", JSON.stringify([]));
    } else {
      props.getTasks();
      console.log(props.tasks);
    }
  },[])
  const [inputData, setInputData] = useState('');
  const handleInput = ({target}) => {
    setInputData(target.value);
  } 
  const createTask = () => {
  if(inputData !== '')  props.createTask(inputData);
  }
  const renderTasks = (
    props.tasks.map(task => (
       <TaskItem task = {task} key={task.id} />
    ))
  )
  return (
    <div className="todo-container">
      <form className={classes.root}>
          <input className="todo-input" placeholder="Add new Episode" onChange={handleInput}></input>
          <Button variant="contained" color="primary" className={classes.btn} onClick={createTask}>
            <Typography variant="h6">Add</Typography>
          </Button>
      </form>
      <div className="todo-list">
        {renderTasks}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks
  }
}
export default connect(mapStateToProps, {createTask, getTasks})(WatchListPage);
