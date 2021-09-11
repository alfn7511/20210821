export async function fetchTodos() {
  // 비동기
  const response = await fetch('http://localhost:3000/todos')
  if (response.ok) {
    const todos = await response.json()
    return todos
  }
  return []
}
// GET, POST, PUT, DELETE

export async function insertTodo(label) {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isDone: false, label }),
  })
  return response.ok
}

export async function updateTodoStatus(todo) {
  const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
  return response.ok
}

export async function deleteTodo(id) {
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  })
  return response.ok
}
