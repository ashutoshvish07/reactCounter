import React from "react";

const Count = () =>{
    const [count,setCount] = React.useState(0);
          
    return (
        <div>
            <h1 style={{color:count%2===0 ? 'green':'red'}}>{count}
               
            </h1>

            <button onClick={()=> setCount(count + 1)}>increment </button>
            <button onClick={()=> {
                if(count>0){
                    setCount(count - 1)
                }
            }}>Decrement </button>
             <button onClick={()=> setCount(count * 2)}>Double </button>
        </div>
    );
}
export default Count;