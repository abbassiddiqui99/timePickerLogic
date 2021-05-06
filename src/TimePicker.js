import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimePickers({ id, timeValue, setTimeValue }) {
  const classes = useStyles();

  const updateFieldChanged = (e) => {
    let newArr = [...timeValue];
    newArr[id] = { STimeId: id, StartTime: e.target.value };

    setTimeValue(newArr);
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        type="time"
        value={`${timeValue[id].StartTime}`}
        onChange={updateFieldChanged}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}
