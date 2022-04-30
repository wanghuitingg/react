import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReduceListActionCreator } from "../store/index";

// 把store中的state映射到props里
function mapStateToProps(state) {
    return {
        showlist: state.list
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class List extends Component {
    constructor(){
        super()

    }
    delFun(){

    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.showlist.map(obj=>{
                            return(
                                <li key={obj.id} className={obj.isActive ? 'active' : ''}>
                                    <input type="checkbox" defaultChecked={obj.isActive}/>
                                    <span>{obj.name}</span>
                                    <button onClick={this.delFun=this.}>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);