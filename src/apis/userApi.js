import { USER_IN_PAGE } from "containers/admin/Admin/moduleShare/types";
import { GROUP_ID } from "settings/apiConfig";
import callApi from "utils/callApi";

const userApi = {
  fetchLoginApi(user) {
    return callApi("QuanLyNguoiDung/DangNhap", "POST", user);
  },
  fetchSignupApi(user) {
    return callApi("QuanLyNguoiDung/DangKy", "POST", user);
  },
  fetchEditUserApi(user, accessToken) {
    return callApi(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      "PUT",
      user,
      accessToken
    );
  },
  fetchUserInformationApi(userName) {
    return callApi("QuanLyNguoiDung/ThongTinTaiKhoan", "POST", userName);
  },
  fetchPageUserApi(page) {
    return callApi(
      `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUP_ID}&soTrang=${page}&soPhanTuTrenTrang=${USER_IN_PAGE}`
    );
  },
  fetchDeleteUserApi(accountUser, accessToken) {
    return callApi(
      `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${accountUser}`,
      "DELETE",
      accountUser,
      accessToken
    );
  },
  fetchSearchUserPageApi(key, page) {
    return callApi(
      `QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=${GROUP_ID}&tuKhoa=${key}&soTrang=${page}&soPhanTuTrenTrang=${USER_IN_PAGE}`
    );
  },
  fetchAddUserApi(user, accessToken) {
    return callApi("QuanLyNguoiDung/ThemNguoiDung", "POST", user, accessToken);
  },
  fetchSearchUserApi(userName) {
    return callApi(
      `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${userName}`
    );
  },
};

export default userApi;
