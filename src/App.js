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
  {
    id: 3,
    title: 'Another Task',
    isComplete: false,
  },
  {
    id: 4,
    title: 'Even More Task',
    isComplete: false,
  },
  {
    id: 5,
    title: 'Another Task',
    isComplete: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const updateTask = (id, isComplete) => {
    console.log('called updateTask', id);
    const foundTask = tasks.find((x) => x.id === id);
    foundTask.isComplete = isComplete;
    setTasks([...tasks]);
  };

  const deleteTask = (id) => {
    console.log('called deleteTask', id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks([...filteredTasks]);
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
              deleteFunction={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
