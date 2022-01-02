import React,{/*useState*/} from "react";

function ToDoItem(props){
    
    //const [isDone,setIsDone]=useState(false);
    function handleClick(){
    // setIsDone((prevValue)=>{
    //     return !prevValue;
    // })           "This was used for strike through"
    }
    
    return (
    <div onClick={/*handleClick*/()=>{
        props.onChecked(props.id);
    }
    }>
    <li /*</div>style={{textDecoration: isDone ? "line-through":"none"}}*/>{props.text}</li>
    </div>
    );
}
export default ToDoItem;