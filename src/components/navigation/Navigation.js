import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
            <li><strong>Gallery</strong></li>
            <li><strong>Projects</strong></li>
            <li><strong>About</strong></li>
            <li><strong>Archives</strong></li>
            <li><strong>Contact</strong></li>
        </ul>
      </div>
    )
  }
}
