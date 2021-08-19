import React, { Component } from 'react'

export default class CreateUser extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
    
        console.log(username, email, password, confirmPassword);
        if (password !== confirmPassword){
            console.log('Password Does Not Match')
            return
        }
    


        const requestBody = JSON.stringify({
            "username" : username,
            "email" : email,
            "password" : password,
        })

        fetch('http://localhost:5000/api/create-user',{
            method: 'POST',
            body: requestBody
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
                This is the Create User Page
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' placeholder='Username'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='form-control' name='email' placeholder='Email'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' placeholder='Password'></input>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type='password' className='form-control' name='confirmPassword' placeholder='Confirm Password'></input>
                        </fieldset>
                        <button type='submit' className='btn btn-outline-primary mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
