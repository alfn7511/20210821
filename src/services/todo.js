export async function fetchTodos() {
  // 비동기
  const response = await fetch('http://localhost:3000/todos')
  if (response.ok) {
    const todos = await response.json()
    return todos
  }
  return []
}
