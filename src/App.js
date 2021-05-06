import { useEffect, useState } from "react";
import TimePickers from "./TimePicker";
import MainTimePicker from "./MainTimePicker";

function App() {
  const [defaultValue, setDefaultValue] = useState("03:00");
  //
  const [timeValue, setTimeValue] = useState([
    { STimeId: 0, StartTime: defaultValue },
    { STimeId: 1, StartTime: defaultValue },
  ]);

  useEffect(() => {
    setTimeValue([
      { STimeId: 0, StartTime: defaultValue },
      { STimeId: 1, StartTime: defaultValue },
    ]);
  }, [defaultValue]);

  return (
    <>
      <br />
      <MainTimePicker
        defaultValue={defaultValue}
        setDefaultValue={setDefaultValue}
      />
      <br />

      <TimePickers id={0} timeValue={timeValue} setTimeValue={setTimeValue} />
      <TimePickers id={1} timeValue={timeValue} setTimeValue={setTimeValue} />
    </>
  );
}

export default App;
