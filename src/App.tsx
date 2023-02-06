import { useState, FC, ChangeEvent } from "react";

const App: FC = () => {
  const [size, setSize] = useState<string>("");

  const handleSubmit = (): void => {
    alert(size);
  }
  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSize(value);
  }

  return (
    <div className="App">
      <div className="header">
        <input type="text" placeholder="Pick a size.." value={size} onChange={handleSizeChange}/>
        <button onClick = {handleSubmit}>Submit</button>
      </div>
      <div className="returnedSize"></div>
    </div>
  );
}

export default App;
