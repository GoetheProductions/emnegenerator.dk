import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
  authButton() {
    let authendicated = this.props.authendicated
    console.log(authendicated)
    return <button onClick={() => this.props.authendicate(authendicated ? false : true)}>
      {authendicated ? 'Log ud' : 'Log ind'}
    </button>
  }

  render () {
    return (
      <div id='login'>
        <div className='logo'></div>

        <h3 className='pitch'>Er du klar til at komme ud, og være en del af fællesskabet?</h3>

        <p className='after-pitch'>Så opret en bruger nu</p>

        {this.authButton()}

        <p className='after-pitch'>Eller læs mere</p><Link className='link-read-more' to={'#'}>her</Link>
        <p className='terms-and-conditions-0'>Ved at oprette en bruger erklærer du dig enig i Kompanions</p>
        <Link className='terms-and-conditions-1' to={'#'}> Vilkår og betingelser </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {authendicated: state.authendicated }
}

export default connect(mapStateToProps, actions)(Login);
