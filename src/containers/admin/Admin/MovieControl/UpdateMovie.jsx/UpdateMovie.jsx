import React, { Component } from 'react'
import { withFormik } from "formik";
import { connect } from "react-redux"

import {
    Form,
    Input,
    DatePicker,
    InputNumber,
} from "antd";
import moment from "moment";
import { GROUP_ID } from "settings/apiConfig";
import { USER_BOOKING_TICKET_LOGIN } from "containers/shared/Auth/module/type";
import movieApi from 'apis/movieApi';
import { actGetInformationMovie } from '../module/actions';
import Loader from 'components/Loader/Loader';

class UpdateMovie extends Component {
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
        const { handleSubmit, handleChange, setFieldValue, loading, informationMovie } = this.props;
        if (loading) return <Loader/>
        return (
            <div className="container">
                <h1>Update Movie</h1>
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
                        <Input name="maPhim" onChange={handleChange} defaultValue={informationMovie.maPhim} required/>
                    </Form.Item>
                    <Form.Item label="Tên Phim">
                        <Input name="tenPhim" onChange={handleChange} defaultValue={informationMovie.tenPhim} required/>
                    </Form.Item>
                    <Form.Item label="Bí danh">
                        <Input name="biDanh" onChange={handleChange} defaultValue={informationMovie.biDanh} required/>
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name="trailer" onChange={handleChange} defaultValue={informationMovie.trailer} required/>
                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY"} onChange={(e) => setFieldValue('ngayKhoiChieu', moment(e).format("DD/MM/YYYY"))} defaultValue={moment(informationMovie.ngayKhoiChieu)} required/>
                    </Form.Item>

                    <Form.Item label="Đánh giá" >
                        <InputNumber onChange={(e) => setFieldValue("danhGia", e)} min="0" max="10" defaultValue={informationMovie.danhGia} required/>
                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input.TextArea name="moTa" onChange={handleChange} defaultValue={informationMovie.moTa} required/>
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <input type="file" accept="image/*" onChange={(e) => setFieldValue("hinhAnh", this.handleUploadImg(e))} />
                        <br />
                        <div style={{ width: 150, height: 150 }} className="border ">
                            <img src={!this.state.imgSrc ? informationMovie.hinhAnh : this.state.imgSrc} alt="..." width="100%" />
                        </div>
                    </Form.Item>
                    <div style={{ maxWidth: 850, position: "relative" }}>
                        <button type="submit" className="btn btn-primary" style={{ position: "absolute", bottom: 0, right: 0 }}>Update</button>
                    </div>
                </Form>
            </div >


        )
    }

    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        this.props.dispatch(actGetInformationMovie(movieId))
    }


}

const UpdateMovieWithFormik = withFormik({
    mapPropsToValues: () => ({
        maPhim: "",
        tenPhim: "",
        biDanh: "",
        trailer: "",
        ngayKhoiChieu: "",
        hinhAnh: "",
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

    handleSubmit: (values, { props, setSubmitting, setFieldValue }) => {
        const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
        // Lấy phần tử mà người dùng không chỉnh sửa put vào form
        console.log(props.informationMovie)
        for (let key in values) {
            if (!values[key]) {
                values[key] = props.informationMovie[key]
            }
        }
        let formData = new FormData();
        for (let key in values) {
            if (key !== "hinhAnh") {
                formData.append(key, values[key])
            } else {
                if (typeof values.hinhAnh === "string") {
                    formData.append(key, values[key])
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name)

                }
            }
        }
        movieApi.fetchEditMovieApi(formData, accessToken)
            .then(res => 
                {
                    alert('Completed!!!')
                    props.history.push("/admin/movies")
                }
                )
            .catch(error => { console.log(error) })


    },

})(UpdateMovie);

const mapStateToProps = state => ({
    informationMovie : state.adminMovieReducer.informationMovie,
    loading : state.adminMovieReducer.loading,

})


export default connect(mapStateToProps)(UpdateMovieWithFormik);