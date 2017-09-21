import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from './Item'
class List extends Component {

    render(){
        return(
            <ul className="list-todo">
                {this.props.state.map((elem, index) => (
                    <Item key={Math.random()} name={elem.name} check={elem.check} id={elem.id}/>
                ))}
            </ul> 
        );
    }
}

export default connect(
    state => ({
        state
    })
)(List);