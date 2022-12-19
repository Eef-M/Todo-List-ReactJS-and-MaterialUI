import { Delete } from "@mui/icons-material";
import { Box, Checkbox, Typography } from "@mui/material";
import { ListsBox } from "../style/styled";

const Lists = ({ task, tasks, setTasks }) => {
  const handleDelete = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
  };

  const handleCheckBox = (id) => {
    const checkCompleted = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(checkCompleted);
  };

  return (
    <Box>
      {task.completed ? (
        <ListsBox sx={{ background: "#91b5da" }}>
          <Box sx={{ display: "flex", alignItems: "left", justifyContent: "center", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "16px", textDecoration: "Line-through", fontWeight: "bold", color: "white", fontFamily: "Poppins" }}>{task.name}</Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "white", fontFamily: "Poppins" }}>Created at {task.date}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
            <Checkbox color="success" onChange={() => handleCheckBox(task.id)} />
            <Delete sx={{ cursor: "pointer", color: "#DE354C" }} onClick={() => handleDelete(task.id)} />
          </Box>
        </ListsBox>
      ) : (
        <ListsBox boxShadow={3}>
          <Box sx={{ display: "flex", alignItems: "left", justifyContent: "center", flexDirection: "column" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold", fontFamily: "Poppins" }}>{task.name}</Typography>
            <Typography sx={{ fontSize: "12px", fontFamily: "Poppins" }}>Created at {task.date}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
            <Checkbox sx={{ fontSize: "32px" }} color="success" onChange={() => handleCheckBox(task.id)} />
            <Delete sx={{ cursor: "pointer", color: "#932432" }} onClick={() => handleDelete(task.id)} />
          </Box>
        </ListsBox>
      )}
    </Box>
  );
};

export default Lists;
