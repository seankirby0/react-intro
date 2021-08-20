import React, { Component } from 'react'

export default class SingleUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        const userId = this.props.match.params.id
        fetch(`http://localhost:5000/api/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    user: data
                })
            })
    }

    deleteUser = () => {
        const user = this.state.user
        fetch(`http://localhost:5000/api/users/delete/${user.id}`, {
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }


    render() {
        const user = this.state.user
        // console.log(this.props.match.params.id)
        return (
            <div className="card mt-3">
                <div className="card-header">
                    Account Information
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ID: {user.id}</li>
                    <li className="list-group-item">Username: {user.username}</li>
                    <li className="list-group-item">Email: {user.email}</li>
                </ul>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete User
                </button>
                
                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Delete {user.username}?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure that you want to delete the user {user.username}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={this.deleteUser}>Delete User!</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>       
        )
    }
}
