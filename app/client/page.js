"use client";
import React, { useState } from 'react'

const ClientPage = () => {
  const [ counter, setCounter ] = useState(0);
  return (
    <>
    <h1 className='text-7xl font-bold mb-4'>{ counter }</h1>
    <button className="btn btn-primary" onClick={(e) => setCounter(e.target.value++)}>Increment</button>
    </>
  )
}

export default ClientPage