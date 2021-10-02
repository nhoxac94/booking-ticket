import { lazy } from "react"
const CinemaDetail = lazy(() => import("containers/client/CinemaDetail/CinemaDetail"))
const MovieDetail = lazy(() => import("containers/client/MovieDetail/MovieDetail"))
const Home = lazy(() => import("containers/client/Home/Home"))
const SeatDetail = lazy(() => import("containers/client/Home/SeatDetail/SeatDetail"))
const UserManagement = lazy(() => import("containers/admin/Admin/UserManagement/UserManagement"))
const MovieManager = lazy(() => import("containers/admin/Admin/MovieControl/MovieManager/MovieManager"))
const AddUser = lazy(() => import("containers/admin/Admin/UserManagement/AddUser/AddUser"))
const AddMovie = lazy(() => import("containers/admin/Admin/MovieControl/AddMovie/AddMovie"))
const UpdateUserInformation = lazy(() => import("containers/admin/Admin/UserManagement/UpdateUserAdmin/UpdateUserInformation"))
const UpdateMovie = lazy(() => import("containers/admin/Admin/MovieControl/UpdateMovie.jsx/UpdateMovie"))
const AddMovieShowTimes = lazy(() => import("containers/admin/Admin/MovieControl/AddMovieShowTimes/AddMovieShowTimes"))
const Login = lazy(() => import("containers/shared/Auth/Login/Login"))
const SignUp = lazy(() => import("containers/shared/Auth/Login/SignUp"))
const UserInformation = lazy(() => import("containers/client/UserInformation/UserInformation"))

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
    isPrivate: false,
  },
  {
    path: "/thongtincanhan",
    component: UserInformation,
    exact: true,
    isPrivate: false,
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