import React, { Component, Fragment } from 'react'
import './baiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import DanhSachGheData from '../../data/danhSachGhe.json'
import HangGhe from './HangGhe'

import rootReducer from '../../redux/reducer/rootReducer'

export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () => {
        return DanhSachGheData.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soThuTuHang={index} />
                </div>)
        })

    }

    render() {
        return (
            <div className='bookingMovie' style={{
                position: "fixed", width: '100%', height: '100%',
                backgroundImage: "url('./baiTapBookingTicket/bgmovie.jpg')", backgroundSize: '100%'
            }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className='text-warning' style={{ fontSize: '30px' }}>
                                    ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                                </div>
                                <div className='mt-1 text-light' style={{ fontSize: '20px' }} >Màn hình</div>
                                <div className='mt-2'
                                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className='screen'>
                                    </div>
                                </div>
                                <div className='m-auto ' style={{ width: '80%' }}  >
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='text-light' style={{ fontSize: '25px' }} >
                                    DANH SÁCH GHẾ BẠN CHỌN
                                </div>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


