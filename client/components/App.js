import React, { Component } from 'react'

export class App extends Component {
    constructor(props) {
        super(props);
        console.log(this.props,"propsaaaa");
    
        this.state = {
             
        }
    }
    
    render() {
        const {children}= this.props;
        return (
            <div className="container">
                {children}
            </div>
        )
    }
}

export default App
