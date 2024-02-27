import React from "react";
import styles from "./todo.module.css";
import TodoList from "./todo_list";


const ToDo = ({tasks, setTasks}) => {
  return (
    <div className={styles.todo_page}>
      <h1 className={styles.title}>ToDo List</h1>
      <TodoList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default ToDo;