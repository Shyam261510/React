function Selected({ data }) {
  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.TodoMsg}</h2>
        </div>
      ))}
    </div>
  );
}
export default Selected;
