import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState([]);
  return (
    <>
    <div>
      <h1>To-Do-List</h1>
      <div>
        <form>
          <input type="text" placeholder='Enter task details...' value={task} 
          onChange={(e) => {setTask(e.target.value)}}/>
        </form>
      </div>
    </div>
    </>
  )
}

export default App