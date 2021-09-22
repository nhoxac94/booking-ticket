import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "containers/client/Home/Home";
import PageNotFound from "containers/shared/Auth/PageNotFound/PageNotFound";
import { adminRoutes, clientRoutes } from "routes";
import Login from "containers/shared/Auth/Login/Login";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import UserInformation from "containers/client/UserInformation/UserInformation";
<<<<<<< HEAD
import AddUser from "containers/admin/Admin/UserManagement/AddUser/AddUser";
import UserManagement from "containers/admin/Admin/UserManagement/UserManagement";
import UpdateMovieWithFormik from "containers/admin/Admin/MovieControl/UpdateMovie.jsx/UpdateMovie";
import UpdateUserInformation from "containers/admin/Admin/UserManagement/UpdateUserAdmin/UpdateUserInformation";
import AddMovieShowTimes from "containers/admin/Admin/MovieControl/AddMovieShowTimes/AddMovieShowTimes";
import AdminLayout from "layouts/AdminLayout";
=======
import CinemaDetail from "containers/client/CinemaDetail/CinemaDetail";

>>>>>>> d376e504f1747e893192699b0fbbdd5ff90a1cae

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((routes, idx) => {
      const { path, component, exact, isPrivate } = routes;
      return (
        <Layout
          key={idx}
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
          <Route path="/chitietphongve/:maLichChieu" exact component={SeatDetail} />
          <Route path="/chitietphim/:maPhim" component={MovieDetail} />
          <Route path="/chitietcumrap/:maCumRap" exact component={CinemaDetail} />
          <Route path="/:maCumRap" component={CinemaDetail} />
          <Route path="/login" component={Login} />
          <Route path="/user-information" component={UserInformation} />
<<<<<<< HEAD
          <Route path="/seat-detail/:movieId" component={SeatDetail} />
         
          <Route
            path="/movie/movie-showtime/:movieId"
            component={AddMovieShowTimes}
          />
          {renderLayout(adminRoutes, AdminLayout)}

=======
          <Route path="/" exact component={Home} />
>>>>>>> d376e504f1747e893192699b0fbbdd5ff90a1cae
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
<<<<<<< HEAD
  );
=======

  )
>>>>>>> d376e504f1747e893192699b0fbbdd5ff90a1cae
}

export default App;
