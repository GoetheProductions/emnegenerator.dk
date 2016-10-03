import React, { Component } from 'react';
import { Link } from 'react-router';
import EventThumbnail from './event_thumbnail';


export default class IndexSite extends Component {
  constructor(props){
    super(props);

    this.state = {
      subjects: [
        "pølse",
        "det skæg vi sidder på",
        "gamle dage",
        "hygge",
        "svinekød",
        "våben",
        "din mor",
        "handikap",
        "stil",
        "kendte idioter",
        "ynglings slik"
      ],

      currentSubject:'Tryk på den røde knap!'
    }
  }

  testRandom(subjects) {
    const randomString = Math.floor(Math.random()*subjects.length);
    const randomElement = subjects[randomString];
    this.setState({currentSubject: randomElement})
  }

  render () {
    let subjects = this.state.subjects

    return (
		<div id='index-site'>
     <h1 className='subject'>emne:    {this.state.currentSubject}</h1>
     <button className='extreme-button' onClick={() => this.testRandom(subjects)}>Nyt Emne!</button>
		</div>
    )
  }
}