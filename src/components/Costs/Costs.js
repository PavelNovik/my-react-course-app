import React, { useState } from 'react';
import './Costs.css';
// import CostItem from './CostItem';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import CostsDiagram from './CostsDiagram';

const Costs = (props) => {
  const costs = props.costs;
  const [selectedYear, setSelectedYear] = useState('2021');

  const changeCostYearHandler = (costYear) => {
    setSelectedYear(costYear);
    // console.log(costYear);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear() === +selectedYear
  );

  // let costContent = <p>There are no expenses this year.</p>;
  // if (filteredCosts.length > 0) {
  //   costContent = filteredCosts.map((cost) => (
  //     <CostItem
  //       key={cost.id}
  //       date={cost.date}
  //       description={cost.description}
  //       amount={cost.amount}
  //     />
  //   ));
  // }

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={changeCostYearHandler} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
      {/* {costContent} */}

      {/* {filteredCosts.length === 0 && <p>There are no expenses this year.</p>}
      {filteredCosts.length > 0 &&
        filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))} */}

      {/* {filteredCosts.length === 0 ? (
        <p>There are no expenses this year.</p>
      ) : (
        filteredCosts.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))
      )} */}

      {/* <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      /> */}
    </Card>
  );
};
export default Costs;
