import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
    
    KeywordNode = React.createRef();
    
    handleSearch = () => {
        this.props.updateState({isFirst: false, isLoading: true});    
        const {value:Keyword} = this.KeywordNode.current;

        axios.get('https://api.github.com/search/users?q=' + Keyword).then(
            response => {
                this.props.updateState({isLoading: false, usersList: response.data.items});
            },
            error => {
                this.props.updateState({isLoading: false, error: error.message});
            }
        );
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.KeywordNode} type="text" placeholder="enter the name you search" />
                    &nbsp;<button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
