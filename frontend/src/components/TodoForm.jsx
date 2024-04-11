const TodoForm = () => {
  return (
    <div>
      <input type="text" placeholder="Add Todo" className="input input-bordered input-primary w-full max-w-xs" />
      <button className="btn btn-square btn-primary ml-3">+</button>
    </div>
  )
}

export default TodoForm;