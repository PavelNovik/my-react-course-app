import React, { useState } from 'react';
import Costs from './components/Costs/Costs';
// import Costs from './components/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2019, 2, 12),
    description: 'Refregerator',
    amount: 999.99,
  },
  {
    id: 2,
    date: new Date(2019, 3, 13),
    description: 'TV',
    amount: 1200.22,
  },
  {
    id: 3,
    date: new Date(2020, 4, 25),
    description: 'PlayStation 5',
    amount: 1000,
  },
  {
    id: 4,
    date: new Date(2021, 5, 14),
    description: 'Dell Latitude',
    amount: 1200,
  },
  {
    id: 5,
    date: new Date(2021, 6, 7),
    description: 'VW Jetta VI',
    amount: 6500,
  },
  {
    id: 6,
    date: new Date(2022, 7, 16),
    description: 'React Course',
    amount: 10,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  // Alternative Code
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1', {}, "Let's start to learn REACT"),
  //   React.createElement('h3', {}, 'Hello world'),
  //   React.createElement(Costs, { costs: costs })
  // );

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
    // console.log(cost);
    // console.log('App component');
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
