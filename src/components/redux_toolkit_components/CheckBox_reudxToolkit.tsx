import Checkbox from '@mui/material/Checkbox';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface IProps{
  completed:boolean
  completedHandler:()=>void
}

 function CheckBox_redux_toolkit({completed,completedHandler}:IProps) {
  return (
    <div>
      <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' },
      }}
        {...label}
        checked={completed}
        onClick={completedHandler}
        icon={<RadioButtonUncheckedOutlinedIcon style={{color:"yellow"}} />}
        checkedIcon={<TaskAltOutlinedIcon style={{color:"green"}} />}
      />
    </div>
  );
}
export default CheckBox_redux_toolkit;