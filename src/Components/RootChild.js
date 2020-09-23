import React ,{useState}from 'react'
import history from '../history'
export default function RootChild(data) {
    function pushHistory(str)
    {
        console.log();
        history.push({ pathname: `/${str}`});
         
    }
    
    return data.childs.map((elem)=>(
           <div className="rootChilds">
             <button className="rootChildButton" onClick={function(e) {(pushHistory(elem.text)); }} >{elem.text}</button>
           </div>
        ));
        
}
