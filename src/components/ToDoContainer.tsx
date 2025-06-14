"use client";
import { Button, TextField, Typography } from "@mui/material";
import { ToDoItem } from "./ToDoItem";
import { useToDoStore } from "@/app/store";
import { Refresh } from "@mui/icons-material";

export const ToDoContainer = () => {
  const toDosList = useToDoStore((state) => state.toDos);
  const addToDos = useToDoStore((state) => state.addToDo);

  const handleSubmitToDo = (event: any) => {
    event.preventDefault();
    addToDos(event.target[0].value);
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        maxHeight: "70vh",
        marginTop: "10vh",
        padding: "2rem",
        borderRadius: "1rem",
        minWidth: "70vh",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "3rem", fontWeight: 500 }}>
        ToDos
      </Typography>

      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
        onSubmit={handleSubmitToDo}
      >
        <TextField label="to do" />
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "none", fontSize: "1rem" }}
        >
          Add
        </Button>
      </form>

      {toDosList.map((todo) => {
        return <ToDoItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
};
