export default function(props){
    return(
        <div>
            <div>
                <h1>
                    Articles 
                </h1>
            </div>
            <div   style ={{
                marginTop: "50 px",
                background : "blue",
                padding: "20px",
                borderRadius : "10px" 
             }}>
                {props.children}

            </div>
        </div>




    )




}