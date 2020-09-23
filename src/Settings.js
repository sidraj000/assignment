import React,{useState} from 'react'
import './css/Setting.css'
export default function Settings() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [profession, setProfession] = useState("");
    const [desigation,setDesignation]= useState("");
    return (
        <div className="setting">
           
      <h1>Profile Info</h1>

      <div className="settingItem">
        <input className="textBox" value="name" disabled={true}/>
        <input className="inputBox"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </div>

      <div className="settingItem">
        <input className="textBox" value="DOB" disabled={true}/>
        <input className="inputBox"
          name="dob"
          value={dob}
          onChange={e => setDob(e.target.value)}
          required />
      </div>

      <div className="settingItem">
      <input className="textBox" value="Country" disabled={true}/>
        <input className="inputBox"
          name="profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
          required
          />
         
      </div>

      <div className="settingItem">
      <input className="textBox" value="Designation" disabled={true}/>
        <input className="inputBox"
          name="designation"
          onChange={e => setDesignation(e.target.value)}
          required />
      </div>
      
      <button className="buttonSubmit">Submit</button>
    
      </div>
    )
}
