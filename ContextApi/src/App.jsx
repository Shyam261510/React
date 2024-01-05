import { useState } from "react";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItems from "./Components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
const [selectedData,setSelectedData]= useState([])
  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        selectedData,
        setSelectedData,
      }}
    >
      <h2>Context Api</h2>
      <TodoForm />
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItems todo={todo} />
        </div>
      ))}
    </TodoProvider>
  );
}
export default App;
