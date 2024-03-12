


async function PostDetailes({Idpost}){
    
    console.log(Idpost);

    await new Promise ((resolve )=>{
        setTimeout(()=>{
          resolve();
        },2000)
      });
      

    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${Idpost}`,
      {
        next :{
            revalidate :120 
        }
      }
    
    );
    
    const post= await res.json();
    




return (

    <div>

       
        <h3>{post.title}</h3>
        <p>{post.body}</p>

    </div>
)




}export default PostDetailes ;