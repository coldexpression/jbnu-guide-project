import React, { Component } from 'react'
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h1><a href="#welcome" onClick={function(){
                    this.props.onCilck();
                }.bind(this)}>Main</a></h1>
                This is MainPages
            </header>
        )
    }
}


export default connect(
    null,
    function(dispatch){
        return {
            onCilck:function(){
                dispatch({type:'WELCOME'})
            }
        }
    }
)(Header);