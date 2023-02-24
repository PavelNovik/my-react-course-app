import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    // console.log(inputCostData);
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    // console.log(costData);
    props.onAddCost(costData);
    cancelCostHandler();
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };
  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Add New Expense</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};
export default NewCost;
