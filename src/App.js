import './App.css';
import Card from './components/Card';
import Header from './components/Header'
import data from "./data"
console.table(data)
function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}

        location={item.location}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })
  return (
    <>
    <Header />
    {cards}
    </>
    
  );
}

export default App;
