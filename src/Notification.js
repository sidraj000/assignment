import React,{useState} from 'react'
import Switch from "react-switch"
import './css/Notification.css'

export default function Notification() {
    const [sendAllAlerts, setSendAllAlerts] = useState(false);
    const [alertOnlyTaskSuccess, setAlertOnlyTaskSuccess] = useState(false);
    const [alertOnlyForFailedTask, setAlertOnlyForFailedTask] = useState(false);
    const [iDoNotWantAnyAlert,setIDoNotWantAnyAlert]= useState(false);

    function clickedSubmit(){
        console.log("submitted")
    }
    function clickedCancel()
    {
        console.log("cancelled")
    }

    return (
        <div className="notification">
            <div > <h1>Notification</h1> </div>
            
            <div className="notificationItem">
                <input className="notificationInputBox" value="Send all alerts" disabled={true}/>
                <Switch className="switchBox" checked={sendAllAlerts} onChange={setSendAllAlerts} />
            </div>

            <div className="notificationItem">
                <input className="notificationInputBox" value="Alert only task success" disabled={true}/>
                <Switch className="switchBox" checked={alertOnlyTaskSuccess} onChange={setAlertOnlyTaskSuccess} />
            </div>

            <div className="notificationItem">
                <input   className="notificationInputBox"  value="Alert only for failed task" disabled={true}/>
                <Switch className="switchBox" checked={alertOnlyForFailedTask} onChange={setAlertOnlyForFailedTask} />
            </div>

            <div className="notificationItem">
                <input  className="notificationInputBox"  value="I do not want any alert" disabled={true}/>
                <Switch  className="switchBox" checked={iDoNotWantAnyAlert} onChange={setIDoNotWantAnyAlert} />
            </div>
            <button className="buttonSubmit" onClick={clickedSubmit}>Submit</button>
            <button className="buttonCancel" onClick={clickedCancel}>Cancel</button>
         
        </div>
    )
}
