import React, { Component } from 'react';

export default class Generator extends Component {
  constructor() {
    super();

    this.state = {
      selected: '',
      suggestions: ['tro', 'halvtreds', 'masker'],
      newSubject: ''
    };

    this.newSubject = this.newSubject.bind(this);
    this.addNewValue = this.addNewValue.bind(this);
    this.addSubject = this.addSubject.bind(this);
  }

  componentDidMount() {
    this.newSubject();
  }

  newSubject() {
    const { suggestions } = this.state;

    this.setState({
      selected: suggestions[Math.floor(Math.random() * suggestions.length)]
    });
  }

  addNewValue(e) {
    this.setState({ newSubject: e.target.value });
  }

  addSubject() {
    const { newSubject, suggestions } = this.state;

    this.setState({
      suggestions: suggestions.concat([newSubject]),
      newSubject: ''
    });
  }

  render() {
    const { selected, newSubject } = this.state;

    return (
      <div className="container">
        <h1>{selected}</h1>
        <button onClick={() => this.newSubject()}>Nyt emne</button>

        <footer>
          <input value={newSubject} onChange={(e) => this.addNewValue(e)} />
          <button disabled={newSubject.length === 0} onClick={() => this.addSubject()}>Tilføj emne</button>
        </footer>
      </div>
    );
  }
}
