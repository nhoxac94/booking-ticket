import { withFormik } from "formik";
import React, { Component } from "react";

import {
  Form,
  Input,
  Radio,
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
    const { handleSubmit, handleChange, setFieldValue } = this.props;
    return (
      <>
        <h3>Thêm phim mới</h3>
        <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
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
            <Input name="maPhim" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Tên Phim">
            <Input name="tenPhim" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Bí danh">
            <Input name="biDanh" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Trailer">
            <Input name="trailer" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker format={"DD/MM/YYYY"} onChange={(e) => setFieldValue('ngayKhoiChieu', moment(e).format("DD/MM/YYYY"))} />
          </Form.Item>

          <Form.Item label="Đánh giá" >
            <InputNumber onChange={(e) => setFieldValue("danhGia", e)} min="0" max="10" />
          </Form.Item>
          <Form.Item label="Mô tả">
            <Input.TextArea name="moTa" onChange={handleChange} />
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <input type="file" accept="image/*" onChange={(e) => setFieldValue("hinhAnh", this.handleUploadImg(e))} />
            <br />
            <div style={{ width: 150, height: 150 }} className="border ">
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

  // Custom sync validation
  // validate: values => {
  //   const errors = {};

  //   if (!values.userName) {
  //     errors.name = "Required";
  //   }
  //   console.log(errors);
  //   return errors;
  // },

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
    console.log(formData.get('maPhim'));
    movieApi.fetchAddMovieApi(formData, accessToken)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },


})(AddMovie);

export default AddMovieWithFormik;