
const TodoCard = ({ todo }) => {
  return (
    <div key={todo.id} className="card w-96 bg-primary text-primary-content mb-3">
      <div className="card-body">
        <div className="card-actions justify-end">
         
        </div>
        <p>Sweet Home</p>
        <h2 className="card-title">{todo.body}</h2>
        
      </div>
    </div>
  )
}

export default TodoCard;