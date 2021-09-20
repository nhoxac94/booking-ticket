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
    }
}

export default movieApi;