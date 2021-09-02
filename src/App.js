import SeatDetail from 'containers/client/Home/SeatDetail/SeatDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <SeatDetail/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
