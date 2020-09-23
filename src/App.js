import React,{useState} from 'react'
import './App.css'
import './Settings'
import './Components/Root_menu_components'
import './Notification'
import Root_menu_components from './Components/Root_menu_components'
import Routes from './Routes'
function App() {
  
  const child1=[
    {
      text:"Settings"
    },
    {
      text:"Notifications"
    }
  ]
  const child2=[
    {
      text:"Task1"
    },
    {
      text:"Task2"
    }
  ]

  return (
    <div className="App">

      <div className="dabba1">
        <h1>User</h1>
      </div>

      <div className="dabba2">
        
     <Root_menu_components name="Profile"  childs={child1} />
     <Root_menu_components name="Tasks"  childs={child2} />
      </div>

      <div className="dabba3">
        <Routes/>
      </div>

    </div>
  );
}

export default App;
