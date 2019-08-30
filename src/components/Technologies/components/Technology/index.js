import React from "react";
import "./index.css";

class Technology extends React.Component{
    render(){
        const {tech}= this.props;
    return <div className={"Techo"}>{tech.name},{tech.date}</div>;
    }
}

export default Technology;