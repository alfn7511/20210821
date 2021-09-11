import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Header from '../components/todo/Header'
import List from '../components/todo/List'
import Footer from '../components/todo/Footer'

import {
  fetchTodos,
  insertTodo,
  updateTodoStatus,
  deleteTodo,
} from '../services/todo'

import { useTodoContext } from '../components/context'

const Container = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

function TodoPage() {
  const {
    state: { filteredTodos },
    action: { setTodos },
  } = useTodoContext()

  // componentDidMount 같이 쓸 수 있는 방법
  useEffect(() => {
    fetchAndSetTodos()
  }, [])
  async function fetchAndSetTodos() {
    const todos = await fetchTodos()
    setTodos(todos)
  }
  const handleAddTodo = async (label) => {
    const success = await insertTodo(label)
    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후에 시도해주세요.')
      return
    }
    fetchAndSetTodos() // 성공일경우 리스트 갱신
  }
  const handleUpateTodo = async (todo) => {
    console.log('todo', todo)
    const success = await updateTodoStatus({ ...todo, isDone: !todo.isDone })
    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후에 시도해주세요.')
      return
    }
    fetchAndSetTodos() // 성공일경우 리스트 갱신
  }
  const handleDeleteTodo = async (id) => {
    console.log('id', id)
    const success = await deleteTodo(id)
    if (!success) {
      window.alert('일시적인 에러가 발생했습니다. 잠시 후에 시도해주세요.')
      return
    }
    fetchAndSetTodos() // 성공일경우 리스트 갱신
  }
  return (
    <Container>
      <Header onAddTodo={handleAddTodo} />
      <List
        todos={filteredTodos}
        onUpdateDodo={handleUpateTodo}
        onDeleteDodo={handleDeleteTodo}
      />
      <Footer />
    </Container>
  )
}

export default TodoPage
