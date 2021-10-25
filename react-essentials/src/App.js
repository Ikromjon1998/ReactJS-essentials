//import logo from './logo.svg';
import './App.css';
import restaurant from './restaurant.jpeg'


function SecretComponent (){
  return <h1>Secret information for authorized users only</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component.</h1>
}

function App(props) {
  <>
    {props.authorized ? <SecretComponent /> : <RegularComponent />}
  </>
}

export default App;
