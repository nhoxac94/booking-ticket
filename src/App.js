import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "containers/client/Home/Home";
import PageNotFound from "containers/shared/Auth/PageNotFound/PageNotFound";
import { clientRoutes } from "routes";
import Login from "containers/shared/Auth/Login/Login";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import UserInformation from "containers/client/UserInformation/UserInformation";
import CinemaDetail from "containers/client/CinemaDetail/CinemaDetail";


function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((routes) => {
      const { path, component, exact, isPrivate } = routes;
      return (
        <Layout
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
          {/* {renderLayout(clientRoutes, ClientLayout)} */}
          <Route path="/login" component={Login} />
          <Route path="/chitietphongve/:maLichChieu" exact component={SeatDetail} />
          <Route path="/chitietphim/:maPhim" component={MovieDetail} />
          <Route path="/chitietcumrap/:maCumRap" exact component={CinemaDetail} />
          <Route path="/:maCumRap" component={CinemaDetail} />
          <Route path="/user-information" component={UserInformation} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={PageNotFound} />

        </Switch>
      </Router>
    </div>

  )
}

export default App;
