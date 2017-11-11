import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orig: '19TH',
      dest: 'POWL',
      stations: {},
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.state.value;
    event.preventDefault();
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div>
          <h1>Item List</h1>
          <List items={this.state.items}/>
        </div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick the departing station:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="19TH">19th St (Oakland)</option>
              <option value="POWL">Powell St (SF)</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>      
        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));