import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Switch, Route } from 'react-router-dom'
import History from "../History/History"
import Contact from "../Contact/Contact"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link to="/about/history" className="subnav_links">
            <h3>History</h3></Link>
          <Link to="/about/contact" className="subnav_links">
            <h3>Contact</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route path='/about'
                render={() => (
                  <div>
                    <h1>About the University</h1>
                      <p>
                      Plain and simple, people who have been to Utah State University love it. 
                      Just ask them. No other place provides the complete package quite like USU: 
                      top-notch academics, nationally recognized research, Division I athletics, 
                      and more than 200 student clubs and organizations, all on the oldest 
                      residential campus in the state.
                      </p>
                  </div>
                )}
                />
          </Switch>



        </div>
      </div>
    )
  }
}