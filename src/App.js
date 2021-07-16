import Login from './components/Login';
import SignIn from './components/SignIn';
import Header from './components/Header';
import HomePage from './components/HomePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signIn" component={SignIn}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
