import React, { Component } from 'react'

import './index.css'

export default class index extends Component {
    render() {
        const { isFirst, isLoading, usersList, error } = this.props;
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome, enter a keyword to search!</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            error ? <h2 style={{ color: 'red' }}>{error}</h2> :
                                usersList.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                <img
                                                    src={userObj.avatar_url}
                                                    style={{ width: '100px' }}
                                                    alt="ProfileImage"
                                                />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}
