
import PostDetailes from "@/app/article/componemets/postDetailles";
import { Suspense } from "react";
async function  PostDetaillePage({params}){
const Idpost = params.Idpost ;
console.log(Idpost);
  const returnjsx = (
    <div>
      <h1> loading </h1>
    </div>
  )

return(
<div>
<h1> Post Detaille Page </h1>
<Suspense      fallback={returnjsx}  >
<PostDetailes Idpost={Idpost} />
</Suspense>
</div>



)

}export default PostDetaillePage ;