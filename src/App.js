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
     <div className="text-center bg-teal-600 flex flex-col justify-center items-center " >
    <Todolist todos={todos} toggleTodo={toggleTodo}/>
   

    <div>  <label for="input1" class="text-sm text-lime-200 block mb-1 font-medium m-4"> Enter A Task </label>  <input type="text"  ref={todoref} name="input1" id="input1" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700" placeholder="eg:Homework"/></div>
  
    <button type="submit" onClick={add} class="m-5 inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
</svg>
  <div>Add To do</div>
</button>
    <button onClick={clearlist} className="space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors "> Clear Done Task</button>
    <button onClick={cleardone} className="m-5 space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors "> Clear List</button>
    <div className="text-center" >{todos.filter(todo=>!todo.complete).length} left to do</div></div>
</>
  )


}

export default App;
