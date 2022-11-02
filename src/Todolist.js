import Todo from "./Todo";
function Todolist({todos,toggleTodo,style}) {
    return ( 
       todos.map(todos =>{
        return <Todo key={todos.id} todos={todos} toggleTodo={toggleTodo} style={style}/>
       })
     );
}

export default Todolist;
