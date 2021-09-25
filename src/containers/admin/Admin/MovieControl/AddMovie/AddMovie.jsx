import { withFormik } from "formik";
import React, { Component } from "react";
import * as Yup from 'yup'

import {
  Form,
  Input,
  DatePicker,
  InputNumber,
} from "antd";
import moment from "moment";
import { GROUP_ID } from "settings/apiConfig";
import movieApi from "apis/movieApi";
import { USER_BOOKING_TICKET_LOGIN } from "containers/shared/Auth/module/type";
import { Link } from "react-router-dom";

class AddMovie extends Component {
  state = {
    imgSrc: null,
  };

  handleUploadImg(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      this.setState({ imgSrc: e.target.result })
    }
    return file;
  }
  render() {
    const { handleSubmit, handleChange, setFieldValue, handleBlur, touched, errors, values } = this.props;
    return (
      <>
        <h3>Thêm phim mới</h3>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <Link to="/admin/movies" className="nav-link  btn btn-light" role="tab" >
              Quản lý phim
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link to="/admin/movies/add-movie" className="nav-link active btn btn btn-light ml-2" role="tab" >
              Thêm phim
            </Link>
          </li>
        </ul>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onValuesChange={this.onFormLayoutChange}
          onSubmitCapture={handleSubmit}
        >
          <Form.Item label="Mã Phim">
            <Input name="maPhim"
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.maPhim && touched.maPhim && <small className="text-danger text-center">{errors.maPhim}</small>}
          </Form.Item>
          <Form.Item label="Tên Phim">
            <Input name="tenPhim"
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.tenPhim && touched.tenPhim && <small className="text-danger text-center">{errors.tenPhim}</small>}

          </Form.Item>
          <Form.Item label="Bí danh">
            <Input name="biDanh"
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.biDanh && touched.biDanh && <small className="text-danger text-center">{errors.biDanh}</small>}

          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer"
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.trailer && touched.trailer && <small className="text-danger text-center">{errors.trailer}</small>}

          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker format={"DD/MM/YYYY"}
              name="ngayKhoiChieu"
              onChange={(e) => setFieldValue('ngayKhoiChieu', moment(e).format("DD/MM/YYYY"))}
              onBlur={handleBlur} />
            {errors.ngayKhoiChieu && touched.ngayKhoiChieu && <small className="text-danger text-center">{errors.ngayKhoiChieu}</small>}

          </Form.Item>

          <Form.Item label="Đánh giá" >
            <InputNumber
              name="danhGia"
              onChange={(e) => setFieldValue("danhGia", e)}
              onBlur={handleBlur} 
              defaultValue = {values.danhGia}
              />
              
            {errors.danhGia && touched.danhGia && <small className="text-danger text-center">{errors.danhGia}</small>}

          </Form.Item>
          <Form.Item label="Mô tả">
            <Input.TextArea name="moTa"
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.moTa && touched.moTa && <small className="text-danger text-center">{errors.moTa}</small>}

          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input type="file" accept="image/*"
              name="hinhAnh"
              onChange={(e) => setFieldValue("hinhAnh", this.handleUploadImg(e))}
              onBlur={handleBlur} />
            {errors.hinhAnh && touched.hinhAnh && <small className="text-danger text-center">{errors.hinhAnh}</small>}

            <br />
            <div style={{ width: 100, height: 100 }} className="border ">
              <img src={this.state.imgSrc} alt="..." width="100%" />
            </div>
          </Form.Item>
          <div className="text-right" style={{ maxWidth: 1160 }}>
            <button type="submit" className="btn btn-primary">Thêm Phim</button>
          </div>
        </Form>
      </>
    );
  }
}

const AddMovieWithFormik = withFormik({
  mapPropsToValues: () => ({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    ngayKhoiChieu: "",
    hinhAnh: {},
    danhGia: "",
    moTa: "",
    maNhom: GROUP_ID
  }),

  validationSchema: Yup.object().shape({
    maPhim: Yup.string().matches(/^[0-9]+$/gi, "Must be a Number").required('Please input value'),
    tenPhim: Yup.string().required('Please input value'),
    biDanh: Yup.string().required('Please input value'),
    trailer: Yup.string().required('Please input value'),
    ngayKhoiChieu: Yup.string().required('Please input value'),
    danhGia: Yup.number("Must be a Number").required('Please input value').min(0, "Minimum 0").max(10, "maximum 10"),
    moTa: Yup.string().required('Please input description'),
    hinhAnh: Yup.string().required('Please select image'),
  }),

  handleSubmit: (values, { setSubmitting, setFieldValue }) => {
    const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
    let formData = new FormData();
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key])
      } else {
        formData.append('File', values.hinhAnh, values.hinhAnh.name)
      }
    }
    movieApi.fetchAddMovieApi(formData, accessToken)
      .then(res => {
        alert('Add Movie Successful!!!')
        console.log(res);
      })
      .catch(err => {
        alert(err)
        console.log(err);
      })
  },


})(AddMovie);

export default AddMovieWithFormik;