import './App.css';
import { useState, useEffect, useRef } from 'react';

// 1.객체
const FILTER_MAP = {
  // 2.메서드
  All: () => true, // 속성 값
  Done: (task) => task.completed,
  Active: (task) => !task.completed
}

// 3.Object.keys(객체): 객체의 속성 이름을 문자열 배열로 리턴한다
const FILTER_NAMES = Object.keys(FILTER_MAP);

console.log(FILTER_NAMES); // ['All', 'Done', 'Active']

// 4.로컬 스토리지를 동기화하는 함수
function saveDoc(tasks) {
  localStorage.setItem("tasks", tasks);
}

// 5.tasks변수의 초기값
const initialTasks = localStorage.getItem("tasks") || "[]";

// 6.메인 컴포넌트
export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(initialTasks));
  const [filter, setFilter] = useState("All");

  // 10. 아직 로컬스토리지에 자료가 없기때문에 [] 출력
  console.log(tasks); 

  // 11.할일을 추가하는 함수
  function addTask(){}

  // 12.할일을 삭제하는 함수
  function deleteTask(){}

  // 13.할일을 완료상태를 다루는 함수
  function toggleTaskCompleted(){}

  // 14.할일을 수정하는 함수
  function editTask(){}
}


// 7.폼 컴포넌트
function Form() {}

// 8.필터 버튼
function FilterButton() {}

// 9.Todo 컴포넌트
function Todo() {}

