import React, { Component } from 'react'
import UserInfo from '../components/UserInfo'
import { Link } from 'react-router-dom';


export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/users')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    users: data.users
                })
            })
    }

    render() {
        // console.log(this.props.user);
        return (
            <div>
                <Link to='/create-user' className='btn btn-primary mt-3'>Create User</Link>
                <div className='row'>
                {this.state.users.map((u, i) => {
                    return <UserInfo user={u} />
                })}
                </div>
            </div>
        )
    }
}
