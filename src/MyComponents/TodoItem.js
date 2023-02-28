import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
      <h4>{TodoItem.title}</h4>
      <p>{TodoItem.desc}</p>
    </div>
  )
}

export default TodoItem
