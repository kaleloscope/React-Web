// import logo from './logo.svg';
import './App.css';
import {Header} from './MyComponent/Header';
import {FormLogin} from './MyComponent/FormLogin';
// import {FormComps} from './MyComponent/FormComps';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { FormSignUp } from './MyComponent/FormSignUp';
// import Service from './services/Service'
import Masters from './MyComponent/Masters';
import DisMasComp from './MyComponent/DisMasComp';
import AddDis from './MyComponent/AddDis';
import UpdateDis from './MyComponent/UpdateDis';


function App() {
  return (
  <>
    <Router>
        
        <Header />
        <div>

          <Switch>
            <Route path="/" exact component={FormSignUp}></Route>
            <Route path="/signup" component={FormSignUp}></Route>
            <Route path="/login" component={FormLogin}></Route>
            <Route path = "/masters" component = {Masters}></Route>
            <Route path = "/district" component = {DisMasComp}></Route>
            <Route path = "/add-district" component = {AddDis}></Route>
            <Route path = "/update-district/:id" component = {UpdateDis}></Route>

          </Switch>
        
        </div>
    </Router>  
  </>
  );
}

export default App;
