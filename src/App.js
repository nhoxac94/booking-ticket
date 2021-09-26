import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "containers/client/Home/Home";
import PageNotFound from "containers/shared/Auth/PageNotFound/PageNotFound";
import { adminRoutes, clientRoutes, loginRoutes } from "routes";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";
import AddMovieShowTimes from "containers/admin/Admin/MovieControl/AddMovieShowTimes/AddMovieShowTimes";
import AdminLayout from "layouts/AdminLayout";
import LoginLayout from "layouts/LoginLayout";
import ClientLayout from "layouts/ClientLayout";

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((routes, idx) => {
      const { path, component, exact, isPrivate } = routes;
      return (
        <Layout
          key={component}
          path={path}
          exact={exact}
          component={component}
          isPrivate={isPrivate}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(loginRoutes, LoginLayout)}
          {renderLayout(adminRoutes, AdminLayout)}
          {renderLayout(clientRoutes, ClientLayout)}


          <Route path="/seat-detail/:movieId" component={SeatDetail} />
          <Route
            path="/movie/movie-showtime/:movieId"
            component={AddMovieShowTimes}
          />
          <Route path="/" exact component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
