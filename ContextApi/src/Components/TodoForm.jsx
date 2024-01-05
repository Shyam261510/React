import { useTodo } from "../Context";
import { useState } from "react";
function TodoForm() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  function add(e) {
    e.preventDefault();
    if (!todo) return;
    addTodo({ TodoMsg: todo });
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Write Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default TodoForm;
