import React, { Component } from 'react'

export default class CreatePost extends Component {
    handlePostSubmit = (synthEvent) => {
        synthEvent.preventDefault();
        console.log(synthEvent)
        const title = synthEvent.target.title.value;
        const body = synthEvent.target.body.value;

        console.log(title, body)

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "title": title,
          "body": body,
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
        
        fetch("http://localhost:5000/api/create-post", requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('error', error));
        

        // const requestBody = JSON.stringify({
        //     "title" : title,
        //     "body" : body,
        // })

        // fetch('http://localhost:5000/api/create-post',{
        //     method: 'POST',
        //     body: requestBody
        // }).then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.error(err))

    }
    render() {
        return (
            <div>
                <h2>Create Post</h2>
                <form onSubmit={this.handlePostSubmit}>
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


