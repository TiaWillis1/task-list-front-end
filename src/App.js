import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const updateTask = (id, isComplete) => {
    const foundTask = TASKS.find((x) => x.id === id);
    foundTask.isComplete = isComplete;
    setTasks([...tasks]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              setCompleteFunction={updateTask}
              // deleteFunction={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
