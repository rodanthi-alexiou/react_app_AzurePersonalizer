import React, {useState} from 'react';
import './App.css';
import { Button, Input, MenuItem, FormControl, Select, InputLabel,Dialog,DialogActions,DialogContent, DialogTitle   } from "@material-ui/core";



export default function DialogSelect({cont}) {

  const [open, setOpen] = useState(false);
  const [time_of_day, setTime] = useState('');
  const [mood, setMood] = useState('');

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };

  const handleChangeMood = (event) => {
    setMood(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      var data = [];
      data.push(time_of_day);
      data.push(mood);
      cont(data)
    setOpen(false);
  };
  
  return (
    <div>
    <button class="big-button" onClick={handleClickOpen}>Select User Context</button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>User Context</DialogTitle>
        <DialogContent>
          <form className="container_dialog">
            <FormControl className="formControl">
            <InputLabel id="demo-dialog-select-label">Time</InputLabel>
            <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={time_of_day}
                onChange={handleChangeTime}
                input={<Input />}
            >
            <MenuItem value={"morning"}>morning</MenuItem>
            <MenuItem value={"afternoon"}>afternoon</MenuItem>
            <MenuItem value={"evening"}>evening</MenuItem>
            <MenuItem value={"night"}>night</MenuItem>
            </Select>
            </FormControl>
            <FormControl className="formControl">
              <InputLabel id="demo-dialog-select-label">Mood</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={mood}
                onChange={handleChangeMood}
                input={<Input />}
              >
              <MenuItem value={"happy"}>happy</MenuItem>
              <MenuItem value={"energetic"}>energetic</MenuItem>
              <MenuItem value={"nostalgic"}>nostalgic</MenuItem>
              <MenuItem value={"sleepy"}>sleepy</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}