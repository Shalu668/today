import React from "react";
import Technology from "./components/Technology";


class Technologies extends React.Component{
state = {
Technologies: [
    {name:"reactjs",date:"xx"},{name:"nodejs",date:"yy"},{name:"firebase",date:"zz"}
]

}





render() {
    const {Technologies=[]} = this.state;
    return(
        <div style={{
            display:"flex",
            height:"100px",
            alignItems:"center",
            justifyContent:"center"
            
        }}>   
             {Technologies.map(tech => (
          <Technology tech={tech} />
        ))}
        </div>
    );
}

}

export default Technologies ;