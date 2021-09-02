import FilmDetail from 'containers/client/Home/FilmDetail/FilmDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <FilmDetail/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
