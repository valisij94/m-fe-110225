import { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const text = inputValue.trim();
    if (text === "") return;

    onAdd(text); // передаём вверх
    setInputValue("");
  };

  return (
    <div className="add-todo">
      <h2>Enter todo</h2>
      <input
        type="text"
        placeholder="New todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
