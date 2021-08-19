import React, { Component } from 'react'
import moment from 'moment';

export default class PostDetail extends Component {
    render() {
        const post = this.props.post
        return (
            <li className='list-group-item'>
                <h5>{post.title}</h5>
                <div>
                    <p>{post.body}</p>
                    <p>{post.user.username}</p>
                    <p>{moment(post.date_created).fromNow()}</p>
                </div>
            </li>
        )
    }
}
