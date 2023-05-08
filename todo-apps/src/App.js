import "./App.css";
import { useState, useEffect, useRef } from "react";

// 1. 객체
const FILTER_MAP = {
  // 2. 메서드
  All: () => true, // 속성 값
  Done: (task) => task.completed,
  Active: (task) => !task.completed
}

// 3. Object.keys(객체): 객체의 속성 이름을 문자열 배열로 리턴한다
const FILTER_NAMES = Object.keys(FILTER_MAP);

console.log("3.FILTER_MAP =>", FILTER_NAMES); // (2)["All", "Done", "Active"]

// 4. 로컬 스토리지를 동기화하는 함수
function saveDoc(tasks) {
  localStorage.setItem("tasks", tasks);
}

// 5. tasks변수의 초기값(값이 없기때문에 []비어있는 상태이다)
// 28. tasks의 값이 들어있기때문에 새로고침을 해도 값이 나온다
const initialTasks = localStorage.getItem("tasks") || "[]";

// 6.메인 컴포넌트
export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(initialTasks)); // 문자열 스크립트를 자바형태로 변환
  const [filter, setFilter] = useState("All");                  // 필터 초기값 

  // 10. 아직 로컬스토리지에 자료가 없기때문에 [] 출력
  console.log("10.tasks =>", tasks); // 변경사항을 확인!

  // 11. 할일을 추가하는 함수 // function addTask() { }
  // 26. 할일을 추가하는 함수
  function addTask(name) {
    console.log("26.name =>", name);
    const newTask = {
      id: `todo-${Date.now()}`,  // 현재시간을 ms로 나타네는 함수 Date.now()
      name,
      completed: false // 항목이 추가되면서 항목을 아직 완료를 안했기때문에 false를 넣어준다
    }

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    console.log("26.newTask =>", newTask);

    // 27. 로컬스토리지 동기화
    saveDoc(JSON.stringify(updatedTasks));    //JSON포맷으로 변환후 저장을 시켜줘야한다
  }

  // 12. 할일을 삭제하는 함수 // function deleteTask() { }
  // 30.
  function deleteTask(id) {
    console.log("30.task-id =>", id);

    // 31. 전달받은 id와 일치하지 않은 id를 가진 task만 리턴한다
    const remainingTasks = tasks.filter(task => task.id !== id); // for 반복문보다 새로운 매서드를 사용하는것이 좋다!
    console.log("31.remainingTasks =>", remainingTasks);

    setTasks(remainingTasks);

    saveDoc(JSON.stringify(remainingTasks));
  }

  // 13. 할일을 완료상태를 다루는 함수 // function toggleTaskCompleted() { }
  // 33. 할일을 완료상태를 다루는 함수
  function toggleTaskCompleted(id) {
    console.log("33.id =>", id);

    // 34.
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        // id랑 name은 그대로 두고 completed만 현재 상태와 반대!
        return { ...task, completed: !task.completed }
      }
      return task;
    })

    // 35.
    setTasks(updatedTasks);

    // 36.
    saveDoc(JSON.stringify(updatedTasks));
  }

  // 14. 할일을 수정하는 함수
  function editTask() { }

  // 15.
  const filterButtons = FILTER_NAMES.map(name => (

    <FilterButton   //  (8)필터 버튼 컴포넌트
      key={name}    //  프롭스 = { 값 }
      name={name}
      isPressed={filter == name}
      setFilter={setFilter}
    />
  ));

  // 16. 할일 목록
  const taskList = tasks.map(task => (

    <Todo             // (9)Todo 컴포넌트
      key={task.id}   // 프롭스 = {값}
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleteTask={deleteTask}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
    />
  ));

  // 17. return
  return (
    <div className="app-container">

      {/* 제목 */}
      <h1 className="app-title">할일 목록 &#128526; &#127928;</h1>

      {/* (7)폼 */}
      <Form addTask={addTask} />

      {/* 필터 버튼 */}
      <div className="filter-btn-group">
        {filterButtons}
      </div>

      {/* 할일 목록 */}
      <h2 className="remaining">{taskList.length} 개 남았습니다</h2>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}


// 7. 폼 컴포넌트 // function Form() {}
// 18. 폼 컴포넌트
function Form({ addTask }) {
  const [name, setName] = useState("");

  // function handleSubmit() { }

  // 25.
  function handleSubmit(e) {
    e.preventDefault();

    console.log("25.name =>", name);
    addTask(name);

    // 39. 폼 제출시 input을 비운다
    setName("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-input"
        autoComplete="off"
        // 24.
        onChange={(e) => setName(e.target.value)}
        // 38.
        value={name}
      />
      <button
        type="submit"
        className="add-btn"
        // 40. name이 빈문자열이 아니면 활성화! (disabled => 비활성화)
        disabled={!name.trim()}
      >
        추가
      </button>
    </form>
  );
}
// 8. 필터 버튼 //function FilterButton() { }
// 19. 필터 버튼
function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      className="filter-btn">
      {name}
    </button>
  );
}

// 9. Todo 컴포넌트 // function Todo() { }
// 20. Todo 컴포넌트(16)
function Todo({ id, name, completed, deleteTask, toggleTaskCompleted, editTask }) {

  // 41. 템플릿 상태를 결정하는 변수
  const [isEditing, setIsEditing] = useState(false);
  // 42. 새로운 할일의 이름
  const [newName, setNewName] = useState("");

  // 43. 업데이트 폼 제출
  function handleSubmit(){}

  const viewTemplate = (
    <div className="view-template">

      {/* 21.할일 이름 */}
      <div className="todo-details">
        <input
          type="checkbox"
          id={id}
          className="todo-checkbox"
          // 32.
          onChange={() => toggleTaskCompleted(id)} // label 클릭시 작용
          // 37. 새로고침을 했을 때 필요로함
          checked={completed}
        />
        {/* input에 연결! */}
        <label htmlFor={id} className="todo-name">
          {name}
        </label>
      </div>

      {/* 22.버튼 그룹 */}
      <div className="view-btn-group">
        <button
          className="edit-btn"
          // 44. 기본값은 false으로 설정해두었다
          onClick={() => setIsEditing(true)}
        >
          수정
        </button>
        <button
          className="delete-btn"
          // 29.
          onClick={() => deleteTask(id)}
        >

          삭제
        </button>
      </div>
    </div>
  );

  // 45.
  const editingTemplate = (
    <p>
      여기서 수정하세요
    </p>
  )

  // 23.
  return (
    <li className="todo-item">
      {/* 23.{viewTemplate} */}
      {/* 46. */}
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}

