import { useState, FC } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { dim } from "./constants";

const App: FC = () => {
  const [size, setSize] = useState<string>("");

  const handleSubmit = (): void => {
    const currentPaperSize = dim.filter((dim)=> {
      return dim.cardSize === size;
    });

    alert(currentPaperSize[0].paperSize);
    setSize("");
  }

  return (
    <div className="App">
      <div>{`Size: '${size}'`}</div>
      <div className="header">
        <Autocomplete
          getOptionLabel={(option) => option.cardSize}
          options={dim}
          sx={{ width: 300 }}
          inputValue={size}
          onInputChange={(event, newSize) => {
            setSize(newSize);
          }}
          renderInput={(params) => <TextField {...params} label="cardSize" />}
        />
        <button onClick = {handleSubmit}>Submit</button>
      </div>
      <div className="returnedSize"></div>
    </div>
  );
}

export default App;
