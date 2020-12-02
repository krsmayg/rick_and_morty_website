import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import {updateTask} from '../../store/task/taskActions'
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} className="custom-checkbox-size" />);

const TaskItem = ({task,updateTask}) => {

 const [checked, setCheckbox] = React.useState(task.marked);
  const handleChange = () => {
    setCheckbox(!checked);
    updateTask(task.id,!checked,task.name); //неправильно!!
  }
  return ( 
    <div className="todo-list__item">
      <GreenCheckbox checked={checked}  name="checkedG" onChange={handleChange} />
      <span className="todo-list__item__title">{task.name}</span>
    </div>
   );
}
 
export default connect(null, {updateTask})(TaskItem);