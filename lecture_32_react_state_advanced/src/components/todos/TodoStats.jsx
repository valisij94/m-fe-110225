export default function TodoStats( {todosCount} ) {

  return (
    <div className="todoStatistics">
      <h3>My todo statistics</h3>
      <p>Now I should do {todosCount} todos!</p>
    </div>
  )
}