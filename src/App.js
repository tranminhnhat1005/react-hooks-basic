import React, {useState, useEffect} from 'react';
import './App.scss';
// import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';

function App () {
  // const [todoList, setTodoList] = useState ([
  //   {id: 1, title: 'Bundesliga'},
  //   {id: 2, title: 'National Super Cup'},
  //   {id: 3, title: 'UEFA Champion Leauge'},
  //   {id: 4, title: 'Wolrd Cup Club'},
  // ]);
  const [postList, setPostList] = useState ([]);
  const [pagination, setPagination] = useState ({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });

  const [filters, setFilters] = useState ({
    _limit: 10,
    _page: 1,
  });

  useEffect (
    () => {
      async function fetchPostList () {
        try {
          const paramsString = queryString.stringify (filters);
          const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
          const response = await fetch (requestUrl);
          const responseJSON = await response.json ();
          const {data, pagination} = responseJSON;
          setPostList (data);
          setPagination (pagination);
        } catch (error) {
          console.log ('Failed to fetch data.', error.messgae);
        }
      }

      fetchPostList ();
    },
    [filters]
  );

  // function handleTodoClick (todo) {
  //   console.log (todo);
  //   const index = todoList.findIndex (x => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice (index, 1);
  //   setTodoList (newTodoList);
  // }

  // function handleTodoFormSubmit (formValues) {
  //   console.log ('Form submit: ', formValues);

  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };

  //   const newTodoList = [...todoList];
  //   newTodoList.push (newTodo);
  //   setTodoList (newTodoList);
  // }

  function handlePageChange (newPage) {
    setFilters ({
      ...filters,
      _page: newPage,
    });
  }

  return (
    <div className="app">
      <h1>Post list</h1>
      <PostList posts={postList} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
