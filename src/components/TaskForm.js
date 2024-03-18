import React, { useState } from "react";

export const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[#30313d] flex items-center"
    >
      <input
        type="text"
        className="w-full"
        value={taskName}
        onChange={(ev) => {
          setTaskName(ev.target.value);
        }}
        placeholder="Your next task..."
      />
      <button className="bg-[#61dafb] rounded-md px-2 py-1 text-black font-semibold">
        Add
      </button>
    </form>
  );
};
