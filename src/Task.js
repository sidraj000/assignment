import React,{useState} from 'react'
import './css/Task.css'
export default function Task() {
    const [sourceName,setSourceName]=useState("");
    const[loggingChecked,setLoggingChecked]=useState(false);
    const[sql,setSql]=useState("");
    const[targetVal,setTargetVal]=useState("");
    function toggleLoggingChecked(){
        if(loggingChecked)
        setLoggingChecked(false)
        else
        setLoggingChecked(true)
    }
    function clickedSubmit(){
        console.log("submitted")
    }
    function clickedCancel()
    {
        console.log("cancelled")
    }
    return (
        <div className="task">
            <input className="header" value="Task" disabled={true}/>
            <div className="task_element">
                <input className="taskInputBox" disabled={true} value="Source Name"  />
                <select className="selectBox" onChange={e => setSourceName(e.target.value)}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
            </div>

            <div className="task_element">
            <input className="taskInputBox" disabled={true} value="Enable logging"  />
            <input className="inputBox"
            type="checkbox"
            checked={loggingChecked}
            onChange={toggleLoggingChecked}
             />
            </div>

            <div className="task_element">
            <input className="taskInputBox"  disabled={true} value="Provide Sql"  />
            <input className="largeBox" type="textarea" 
             name="textValue"
             rows={5}
             cols={5}
             onChange={e => setSql(e.target.value)}
            />
            </div>

            <div className="task_element">
                <input className="taskInputBox"  disabled={true} value="Target Value"  />
                <select className="selectBox" onChange={e => setTargetVal(e.target.value)}>
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option selected value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
            </div>
      
           <button className="buttonSubmit" onClick={clickedSubmit}>Submit</button>
           <button className="buttonCancel" onClick={clickedCancel}>Cancel</button>
    
            
        </div>
    )
}
