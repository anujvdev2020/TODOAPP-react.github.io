import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task,setTask]=useState("");

  const [tasks,setNew]=useState([])
  const addTask=()=>{
    tasks.push(task)
    setNew([...tasks])
    
  }
  const deleteItem=(i)=>{
   delete tasks[i]
    setNew([...tasks])
      
  }
 
  return (
    <div className="App">
      <div className="container pt-7">
        <div id="input-area">
        <input type="text" onChange={(e)=>setTask(e.target.value)} className="input-field"/>
        <button onClick={()=>addTask()} className="btn btn-success">Add task</button>
      </div>
        <div>
         {tasks.map((t,i)=> t!=undefined? <div className="row">
          <div key={i} className="col-md-12 col-sm-10" ><p>{ t}</p><button onClick={()=>deleteItem(i)} key={i}>Delete</button> <hr/></div>
         
          </div>:null
       
        )}
  </div>
         
       
       
      
       
        
      </div>
      
    </div>
  );
}

export default App;
