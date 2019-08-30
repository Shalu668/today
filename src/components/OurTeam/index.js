import React from "react";
import Team from "./components/Team";

class OurTeam extends React.Component{
    state={
        OurTeam:[{name:"shalu"},{name:"bikki"},{name:"sushant"},{name:"anshuman"}]
    };
    render()
    { 
        
       const {OurTeam}= this.state;
        return <div style={{
            display:"flex",
            height:"100px",
            alighItem:"centre",
            justifyContent:"centre"
        }}>{OurTeam.map(tea=>(<Team name ={tea.name} />))}</div>
    }
}

export default OurTeam;