import { create } from "zustand";
import { ToDo } from "@/utils/types";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";

interface ToDoState {
  toDos: ToDo[];
  addToDo: (description: string) => void;
  removeToDo: (id: string) => void;
  toogleChecked: (id: string) => void;
}

export const useToDoStore = create<ToDoState>()(
  devtools(
    persist(
      (set) => ({
        toDos: [],
        addToDo: (description: string) =>
          set((state) => ({
            toDos: [
              ...state.toDos,
              { id: uuidv4(), description, checked: false },
            ],
          })),
        removeToDo: (id: string) =>
          set((state) => ({
            toDos: state.toDos.filter((todo) => todo.id !== id),
          })),
          toogleChecked: (id: string) =>  
            set ((state) => ({
              toDos: state.toDos.map((toDo: ToDo) => 
              toDo.id === id ? {...toDo, checked: !toDo.checked}: toDo
              )
            })),
          
      }),
      {
        name: "ToDoDtore",
      }
    )
  )
);
