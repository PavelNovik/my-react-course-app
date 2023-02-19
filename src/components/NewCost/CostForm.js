import './CostForm.css';

const CostForm = () => {
  return (
    <form>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="new-cost__control">
          <label>Summ</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" step="2022-12-31" />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add Cost</button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
