import React,{useState} from "react"



function Todolist(){

    const [tasks,setTasks]=useState(["Eat Lunch","Dancing"]);
    const [newtask,setNewTasks]=useState("");

    function handleinputchange(event){
        setNewTasks(event.target.value);
        

    }

     function addtask(){

    }

    function deletetask(index){

    }

    function movetaskup(index){

    }

    function movetaskdown(index){

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


    </div>);
}
export default Todolist