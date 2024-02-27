import React from 'react';
import styles from './todo_item.module.css';
function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
 <div className={styles.todo_item}>
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<h3 className={task.completed ? styles.text_complete : styles.text_incomplete}>{task.text}</h3>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default TodoItem;