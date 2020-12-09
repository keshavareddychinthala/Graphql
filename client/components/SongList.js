import React, { Component } from 'react'
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
export class SongList extends Component {
    renderSongs(){
    console.log(this.props);

        return this.props.data.songs.map(song=>{
            return(
                <li key={song.id} className="collection-item">{song.title}</li>
            )
        })
    }
    render() {
           
        if(this.props.data.loading){
            return <div>Loading</div>
        }

        return (
            <ul className="collection">
               {this.renderSongs()} 
            </ul>
        )
    }
}

const query=gql
`{
    songs{
        id
        title
        
    }
}
`;


export default graphql(query)(SongList);
