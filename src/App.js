import { useRef, useState ,useEffect} from 'react';
import Todolist from './Todolist'
import './App.css';
import { v4 as uuidv4 } from 'uuid'


const LOCAL_STORAGE_KEY ='todoApp.todos'

function App() {
  const todoref=useRef()
  const [todos,settodos]=useState([])

useEffect(()=>{
  const storedtodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedtodos) {settodos(storedtodos)
  console.log("todoezir")}
  console.log("repoloa")
},[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    console.log("works")
  },[todos])


function toggleTodo(id){
  const newTodos=[...todos]
  const todo= newTodos.find(todo=> todo.id === id)
  todo.complete=!todo.complete
  settodos(newTodos)
}
  function add(e){
 const name= todoref.current.value
 if (name=== '')return
 settodos(prevtodos=>{
  return[...prevtodos,{id:uuidv4(),name:name,complete:false}]
 })
 todoref.current.value= null
  }
function clearlist() {
  const newTodos=todos.filter(todo => !todo.complete)
  settodos(newTodos)
}
function cleardone() {
  const newTodos=[]
  settodos(newTodos)
}
  return (
  <>
     <div className="text-center bg-teal-600" >
    <Todolist todos={todos} toggleTodo={toggleTodo}/>
    <input className="bg-slate-600 flex left-103" ref={todoref} type='text'/>
    <button className="bg-slate-600" onClick={add} >Add To do</button>

    <button onClick={clearlist} className="bg-slate-600 flex"> Clear Done Task</button>
    <button onClick={cleardone} className="bg-slate-600 flex"> Clear List</button>
    <div className="text-center" >{todos.filter(todo=>!todo.complete).length} left to do</div></div>
</>
  )


}

export default App;
