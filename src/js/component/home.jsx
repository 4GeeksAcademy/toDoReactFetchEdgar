import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  useEffect(() => {
    actions.fetchTasks().then(data => setTasks(data));
  }, []);

  const addTask = () => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    actions.updateTasks(updatedTasks);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    actions.updateTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
    actions.deleteAllTasks();
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={deleteAllTasks}>Delete All Tasks</button>
      {tasks.map((task, index) => (
        <div key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
