import { Button } from "@mui/material";
import React, { Component } from "react";
import UpdatedComponent from './withCounter'

class HoveredCounter extends Component{

    render(){
        const { count, incrementCount } = this.props;
        return(
            <Button onMouseOver={incrementCount}>Clicked {count} Times</Button>
        )
    }
}

export default UpdatedComponent(HoveredCounter)