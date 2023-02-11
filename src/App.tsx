import { useState, FC } from "react";
import TextField from '@mui/material/TextField';
import { Autocomplete, Button } from '@mui/material';
import "./assets/css/App.css";

import { sizeData } from "./constants";

const App: FC = () => {
  const [size, setSize] = useState<string>('');
  const [returnedSize, setReturnedSize] = useState<string>('')

  return (
    <div className="App">
      <div className="header">
        Envelope Size Guide
        <div className="inputContainer">
          <Autocomplete
            getOptionLabel={(option) => option.cardSize || ''}
            options={sizeData}
            sx={{ width: 300 }}
            onChange={(event, value) => setReturnedSize(value?.paperSize || '')}
            inputValue={size}
            onInputChange={(event, newSize) => {
              setSize(newSize);
            }}
            renderInput={(params) => <TextField {...params} label="Card Size" />}
          />
        </div>
      </div>
      <div className="returnedSize">{returnedSize}</div>
    </div>
  );
}

export default App;
