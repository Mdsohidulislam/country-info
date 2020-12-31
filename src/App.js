 
import './App.css';  
import {Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar' 
import Details from './Components/Details/Details'
import CardApi from './Components/CardApi/CardApi';  
import Developer from './Components/Developer/Developer'

function App() {
  return (
    <div className="App">  
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <CardApi/>
        </Route>
        <Route path='/country/:name'>
          <Details/>
        </Route>
      </Switch>
      <Developer/>
    </div>
  );
}

export default App;
