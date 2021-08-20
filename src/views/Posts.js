import React, { Component } from 'react'
import PostDetail from '../components/PostDetail';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    posts: data.posts
                })
            })
                .catch(err => console.error(err))
    }

    render() {
        let posts = this.state.posts
        if (posts){
            posts.sort((a,b) =>  moment(a.date_created) < moment(b.date_created))
        }
        return (
            <>
                <Link to="/create-post" class="btn btn-secondary mt-3 mb-3">Create Post</Link>
                <ul className='list-group'>
                    {posts.map((post, idx) => <PostDetail post={post} key={idx} />)}
                </ul>
            </>
        )
    }
}
