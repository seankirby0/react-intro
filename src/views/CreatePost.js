import React, { Component } from 'react'

export default class CreatePost extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        console.log(title, body); 
    

        const requestBody = JSON.stringify({
            "title" : title,
            "body" : body,
        })

        fetch('http://localhost:5000/api/create-post',{
            method: 'POST',
            body: requestBody
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))

    }
    render() {
        return (
            <div>
                Create Post Page
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='title'>Title</label>
                            <input type='text' className='form-control' name='title' placeholder='Title'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='body'>Body</label>
                            <input type='text' className='form-control' name='body' placeholder='Body'></input>
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


