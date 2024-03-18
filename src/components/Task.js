import React, { useState } from "react";
import { Checkbox } from "./Checkbox";
import { BsCheck } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

export const Task = ({ taskName, done, onToggle, onTrash, onRename }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-[#30313d] rounded-xl p-3 mt-1 flex items-center task">
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
      <div className="flex-grow mx-3">
        {!editMode && (
          <p className="w-full" onClick={() => setEditMode(!editMode)}>
            {taskName}
          </p>
        )}
        {editMode && (
          <form
            className="border-gray-500 flex items-center"
            onSubmit={(ev) => {
              ev.preventDefault();
              setEditMode(!editMode);
            }}
          >
            <input
              type="text"
              value={taskName}
              onChange={(ev) => onRename(ev.target.value)}
              autoFocus
              className="w-full"
            />
            <button className="bg-[#61dafb] rounded-md px-2 py-1 text-black font-semibold text-2xl">
              <BsCheck />
            </button>
          </form>
        )}
      </div>
      {!editMode && (
        <button type="submit" onClick={onTrash} className="mr-2">
          <FaTrash />
        </button>
      )}
    </div>
  );
};
