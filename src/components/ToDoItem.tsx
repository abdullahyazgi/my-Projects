import { Checkbox, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { ToDo } from "@/utils/types";
import { useToDoStore } from "@/app/store";

interface Props {
  todo: ToDo;
}

export const ToDoItem = ({ todo }: Props) => {
  const removeToDo = useToDoStore((state) => state.removeToDo);
  const toogleChecked = useToDoStore((state) => state.toogleChecked)
  return (
    <div
      style={{
        backgroundColor: "rgb(217, 216, 216, 0.8)",
        marginBottom: "1rem",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={todo.checked}
          onClick={() => toogleChecked(todo.id)}
        />
        <Typography
          sx={{
            textDecoration: todo.checked ? "line-through" : "none",
            color: todo.checked ? "rgb(23, 23, 23, 0.5)" : "rgb(23, 23, 23)",
          }}
        >
          {todo.description}
        </Typography>
      </div>
      <IconButton
        onClick={() => removeToDo(todo.id)}
        aria-label="delete"
        size="small"
        color="error"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
