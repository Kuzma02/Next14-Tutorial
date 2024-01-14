"use client";

import { updateTask } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }) => {
  console.log(task);
  return (
    <form action={updateTask}>
      <div className="join w-full">
        <input type="hidden" name="id" value={task.id} />
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          defaultValue={task.content}
          required
        />
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text mx-2">completed</span>
            <input type="checkbox" name="completed" defaultChecked={task.completed} className="checkbox checkbox-primary checkbox-lg" id="completed" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary join-item">
          edit task
        </button>
      </div>
    </form>
  );
};

export default EditForm;
