export default function TodoItem({ todo, onRemove, onToggle }) {
    return (
        <div className="todo-item">
            <h2>{todo.todo}</h2>
            {todo.description && <p>{todo.description}</p>}
            <button onClick={() => onRemove(todo.id)}>Remove todo</button>
            <label>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                Completed
            </label>
        </div>
    );
}
