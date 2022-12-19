import React, { useState } from "react";
import { ErrorBox, StyledButton, TodoBox, TodoInput } from "../style/styled";
import Lists from "./Lists";

const Todo = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState(false);
  const theDate = new Date().toLocaleString();

  function generateID(length) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    setErrors(false);

    if (newTask == "") {
      setErrors(true);
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: generateID(15),
          name: newTask,
          date: theDate,
          completed: false,
        },
      ]);
    }

    setNewTask("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask(e);
    }
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <TodoBox sx={{ my: "5px", boxShadow: 3 }}>
          <TodoInput error={errors} onKeyPress={onKeyPress} value={newTask} onChange={(e) => setNewTask(e.target.value)} id="outlined-basic" label="new task" size="small" />
          <StyledButton variant="contained" type="submit">
            Add
          </StyledButton>
        </TodoBox>
      </form>
      {errors ? <ErrorBox>No task added</ErrorBox> : null}
      {tasks.length > 0 ? tasks.map((task) => <Lists key={task.id} task={task} tasks={tasks} setTasks={setTasks} />) : null}
    </>
  );
};

export default Todo;
