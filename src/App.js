import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/Task";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskName) {
    if (taskName !== "") {
      setTasks((prev) => {
        return [...prev, { taskName: taskName, done: false }];
      });
    } else {
      alert("You need to type something");
    }
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].taskName = newName;
      return newTasks;
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do at least one! 🙏";
    }
    if (percentage === 100) {
      return "Nice job for today! 🏝";
    }
    return "Keep it going 💪🏻";
  }

  return (
    <main className="max-w-lg my-5 mx-auto px-5">
      <div className="font-bold text-center flex flex-col gap-3 mb-5">
        <h1 className="text-4xl">
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2 className="text-2xl">{getMessage()}</h2>
      </div>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            {...task}
            onRename={(newName) => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={(done) => updateTaskDone(index, done)}
          />
        );
      })}
    </main>
  );
}

export default App;
