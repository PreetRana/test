"use client"
import React, { useState } from "react"

const page = ()=>{
  const [title, settitle] =useState("")
  const [desc, setdesc] =useState("")
  const [mainTask, setmainTask] =useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h1>No Task Available</h1>

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between w-2/3 m-8">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-lg font-medium">{t.desc}</h5>
          </div>
          <button onClick={()=>{
            deleteHandler(i)
          }}
                  className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      )
    })
  }


  return(
    <>
      <h1 className="bg-black text-white text-center p-5 text-5xl font-bold">My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }}
              placeholder="Enter Task here"className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"/>
        <input type="text"
                value={desc}
                onChange={(e)=>{
                  setdesc(e.target.value)
                }} 
                placeholder="Enter Description here"className="text-2xl border-zinc-800 border-4 m-5 px-4 py-2"/>
        <button className="bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded">Add Task</button>



      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>    
    
    </>
  )
}

export default page