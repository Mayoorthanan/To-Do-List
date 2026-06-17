import React,{useState} from "react"



function Todolist(){

    const [tasks,setTasks]=useState([]);
    const [newtask,setNewTasks]=useState("");

    function handleinputchange(event){
        setNewTasks(event.target.value);
        

    }

     function addtask(){
        if(newtask.trim()!=""){
            setTasks(t=>[...t,newtask]);
            setNewTasks("");

        }
        
    }

    function deletetask(index){
        const updatedtask=tasks.filter((_,i)=>i!=index);
        setTasks(updatedtask);

    }

    function movetaskup(index){
        if(index>0){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index-1]]=
            [updatedtasks[index-1],updatedtasks[index]];
            setTasks(updatedtasks);
        }

    }

    function movetaskdown(index){
        if(index<tasks.length-1){
            const updatedtasks=[...tasks];
            [updatedtasks[index],updatedtasks[index+1]]=
            [updatedtasks[index+1],updatedtasks[index]];
            setTasks(updatedtasks);
        }

    }

    return(
    <div className="to_do_list">
        <h1>To-Do-List App</h1>
        <div>
            <input type="text" 
            placeholder="Enter a task ..."
            value={newtask}
            onChange={handleinputchange}/>

            <button
            className="addbtn"
            onClick={addtask}>
                Add
            </button>

        </div>

        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                    className="deletebtn"
                    onClick={()=>deletetask(index)}>
                        Delete
                    </button>

                    <button
                    className="movebtn"
                    onClick={()=>movetaskup(index)}>
                         👆
                    </button>

                    <button
                    className="movebtn"
                    onClick={()=>movetaskdown(index)}>
                         👇
                    </button>
                </li>
            
            )}
        </ol>
            <footer>&copy; 2026 S. Mayoorthanan</footer>

    </div>);
}
export default Todolist
