import EditForm from '@/components/EditForm';
import { getSingleTask } from '@/utils/actions';
import React from 'react'

const SingleTaskPage = async ({params}) => {
    const id = params.taskId;
    const task = await getSingleTask(id);
  return (
    <div>
      <h1 className="text-7xl">{task.content}</h1>
        <EditForm task={task} />
    </div>
  )
}

export default SingleTaskPage