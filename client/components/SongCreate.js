import React, { Component } from 'react'

export class SongCreate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:''
        }
    }
    onSubmit(event){
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h3>Create new Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
                 <label>New Song::</label>
                 <input onChange={(e)=>{this.setState({title:e.target.value})}} value={this.state.value} />
                </form>
            </div>
        )
    }
}

export default SongCreate
