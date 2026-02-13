import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const generateTasks = (count) => {
    const start = performance.now();
    const newTasks = Array.from({ length: count }, (_, i) => ({
      id: i,
      name: `Task ${i}`,
      priority: "Medium",
    }));
    setTasks(newTasks);
    console.log(`React render ${count}:`, performance.now() - start);
  };

  const updateTasks = () => {
    const start = performance.now();
    setTasks(tasks.map((t, i) =>
      i < 50 ? { ...t, name: t.name + " updated" } : t
    ));
    console.log("React update 50:", performance.now() - start);
  };

  const deleteTasks = () => {
    const start = performance.now();
    setTasks(tasks.slice(50));
    console.log("React delete 50:", performance.now() - start);
  };

  return (
    <div>
      <h2>React To-Do</h2>
      <button onClick={() => generateTasks(1000)}>Generate 1000</button>
      <button onClick={updateTasks}>Update 50</button>
      <button onClick={deleteTasks}>Delete 50</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name} – {task.priority}</li>
        ))}
      </ul>
    </div>
  );
}
