import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveItem: (value) => {
            dispatch({
                type: 'REMOVE_ITEM',
                payload: value
            })
        },

        onCheckItem: (value) => {
            dispatch({
                type: 'CHECK_ITEM',
                payload: value
            })
        }
    }
}

class Item extends Component {

    checkItem() {
        console.log(this.props.id)
        this.props.onCheckItem(this.props.id)
    }

    removeItem(e) {
        // e.preventDefault();
        // console.log(this.value.textContent)
        this.props.onRemoveItem(this.value.textContent) 
    }

    render(){
        return(
            
            <li ref={e => this.elem = e} className={`list-todo__item  ${this.props.check ? 'check' : '' }`}>
                <a className="list-todo__check" href="javascript:void(0)" onClick={this.checkItem.bind(this)}>⊘</a>
                <span ref={e => this.value = e}>
                    {this.props.name}
                </span>
                {!this.props.check &&
                    <a className="list-todo__remove" href="#" onClick={this.removeItem.bind(this)} >⛌</a>
                }
            </li>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);