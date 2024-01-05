import { useState } from "react";
import { useTodo } from "../Context";
import Selected from "./Selected";
function TodoItems({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.TodoMsg);
  const { deleteTodo, updateTodo } = useTodo();
  const [editAble, setEditAble] = useState(false);

  function edit() {
    updateTodo(todo.id, { TodoMsg: todoMsg });
    setEditAble(false);
  }
  return (
    <div>
      <input
        type="text"
        readOnly={!editAble}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* update button */}
      <button
        onClick={() => {
          if (editAble) {
            edit();
          } else setEditAble((prev) => !prev);
        }}
      >
        {editAble ? "Save" : "Edit"}
      </button>
      {/* delete Button */}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {/* add button */}

      <Selected data={selectedData} />
    </div>
  );
}
export default TodoItems;
