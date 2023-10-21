import Checkbox from '@mui/material/Checkbox';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
interface IProps{
  completed:boolean
  completedHandler:()=>void;
  open:boolean;
}
 function CheckBox_context({completed,completedHandler,open}:IProps) {
  return (
    <div>
      <Checkbox
      sx={{
        zIndex:`${open?'-1':'0'}`,
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
export default CheckBox_context;