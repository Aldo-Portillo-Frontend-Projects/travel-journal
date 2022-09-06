import './App.css';
import Card from './components/Card';
import Header from './components/Header'
//import data from "./data"

function App() {
  
  return (
    <>
    <Header />
    <Card 
      location="Norway"
      title="Geirangerfjord"
      startDate="01 Oct, 2021"
      endDate="18 Nov, 2021"
      description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    />
    <Card />
    <Card />
    </>
    
  );
}

export default App;
