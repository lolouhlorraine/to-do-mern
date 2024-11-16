import { useEffect } from "react";
import { useSetTodos } from "../hooks/useSetTodos";
import './styles.css'

export default function TodoList() {
  const { todos, getTodos, updateTodo, deleteTodo } = useSetTodos();

  useEffect(() => {
    getTodos();
  }, []);
 
  return (
    <div className="todos">
      {todos.length &&
        todos.map((todo) => (
          <div key={todo._id} className="todo">
            <p>{todo.todo}</p>
            <div className="todo-actions">
              <button className="todo-status" onClick={() => updateTodo(todo)}>{todo.status ? "☑" : "☐"}</button>
              <button className="todo-status" onClick={() => deleteTodo(todo)}>X</button>
            </div>
          </div>
        ))}
    </div>
  );
}
