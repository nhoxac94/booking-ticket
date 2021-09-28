import React, { Component } from 'react'
import {
    Form,
    DatePicker,
    InputNumber,
    Select,

} from "antd";
import movieApi from 'apis/movieApi';
import Loader from 'components/Loader/Loader'
import { withFormik } from 'formik';
import { connect } from 'react-redux'
import moment from 'moment'
import { USER_BOOKING_TICKET_LOGIN } from 'containers/shared/Auth/module/type';
import * as Yup from 'yup'

class AddMovieShowTimes extends Component {
    state = {
        theaterSystem: null,
        theaterInformation: null,
        loading: true,
        maRap: null,
    }

    handleOnChangeTheater(theaterId) {
        movieApi.fetchGetTheaterInformationApi(theaterId)
            .then(res => this.setState({
                theaterInformation: res.data
            }))
            .catch(err => console.log(err))
    }

    // Chuyển mảng theaterSystem thành mảng select form
    makeSelectFormTheaterSystem(theaterSystem) {
        return theaterSystem.map(theater => ({
            label: theater.tenHeThongRap,
            value: theater.maHeThongRap
        }))
    }

    // Chuyển mảng theaterInformation thành mảng select form
    makeSelectFormTheaterInformation(theaterInformation) {
        return theaterInformation.map((theater, idx) => ({
            label: theater.tenCumRap,
            value: idx,
        }))
    }

    makeSelectTheater(theaterInformation, idx) {
        return theaterInformation[idx].danhSachRap.map(rap => ({
            label: rap.tenRap,
            value: rap.maRap,
        }))
    }

    render() {
        const { theaterSystem, loading, theaterInformation, maRap } = this.state;
        const { handleSubmit, setFieldValue, location, history, errors, touched, handleBlur } = this.props;
        const handleDatePicker = e => {
            setFieldValue("ngayChieuGioChieu", moment(e).format("DD/MM/YYYY hh:mm:ss"))
        }

        if (loading) return <Loader />
        if (!location.movieInformation) {
            history.push("/admin/movies")
            return null;
        }
        return (
            <>
                <div className="container-fluid">
                    <h3 className="my-3">Tạo lịch chiếu</h3>

                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <div className="mb-5">
                                <h4 className="text-primary mb-3">{location.movieInformation.tenPhim}</h4>
                                <img src={location.movieInformation.hinhAnh} alt="" width="300px" />
                            </div>
                        </div>
                        <div className="col-lg-9 mt-5">
                            <Form className="container"
                                labelCol={{
                                    span: 4,
                                }}
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                onSubmitCapture={handleSubmit}
                            >

                                <Form.Item label="Hệ thống rạp">
                                    <Select options={this.makeSelectFormTheaterSystem(theaterSystem)} name="heThongRap" placeholder="Chọn hệ thống rạp" onChange={e => { this.handleOnChangeTheater(e) }} onBlur={handleBlur}  />
                                </Form.Item>

                                <Form.Item label="Cụm rạp">
                                    <Select options={theaterInformation && this.makeSelectFormTheaterInformation(theaterInformation)} name="cumRap" placeholder="Chọn cụm rạp" onChange={e => this.setState({ maRap: e })} onBlur={handleBlur}  />

                                </Form.Item>
                                <Form.Item label="Rạp">
                                    <Select options={theaterInformation && maRap && this.makeSelectTheater(theaterInformation, maRap)} name = "maRap" placeholder="Chọn rạp" onChange={e => setFieldValue("maRap", e)} onBlur={handleBlur} name="maRap"  />
                                    {errors.maRap && touched.maRap && <small className="text-danger">{errors.maRap}</small>}

                                </Form.Item>
                                <Form.Item label="Ngày chiếu giờ chiếu" >
                                    <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime name="ngayChieuGioChieu" onOk={e => handleDatePicker(e)}  onChange={e => handleDatePicker(e)} onBlur={handleBlur}  />
                                    {errors.ngayChieuGioChieu && touched.ngayChieuGioChieu && <small className="text-danger ml-3">{errors.ngayChieuGioChieu}</small>}

                                </Form.Item>
                                <Form.Item label="Giá vé">
                                    <InputNumber name="giaVe" min={75000} max={150000} onChange={e => setFieldValue("giaVe", e)}  onBlur={handleBlur}  />
                                    {errors.giaVe && touched.giaVe && <small className="text-danger ml-3">{errors.giaVe}</small>}

                                </Form.Item>
                                <div className="text-right" style={{ maxWidth: 840 }} >
                                    <button type="submit" className="btn btn-primary">Tạo lịch chiếu</button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    componentDidMount() {
        movieApi.fetchGetTheaterSystemApi()
            .then(res => this.setState({
                theaterSystem: res.data,
                loading: false
            }))
            .catch(err => console.log(err))
    }
}

const AddMovieShowTimesWithFormik = withFormik({
    mapPropsToValues: () => ({
        maPhim: "",
        ngayChieuGioChieu: "",
        maRap: "",
        giaVe: "",

    }),

    validationSchema: Yup.object().shape({
        maRap: Yup.string().required("Required!!!"),
        ngayChieuGioChieu: Yup.string().required("Required!!!"),
        giaVe: Yup.string().required("Required!!!"),
    }),

    handleSubmit: (values, { props, setSubmitting, setFieldValue}) => {
        values.maPhim = props.match.params.movieId;
        const accessToken = JSON.parse(localStorage.getItem(USER_BOOKING_TICKET_LOGIN)).accessToken
        movieApi.fetchAddMovieShowTimeApi(values, accessToken)
            .then(res =>
                alert('Completed!!!'),
            )
            .catch(err => console.log(err))

    },

})(AddMovieShowTimes);

export default connect()(AddMovieShowTimesWithFormik);