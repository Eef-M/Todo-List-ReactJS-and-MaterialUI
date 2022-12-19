import { Box, Button, TextField } from "@mui/material";
import styled from "styled-components";

export const TodoBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  padding: "20px",
  background: "white",
  borderRadius: "8px",
  width: "500px",
});

export const TodoInput = styled(TextField)({
  width: "100%",
});

export const StyledButton = styled(Button)`
  && {
    background: #3c1874;
    color: #f3f3f3;
    font-weight: bold;
    :hover {
      background: #283747;
    }
  }
`;

export const ListsBox = styled(Box)({
  background: "#ffffff",
  padding: "20px",
  height: "20px",
  fontFamily: "Poppins",
  marginTop: 10,
  width: "500px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ErrorBox = styled(Box)({
  background: "#DE354C",
  color: "#fff",
  padding: "10px",
  fontWeight: "bold",
  fontFamily: "Poppins",
  marginTop: 10,
  width: "auto",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
