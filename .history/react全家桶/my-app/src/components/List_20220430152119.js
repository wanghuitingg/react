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
                            return
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