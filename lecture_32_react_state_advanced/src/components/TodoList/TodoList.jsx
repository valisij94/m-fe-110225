import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, onRemove, onToggle }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>

    );
}
