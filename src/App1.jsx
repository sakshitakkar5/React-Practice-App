import Foodcard from './Foodcard';
import './App1.css';

function App1() {
  return (
    <div className="container">
      <h1>My Favorite Foods</h1>
      <div className="food-list">
        <Foodcard name="Pizza" type="Italian" bgColor="#FFDDC1" />
        <Foodcard name="Noodles" type="Chinese" bgColor="#C1FFD7" />
        <Foodcard name="Pav Bhaji" type="Indian" bgColor="#FFF5BA" />
      </div>
    </div>
  );
}

export default App1;
