import { useState } from "react";
import { useSetTodos } from "../hooks/useSetTodos";
import "./styles.css"

export default function CreateForm() {
  const [content, setContent] = useState()
  const { createTodo } = useSetTodos()

  const createNewTodo = () => {
    if(content.length > 3) {
      createTodo(content);
    }
  }

  return (
    <form className="form" onSubmit={createNewTodo}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter a new todo..."
        required
        className="form__input"
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}