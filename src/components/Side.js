import React, { Component } from 'react'
import '../App.css'
import { Card,  Button } from 'semantic-ui-react'

class Side extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    Side = () => (
        <Card style={{marginLeft:"80%"}}>
            <Button content='User Profile' color="grey"  />
            <Button content='Post' color="grey" />
            <Button content ="User Feed" color="grey"  />
            <Button content ="Log Out" color="grey" />
        </Card>
    )
    render() {
        return (
            <div >
                <this.Side />
            </div>
        )
    }
}
export default Side
