import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      TodoMsg: "learn JS",
    },
  ],
selectedData:[],
setSelectedData:()=>{},
  addTodo: (todo) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
});

export function useTodo() {
  return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
