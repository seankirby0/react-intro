import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import CreateUser from './views/CreateUser';
import Home from './views/Home';
import Posts from './views/Posts';
import Users from './views/Users';
import CreatePost from './views/CreatePost';
import SingleUser from './views/SingleUser';
import SinglePost from './views/SinglePost';

export default class App extends Component {
  constructor(props){
    super(props);
    // console.log('Component Constructing...')
    this.state = {
      myName: 'Dale',
      racers: []
    }
  }

  updateName = () => {
    const newName = prompt('What is your name?')
    this.setState({
      myName: newName
    })
  }

  componentDidMount(){
    // console.log('Component Did Mount...')
    // fetch('https://kekambas-bs.herokuapp.com/kekambas')
    fetch('https://ergast.com/api/f1/2021/10/driverStandings.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
        })
      })
  }

  render() {
    // console.log('Component Rendering...')
    const myName = this.state.myName;
    return (
      <div>
        <Navbar myName={myName}/>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Home myName={myName} updateName={this.updateName} allRacers={this.state.racers}/>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/users'>
              <Users />
            </Route>
            <Route exact path='/posts'>
              <Posts />
            </Route>
            <Route exact path='/create-user'>
              <CreateUser />
            </Route>
            <Route exact path='/create-post'>
              <CreatePost />
            </Route>
            <Route exact path='/users/:id'component={SingleUser} />
            <Route exact path='/posts/:id'component={SinglePost} />
          </Switch>
        </div>
      </div>
    )
  }
}
