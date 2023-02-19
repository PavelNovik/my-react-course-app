import Costs from './components/Costs';

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Refregerator',
      amount: 999.99,
    },
    {
      date: new Date(2021, 3, 13),
      description: 'TV',
      amount: 1200.22,
    },
    {
      date: new Date(2021, 4, 25),
      description: 'PlayStation 5',
      amount: 1000,
    },
    {
      date: new Date(2021, 5, 14),
      description: 'Dell Latitude',
      amount: 1200,
    },
    {
      date: new Date(2021, 6, 7),
      description: 'VW Jetta VI',
      amount: 6500,
    },
    {
      date: new Date(2021, 7, 16),
      description: 'React Course',
      amount: 10,
    },
  ];

  return (
    <div>
      <h1>Let's start to learn REACT</h1>
      <h3>Hello world</h3>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
