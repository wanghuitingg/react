import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.showlist.map(obj=>{
                            return(
                                <li key={obj.id}>
                                    <input type="checkbox" defaultChecked={obj}/>
                                    <span>{obj.name}</span>
                                    <button>delete</button>
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