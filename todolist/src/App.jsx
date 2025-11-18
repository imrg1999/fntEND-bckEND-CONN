import { useEffect, useState } from 'react'

const App = () => {
  const [task, setTask] = useState('');
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async() => {
    const res = await fetch("http://localhost:3000/todo/tasks");
    const data = await res.json();
    setDisplay(data.tasks);
  }


  const submithandler = async(e) => {
    e.preventDefault();
    
 if (!task.trim()) return;

  const res = await fetch("http://localhost:3000/todo/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task }),
  });

  const data = await res.json();

   //setDisplay([...display,data.task]);
   fetchTasks();
    setTask('');
  }

const deleteHandler = async(index, id) => {
  
  await fetch(`http://localhost:3000/todo/delete/${id}`, {
    method: "DELETE"
  });
  let copyDisplay = [...display];
    copyDisplay.splice(index,1);
    setDisplay(copyDisplay)
  }

  let renderTask = <h1>No Tasks Available</h1>
  if(display.length > 0) {
   renderTask = display.map((todo, index) => {
      return(
        <li key={todo.id} className='flex justify-center'>
          <div className='flex justify-center mt-2'>
            <h3>{index+1}.   </h3>
            <h2>{todo.task}</h2>
            <button onClick={() => {deleteHandler(index,todo.id)}} 
            className='text-xs font-medium text-black px-1 py-2 border-2 m-2 text-white bg-red-800 rounded'>
              Delete</button>
          </div>
        </li>
      )
    })
  }

  
  return (
    <>
    <div>
      <h1 className='text-7xl text-center bg-blue-400'>To-Do-List</h1>
      <div className='items-center'>
        <form onSubmit={submithandler} className='flex justify-center'>
          <input type="text" placeholder='Enter task details...' value={task} 
          onChange={(e) => {setTask(e.target.value)}} 
          className='text-xl font-medium text-black px-2 py-4 border-2 m-5 p-4'/>
          <button  type="submit"
          className='text-xl font-medium text-black px-2 py-4 border-2 m-5 text-white bg-blue-800'>Add Task</button>
        </form>
      </div>
    </div>

    <hr />
    <div>{renderTask}</div>
    </>
  )
}

export default App