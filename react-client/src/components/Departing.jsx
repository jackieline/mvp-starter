import React from 'react';
import StationItem from './StationItem.jsx';


const Departing = (props) => {
 console.log(props)
 return (<div>
  	<select name="orig" value={props.value} onChange={props.handleChange}>
    { props.stations.map(station => (
    	<StationItem station={station}/>))}
    </select>
  </div>)
}

export default Departing;