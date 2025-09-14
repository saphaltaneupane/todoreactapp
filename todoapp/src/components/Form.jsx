
import { useState } from "react"
export default function Form({ todos, setTodos }) {
      const [todo,setTodo] = useState("");
 
     function handleSubmit(e){
        e.preventDefault();
       setTodos([...todos,todo]);
       setTodo("");
     
    }
    return( <div>
   
   <form  onSubmit={handleSubmit}>
               <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
               <button type="submit">Add</button>
               </form>

    </div>) 
   
} 