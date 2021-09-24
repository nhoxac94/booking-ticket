import CinemaDetail from "containers/client/CinemaDetail/CinemaDetail";
import MovieDetail from "containers/client/MovieDetail/MovieDetail";
import Home from "containers/client/Home/Home";
import SeatDetail from "containers/client/Home/SeatDetail/SeatDetail";
import UserManagement from "containers/admin/Admin/UserManagement/UserManagement";
import MovieManager from "containers/admin/Admin/MovieControl/MovieManager/MovieManager";
import AddUser from "containers/admin/Admin/UserManagement/AddUser/AddUser";
import AddMovie from "containers/admin/Admin/MovieControl/AddMovie/AddMovie"
import UpdateUserInformation from "containers/admin/Admin/UserManagement/UpdateUserAdmin/UpdateUserInformation";
import UpdateMovie from "containers/admin/Admin/MovieControl/UpdateMovie.jsx/UpdateMovie";
import AddMovieShowTimes from "containers/admin/Admin/MovieControl/AddMovieShowTimes/AddMovieShowTimes";
import Login from "containers/shared/Auth/Login/Login";
import SignUp from "containers/shared/Auth/Login/SignUp";

export const clientRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/chitietcumrap/:maCumRap",
    component: CinemaDetail,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/chitietphim/:maPhim",
    component: MovieDetail,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/chitietphongve/:maLichChieu",
    component: SeatDetail,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/thongtincanhan",
    component: SeatDetail,
    exact: true,
    isPrivate: true,
  },
];

export const adminRoutes = [
  {
    path: "/admin/quanlyphim",
    component: SeatDetail,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/quanlynguoidung/index",
    component: SeatDetail,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin",
    component: UserManagement,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/users",
    component: UserManagement,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/add-user",
    component: AddUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/movies",
    component: MovieManager,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/movies/add-movie",
    component: AddMovie,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/users/edit-user/:userId",
    component: UpdateUserInformation,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/movies/edit-movie/:movieId",
    component: UpdateMovie,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/admin/movies/movie-showtime/:movieId",
    component: AddMovieShowTimes,
    exact: true,
    isPrivate: true,
  },
  
];

export const loginRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/sign-up",
    component: SignUp,
    exact: true,
    isPrivate: false,
  },
]