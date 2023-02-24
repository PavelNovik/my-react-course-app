import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
// import React, { useState } from 'react';

function CostItem(props) {
  // const [description, setDescription] = useState(props.description);

  // const changeDescriptionHandler = () => {
  //   setDescription('New Text');
  //   console.log(description);
  // };
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />

        <div className="cost-item__description">
          <h2>{props.description}</h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={changeDescriptionHandler}>Change</button> */}
      </Card>
    </li>
  );
}

export default CostItem;
