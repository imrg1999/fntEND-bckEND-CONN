import { useState } from 'react'

const App = () => {
  const [task, setTask] = useState('');

  const [display, setDisplay] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    
    setDisplay([...display,task]);
    setTask('');
  }

  const renderTask = <h1>No Tasks Available</h1>
  if(display.length > 0) {
    renderTask.map((todo, index) => {
      return(
        <li key={index}>
          <div>
            <h3>{todo.index+1}</h3>
            <h2>{todo.task}</h2>
            <button>Delete</button>
          </div>
        </li>
      )
    })
  }
  return (
    <>
    <div>
      <h1 className='text-7xl text-center bg-blue-400'>To-Do-List</h1>
      <div>
        <form onSubmit={submithandler}>
          <input type="text" placeholder='Enter task details...' value={task} 
          onChange={(e) => {setTask(e.target.value)}} 
          className='text-xl font-medium text-black'/>
          <button>Add Task</button>
        </form>
      </div>
    </div>

    <hr />
    <div>{renderTask}</div>
    </>
  )
}

export default App