import React, { Component } from 'react'
import UserList from './UserList'

export class Users extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(res => res.json())
            .then(users => this.setState({ users: users })) 
    }

    render() {
        return (
            <div className='Users container'>
            <UserList users={this.state.users} />
            </div>
        )
    }
}

export default Users
