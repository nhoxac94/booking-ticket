import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'containers/client/Home/Home';
import PageNotFound from 'containers/shared/Auth/PageNotFound/PageNotFound';
import { clientRoutes } from 'routes';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map(routes => {
      const { path, component, exact, isPrivate } = routes;
      return (
        <Layout path={path}
          expact={exact}
          component={component}
          isPrivate={isPrivate}
        />
      );
    });
  }
  return (
    <Router>
      <Switch>
        {/* {renderLayout(clientRoutes, ClientLayout)} */}
        <Route to='/' component={Home} />
        <Route to='*' component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
