import React, { Component } from 'react'

import {
    Form,
    Input,
    DatePicker,
} from "antd";
import moment from "moment";
import { GROUP_ID } from "settings/apiConfig";
import { USER_BOOKING_TICKET_LOGIN } from "containers/shared/Auth/module/type";
import movieApi from 'apis/movieApi';
import Loader from 'components/Loader/Loader';

export default class UpdateMovie extends Component {
    state = {
        values: {
            maPhim: "",
            tenPhim: "",
            biDanh: "",
            trailer: "",
            ngayKhoiChieu: "",
            hinhAnh: "",
            danhGia: "",
            moTa: "",
            maNhom: GROUP_ID,
        },
        errors: {
            maPhim: "",
            tenPhim: "",
            biDanh: "",
            trailer: "",
            ngayKhoiChieu: "",
            hinhAnh: "",
            danhGia: "",
            moTa: "",

        },
        loading: true,
        imgSrc: null,
    };

    handleUploadImg(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            let valuesInput = { ...this.state.values, name: file }
            this.setState({ imgSrc: e.target.result, values: valuesInput })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        let isValid = true;

        for (let key in this.state.errors) {
            if (this.state.errors[key]) {
                isValid = false;
            }

        }
        if (!isValid) {
            alert('Please complete form before submit!!!')
        } else {
            const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken;
            let formData = new FormData();
            for (let key in this.state.values) {
                if (key !== "hinhAnh") {
                    formData.append(key, this.state.values[key])
                } else {
                    if (typeof this.state.values.hinhAnh === "string") {
                        formData.append(key, this.state.values[key])
                    } else {
                        formData.append('File', this.state.values.hinhAnh, this.state.values.hinhAnh.name)
                    }
                }

            }

            movieApi.fetchEditMovieApi(formData, accessToken)
                .then(res => {
                    alert('Update Movie SuccessFull')
                })
                .catch(error => {
                    alert(error)
                    console.log(error)
                })

        }
    }

    handleChange(e) {
        const { value, name } = e.target
        let errorMessage = ""

        if (!value && name !== "hinhAnh") {
            errorMessage = "Please input value"
        } else {

            if (name === "maPhim") {
                const regexNumber = /^[0-9]*$/
                errorMessage = regexNumber.test(value) ? "" : "Must be a number!!!"
            }

            if (name === "danhGia") {
                const regexNumber = /^[0-9]*$/
                errorMessage = regexNumber.test(value) ? "" : "Must be a number!!!"
                if (value < 0) {
                    errorMessage = "Minimum 0"
                }
                if (value > 10) {
                    errorMessage = "Maximum 10"
                }
            }
        }

        let valuesInput = { ...this.state.values, [name]: value.trim() }
        let errorsInput = { ...this.state.errors, [name]: errorMessage }

        this.setState({
            values: valuesInput,
            errors: errorsInput
        })
    }

    handleChangeDate(e) {
        let errorMessage = ""
        if (e === "Invalid date") {
            errorMessage = "Please input value"
        }
        let valuesInput = { ...this.state.values, ngayKhoiChieu: e }
        let errorsInput = { ...this.state.errors, ngayKhoiChieu: errorMessage }

        this.setState({
            values: valuesInput,
            errors: errorsInput
        })

    }
    render() {
        const { loading, values, errors } = this.state;
        if (loading) return <Loader />
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
                    onSubmitCapture={e => this.handleSubmit(e)}
                >
                    <Form.Item label="Mã Phim">
                        <Input name="maPhim" onChange={e => this.handleChange(e)} defaultValue={values.maPhim} required disabled />
                        {errors.maPhim && <small className="text-center text-danger">{errors.maPhim}</small>}
                    </Form.Item>
                    <Form.Item label="Tên Phim">
                        <Input name="tenPhim" onChange={e => this.handleChange(e)} defaultValue={values.tenPhim} required />
                        {errors.tenPhim && <small className="text-center text-danger">{errors.tenPhim}</small>}

                    </Form.Item>
                    <Form.Item label="Bí danh">
                        <Input name="biDanh" onChange={e => this.handleChange(e)} defaultValue={values.biDanh} required />
                        {errors.biDanh && <small className="text-center text-danger">{errors.biDanh}</small>}

                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name="trailer" onChange={e => this.handleChange(e)} defaultValue={values.trailer} required />
                        {errors.trailer && <small className="text-center text-danger">{errors.trailer}</small>}

                    </Form.Item>
                    <Form.Item label="Ngày khởi chiếu">
                        <DatePicker format={"DD/MM/YYYY"} className="mr-2" name="ngayKhoiChieu" onChange={(e) => this.handleChangeDate(moment(e).format('DD/MM/YYYY'))} defaultValue={moment(values.ngayKhoiChieu)} required />
                        {errors.ngayKhoiChieu && <small className="text-center text-danger">{errors.ngayKhoiChieu}</small>}

                    </Form.Item>

                    <Form.Item label="Đánh giá" >
                        <Input name="danhGia" style={{ width: 50, marginRight: 10 }} onChange={(e) => this.handleChange(e)} defaultValue={values.danhGia} required />
                        {errors.danhGia && <small className="text-center text-danger">{errors.danhGia}</small>}

                    </Form.Item>
                    <Form.Item label="Mô tả">
                        <Input.TextArea name="moTa" onChange={e => this.handleChange(e)} defaultValue={values.moTa} required />
                        {errors.moTa && <small className="text-center text-danger">{errors.maPhim}</small>}

                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <input type="file" accept="image/*" onChange={(e) => this.handleUploadImg(e)} />
                        {errors.hinhAnh && <small className="text-center text-danger">{errors.hinhAnh}</small>}

                        <br />
                        <div style={{ width: 150, height: 150 }} className="border ">
                            <img src={!this.state.imgSrc ? values.hinhAnh : this.state.imgSrc} alt="..." width="100%" />
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
        movieApi.fetchInformationMovieApi(movieId)
            .then(res => {
                delete (res.data.lichChieu)
                const valuesInitial = { ...this.state.values, ...res.data }
                this.setState({
                    values: valuesInitial,
                    loading: false,
                })
            })
            .catch(error => console.log(error))
    }
}

