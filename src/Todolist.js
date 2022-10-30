import Todo from "./Todo";
function Todolist({todos,toggleTodo}) {
    return ( 
       todos.map(todos =>{
        return <Todo key={todos.id} todos={todos} toggleTodo={toggleTodo}/>
       })
     );
}

export default Todolist;
