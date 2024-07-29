import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const Fields = ({ index, taskTitle, status, data, setData }) => {
  // State to manage edit mode and field values
  const [isEditing, setIsEditing] = useState(false);
  const [editableTask, setEditableTask] = useState(taskTitle);
  const [editableStatus, setEditableStatus] = useState(status);

  const saveChanges = () => {
    let updatedData = [...data];
    updatedData[index] = { task: editableTask, status: editableStatus };
    setData(updatedData);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditableTask(taskTitle);
    setEditableStatus(status);
    setIsEditing(false);
  };

  const deleteTask = () => {
    let updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  }

  return (
    <div className="dataLabels">
      {isEditing ? (
        <div className="editFoam" >
          <Stack direction="row" spacing={5}>
          <TextField
            onChange={(e) => setEditableTask(e.target.value)}
            id="task-title"
            value={editableTask}
            variant="outlined"
            required
          />
          <TextField
            onChange={(e) => setEditableStatus(e.target.value)}
            id="task-status"
            value={editableStatus}
            variant="outlined"
          />
          <Button onClick={saveChanges} variant="contained" color="success">
            <CheckIcon />
          </Button>
          <Button onClick={cancelEdit} variant="contained" color="error">
            <CancelIcon />
          </Button>
          </Stack>
        </div>
      ) : (
        <>
          <h4>{taskTitle}</h4>
          <h4>{status}</h4>
          <Button
            onClick={() => setIsEditing(true)}
            variant="contained"
            color="warning"
          >
            <EditIcon />
          </Button>
          <Button
            onClick={(element) => { deleteTask(element);
            }}
            variant="contained"
            color="error"
          >
            <DeleteIcon />
          </Button>
        </>
      )}
    </div>
  );
};

export default Fields;
