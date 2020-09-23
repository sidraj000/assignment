import React ,{useState}  from 'react'
import RootChild from './RootChild';


 function Root_menu_components(data) {
     console.log(data);
    const [childElements, setChildElements] = useState(data.childs);
    const [isOpen,setisOpen]=useState(false);
    const [name,setName]=useState(data.name)

    function toggleIsOpen(e){
        if(isOpen)
           setisOpen(false)
        else
           setisOpen(true)
    }
    if(isOpen)
    {
        return (
            <div className="rootMenu">

                <div className="rootHead">
                <button className="rootHeadButton" onClick={toggleIsOpen}>{name}</button>
                </div>

                <div className="rootChildList">
                <RootChild childs={childElements}/>
                </div>

            </div>
        );
    }
    else
    {
        return (
            <div className="rootMenu">

               <div className="rootHead">
                <button className="rootHeadButton" onClick={toggleIsOpen}>{name}</button>
                </div>
            </div>
        );
        
    }
       
     
}
export default Root_menu_components