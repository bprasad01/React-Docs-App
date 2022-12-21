import { Button } from "@mui/material";
import React, { Component } from "react";
import UpdatedComponent from './withCounter'

class ClickCounter extends Component{

    render(){
        const { count, incrementCount } = this.props;
        return(
            <Button onClick={incrementCount}>Clicked {count} Times</Button>
        )
    }
}

export default UpdatedComponent(ClickCounter)