import React from "react";
import Foot from "./components/Foot";

class Footer extends React.Component{

    state={
        Footer:[{name:"left"},{name:"right"}]
    };
render(){
    const {Footer}=this.state;
    return <div>{Footer.map(foo=>(<Foot name ={foo.name} />))}</div>;
}
}
export default Footer;