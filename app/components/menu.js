import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { imgFinder } from '../containers/helpers';

export default class Menu extends Component{

    render() {

        return (
          <div id='menu'>
            <div className='mobile-logo-wrapper'>
              <Link to='/'><img src={imgFinder('mobile-logo')} className='kompanion-mobile-logo' /></Link>
            </div>
            <nav>
                <ul>
                  <li className='kompanion-logo-li'><Link to='/'><img src={imgFinder('desktop-logo')} className='kompanion-logo' /></Link></li>
                  <li><Link to='search'><i className='ss-search'></i>Søg</Link></li>
                  <li><Link to='browse'><i className='ss-layers'></i>Gennemse</Link></li>
                  <li><Link to='create_event'><i className='ss-pluscircle'></i>Opret event</Link></li>
                  <li><Link to='settings'><i className='ss-settings'></i>Indstillinger</Link></li>
                </ul>
            </nav>
          </div>
        );
    }
}