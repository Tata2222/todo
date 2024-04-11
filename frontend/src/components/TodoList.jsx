import TodoCard from './TodoCard'

const TodoList = ({ todos }) => {
  return(
    <>
     {todos.map(todo => (
        <div key={todo.id}>
          <TodoCard  todo={todo} />
        </div>
      ))}
    </>
  )
} 

export default TodoList;