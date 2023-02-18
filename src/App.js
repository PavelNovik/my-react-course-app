import CostItem from './components/CostItem';

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Refregerator',
      amount: 999.99,
    },
    {
      date: new Date(2021, 3, 16),
      description: 'TV',
      amount: 1200.22,
    },
    {
      date: new Date(2021, 4, 25),
      description: 'PlayStation 5',
      amount: 1000,
    },
  ];

  return (
    <div>
      <h1>Let's start to learn REACT</h1>
      <h3>Hello world</h3>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
