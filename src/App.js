import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "containers/client/Home/Home";
import PageNotFound from "containers/shared/Auth/PageNotFound/PageNotFound";
import { adminRoutes, loginRoutes } from "routes";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import UserInformation from "containers/client/UserInformation/UserInformation";
import AddMovieShowTimes from "containers/admin/Admin/MovieControl/AddMovieShowTimes/AddMovieShowTimes";
import AdminLayout from "layouts/AdminLayout";
import CinemaDetail from "containers/client/CinemaDetail/CinemaDetail";
import LoginLayout from "layouts/LoginLayout";

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
          <Route path="/user-information" exact component={UserInformation} />

          <Route
            path="/chitietcumrap/:maCumRap"
            exact
            component={CinemaDetail}
          />
          {renderLayout(loginRoutes, LoginLayout)}
          {renderLayout(adminRoutes, AdminLayout)}

          <Route path="/:maCumRap" exact component={CinemaDetail} />
          {/* {renderLayout(clientRoutes, ClientLayout)} */}
          <Route
            path="/chitietphongve/:maLichChieu"
            exact
            component={SeatDetail}
          />
          <Route path="/chitietphim/:maPhim" component={MovieDetail} />
          <Route
            path="/chitietcumrap/:maCumRap"
            exact
            component={CinemaDetail}
          />

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
