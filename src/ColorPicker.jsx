import React,{useState} from "react";
function ColorPicker(){

    let [color,setColor]=useState("FFFFFF");
 
    let changeColor=(e)=>{
        setColor(e.target.value);
    }
   return(
    <div className="container">
        <h1>Color Picker</h1>
        <div className="color-body">
            <p>Color :{color}</p>
        </div>
        <label>
            Pick Color
            <input type="color" value={color} onChange={changeColor}/>
        </label>
    </div>
   );
}
export default ColorPicker