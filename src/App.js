import { BrowserRouter as Router, Switch } from 'react-router-dom'

import AddUser from 'containers/admin/Admin/UserManagement/AddUser/AddUser';
function App() {
  return (
    <Router>
      <Switch>
        <AddUser />
      </Switch>
    </Router>
  );
}

export default App;
