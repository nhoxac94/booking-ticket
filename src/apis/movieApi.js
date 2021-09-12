import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';

const movieApi = {
    fetchAllMovieApi() {
        return callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    },

    fetchAllCinema() {
        return callApi(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`);
    }
}

export default movieApi;