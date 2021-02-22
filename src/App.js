import Header from './components/Header'
import './App.css';
import Tasks from './components/Tasks';
import { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState([
  {
  id: 1,
  text: "Doctors appointment",
  day: "feb 5 at 2;30",
  reminder: true,
},
{
  id: 2,
  text: "Meeting at School",
  day: "feb 6 at 1:30",
  reminder: true,
},
  ])

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }
    
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
