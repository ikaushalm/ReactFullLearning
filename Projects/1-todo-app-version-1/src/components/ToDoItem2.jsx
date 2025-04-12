function ToDoItem2() {
  let todo = {
    name: "Go To College",
    date: "04/10/2023",
  };
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todo.name}</div>
        <div class="col-4">{todo.date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;
