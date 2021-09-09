import AdminLayout from 'layouts/AdminLayout';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <AdminLayout />
      </Switch>
    </Router>
  );
}

export default App;
