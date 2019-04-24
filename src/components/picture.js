import React from 'react';
class Picture extends React.Component{
    render(){
        console.log("this.props.icon = " + this.props.icon)

        return(
            <img src={require("../images/" + this.props.icon + ".jpeg")}>
            </img>
        )
    }
}

export default Picture;