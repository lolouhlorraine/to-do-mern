import { useState } from "react"

// todo: breakdown
// todo: implement request handling error
// todo: try to use react query to optimise

export const useSetTodos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    const req = await fetch("api/todos")
    const todosList = await req.json()

    setTodos(todosList)
  }

  const createTodo = async (content) => {
    const req = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo: content }),
      headers: {
        "Content-type": "application/json",
      }
    })

    const newTodo = await req.json()
    setTodos([...todos, newTodo])
  }

  const updateTodo = async (data) => {
    const { _id, status } = data
    const req = await fetch(`/api/todos/${_id}`, {
      method: "PUT",
      body: JSON.stringify({ status: status }),
      headers: {
        "Content-type": "application/json",
      }
    })
    const updatedTodo = await req.json()
    if (updatedTodo.updated) {
      getTodos()
    }
  }

  const deleteTodo = async (data) => {
    const { _id } = data
    const req = await fetch(`/api/todos/${_id}`, {
      method: "DELETE",
    })
    const todoDeleted = await req.json()

    if (todoDeleted.deleted) {
      getTodos()
    }
  }

  return { todos, getTodos, createTodo, updateTodo, deleteTodo }
}
