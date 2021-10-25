//import logo from './logo.svg';
import './App.css';
import restaurant from './restaurant.jpeg'

function Header(props) {
  return(
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  );
}
function Main (props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around the world!</p>
      <img 
        src={restaurant} 
        height={300}
        alt="Interier in a restaurant"  
      />

      <ul style={{textAlign: 'left'}}>
        {
          props.dishes.map(
            (dish) => <li key={dish.id}>{dish.title}</li>
          )
        }
      </ul>
    </section>
  )
}
function Footer (props){
  return (
    <footer>
      <p>Copyright {props.year}.</p>
    </footer>
  );
}

const dishes = [
  "Osh", 
  "Lagman",
  "Manpar", 
  "Chuchvara"
];

const dishObjects = dishes.map((dish, i) => ({
  id: i, 
  title: dish
}));
// console.log(dishObjects);




function App() {
  return (
    <div className="App">
      <Header name="Ikromjon" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
