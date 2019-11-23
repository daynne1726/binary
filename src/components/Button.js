import React, {Component} from 'react';
import {Button} from 'primereact/button';

 export default class Buttons extends Component {
        
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Button</h1>
                        <p>Button is an extension to standard input element with icons and theming.</p>
                    </div>
                </div>

                <div className="content-section implementation button-demo">
                    <h3 className="first">Basic</h3>
                    <Button label="Click" />
                    <Button label="Click" icon="pi pi-check" />
                    <Button label="Click" icon="pi pi-check" iconPos="right" />
                    <Button icon="pi pi-check" />
                    <Button label="Click" disabled="disabled" />

                    <h3>Severities</h3>
                    <Button label="Primary" />
                    <Button label="Secondary" className="p-button-secondary" />
                    <Button label="Success" className="p-button-success" />
                    <Button label="Info" className="p-button-info" />
                    <Button label="Warning" className="p-button-warning" />
                    <Button label="Danger" className="p-button-danger" />

                    <h3>Raised Buttons</h3>
                    <Button label="Primary" className="p-button-raised" />
                    <Button label="Secondary" className="p-button-raised p-button-secondary" />
                    <Button label="Success" className="p-button-raised p-button-success" />
                    <Button label="Info" className="p-button-raised p-button-info" />
                    <Button label="Warning" className="p-button-raised p-button-warning" />
                    <Button label="Danger" className="p-button-raised p-button-danger" />

                    <h3>Rounded Buttons</h3>
                    <Button label="Primary" className="p-button-rounded" />
                    <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                    <Button label="Success" className="p-button-rounded p-button-success" />
                    <Button label="Info" className="p-button-rounded p-button-info" />
                    <Button label="Warning" className="p-button-rounded p-button-warning" />
                    <Button label="Danger" className="p-button-rounded p-button-danger" />
                </div>
            </div>
        )
    }
}
