import React, { useState } from 'react'

// 지금의 백그라운드 칼라 변화한다 => state  => change
// rerender => state 값이 변하면 컨포넌트를 다시 그린다.
// const [값, 값을 바꿀 수 있는 함수] = useState()
//리액트는 state를 가지고 화면을 그린다.
//리액트는 state에 변화가 일어나면 컨포넌트를 다시 그린다 re render

function App() {
  // 보통 state 이름 + set
  const [boxStyle, setboxStyle] = useState({
    width: 100,
    height: 100,
    backgroundColor: '#000',
  })

  // state를 다루는 함수는 앞에 handle 이라는 이름을 붙인다.
  // 버튼이 눌렀을때 박스 사이즈를 키운다.
  // boxStyle 의 넓이값, 높이값 두개로
  // boxStyle 의 값이 변한다 => 컨포넌트를 다시 그린다. (re render)
  const handleIncrementBoxSize = () => {
    setboxStyle({
      ...boxStyle,
      width: boxStyle.width * 2,
      height: boxStyle.height * 2,
    })
  }
  const { width, height, backgroundColor } = boxStyle
  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      >
        Box
      </div>
      <button onClick={handleIncrementBoxSize}>+</button>
    </div>
  )
}

// export { App } 여러개를 내보낼 때 용이
// export default // 그 자체만을 내보낼 때 용기
export default App
// export function App() {
//   return <div>Hello App !</div>
// }
