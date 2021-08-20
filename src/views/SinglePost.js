import React, { Component } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';


export default class SinglePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: {}
        }
    }

    componentDidMount(){
        const postId = this.props.match.params.id
        fetch(`http://localhost:5000/api/posts/${postId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    post: data
                })
            })
    }

    deletePost = () => {
        const post = this.state.post
        fetch(`http://localhost:5000/api/posts/delete/${post.id}`, {
            method : 'DELETE'
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    }


    render() {
        const post = this.state.post

        return (
            <div>
                <Link to="/posts" className="btn btn-secondary mt-3 mb-3 ml-3">Back To Posts</Link> 
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                Delete Post
                </button>

                <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Delete {post.title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure that you want to delete the post {post.title}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={this.deletePost}>Delete Post!</button>
                    </div>
                    </div>
                </div>
                </div>               
                <li className='list-group-item mt-3'>
                    <h5>{post.title}</h5>
                    <div>
                        <p>{post.body}</p>
                        <p>{post.username}</p>
                        <p>{moment(post.date_created).fromNow()}</p>
                    </div>
                </li>
            </div>
        )
    }
}
