import React, { useState } from "react";
import "./style.css";

//TodoList에 기본 todos로 2개가 있기때문에 추가할 id값으로 3번부터 시작할것을 명시함
let number = 3;

//todos와 setTodos를 props로 받아옴
function Form({ setTodos, todos }) {
  //초기화할때 필요한 초기상태를 선언
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);
  //각각의 todo를 저장할 스테이트를 만듬
  const [todo, setTodo] = useState(initialState);
  //onchange로 event.target.value 를 받아옴
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(value);
    //받아온 이름과 그에 맞는 밸류를 todo라는 스테이트에 저장함
    //전개연산자를 통해 todo객체를 펼쳐놓고 이름과 밸류를 저장해야 제대로된 하나의 객체가 됨
    setTodo({ ...todo, [name]: value });
  };
  //onclick과 다르게 form안에 있는 버튼을 누르면 내용이 모두 submit되는 형식
  const onSubmitHandler = (event) => {
    //페이지가 제출만 되고 재실행 되지 않도록 막는다.
    event.preventDefault();
    //입력받은 문자열 양쪽의 공백을 모두 제거한다.
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
