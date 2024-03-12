
import Link from "next/link";

async function  GetComment(){


    const res = await fetch ("https://jsonplaceholder.typicode.com/comments",
    {
        next:{
            revalidate : 120
        }
    })
    const comts = await res.json();
    console.log (comts); 


    const mapComts= comts.map((item)=>{
        return(
          <Link  href={`/comment/${item.id}`} >
 

            <div style= {{
            background : " white",
            padding : "10px",
            borderRadius : "10px",
            color : "black",
            marginTop : "17px" }} >
                <h2>{item.name}</h2>
                <h4>{item.email}</h4>
                <p>{item.body}</p>
            </div>

          </Link>
        )
    })

    return(
       /* <div>

        <h1> Voici tous les commentaires </h1>
        { comts.map((item)=>{
            return (
            <div>
                <h2>{item.name}</h2>
                <h4>{item.email}</h4>
                <p>{item.body}</p>
            </div>
            )
        })}

        </div>*/

        <div>
             <h1> Voici tous les commentaires </h1>
             <div>{mapComts}</div>
        </div>




)




}export default GetComment;