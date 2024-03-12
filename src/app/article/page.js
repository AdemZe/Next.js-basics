import Link from "next/link";
import("next").Metadata

export const metadata ={
    title :" Article Page"
} 

export default function ArticlePage(){
    return(
        <div> 
            <div>
            <h2>
                Article page 
            </h2>
            <Link href ={'/posts'}>
            <button >
                Take me to the posts page 
            </button>
            </Link>
            </div>
            <div>
            <Link href ={'/comment'}>
            <button >
                Take me to the comments page 
            </button>
            </Link>
            </div>

        </div>


    );

}