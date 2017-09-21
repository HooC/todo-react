import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewVal: (value) =>{
            dispatch({type: 'ADD_NEW', payload: value})
        }
    }
}

class Input extends Component {

    addNew() {
        this.props.onAddNewVal(this.input.value);
        this.input.value = '';
    }

    render(){
        return(
            <div>
                <form>
                <input ref={e => this.input = e} className="input" type="text" />
                <button onClick={this.addNew.bind(this)} className="button">Add</button>
                </form>
            </div>            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);