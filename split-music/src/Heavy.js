import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'
import {Link} from 'react-router-dom'
import './Heavy.css'
import XieDrip from './Tracks/XieDrip';

class Heavy extends Component {
  render() {
    return (
        <div>
        <h3 className='title'>Heavy</h3>
        <XieDrip />
        </div>

       
    )
  }
}

export default Heavy;