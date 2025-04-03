import React from "react";
import Button from "./button";
function Calculator(){
    return(
        <div style={{padding: "4rem", backgroundColor: "darksalmon", display: "flex", gap: "4px", flexDirection: 'column'}}>
<h3>Calculator</h3>
<div className="calculator">
    <div>
        <Button title={"%"}/>
        <Button title={"CE"}/>
        <Button title={"C"}/>
        <Button title={"+"}/>
        <Button title={"-"}/>
        
    </div>
</div>
        </div>
    )
}