import TodoList from "./components/TodoList";
import CreateForm from "./components/CreateForm";

export default function App() {
  return (
    <main className="container">
      <h1 className="title">ToDo</h1>
      <CreateForm />
      <TodoList />
    </main>
  );
}
