import { useState } from "react";

const Todo = ({todos,toggleTodo,style}) => {
  const[Style,setstyle]=useState(["m-2 space-x-20 py-1 px-1 border border-transparent text-sm font-medium rounded text-red-600 hover:text-green-700 bg-red-50 hover:bg-green-100 transition-colors"])

   function handleclick(){
    toggleTodo(todos.id)
    if(todos.complete===true){
      setstyle(["m-2 space-x-20 py-1 px-1 border border-transparent text-sm font-medium rounded  text-green-700 hover:text-red-600 bg-green-100 hover:bg-red-50 transition-colors"])
    }
    else{
      setstyle(["m-2 space-x-20 py-1 px-1 border border-transparent text-sm font-medium rounded text-red-600 hover:text-green-700 bg-red-50 hover:bg-green-100 transition-colors"])
    }

   }
   return (
<div  className={Style}>
  <label >
    <input type="checkbox" checked={todos.complete} onChange={handleclick}/>
  {todos.name}</label>  
</div>
      );
}
 
export default Todo;