


async function CommtsDetaillePage({params}){
    const Idcommts = params.Idcommts ;
    console.log(Idcommts);
    const res = await fetch (`https://jsonplaceholder.typicode.com/comments/${Idcommts}`,
    { next:
        {
            revalidate : 120 
        } 
    }
    );

    const comment = await res.json();



return(

<div>
<h1> hello world </h1>  
<h1> {comment.name} </h1>
<h2> {comment.email} </h2>
<p>  {comment.body } </p>



</div>



)
}export default CommtsDetaillePage ;