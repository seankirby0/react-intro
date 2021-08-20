import React, { Component } from 'react'
// import Users from '../views/Users'
import { Link } from 'react-router-dom'

export default class UserInfo extends Component {
    render() {
        const user = this.props.user;
        return (
            <dive className='col-12 col-sm-6 col-md-4'>
                <div className='card my-3'>
                    <h5 className='card-title text-center'>{user.username}</h5>
                    <div className='d-flex flex-row justify-content-center'>
                        <a href={`mailto:${user.email}`} className='btn btn-primary mx-auto'>Email</a>
                        <Link to={`/users/${user.id}`} className='btn btn-secondary mx-auto'>Account Info</Link>
                    </div>
                </div>
            </dive>
        )
    }
}
