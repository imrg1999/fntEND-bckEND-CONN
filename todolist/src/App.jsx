import { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('');

  const submithandler = (e) => {
    e.preventDefault();
    setTask('');

  }
  return (
    <>
    <div>
      <h1>To-Do-List</h1>
      <div>
        <form onSubmit={submithandler}>
          <input type="text" placeholder='Enter task details...' value={task} 
          onChange={(e) => {setTask(e.target.value)}}/>
          <button>Add Task</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App