import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from 'containers/client/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Home/>
      </Switch>
    </Router>
  );
}

export default App;
