import React, { createContext, useReducer, useContext } from 'react'

// 값을 저장해놓을 박스
const Context = createContext()

// 정해진 action 대로 값을 바꾼다.
// state = context 의 state값
// action = 현재 일어난 action
function reducer(state, action) {
  switch (action.type) {
    // 여러개의 데이터를 한번에 업데이트 할 수 있다.
    // set todos를 할때 원본과 필터링된 결과물을 한번에 저장 할 수 있다.
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
        filteredTodos: filterdTodos(action.payload, state.filterType),
      }
    case 'SET_FILTER': {
      console.log({
        ...state,
        filterType: action.payload, //선택된 필터
        filteredTodos: filterdTodos(state.todos, action.payload),
      })
      return {
        ...state,
        filterType: action.payload, //선택된 필터
        filteredTodos: filterdTodos(state.todos, action.payload),
      }
    }
  }
}

function filterdTodos(todos, type) {
  switch (type) {
    case 'All': {
      return todos
    }
    case 'Active': {
      return todos.filter((todo) => {
        return !todo.isDone
      })
    }
    case 'Completed': {
      return todos.filter((todo) => {
        return todo.isDone
      })
    }
  }
}

// Provider => 박스값을 제공해 주는 제공자
export function TodoContextProvider({ children }) {
  // state 상태값
  // dispatch 액션을 일으키는 함수
  // ex. dispatch{{ type:'SET_TODOS', payload: []}}
  const [state, dispatch] = useReducer(reducer, {
    todos: [], //원본
    filteredTodos: [], // 필터링된 결과물
    filterType: 'All',
  })
  const setTodos = (todos) => {
    // 실제 action을 일으켜서 reducer를 일으킨다
    dispatch({ type: 'SET_TODOS', payload: todos })
  }

  const setFilterType = (type) => {
    dispatch({ type: 'SET_FILTER', payload: type })
  }
  const value = {
    state,
    action: {
      setTodos,
      setFilterType,
    },
  }
  return (
    <Context.Provider value={value}>
      {/* 요 안에 들어오는 값을 제공 받을 수 있다.*/}
      {children}
    </Context.Provider>
  )
}

export function useTodoContext() {
  return useContext(Context)
}
