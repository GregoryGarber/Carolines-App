import React, { useState, useEffect } from 'react';
import TodoItem from './todo_item.js';
import styles from './todo_list.module.css';
import axios from 'axios';
console.log("boob")
function TodoList({tasks, setTasks}) {
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
        text,
        completed: false
        };
        axios.post('https://g6wipmvrh1.execute-api.us-east-1.amazonaws.com/dev/todos', newTask)
        .then(response => {
            console.log(response);
            newTask['id'] = response.data.id;
        })
        .catch(error => {
            console.error("Error adding task", error);
        });
        setTasks([...tasks, newTask]);

        setText('');
    }

    function deleteTask(id) {
        axios.delete(`https://g6wipmvrh1.execute-api.us-east-1.amazonaws.com/dev/todos/${id}`)
        .then(response => {
            console.log(response);
            setTasks(tasks.filter(task => task.id !== id));
        })
        .catch(error => {
            console.error("Error deleting task", error);
        });
        
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
        if (task.id === id) {
            return {...task, completed: !task.completed};
        } else {
            return task;
        } 
        }));
    }
    console.log(tasks)
    return (
        <div className={styles.list}>
            {tasks ? tasks.map(task => (
            <TodoItem
            key={task.id} 
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted} 
            />
        )) : null}
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)} 
                />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
   }
   export default TodoList;