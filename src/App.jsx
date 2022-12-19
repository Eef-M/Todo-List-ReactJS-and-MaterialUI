import { Container, Typography } from "@mui/material";
import Todo from "./components/Todo";

function App() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "5px" }}>
      <Typography sx={{ mt: 4, fontSize: "32px", fontWeight: "bold", fontFamily: "Poppins", color: "#283747" }}>Todo List</Typography>
      <Typography sx={{ mb: 4, fontSize: "12px", fontWeight: "600", fontFamily: "Poppins", color: "#3C1874" }}>By Eef Mekelliano</Typography>
      <Todo />
    </Container>
  );
}

export default App;
