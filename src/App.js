import React, {useState} from 'react';
import './App.scss';
import TodoList from './components/TodoList';

function App () {
  const [todoList, setTodoList] = useState ([
    {id: 1, title: 'Bundesliga'},
    {id: 2, title: 'National Super Cup'},
    {id: 3, title: 'UEFA Champion Leauge'},
    {id: 4, title: 'Wolrd Cup Club'},
  ]);

  function handleTodoClick (todo) {
    console.log (todo);
    const index = todoList.findIndex (x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice (index, 1);
    setTodoList (newTodoList);
  }

  return (
    <div className="app">
      <h1>Bayern Munich target this season</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
