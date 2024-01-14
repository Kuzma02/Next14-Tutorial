"use client";
import { deleteTask } from "@/utils/actions";
import React, { useEffect } from "react";

import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <button type="submit" className="btn btn-xs btn-error" disabled={pending}>
        {pending ? "deleting..." : "delete task"}
      </button>
    </>
  );
};

const initialState = {
  message: null,
};

const DeleteForm = ({ id }) => {
  const [deleteState, deleteFormAction] = useFormState(deleteTask, initialState);

  useEffect(() => {
    if(deleteState.message === "error"){
      toast.error("there was an error");
      return;
    }if(deleteState.message === "success"){
      toast.success("Successfuly deleted");
      return;
    }
  }, [deleteState]);
  return (
    <form action={deleteFormAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
};

export default DeleteForm;
