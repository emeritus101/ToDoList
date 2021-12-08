function App(){
  const [todos, setTodos] = React.useState([
    {
      text: '1. Wake up at 6AM',
      isCompleted: false,
    },
    {
      text: '2. Run for 2 miles',
      isCompleted: false,
    },
    {
      text: '3. Eat',
      isCompleted: false,
    },
    {
      text: '4. Work',
      isCompleted: false,
    },
    {
      text: '5. Break',
      isCompleted: false,
    },  
    {
      text: '6. Work again',
      isCompleted: false,
    },
    {
      text: '7. Rest and family time',
      isCompleted: false,
    }, 
    {
      text: '8. Go to bed',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = e => {
    var index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>
      ))}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
