/*
"use client";
import { useState, useEffect } from "react";


export default function Todo(){
    const [todo,setTodo] = useState({})
    useEffect(async() =>{
    const res= await fetch ("https://jsonplaceholder.typicode.com/posts");
    const result = await res.json();
    setTodo (result) ;
    
    },[]); 
return(
    /*
<div>
<h1>{todo.title}</h1>


</div>



<div>

</div>
)


}
*/