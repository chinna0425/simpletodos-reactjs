import './index.css'

const TodoItem = props => {
  const {todos, deleteItem} = props
  const {id, title} = todos
  const deleteElement = () => {
    deleteItem(id)
  }
  return (
    <li className="list-styling">
      <p className="paragraph-style">{title}</p>
      <button type="button" className="button-style" onClick={deleteElement}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
