import React, { Component } from 'react'
import DriverInfo from '../components/DriverInfo';

export default class Home extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Welcome {this.props.myName}</h1>
                <button className='btn btn-primary' onClick={this.props.updateName}>Update Name</button>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allRacers.map((racer, idx) => (<DriverInfo racer={racer} key={idx} />))}
                    </tbody>
                </table>
            </div>
        )
    }
}

