import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from 'containers/client/Home/Home';
import PageNotFound from 'containers/shared/Auth/PageNotFound/PageNotFound';
import { clientRoutes } from 'routes';
import FilmDetail from 'containers/client/FilmDetail/FilmDetail';

function App() {
  // const renderLayout = (routes, Layout) => {
  //   return routes.map(routes => {
  //     const { path, component, exact, isPrivate } = routes;
  //     return (
  //       <Layout path={path}
  //         expact={exact}
  //         component={component}
  //         isPrivate={isPrivate}
  //       />
  //     );
  //   });
  // }
  return (
    <Router>
      <Switch>
        {/* {renderLayout(clientRoutes, ClientLayout)} */}
        <Route path='/' exact component={Home} />
        <Route path="/chitietphim/:maPhim" component={FilmDetail} />
        <Route path='*' component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
