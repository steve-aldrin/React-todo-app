const Todo = ({todos,toggleTodo,style}) => {
   function handleclick(){
    toggleTodo(todos.id)

   }
   return (
<div  className={style}>
  <label >
    <input type="checkbox" checked={todos.complete} onChange={handleclick}/>
  {todos.name}</label>  
</div>
      );
}
 
export default Todo;