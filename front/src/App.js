import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/homePage.js";
import Header from "./components/header/header.js";
import ToDo from "./pages/todo/todo.js";
import Theater from './pages/theater/theater.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [theater, setTheater] = useState([]);
  const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTheaterData = async () => {
            try {
                const result = await axios(
                    'https://g6wipmvrh1.execute-api.us-east-1.amazonaws.com/dev/theater',
                );
                setTheater(result.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        const fetchTodoData = async () => {
          try {
              const result = await axios(
                  'https://g6wipmvrh1.execute-api.us-east-1.amazonaws.com/dev/todos',
              );
              console.log(result.data);
              setTasks(result.data);
          } catch (error) {
              console.error("Error fetching data", error);
          }
      };

        fetchTheaterData();
        fetchTodoData()
    }, []);
    console.log(theater)
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDo tasks={tasks} setTasks={setTasks}/>} />
          <Route path="/theater" element={<Theater theater={theater}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
