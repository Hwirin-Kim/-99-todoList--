import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
//todos와 setTodos를 props로 받는다.
function List({ todos, setTodos }) {
  // onChange함수를 여기서 선언한다.
  // 그 이유는 이 함수에서 사용해야 할 값인 todos와 Todo에서 사용된 todo(이것도 form에서 받은것)가 있는데
  // todos가 만약 엄청 큰 배열이라면 그 값을 props를 통해 자식인 Todo에 넘겨주는것이 비효율이 된다.
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };
  //이것도 위와 마찬가지 이유로 Todo가 아닌 List에서 선언하게 된 것이다.
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };
  //map을 통해 props를 넘겨줄 때, 반드시 각각 고유한 key값을 보내줘야 한다.
  //게다가 key값으로 index를 넘겨주면 변화를 감지하지 못하기 때문에 고유한 값을 넘겨줘야한다.
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
