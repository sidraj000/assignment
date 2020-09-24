import React,{useState} from 'react'
import './css/Setting.css'
export default function Settings() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [profession, setProfession] = useState("");
    const [designation,setDesignation]= useState("");

    function validate()
    {
      if(name.length>30 || designation.length>30 || profession.length>30)
      {
        return false
      }
      if(dob.length==10)
      {
        for(var i=0;i<4;i++)
        {
          if(dob[i]>'9' || dob[i]<'0') return false;
        }
        for(var i=5;i<7;i++)
        {
          if(dob[i]>'9' || dob[i]<'0') return false;
        }
        for(var i=8;i<10;i++)
        {
          if(dob[i]>'9' || dob[i]<'0') return false;
        }
        if(dob[4]!='-' || dob[7]!='-')
        return false;
      }
      else
      {
        return false;
      }
      return true;
    }
    function clickedSubmit(){
      var bool=validate();
      console.log(bool);
      if(!bool)
      {
        console.log("incorrect format");
        window.alert("incorrect format");
      }
      else
        console.log("submitted")
    }
    function clickedCancel()
    {
        console.log("cancelled")
    }
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
      <input className="textBox" value="Profession" disabled={true}/>
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
          value={designation}
          onChange={e => setDesignation(e.target.value)}
          required />
      </div>
      
      <button className="buttonSubmit" onClick={clickedSubmit}>Submit</button>
      <button className="buttonCancel" onClick={clickedCancel}>Cancel</button>
    
      </div>
    )
}
