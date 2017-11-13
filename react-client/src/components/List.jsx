import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (

  <div>
    <h4> Always know when you should leave. </h4>
    You will see the next 3 trains after you make your selection below.
    { props.items.map(item => <ListItem item={item}/>)}
  </div>
)

export default List;