import { MOVIE_IN_PAGE } from 'containers/admin/Admin/moduleShare/types';
import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
    // API(1)
    fetchAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },

    /**
     * API(3): Lấy thông tin lịch chiếu phim
     */
    fetchMovieDetail(movieId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    },

    /**
     * API: Lấy thông tin của tất cả các rạp
     */
    fetchAllCinema() {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    },
    fetchMovieAdminPageApi(page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=${MOVIE_IN_PAGE}`)
    },
    fetchDeleteMovieApi(movieId, accessToken) {
        return callApi(`QuanLyPhim/XoaPhim?MaPhim=${movieId}`, 'DELETE', movieId, accessToken)
    },
    fetchSearchMovieInPageApi(key, page) {
        return callApi(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&tenPhim=${key}&soTrang=${page}&soPhanTuTrenTrang=${MOVIE_IN_PAGE}`)
    },
    fetchAddMovieApi(movieData, accessToken) {
        return callApi('QuanLyPhim/ThemPhimUploadHinh', 'POST', movieData, accessToken)
    },
    fetchInformationMovieApi(movieId) {
        return callApi(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    },
    fetchEditMovieApi(movieData, accessToken) {
        return callApi('QuanLyPhim/CapNhatPhimUpload', 'POST', movieData, accessToken)
    },
    fetchGetTheaterSystemApi() {
        return callApi('QuanLyRap/LayThongTinHeThongRap')
    },
    fetchGetTheaterInformationApi(theaterId) {
        return callApi(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterId}`)
    },
    fetchAddMovieShowTimeApi(movieShowTime, accessToken) {
        return callApi(`QuanLyDatVe/TaoLichChieu`, 'POST', movieShowTime, accessToken)
    },



    /**
     *  API(3): Lấy thông tin lịch chiếu của từng rạp
     */
    fetchDetailCinema(cinemaId) {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${cinemaId}&maNhom=${GROUP_ID}`)
    },

    /**
     * API(5): Lấy thông tin ghế của rạp
     */
    fetchDetailSeat(seatId) {
        return callApi(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${seatId}`)
    },

    /**
     * API banner
     */
    fetchBanner() {
        return callApi(`/QuanLyPhim/LayDanhSachBanner`);
    }
}

export default movieApi;