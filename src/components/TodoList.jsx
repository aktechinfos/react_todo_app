import React from 'react'

export const TodoList = ({todos, setTodos, setEditTodo}) => {
  const onhandleDelete = ({id}) => {
    setTodos(todos.filter((todo) =>  todo.id !== id));
  }

  const onhandleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const onhandleComplete = (todo) => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item. completed };
      }
      return item;

    })
    );
  };
 
  
  return (
    <div>
        {todos.map((todo) => (
            <li className="list-item" key={todo.id}>        
            <input
            type="text"
            value={todo.title}  
            className={`list ${todo.completed ? "complete" : ""}`}            
            onChange={(event) => event.preventDefault()} 
            />
            <div>
              <button className='button-complete task-button'onClick={() => onhandleComplete(todo)}>
                <i className='fa fa-check-circle'></i>
              </button>
              <button className='button-edit task-button' onClick={() => onhandleEdit(todo)}>
                <i className='fa fa-edit'></i>
              </button>
              <button className='button-delete task-button' onClick={() => onhandleDelete(todo)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
         </li>
        ))}
    </div>
  );
};
 