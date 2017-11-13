import React from 'react';

const StationItem = (props) => (
    <option value={props.station.station}>{props.station.stationName}</option>
  
)
export default StationItem;