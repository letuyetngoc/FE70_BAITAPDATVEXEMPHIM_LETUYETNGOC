import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/actions/baiTapDatVeActions'


class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-2'>
                    <button className='gheDuocChon '>
                    </button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }} >Ghế đã đặt
                    </span><br />
                    <button className='gheDangChon '>
                    </button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }} >Ghế đang đặt
                    </span><br />
                    <button className='ghe' style={{ marginLeft: 0 }} >
                    </button>
                    <span className='text-light ml-2' style={{ fontSize: '20px' }} >Ghế chưa đặt
                    </span><br />
                </div>
                <div className='mt-2 divScroll'>
                    <table className="table " border='2'>
                        <thead>
                            <tr className='text-light' style={{ fontSize: 18 }} >
                                <td>Số ghế</td>
                                <td>Giá</td>
                            </tr>
                        </thead>
                        <tbody className='text-warning' style={{ fontSize: 15 }}>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button
                                            onClick={() => this.props.dispatch(huyGheAction(gheDangDat.soGhe))}
                                        >Hủy</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-warning'>
                            <tr>
                                <td></td>
                                <td>Tổng tiền</td>
                                <td>
                                    {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                        return tongTien + gheDangDat.gia
                                    }, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.baiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
