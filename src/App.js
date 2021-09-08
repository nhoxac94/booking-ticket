import AddUser from 'containers/admin/Admin/UserManagement/AddUser/AddUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <AddUser/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
