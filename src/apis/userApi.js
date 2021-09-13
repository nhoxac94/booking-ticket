import callApi from "utils/callApi"

const userApi = {
    fetchLoginApi (user) {
        return callApi ('QuanLyNguoiDung/DangNhap', 'POST', user)
    },
    fetchSignupApi (user) {
        return callApi('QuanLyNguoiDung/DangKy', 'POST', user)
    },
    fetchUpdateUserInformation (user, accessToken) {
        return callApi('QuanLyNguoiDung/CapNhatThongTinNguoiDung', "PUT", user, accessToken)
    },
    fetchUserInformation (userName) {
        return callApi('QuanLyNguoiDung/ThongTinTaiKhoan', 'POST',userName )
    }
}

export default userApi;