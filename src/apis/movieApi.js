import { MOVIE_IN_PAGE } from 'containers/admin/Admin/moduleShare/types';
import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
    fetchAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },

    fetchAllMovieDetail(movieId) {
        return callApi(``)
    },

    fetchMovieDetail(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },
    fetchAllCinema() {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    },
    fetchMovieAdminPageApi (page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=${MOVIE_IN_PAGE}`)
    },
    fetchDeleteMovieApi (movieId, accessToken) {
        return callApi(`QuanLyPhim/XoaPhim?MaPhim=${movieId}`, 'DELETE', movieId, accessToken)
    },
    fetchSearchMovieInPageApi (key,page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&tenPhim=${key}&soTrang=${page}&soPhanTuTrenTrang=${MOVIE_IN_PAGE}`)
    },
    fetchAddMovieApi(movieData, accessToken) {
        return callApi('QuanLyPhim/ThemPhimUploadHinh','POST',movieData, accessToken)
    },
    fetchInformationMovieApi(movieId) {
        return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    },
    fetchEditMovieApi(movieData, accessToken) {
        return callApi('QuanLyPhim/CapNhatPhimUpload','POST',movieData, accessToken )
    },
    fetchGetTheaterSystemApi() {
        return callApi('QuanLyRap/LayThongTinHeThongRap')
    },
    fetchGetTheaterInformationApi(theaterId) {
        return callApi(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterId}`)
    },
    fetchAddMovieShowTimeApi(movieShowTime, accessToken) {
        return callApi(`QuanLyDatVe/TaoLichChieu`, 'POST', movieShowTime, accessToken)
    }


}

export default movieApi;