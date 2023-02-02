
import './App.css';
import Nav from "./components/nav"
import data from "./data"
import Card from "./components/card"

function App() {
  const card = data.map(item => {
    return(
      <Card 
      key={item.id}
      item={item}
    />
    )

  })
  return (
    <div className="App">
      <Nav />
      <div className="cards">
        {card}
      </div>


    </div>
  );
}

export default App;
