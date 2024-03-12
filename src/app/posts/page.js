import Link from "next/link";
import("next").Metadata

/*
import Todo from "../article/componemets/todo";
import axios from "axios";
import { useState } from "react";
*/
export const metadata ={
    title :" Post Page"
} 

async function PostsPage({}){




    /* methode axios pour le corriger 
    const[state,setState]= useState([]);
    const fetchAxios = (async ()=>{
    const res= await axios.get("https://jsonplaceholder.typicode.com/posts")});
    setState(res.data);
    console.log(res.data);
    */

    const res= await fetch ("https://jsonplaceholder.typicode.com/posts",
    {
        next :{
            revalidate: 120
        }
    }
    
    );
    const posts = await res.json();


    const postJsx = posts.map((item)=>{
    return(
        <Link href={`/posts/${item.id}`}>
            <div style ={{
                width: "70%",
                background : " white",
                padding : "10px",
                borderRadius : "10px",
                color : "black",
                marginTop : "17px"
            }}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            </div>
        </Link>
    )
    } ) 









    return (
/*
       <div>
            <h1>
                Posts Page 
            </h1>
            <Link href={'/article'}>
                <button>
                    Take me to the article page 
                </button>  
            </Link>
            
              <div>
                {posts.map((item)=> (
                    <div  style ={{
                        marginTop: "50 px",
                        padding: "20px",
                        borderRadius : "10px" 
                     }}>
                    <h4> {item.title}</h4>
                    <h6>{item.body }</h6>
                    
                    </div> 

                ))}
            </div>
            

        </div>
*/
       /* <div>

            {res.data.map((item)=>
            <div>  
            <h3> {item.title}</h3>
            <h4> {item.body}</h4>

            </div>
                
                
                )}     



           
        </div>
        */

        <div>
            <h1>
            Posts Page    
            </h1>
            <Link href={'/article'}>
                <button>
                    Take me to the article page 
                </button>  
            </Link>
            <div style={{ display : "flex", justifyContent :"center",alignItems: "centre" ,flexDirection :"column",}}>
                {postJsx}
            </div>

        </div>
    );


}


export default PostsPage ;