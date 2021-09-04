import Login from 'containers/client/Home/Login/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Login/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
