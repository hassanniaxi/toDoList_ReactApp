import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields.js";

function App() {
  const [foam, setFoam] = useState({ task: '', status: '' });
  const [data, setData] = useState([]);

  const addData = () => {
    const { task, status } = foam;
    if (task.trim().length <= 0) {
      alert("You must write a task title.");
      return;
    }
    setData([...data, foam]);
    setFoam({ task: '', status: '' });
  };

  const handleKeyPressed = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="foam">
      <h1>Enter to-dos to manage your tasks</h1>
        <Stack spacing={2} direction="row">
          <TextField
            onKeyPress={handleKeyPressed}
            value={foam.task}
            onChange={(e) => setFoam({ ...foam, task: e.target.value })}
            id="task-title"
            label="Task Title"
            variant="outlined"
            required
          />
          <TextField
            onKeyPress={handleKeyPressed}
            value={foam.status}
            onChange={(e) => setFoam({ ...foam, status: e.target.value })}
            id="task-status"
            label="Status"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
        {data.length === 0 ? (
          <h1 style={{color: "#44bd32", marginTop: "60px"}}>No tasks available</h1>
        ) : (
          <div className="data">
            <div className="dataHeads">
              <h4>Task Title</h4>
              <h4>Status</h4>
              <h4>Edit</h4>
              <h4>Remove</h4>
            </div>
            {data.map((t, index) => (
              <Fields
                key={index}
                index={index}
                taskTitle={t.task}
                status={t.status}
                data={data}
                setData={setData}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default App;
