import React from 'react';
import StationItem from './StationItem.jsx';


const Arrival = (props) => {
 console.log(props)
 return (<div>
  	<select name="dest" value={props.value} onChange={props.handleChange}>
    { props.stations.map(station => (
    	<StationItem station={station}/>))}
    </select>
  </div>)
}

export default Arrival;