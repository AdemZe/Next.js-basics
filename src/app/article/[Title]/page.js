import("next").Metadata

export const metadata ={
    title :" [Title] Page"
} 

export default function  ShowArticlePage(props){


    return(

        <div> 
            <h1> 
                Show Article
            </h1>
            <h2>
                {props.params.Title}
            </h2>
        </div>


    );



}