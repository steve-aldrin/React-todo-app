const Todo = ({todos,toggleTodo}) => {
   function handleclick(){
    toggleTodo(todos.id)

   }
   return (
<div  className=" m-2 space-x-20 py-1 px-1 border border-transparent text-sm font-medium rounded text-red-600 hover:text-green-700 bg-red-50 hover:bg-green-100 transition-colors">
  <label >
    <input type="checkbox" checked={todos.complete} onChange={handleclick}/>
  {todos.name}</label>  
</div>
      );
}
 
export default Todo;