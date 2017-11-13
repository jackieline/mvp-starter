import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Departing from './components/Departing.jsx';
import Arrival from './components/Arrival.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orig: '19TH',
      dest: 'POWL',
      stations: [],
      times: [],
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.type === 'orig' ? event.target.value : event.target.value;
    const name = event.target.name;
    console.log(name);

    this.setState({[name]: value});

  }

  handleSubmit(event) {
    this.state.value;
    event.preventDefault();
    $.ajax({
      url: '/stations',
      type: 'POST',
      data: JSON.stringify([this.state.orig, this.state.dest]),
      contentType: 'application/json',
      success: (data) => {
        console.log('post successful', data);
        this.setState({items: data})
      },
      error: (err) => {
        console.log('err', err);
      }
    })
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
    $.ajax({
      type: 'GET',
      url: '/stations', 
      success: (data) => {
        console.log(data);
        this.setState({
          stations: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    console.log(this.state);
    return (
      <div>
       <div>
          <h1>Bart Helper</h1>
          <List items={this.state.items}/>
        </div>
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick the departing station:
            <Departing handleChange={this.handleChange} stations={this.state.stations}/>
          </label>
          <label>
            Pick the destination station:
            <Arrival handleChange={this.handleChange} stations={this.state.stations}/>
          </label>
          <input type="submit" value="Submit" />
        </form>      
        </div>
        <div>

        </div>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));