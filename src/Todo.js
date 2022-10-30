const Todo = ({todos,toggleTodo}) => {
   function handleclick(){
    toggleTodo(todos.id)

   }
   return (
<div>
  <label className="bg-gray-900 text-zinc-50 shadow-lg rounded-2xl">
    <input type="checkbox" checked={todos.complete} onChange={handleclick}/>
  {todos.name}</label>  
</div>
      );
}
 
export default Todo;